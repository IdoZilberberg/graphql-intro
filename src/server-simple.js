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
const server = new ApolloServer({
});

await server.start();
server.applyMiddleware({
  app,
  path: "/graphql",
});

// Modified server startup
await httpServer.listen({ port: 4000 });
console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);




 */
const app = express();
const httpServer = http.createServer(app);

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
await httpServer.listen({ port: PORT });
console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`);
