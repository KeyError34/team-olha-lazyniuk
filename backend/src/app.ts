import express from 'express';
import { createHandler } from 'graphql-http/lib/use/express';
import { buildSchema } from 'graphql';
import cors from 'cors';
import { ruruHTML } from 'ruru/server';
const schema = buildSchema(`
  type Query {
    hello: String
  }`);

const root = {
  hello: () => 'Hello world!',
};

const app = express();
app.use(cors());
app.use(express.json());

app.all(
  '/graphql',
  createHandler({
    schema,
    rootValue: root,
  }),
);

// Serve GraphiQL IDE
app.get('/', (_req, res) => {
  res.type('html');
  res.end(ruruHTML({ endpoint: '/graphql' }));
});

export default app;
