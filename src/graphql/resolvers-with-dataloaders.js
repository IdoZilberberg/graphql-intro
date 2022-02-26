import consola from "consola";
import { getActorById, getMovieById } from "../dal.js";
import { getAllMovies } from "../dal.js";
import { getAllActors } from "../dal.js";
import { addReviewToMovie } from "../dal.js";
import { deleteFirstReviewFromMovie } from "../dal.js";
import { addActor } from "../dal.js";

const resolvers = {
  Movie: {
    actors: (parent, _, context) => {
      const { dataloaders } = context;
      consola.log(`dataloaders.actors (${parent.actorIds})`);
      return dataloaders.actors.loadMany(parent.actorIds);
    },
  },
  Actor: {
    movies: (parent, _, context) => {
      const { dataloaders } = context;
      const res = dataloaders.movies.load(parent.id);
      consola.log(
        `dataloaders.movies for ${parent.id}: ${JSON.stringify(res)}`
      );
      return res;
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
      const newActor = addActor({ ...args });
      return newActor;
    },
  },
};

export default resolvers;
