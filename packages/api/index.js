import express from 'express';
import { createServer } from 'http';
import morgan from 'morgan';

// Apollo Server
import apolloServer from './apollo/server';
// Apollo Engine
import apolloEngine from './apollo/engine';

// middlewares
import addSecurityMiddleware from './middlewares/security';
import tooBusy from './middlewares/tooBusy';
import cors, { customCors } from './middlewares/cors';

// models
import { ready } from './models';

import { PORT, GRAPHQL_PATH } from './constants';

const init = () => {
  // Wait the database to be ready.
  Promise.all([ready()])
    .then(() => {
      // Init express server
      const app = express();

      // set logger
      app.use(morgan('tiny'));

      // return the request if the server is too busy
      app.use(tooBusy);

      // security middleware
      addSecurityMiddleware(app);

      // cors
      app.use(cors);

      // GraphQL middleware
      apolloServer.applyMiddleware({ app, path: GRAPHQL_PATH, cors: customCors });

      // We need to create a separate HTTP server to handle GraphQL subscriptions via websockets
      const httpServer = createServer(app);

      apolloServer.installSubscriptionHandlers(httpServer);

      // Start API wrapped in Apollo Engine
      apolloEngine.listen({
        port: PORT,
        httpServer,
        graphqlPaths: [GRAPHQL_PATH],
      });

      console.log(`GraphQL API running at http://localhost:${PORT}${GRAPHQL_PATH}`);
    })
    .catch(console.error);
};

init();
