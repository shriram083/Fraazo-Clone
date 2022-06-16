import * as types from "./auth.types";

const initialState = {
    otp: "",
    mobile: "",
    error: false,
    isAuth:false,
};

export const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.GET_OTP:
      return {
        ...state,
          mobile: payload,
          otp:payload
      };
    case types.GET_LOGIN:
      return {
          ...state,
          isAuth:true
      };
    default:
      return state;
  }
};
