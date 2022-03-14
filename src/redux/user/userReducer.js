import { USER_DATA, REGISTER_DATA } from "./userTypes";

const initialState = {
  loading: false,
  data: [],
  error: "",
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_DATA:
      return {
        ...state,
        loading: true,
      };
    case REGISTER_DATA:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    default:
      return state;
  }
};

export default userReducer;
