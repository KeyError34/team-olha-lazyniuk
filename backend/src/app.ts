import express from 'express';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import cors from 'cors';
import bodyParser from 'body-parser';
import { typeDefs } from './graphql/schema.js';
import { resolvers } from './graphql/resolvers.js';

async function startApolloServer() {
  const app = express();

  const server = new ApolloServer({ typeDefs, resolvers });

  // Start the Apollo Server
  await server.start();

  // Apply the Apollo GraphQL middleware and set the path to /graphql
  app.use(
    '/graphql',
    cors<cors.CorsRequest>() as unknown as express.RequestHandler, // Double type assertion
    bodyParser.json(),
    expressMiddleware(server, {
      context: async ({ req }) => ({ token: req.headers.authorization }),
    }),
  );

  // Optional: Simple endpoint for testing
  app.get('/', (req, res) => {
    res.send('Express server is running!');
  });

  const port = process.env.PORT || 4000;

  app.listen(port, () => {
    console.log(`Express Server:   http://localhost:${port}`);
    console.log(`GraphQL endpoint: http://localhost:${port}/graphql`);
  });
}

startApolloServer();
