// These are the type definitions, together they are known as a "schema"
// GraphQL requires a schema
import { gql } from "apollo-server-express";

const typeDefs = gql`
  # The "Movie" type defines what fields the client can ask for in a Movie
  type Movie {
    id: ID!
    """
    This is the title
    """
    title: String!
    """
    This is the genre
    """
    genre: String
    releaseDate: String
    reviews: [String]
    """
    These are the actors
    """
    actors: [Actor]
  }

  type Actor {
    id: ID!
    name: String!
    bio: String
    movies: [Movie]
  }

  # Mutations must use an input type as parameters
  input ActorInput {
    name: String!
    bio: String
  }

  # The "Query" type defines the API = contract = all operations that clients can execute
  type Query {
    movies: [Movie] # Query "movies" returns an Array of Movie elements
    actors: [Actor]
    actor(id: ID!): Actor
    movie(id: ID!): Movie
  }
  type Mutation {
    addReview(movieId: ID!, content: String!): Movie
    addActor(newActor: ActorInput!): Actor
    deleteFirstReview(movieId: ID!): Movie
  }
`;

export default typeDefs;
