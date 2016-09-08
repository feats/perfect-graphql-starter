export default class Manager {
  constructor(ModelClass, connectors) {
    this.ModelClass = ModelClass;
    this.connectors = connectors;
  }

  get defaultCollection() {
    const descriptor = this.connectors.default;

    return descriptor.connector.collection(descriptor.collection);
  }

  getById(id) {
    return this.defaultCollection.findOne({ _id: id });
  }

  find(selector) {
    return this.defaultCollection.find(selector).toArray();
  }
}
