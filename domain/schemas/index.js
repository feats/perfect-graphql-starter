import { addMockFunctionsToSchema, makeExecutableSchema } from 'graphql-tools';
import * as resolvers from '/domain/resolvers';
import * as mocks from '/domain/mocks';
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
  preserveResolvers: true,
  schema: makeExecutableSchema({
    resolvers,
    typeDefs: raw,
  }),
});

export default executable;
