import { GOOGLE_RESPONSE } from "../../manager/action-types";

export function externalLoginReponse(state = {}, action = {}) {
    switch (action.type) {
        case GOOGLE_RESPONSE:
            return action.response;
        default:
            return state;
    }
}
