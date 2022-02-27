import { getActorById, getMovieById } from "../dal.js";
import { getMoviesByActorId } from "../dal.js";
import { getActorsByIds } from "../dal.js";
import { getAllMovies } from "../dal.js";
import { getAllActors } from "../dal.js";
import { addReviewToMovie } from "../dal.js";
import { deleteFirstReviewFromMovie } from "../dal.js";
import { addActor } from "../dal.js";

// Resolvers define "how" to fetch the types defined in the schema.
// They match the structure of typeDefs
const resolvers = {
  Movie: {
    actors: (parent) => {
      return getActorsByIds(parent.actorIds);
    },
  },
  Actor: {
    movies: (parent) => {
      //   return [{
      //     title: "TBD"
      //   }];
      // }
      const actorId = parent.id;
      return getMoviesByActorId(actorId);
    },
  },

  Query: {
    movies: () => {
      console.log(`=== Query all Movies ===`);
      return getAllMovies();
    },
    actors: () => {
      console.log(`=== Query all Actors ===`);
      return getAllActors();
    },
    actor: (_, args) => {
      const { id } = args;
      console.log(`Query Actor with ID ${id}`);
      return getActorById(id);
    },
    movie: (_, args) => {
      const { id } = args;
      console.log(`Query Movie with ID ${id}`);
      return getMovieById(id);
    },
  },
  Mutation: {
    addReview: (parent, args) => {
      const { movieId, content } = args;
      const movie = addReviewToMovie(movieId);
      console.log(`There are now ${movie.reviews.length} reviews`);
      return movie;
    },
    deleteFirstReview: (parent, args) => {
      const { movieId } = args;
      const movie = deleteFirstReviewFromMovie(movieId);
      console.log(`There are now ${movie.reviews.length} reviews`);
      return movie;
    },
    addActor: (_, args) => {
      console.log(`In addActor: ${JSON.stringify(args)}`);
      const newActor = addActor({ ...args });
      return newActor;
    },
  },
};

export default resolvers;
