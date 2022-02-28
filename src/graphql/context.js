import { getMoviesByActorIds } from "../dal.js";
import DataLoader from "dataloader";

const context = (req) => {
  return {
    dataloaders: {
      movies: new DataLoader(async (actorIds) => {
        console.log(`DataLoader moviesByActorIds [${actorIds}]`);
        return getMoviesByActorIds(actorIds);
      }),
    },
  };
};

// TODO implement actors dataloader

export default context;
