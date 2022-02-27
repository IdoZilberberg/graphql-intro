import { getActorsByIds } from "../dal.js";
import DataLoader from "dataloader";
import { getMoviesByActorIds } from "../dal.js";

const context = (req) => {
  return {
    dataloaders: {
      movies: new DataLoader(async (actorIds) => {
        console.log(`DataLoader moviesByActorIds [${actorIds}]`);
        return getMoviesByActorIds(actorIds);
      }),
      // actors: new DataLoader(async (actorIds) => {
      //   console.log(`DataLoader actors [${actorIds}]`);
      //   return getActorsByIds(actorIds);
      // }),
    },
  };
};

export default context;
