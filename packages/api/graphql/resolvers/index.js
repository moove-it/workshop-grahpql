import { GraphQLDateTime } from 'graphql-iso-date';

import cards from './queries/cards';

import addCard from './mutations/add-card';

const resolvers = {
  Mutation: {
    addCard,
  },
  Query: {
    cards,
  },
  GraphQLDateTime,
};

export default resolvers;
