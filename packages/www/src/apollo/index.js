import { ApolloClient } from 'apollo-client';
import { ApolloLink, split } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { onError } from 'apollo-link-error';
import { WebSocketLink } from 'apollo-link-ws';
import { getMainDefinition } from 'apollo-utilities';

import { GRAPHQL_ENDPOINT, WS_URL } from '../constants/env';

// Auth middleware. Set context.
const authMiddleware = new ApolloLink((operation, forward) => {
  operation.setContext(({ headers = {} }) => ({
    headers: {
      ...headers,
      Authorization: localStorage.getItem('token') || null,
    },
  }));

  return forward(operation);
});

// Error middleware
const errorMiddleware = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ message, locations, path, extensions }) =>
      console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}, Code: ${extensions.code}`));
  }

  if (networkError) {
    console.log(`[Network error]: ${networkError}`);
  }
});

// HTTP link for normal request.
const httpLink = new HttpLink({
  uri: GRAPHQL_ENDPOINT,
});

// Websocket link for subscriptions
const wsLink = new WebSocketLink({
  uri: WS_URL,
  options: {
    reconnect: true,
    connectionParams: () => ({
      Authorization: localStorage.getItem('token') || null,
    }),
  },
});

// Switch between the two links based on operation
const link = split(
  ({ query }) => {
    const { kind, operation } = getMainDefinition(query);
    return kind === 'OperationDefinition' && operation === 'subscription';
  },
  wsLink,
  httpLink,
);

const cache = new InMemoryCache();

const client = new ApolloClient({
  link: ApolloLink.from([errorMiddleware, authMiddleware, link]),
  cache,
});

export default client;
