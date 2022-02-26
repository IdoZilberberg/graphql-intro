// Partly based on https://www.apollographql.com/docs/apollo-server/getting-started/
// Copyright (c) 2022 Ido Zilberberg

import http from "http";
import consola from "consola";
import express from "express";
import { ApolloServer, gql } from "apollo-server-express";
// import resolvers from "./graphql/resolvers.js";
import resolvers from "./graphql/resolvers-with-dataloaders.js";
import context from "./graphql/context.js";

// These are the type definitions, together they are known as a "schema"
// GraphQL requires a schema
const typeDefs = gql`
  # This "Book" type defines what fields the client can ask for
  type Movie {
    id: String!
    """
    This is the title
    """
    title: String!
    """
    This is the author's name
    """
    genre: String
    releaseDate: String
    reviews: [String]
    actors: [Actor]
  }

  type Actor {
    id: String!
    name: String!
    bio: String
    movies: [Movie]
  }

  input ActorInput {
    name: String!
    bio: String
  }

  # The "Query" type is a "meta" type - it lists all of the available queries that clients can execute
  type Query {
    movies: [Movie] # Query "movies" returns an Array of Movie elements
    actors: [Actor]
    actor(id: String!): Actor
    movie(id: String!): Movie
  }
  type Mutation {
    addReview(movieId: String!, content: String!): Movie
    addActor(newActor: ActorInput!): Actor
    deleteFirstReview(movieId: String!): Movie
  }
`;

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

// Modified server startup
await httpServer.listen({ port: 4000 });
consola.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
