import _ from 'lodash';

// target: Model instance, connectors: [ { connector, collection, name } ]
export default (target, connectors) => {
  if (!Array.isArray(connectors)) {
    connectors.name = connectors.name || 'default';
    connectors = [connectors];
  }

  const success = Reflect.defineProperty(target, 'connectors', {
    value: _.keyBy(connectors, 'name'),
  });

  if (!success) {
    throw new Error('Model could not be connected to the data source');
  }

  return target;
};
