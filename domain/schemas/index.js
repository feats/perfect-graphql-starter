import { addMockFunctionsToSchema, makeExecutableSchema } from 'graphql-tools';
import resolvers from '/domain/resolvers';
import mocks from '/domain/mocks';
import Author from './Author.graphql';
import Post from './Post.graphql';
import Query from './Query.graphql';
import schema from './schema.graphql';

export const raw = [
  Author,
  Post,
  Query,
  schema,
];

const executable = makeExecutableSchema({
  resolvers,
  typeDefs: raw,
});

export const mocked = addMockFunctionsToSchema({
  mocks,
  executable,
  preserveResolvers: true,
});

export default executable;
