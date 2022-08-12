import userApi from "../../../api/api-controllers/user-controller";
import {
  USER_LOGGED_IN,
  USER_LOGGED_OUT,
  USER_SESSION,
  USER_GOOGLE_RESPONSE,
} from "../../manager/action-types";
import decode from "jwt-decode";
import setAuthorizationHeader from "../../utils/authorization-header";
import jwtDecode from "jwt-decode";
import { Store } from "@material-ui/icons";

export const userLoggedIn = (user) => ({
  type: USER_LOGGED_IN,
  user,
});

export const userLoggedOut = () => ({
  type: USER_LOGGED_OUT,
});

export const login = (credentials) => (dispatch) =>
  userApi.login(credentials).then((payload) => {
    localStorage.zingAppJWT = payload.token;
    setAuthorizationHeader(payload.token);
    const payloadInToken = decode(payload.token);
    const email = payload.email;
    sessionStorage.setItem("email", email);
    const userAccountInfo = payload.user;

    userApi.getZingAppUserByEmail(email).then((data) => {
      const userInfo = data;

      const user = {
        token: localStorage.zingAppJWT,
        email: email,
        confirmed: payloadInToken.confirmed,
        firstName: userInfo.firstName,
        membershipId: userInfo.membershipId,
        dateCreated: userInfo.dateCreated,
        lastName: userInfo.lastName,
        accountInfo: userAccountInfo,
      };
      dispatch(userLoggedIn(user));
      return user;
    });
  });

export const checkAuthExpired = (dispatch) => {
  const token = localStorage.getItem("zingAppJWT");
  const decodedToken = jwtDecode(token);

  const { exp, accountInfo, confirmed } = decodedToken;

  const { email } = accountInfo.authenticationInfo;
  if (exp < Date.now() / 1000) {
    localStorage.removeItem("zingAppJWT");
    dispatch(logout());
    window.location = "/login";
  } else {
    userApi.getZingAppUserByEmail(email).then((data) => {
      const userInfo = data;

      const user = {
        token: localStorage.zingAppJWT,
        email: email,
        confirmed: confirmed,
        membershipId: userInfo.membershipId,
        dateCreated: userInfo.dateCreated,
        firstName: userInfo.firstName,
        lastName: userInfo.lastName,
        accountInfo: accountInfo,
      };
      dispatch(userLoggedIn(user));
      return user;
    });
  }
};

export const logout = () => (dispatch) => {
  localStorage.clear();
  setAuthorizationHeader();
  dispatch(userLoggedOut());
};
