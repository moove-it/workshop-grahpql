import { GraphQLDateTime } from 'graphql-iso-date';

import cards from './queries/cards';

const resolvers = {
  Query: {
    cards,
  },
  GraphQLDateTime,
};

export default resolvers;
