import { createSelector } from "reselect";
import LocalStorageManager from "../../store/localStorage";

export const hasGenre = (genreId) => {
  const genreState = new LocalStorageManager("allGenres");

  return (
    genreId &&
    genreState.get().some((genreObj) => {
      console.log(
        `>> genreId objectId`,
        genreObj.id,
        genreId,
        genreObj.id === genreId
      );

      return genreObj.id == genreId;
    })
  );
};
