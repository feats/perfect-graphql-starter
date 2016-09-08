import Manager from './Manager';

export default class Model {
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

  static get managers() {
    return {
      objects: Manager,
    };
  }
}

Model.allow = {
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
