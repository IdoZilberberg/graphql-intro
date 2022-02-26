import consola from "consola";
import data from "./db.js";
// DAL stands for Data Access Layer - you would replace this to access a real database

export const getAllMovies = () => {
  consola.log(`DB: getAllMovies`);
  return data.movies;
};

export const getAllActors = () => {
  consola.log(`DB: getAllActors`);
  return data.actors;
};

export const addActor = (actor) => {
  const newActor = {
    id: (data.actors.length + 1).toString(),
    ...actor,
  };
  data.actors.push(actor);
  return newActor;
};

export const getMovieById = (id) => {
  consola.log(`DB: getMovieById(${id})`);
  return data.movies.find((movies) => movies.id === id);
};

export const getActorById = (id) => {
  consola.log(`DB: getActorById(${id})`);
  return data.actors.find((actor) => actor.id === id);
};

export const getMoviesByActorId = async (actorId) => {
  consola.log(`DB: getMoviesByActorId(${actorId})`);
  return data.movies.filter((movie) => movie.actorIds.includes(actorId));
};

export const getMoviesByActorIds = async (actorIds) => {
  const res = [];
  actorIds.forEach((actorId) => {
    res.push(data.movies.filter((movie) => movie.actorIds.includes(actorId)));
  });
  consola.log(
    `DB: getMoviesByActorIds(${actorIds}): ${JSON.stringify(res, null, 2)}`
  );
  return res;
};

export const getActorsByIds = async (ids) => {
  consola.log(`DB: getActorsByIds(${ids})`);
  return data.actors.filter((actor) => ids.includes(actor.id));
};

export const addReviewToMovie = (movieId, review) => {
  consola.log(`DB: addReviewToMovie(${movieId})`);
  const movie = getMovieById(movieId);
  movie.reviews.push(review);
  return movie;
};

export const deleteFirstReviewFromMovie = (movieId) => {
  consola.log(`DB: deleteFirstReviewFromMovie(${movieId})`);
  const movie = getMovieById(movieId);
  movie.reviews.shift();
  return movie;
};
