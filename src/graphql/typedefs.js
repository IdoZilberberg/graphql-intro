// These are the type definitions, together they are known as a "schema"
// GraphQL requires a schema
import {gql} from "apollo-server-express";

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

export default typeDefs;