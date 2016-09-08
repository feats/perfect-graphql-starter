import { injectConnectors } from 'graph-object';
import * as models from '/domain/models';
import connectors from './connectors';

const collections = {
  Author: 'authors',
  Post: 'posts',
};

for (const name of Object.keys(models)) {
  const model = models[name];

  if (!collections[name]) {
    continue;
  }

  injectConnectors(model, {
    connector: new connectors.MongoDB(),
    collection: collections[name],
  });
}

module.exports = models;
