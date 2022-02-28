// Partly based on https://www.apollographql.com/docs/apollo-server/getting-started/
// and this: https://www.apollographql.com/docs/apollo-server/integrations/middleware/
// Copyright (c) 2022 Ido Zilberberg

import http from "http";
import express from "express";
import { ApolloServer } from "apollo-server-express";

import resolvers from "./graphql/resolvers.js";
import typeDefs from "./graphql/typedefs.js";
import context from "./graphql/context.js";


/*
Boilerplate code for the demo:

const app = express();
const httpServer = http.createServer(app);

// Create the Apollo Server with its configuration
const server = new ApolloServer({
});

await server.start();
server.applyMiddleware({
  app,
  path: "/graphql",
});

const PORT = 4001;

// Start listening to incoming requests
await httpServer.listen({ port: PORT });
console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`);




 */
const app = express();
const httpServer = http.createServer(app);

// Create the Apollo Server with its configuration
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context,
});

await server.start();
server.applyMiddleware({
  app,
  path: "/graphql",
});

const PORT = 4000;
// Start listening to incoming requests
await httpServer.listen({ port: PORT });
console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`);
