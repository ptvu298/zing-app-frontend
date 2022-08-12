import { GET_GUPPY_ACCOUNT_INTEGRATION_SETTING } from "../../manager/action-types";

export function authConfig(state = {}, action = {}) {

  switch (action.type) {
    case GET_GUPPY_ACCOUNT_INTEGRATION_SETTING:
      return action.authConfig;
    default:
      return state;
  }
}
