import { SIGN_IN, SIGN_OUT } from "../actions/types";

const INITIAL_STATE = {
  isSignedIn: null,
  uid: null,
};

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGN_IN:
      return { ...state, isSignedIn: true, uid: action.payload.uid };
    case SIGN_OUT:
      return { ...state, isSignedIn: false, uid: null };
    default:
      return state;
  }
};

export default authReducer;
