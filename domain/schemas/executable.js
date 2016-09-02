import { makeExecutableSchema } from 'graphql-tools';
import schemas from './index';
import resolvers from '../resolvers';

export default makeExecutableSchema({
  resolvers,
  typeDefs: schemas,
});
