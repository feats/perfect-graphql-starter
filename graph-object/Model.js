import Manager from './Manager';

export default class Model {
  static managers = {
    objects: Manager,
  };

  static allow = {
    create(context) {
      return true;
    },
    read(context) {
      return true;
    },
    update(context) {
      return true;
    },
    delete(context) {
      return true;
    },
  };

  constructor(raw) {
    this._raw = {
      ...raw,
    };

    for (const key of Object.keys(raw)) {
      const existent = this[key];

      Object.defineProperty(this, key, {
        get() {
          return existent || this._raw[key];
        },
      });
    }
  }
}
