import consola from "consola";
import { getActorById, getMovieById } from "../db.js";
import { getMoviesByActorId } from "../db.js";
import { getActorsByIds } from "../db.js";
import {getAllMovies} from "../db.js";
import {getAllActors} from "../db.js";
import {addReviewToMovie} from "../db.js";
import {deleteFirstReviewFromMovie} from "../db.js";
import {addActor} from "../db.js";

// Resolvers define "how" to fetch the types defined in the schema.
// They match the structure of typeDefs
const resolvers = {
  Movie: {
    actors: (parent, args) => {
      return getActorsByIds(parent.actorIds);
    },
  },
  Actor: {
    movies: (parent, args) => {
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
      consola.log(`=== Query all Movies ===`);
      return getAllMovies();
    },
    actors: () => {
      consola.log(`=== Query all Actors ===`);
      return getAllActors();
    },
    actor: (_, args) => {
      const { id } = args;
      consola.log(`Query Actor with ID ${id}`);
      return getActorById(id);
    },
    movie: (_, args) => {
      const { id } = args;
      consola.log(`Query Movie with ID ${id}`);
      return getMovieById(id);
    },
  },
  Mutation: {
    addReview: (parent, args) => {
      const { movieId, content } = args;
      const movie = addReviewToMovie(movieId);
      consola.log(`There are now ${movie.reviews.length} reviews`);
      return movie;
    },
    deleteFirstReview: (parent, args) => {
      const { movieId } = args;
      const movie = deleteFirstReviewFromMovie(movieId);
      consola.log(`There are now ${movie.reviews.length} reviews`);
      return movie;
    },
    addActor: (_, args) => {
      consola.log(`In addActor: ${JSON.stringify(args)}`);
      const newActor = addActor({...args});
      return newActor;
    },
  },
};

export default resolvers;
