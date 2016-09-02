import express from 'express';
import bodyParser from 'body-parser';
import { apolloExpress, graphiqlExpress } from 'apollo-server';
import schema from '/domain/schemas/executable';
import repositories from '/domain/repositories';
import resolvers from '/domain/resolvers';
import connectors from './connectors';

// Initial fixtures
require('./fixtures').run(connectors.MongoDB.connect());

const PORT = 8080;
const app = express();

app.use('/graphql', bodyParser.json(), apolloExpress({
  schema,
  resolvers,
  context: {
    repositories: {
      Author: new repositories.Author(new connectors.MongoDB(), 'authors'),
      Post: new repositories.Post(new connectors.MongoDB(), 'posts'),
    },
  },
  formatError(error) {
    console.error(error.stack);
    return error;
  },
}));

app.use(
  '/graphiql',
  graphiqlExpress({
    endpointURL: '/graphql',
  })
);

app.listen(PORT, () => console.log(
  `GraphQL Server is now running on http://localhost:${PORT}/graphiql`
));

process.on('exit', () => {
  console.log('Shutting down!');

  for (const connector of Object.values(connectors)) {
    connector.close();
  }
});
