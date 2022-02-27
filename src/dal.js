import data from "./db.js";
// DAL stands for Data Access Layer - you would replace this to access a real database

export const getAllMovies = () => {
  console.log(`DB: getAllMovies`);
  return data.movies;
};

export const getAllActors = () => {
  console.log(`DB: getAllActors`);
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
  console.log(`DB: getMovieById(${id})`);
  return data.movies.find((movies) => movies.id === id);
};

export const getActorById = (id) => {
  console.log(`DB: getActorById(${id})`);
  return data.actors.find((actor) => actor.id === id);
};

export const getMoviesByActorId = async (actorId) => {
  console.log(`DB: getMoviesByActorId(${actorId})`);
  return data.movies.filter((movie) => movie.actorIds.includes(actorId));
};

export const getMoviesByActorIds = async (actorIds) => {
  const res = [];
  actorIds.forEach((actorId) => {
    res.push(data.movies.filter((movie) => movie.actorIds.includes(actorId)));
  });
  console.log(`DB: getMoviesByActorIds(${actorIds})`);
  return res;
};

export const getActorsByIds = async (ids) => {
  console.log(`DB: getActorsByIds(${ids})`);
  return data.actors.filter((actor) => ids.includes(actor.id));
};

export const addReviewToMovie = (movieId, review) => {
  console.log(`DB: addReviewToMovie(${movieId})`);
  const movie = getMovieById(movieId);
  movie.reviews.push(review);
  return movie;
};

export const deleteFirstReviewFromMovie = (movieId) => {
  console.log(`DB: deleteFirstReviewFromMovie(${movieId})`);
  const movie = getMovieById(movieId);
  movie.reviews.shift();
  return movie;
};
