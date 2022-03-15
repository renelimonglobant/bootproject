import { NOTE_DATA } from "./noteTypes";

const initialState = {
  title: "",
  msj: "",
};

const noteReducer = (state = initialState, action) => {
  switch (action.type) {
    case NOTE_DATA:
      return {
        ...state,
        // loading: true,
      };
    default:
      return state;
  }
};

export default noteReducer;
