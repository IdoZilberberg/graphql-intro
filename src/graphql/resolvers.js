import { getActorById, getMovieById } from "../dal.js";
import { getAllMovies } from "../dal.js";
import { getAllActors } from "../dal.js";
import { addReviewToMovie } from "../dal.js";
import { deleteFirstReviewFromMovie } from "../dal.js";
import { addActor } from "../dal.js";
import { getActorsByIds } from "../dal.js";
import { getMoviesByActorId } from "../dal.js";

const USE_DATALOADERS = false;

const resolvers = {
  Movie: {
    title: ({ title }) => {
      return title.toUpperCase();
    },
    actors: (parent) => {
      return getActorsByIds(parent.actorIds); // Can also implement dataloaders for this one
    },
  },
  Actor: {
    movies: (parent, _, context) => {
      const actorId = parent.id;

      if (USE_DATALOADERS) {
        const { dataloaders } = context;
        console.log(`dataloaders.movies actorId=${actorId}`);
        return dataloaders.movies.load(actorId);
      } else {
        return getMoviesByActorId(actorId);
      }
    },
  },

  Query: {
    movies: () => {
      console.log(`=== Query all Movies ===`);
      return getAllMovies();
    },
    movie: (_, args) => {
      const { id } = args; // destructing in Javascript. Same as const id = args.id
      console.log(`=== Query Movie with ID ${id} ===`);
      return getMovieById(id);
    },
    actors: () => {
      console.log(`=== Query all Actors ===`);
      return getAllActors();
    },
    actor: (_, args) => {
      const { id } = args;
      console.log(`=== Query Actor with ID ${id} ===`);
      return getActorById(id);
    },
  },
  Mutation: {
    addReview: (_, args) => {
      const { movieId, content } = args;
      const movie = addReviewToMovie(movieId, content);
      console.log(`There are now ${movie.reviews.length} reviews`);
      return movie;
    },
    deleteFirstReview: (_, args) => {
      const { movieId } = args;
      const movie = deleteFirstReviewFromMovie(movieId);
      console.log(`There are now ${movie.reviews.length} reviews`);
      return movie;
    },
    addActor: (_, args) => {
      const { newActor } = args;
      console.log(`In addActor: ${JSON.stringify(newActor)}`);
      const addedActor = addActor(newActor);
      return addedActor;
    },
  },
};

export default resolvers;
