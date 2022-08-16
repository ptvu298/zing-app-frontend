import { GOOGLE_RESPONSE } from "../../manager/action-types";
// import jwtDecode from 'jwt-decode';

export const getGoogleResponse = (response) => ({
    type: GOOGLE_RESPONSE,
    response
});

export const saveGoogleResponse = (response) => (dispatch) => {
    console.log("response", response)
    dispatch(getGoogleResponse(response));
}

