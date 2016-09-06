import express from 'express';
import bodyParser from 'body-parser';
import { apolloExpress, graphiqlExpress } from 'apollo-server';
import schema from '/domain/schemas';
import connectors from './connectors';
import resolvers from './resolvers';

// Initial fixtures
require('./fixtures').run(connectors.MongoDB.connect());

const PORT = 8080;
const app = express();

app.use('/graphql', bodyParser.json(), apolloExpress({
  schema,
  resolvers,
  context: {},
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
