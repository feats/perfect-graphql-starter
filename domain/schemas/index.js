import { addMockFunctionsToSchema, buildSchemaFromTypeDefinitions } from 'graphql-tools';
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

const executable = buildSchemaFromTypeDefinitions(raw);

export const mocked = addMockFunctionsToSchema({
  mocks,
  preserveResolvers: false,
  schema: buildSchemaFromTypeDefinitions(raw),
});

export default executable;
