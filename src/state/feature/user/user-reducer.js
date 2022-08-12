import {
  USER_LOGGED_IN,
  USER_LOGGED_OUT,
  USER_EDIT_PROFILE,
  USER_SELECTED,
  UPDATE_USER_SELECTED,
} from "../../manager/action-types";

export function user(state = {}, action = {}) {
  switch (action.type) {
    case USER_LOGGED_IN:
      return action.user;
    case USER_EDIT_PROFILE:
      return action.user;
    case USER_SELECTED:
      return action.data;
    case UPDATE_USER_SELECTED:
      return { ...state, redtutorAccount: action.data };
    case USER_LOGGED_OUT:
      return {};
    default:
      return state;
  }
}
