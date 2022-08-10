import { PayloadAction } from "@reduxjs/toolkit";
import { LOGIN } from "../actions/actionTypes";

const initialState = {
  isLoggedIn: false,
};

const loginReducer = (state = initialState, action: PayloadAction<string>) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isLoggedIn: true,
      };
    default:
      return state;
  }
};

export default loginReducer;
