import consola from "consola";
const movies = [
  {
    id: "1",
    title: "Sherlock",
    medium: "TV Show",
    genre: "Detective fiction",
    reviews: [
      "I just love London!",
      "I prefer Benedict Cumberbatch as Doctor Strange...",
    ],
    actorIds: ["101", "104"],
  },
  {
    id: "2",
    title: "Game of Thrones",
    genre: "Fantasy",
    medium: "TV Show",
    releaseDate: "2011",
    reviews: ["I liked the books better"],
    actorIds: ["102", "103", "105"],
  },
  {
    id: "3",
    title: "Doctor Strange",
    genre: "Action Comics",
    medium: "Film",
    releaseDate: "2016",
    actorIds: ["101"],
  },
  {
    id: "4",
    title: "Eternals",
    medium: "Film",
    releaseDate: "2021",
    actorIds: ["103"],
  },
  {
    id: "5",
    title: "Me before you",
    medium: "Film",
    releaseDate: "2021",
    actorIds: ["103", "105"],
  },
];

const actors = [
  {
    id: "101",
    name: "Benedict Cumberbatch",
  },
  {
    id: "102",
    name: "Emilia Clarke",
    bio: "Born on 23 October 1986",
  },
  {
    id: "103",
    name: "Kit Harington",
    bio: "Born on 26 December, 1986",
  },
  {
    id: "104",
    name: "Martin Freeman",
  },
  {
    id: "105",
    name: "Charles Dance",
  },
];

export const data = {
  movies,
  actors,
};

// API TO DB LAYER

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
  actorIds.forEach(actorId => {
    res.push(data.movies.filter((movie) => movie.actorIds.includes(actorId)));
  });
  consola.log(`DB: getMoviesByActorIds(${actorIds}): ${JSON.stringify(res, null, 2)}`);
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
