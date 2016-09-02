import { MongoClient } from 'mongodb';

export default class MongoDB {
  static connection;

  constructor() {
    if (MongoDB.connection === undefined) {
      MongoDB.connection = null;

      Promise.all([
        MongoDB.connect(),
      ])
        .then(() => { console.log('[MongoDb] connected.'); })
        .catch((err) => {
          console.error(err.stack || err);
          process.exit(1);
        });
    }
  }

  static get isConnected() {
    return !!MongoDB.connection;
  }

  static async connect() {
    try {
      if (!process.env.MONGO_URL) {
        throw new Error(`Environment variable MONGO_URL is missing.`);
      }

      MongoDB.connectionPromise = MongoClient.connect(process.env.MONGO_URL);
      MongoDB.connection = await MongoDB.connectionPromise;

      return Promise.resolve(new MongoDB());
    } catch (err) {
      console.error('Problems with the connection to the database.');
      return Promise.reject(err);
    }
  }

  collection(name) {
    if (!MongoDB.isConnected) {
      throw new Error(
        `collection '${name}' could not be accessed because MongoDB was not connected.`
      );
    }

    return MongoDB.connection.collection(name);
  }

  static close() {
    return MongoDB.connection && MongoDB.connection.close();
  }
}
