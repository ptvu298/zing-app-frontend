import { GET_GUPPY_ACCOUNT_INTEGRATION_SETTING } from "../../manager/action-types";
import authConfig from "../../../api/api-controllers/authConfig-controller";

/**
 * get the api key and channel ref key
 * @param {Object} empty object
 */
export const getApiKeyConfig = (authConfig) => ({
    type: GET_GUPPY_ACCOUNT_INTEGRATION_SETTING,
    authConfig,
});

/**
 * getGuppyAccountIntegrationSetting function is used to get the api key and channel ref key
 * @param {Object} empty object
 */

export const getGuppyAccountIntegrationSetting = () => (dispatch) =>
    authConfig.getGuppyAccountIntegrationSetting().then((payload) => {
        dispatch(getApiKeyConfig(payload));
        return payload;
    });