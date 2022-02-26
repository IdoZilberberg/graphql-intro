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

const data = {
  movies,
  actors,
};

export default data;
