import { addResolveFunctionsToSchema } from 'graphql-tools';
import schemas from '/domain/schemas';
import * as models from './models';

const resolvers = {};
const typeMap = schemas.getTypeMap();

function guardian(fieldType, innerResolver) {
  return (raw, args, context) => {
    return Reflect.apply(innerResolver, null, [raw, args, context]).then((output) => {
      const model = models[(fieldType.ofType || fieldType).name];

      if (fieldType.ofType) { // field is a list
        return output.filter((item) => {
          if (!Reflect.apply(model.allow.read, item, [context])) {
            throw new Error(`'Read' permission not granted by ${model.name}`);
          }

          return true;
        });
      }

      if (!Reflect.apply(model.allow.read, output, [context])) {
        throw new Error(`'Read' permission not granted by ${model.name}`);
      }

      return output;
    });
  };
}

function mapper(Definition, field) {
  return (raw, args, context) => {
    const instance = new Definition(raw);
    const resolver = instance[field];
    const output = typeof resolver === 'function' ? resolver.apply(instance, [args, context]) : resolver;

    return (output instanceof models.Model) ? output.cached : output;
  };
}

for (const type of Object.values(typeMap)) {
  const fields = type.getFields && type.getFields();

  if (!fields || !models[type.name]) {
    continue;
  }

  resolvers[type.name] = {};

  const definedTypes = Object.keys(fields)
    .filter((fieldName) => {
      const fieldType = fields[fieldName].type;

      return models[(fieldType.ofType || fieldType).name];
    });

  const definedFields = Object.keys(fields)
    .filter((fieldName) => (Reflect.has(models[type.name].prototype, fieldName)));

  for (const fieldName of definedFields) {
    resolvers[type.name][fieldName] = mapper(models[type.name], fieldName);
  }

  for (const fieldName of definedTypes) {
    const fieldType = fields[fieldName].type;
    const resolver = resolvers[type.name][fieldName] || ((raw) => (raw));

    resolvers[type.name][fieldName] = guardian(fieldType, resolver);
  }
}

addResolveFunctionsToSchema(schemas, resolvers);
export default resolvers;
