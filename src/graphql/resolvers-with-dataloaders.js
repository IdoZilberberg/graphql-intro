import { getActorById, getMovieById } from "../dal.js";
import { getAllMovies } from "../dal.js";
import { getAllActors } from "../dal.js";
import { addReviewToMovie } from "../dal.js";
import { deleteFirstReviewFromMovie } from "../dal.js";
import { addActor } from "../dal.js";
import {getActorsByIds} from "../dal.js";

const resolvers = {
  Movie: {
    actors: (parent, _, context) => {
      // const { dataloaders } = context;
      // console.log(`dataloaders.actors for movieId=${parent.id} actorIds=${parent.actorIds}`);
      // const res = dataloaders.actors.loadMany(parent.actorIds);
      // return res;
      return getActorsByIds(parent.actorIds); // Not implemented
    },
  },
  Actor: {
    movies: (parent, _, context) => {
      const { dataloaders } = context;
      const { id: actorId } = parent;
      console.log(
        `dataloaders.movies actorId=${actorId}`
      );
      return dataloaders.movies.load(actorId);
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
      console.log(`=== Query Actor with ID ${id} ===`);
      return getActorById(id);
    },
    movie: (_, args) => {
      const { id } = args;
      console.log(`=== Query Movie with ID ${id} ===`);
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
