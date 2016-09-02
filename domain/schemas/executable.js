import { makeExecutableSchema } from 'graphql-tools';
import resolvers from '/domain/resolvers';
import schemas from './index';

export default makeExecutableSchema({
  resolvers,
  typeDefs: schemas,
});
