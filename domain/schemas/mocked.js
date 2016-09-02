import { addMockFunctionsToSchema } from 'graphql-tools';
import mocks from '/domain/mocks';
import schema from './executable';

export default addMockFunctionsToSchema({
  mocks,
  schema,
  preserveResolvers: true,
});
