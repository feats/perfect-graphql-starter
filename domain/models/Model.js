import _ from 'lodash';
import { Manager } from '/domain/managers';

export default class Model {
  constructor(raw) {
    this.cached = raw;
  }

  static get managers() {
    return {
      objects: Manager,
    };
  }

  // target: Model instance, connectors: [ { connector, collection, name } ]
  static defineConnectors(target, connectors) {
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
  }

  static defineManagers(target) {
    for (const name of Object.keys(target.managers)) {
      const ManagerClass = target.managers[name];

      Reflect.defineProperty(target, name, {
        value: new ManagerClass(target, target.connectors),
      });
    }

    return target;
  }
}
