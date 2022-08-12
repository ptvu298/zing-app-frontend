import { user } from "../feature/user/user-reducer";
import { authConfig } from "../feature/authConfig/authConfig-reducer";
import { bannerImages } from "../feature/banner-images/banner-images-reducer";
import { externalLoginReponse } from "../feature/external-login/response-reducer";
import { combineReducers } from "redux";
import { USER_LOGGED_OUT } from "./action-types";

const allReducers = combineReducers({
    user: user,
    authConfig: authConfig,
    bannerImages: bannerImages,
    externalLoginReponse: externalLoginReponse,
});

const rootReducer = (state, action) => {
    if (action.type === USER_LOGGED_OUT) {
        state = undefined;
    }

    return allReducers(state, action);
};

export default rootReducer;