import { GOOGLE_RESPONSE } from "../../manager/action-types";
import jwtDecode from 'jwt-decode';

export const getGoogleResponse = (payload) => ({
    type: GOOGLE_RESPONSE,
    payload
});

// export default {
//     decodeResponse: (response) =>
//         jwtDecode(response.credential)
//             .then((res) => res)
// };

// export const loginWithGoogle = (response) => (dispatch) => ({
//     dispatch(getGoogleResponse(jwtDecode(response.credential)))
// });

export const loginWithGoogle = (response) => (dispatch) =>
    dispatch(getGoogleResponse(jwtDecode(response.credential)))
