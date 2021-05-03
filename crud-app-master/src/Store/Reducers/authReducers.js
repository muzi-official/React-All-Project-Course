import {
  REGISTER_WITH_EMAIL_PASSWORD,
  SIGN_IN_WITH_EMAIL_PASSWORD,
  SIGN_IN_WITH_GOOGLE,
  SIGN_IN_WITH_FACEBOOK,
  SIGN_OUT,
} from "../authConstants";

const InitialState = { user: null };

export const authReducers = (state = InitialState, { type, user }) => {
  switch (type) {
    case REGISTER_WITH_EMAIL_PASSWORD:
      return {
        ...state,
        user,
      };

    case SIGN_IN_WITH_EMAIL_PASSWORD:
      return {
        ...state,
        user,
      };

    case SIGN_IN_WITH_GOOGLE:
      return {
        ...state,
        user,
      };

    case SIGN_IN_WITH_FACEBOOK:
      return {
        ...state,
        user,
      };

    case SIGN_OUT:
      return {
        ...state,
        user: null,
      };

    default:
      return state;
  }
};
