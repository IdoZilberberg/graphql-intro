import { getActorsByIds } from "../db.js";
import DataLoader from "dataloader";
import consola from "consola";
import {getMoviesByActorIds} from "../db.js";

const context = (req) => {
  return {
    dataloaders: {
      movies: new DataLoader(async (actorIds) => {
        consola.log(`DataLoader moviesByActorIds [${actorIds}]`);
        return getMoviesByActorIds(actorIds);
      }),
      actors: new DataLoader(async (actorIds) => {
        consola.log(`DataLoader actors [${actorIds}]`);
        return getActorsByIds(actorIds);
      }),
    },
  };
};

export default context;
