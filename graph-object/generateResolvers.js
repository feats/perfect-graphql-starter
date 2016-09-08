import Model from './Model';

// TODO! move guardian out of the first function block

// TODO! guardian should be connected to the models, not to the resolvers.
// It should be possible to `protect(models, schemas)`

function mapper(Definition, field) {
  return (raw, args, context) => {
    const instance = new Definition(raw);
    const resolver = instance[field];

    return typeof resolver === 'function' ? resolver.apply(instance, [args, context]) : resolver;
  };
}

export default function (schemas, models) {
  const typeMap = schemas.getTypeMap();
  const resolvers = {};

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

  return resolvers;
}
