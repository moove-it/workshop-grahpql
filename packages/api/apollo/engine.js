import { ApolloEngine } from 'apollo-engine';

import { isDev, APOLLO } from '../constants';

const engine = new ApolloEngine({
  logging: { level: 'WARN' },
  apiKey: APOLLO.engine.API_KEY,
  // Only send perf data to the remote server in production
  reporting: {
    disabled: isDev,
    hostname: undefined, // Complete with your url.
    privateHeaders: ['authorization', 'Authorization', 'AUTHORIZATION'],
  },
  queryCache: {
    // Don't cache logged-in user responses
    privateFullQueryStore: 'disabled',
  },
});

export default engine;
