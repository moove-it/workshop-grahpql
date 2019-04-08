import { makeExecutableSchema } from 'graphql-tools';
import { importSchema } from 'graphql-import';
import resolvers from './resolvers';

const typeDefs = importSchema('./graphql/schema.graphql');

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

export default schema;
