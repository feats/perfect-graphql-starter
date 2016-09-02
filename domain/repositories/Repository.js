export default class Repository {
  constructor(connector, collectionName) {
    this.connector = connector;
    this._collectionName = collectionName;
  }

  get collection() {
    return this.connector.collection(this._collectionName);
  }

  getById(id) {
    return this.collection.findOne({ _id: id });
  }

  find(selector) {
    return this.collection.find(selector).toArray();
  }
}
