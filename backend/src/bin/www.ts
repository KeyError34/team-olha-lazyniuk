import express from "express";
import { createHandler } from "graphql-http/lib/use/express";
import { buildSchema } from "graphql";
import { ruruHTML } from "ruru/server";

// Construct a schema, using GraphQL schema language
const schema = buildSchema(`
  type Query {
    hello: String
  }
`);

// The root provides a resolver function for each API endpoint
const root = {
  hello: () => "Hello world!",
};

const app = express();

// Create and use the GraphQL handler
app.all(
  "/graphql",
  createHandler({
    schema,
    rootValue: root,
  })
);

// Serve the GraphiQL IDE
app.get("/", (_req, res) => {
  res.type("html");
  res.end(ruruHTML({ endpoint: "/graphql" }));
});

// Start the server at port 4000
app.listen(3000, () => {
  console.log("Running a GraphQL API server at http://localhost:3000/graphql");
});


// import 'dotenv/config';
// import app from '../app';
// import debug from 'debug';
// import http from 'http';
// import config from '../core/config'; // Import the config

// const log: debug.Debugger = debug('upload-photos:server');

// // Get the port from the config
// const port = normalizePort(config.port.toString());

// app.set('port', port);

// const server = http.createServer(app);

// server.listen(port);
// server.on('error', onError);
// server.on('listening', onListening);

// function normalizePort(val: string | number): number | string | boolean {
//   if (typeof val === 'number') {
//     return val;
//   }

//   const port = parseInt(val, 10);

//   if (isNaN(port)) {
//     return val;
//   }

//   if (port >= 0) {
//     return port;
//   }

//   return false;
// }

// function onError(error: NodeJS.ErrnoException): void {
//   if (error.syscall !== 'listen') {
//     throw error;
//   }

//   const bind = typeof port === 'string' ? `Pipe ${port}` : `Port ${port}`;

//   switch (error.code) {
//     case 'EACCES':
//       console.error(`${bind} requires elevated privileges`);
//       process.exit(1);
//     case 'EADDRINUSE':
//       console.error(`${bind} is already in use`);
//       process.exit(1);
//     default:
//       throw error;
//   }
// }

// function onListening(): void {
//   const addr = server.address();
//   let bind: string;
//   const blue = '\x1b[34m';
//   const reset = '\x1b[0m';

//   if (addr === null) {
//     bind = 'unknown';
//   } else if (typeof addr === 'string') {
//     bind = `pipe ${addr}`;
//   } else {
//     bind = `port ${addr.port}`;
//   }

//   console.log(`Listening on ${blue}http://localhost:${port}/${reset}`);
//   log(`Listening on ${bind}`);
// }
