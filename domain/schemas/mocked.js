import { addMockFunctionsToSchema } from 'graphql-tools';
import schema from './executable';
import mocks from '../mocks';

export default addMockFunctionsToSchema({
  mocks,
  schema,
  preserveResolvers: true,
});
