import { NOTE_DATA } from "./userTypes";

// export const fetchData = () => {
//   return (dispatch) => {
//     dispatch(fetchDataRequest());
//     Promise.all([
//       fetch(endpoint).then((response) => response.json()),
//       fetch(metadataarray).then((resmeta) => resmeta.json()),
//     ])
//       .then(([response, resmeta]) => {
//         dispatch(fetchDataSuccess(merged));
//       })
//       .catch((error) => {
//         dispatch(fetchDataFailure(error.message));
//       });
//   };
// };

export const getDataNote = () => {
  return {
    type: NOTE_DATA,
  };
};
