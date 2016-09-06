import { addResolveFunctionsToSchema } from 'graphql-tools';
import schemas from '/domain/schemas';
import * as models from './models';

const resolvers = {};
const typeMap = schemas.getTypeMap();

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

  const definedFields = Object.keys(fields)
    .filter((field) => (Reflect.has(models[type.name].prototype, field)));

  for (const field of definedFields) {
    resolvers[type.name][field] = mapper(models[type.name], field);
  }
}

addResolveFunctionsToSchema(schemas, resolvers);
export default resolvers;
