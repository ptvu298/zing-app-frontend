import {
  LOGIN,
  CREATE_CUSTOMER_BY_EMAIL,
  CREATE_AUTH_INFO,
  GET_USER_BY_EMAIL,
  GET_ZING_APP_USER_BY_EMAIL,
  CREATE_ZING_APP_USER_PROFILE,
  RECEIVE_VERIFY_CODE,
  CHANGE_PASSWORD,
} from "../URL/user-url";
import axios from "axios";
import AuthConfig from "../api-controllers/utils/auth_config";
import Headers from "../api-controllers/utils/header";

export default {
  createCustomerByEmail: (info) =>
    axios
      .post(CREATE_CUSTOMER_BY_EMAIL, JSON.stringify(info), {
        headers: Headers.getHeaders(),
      })
      .then((res) => res.data.payload),

  //---------------------------------------//

  login: (credentials) =>
    axios
      .post(LOGIN, JSON.stringify(credentials), {
        headers: Headers.getHeaders(),
      })
      .then((res) => res.data.payload),

  //---------------------------------------//

  signupGuppyAccount: (user) =>
    axios
      .post(CREATE_AUTH_INFO, JSON.stringify(user), {
        headers: Headers.getHeaders(),
      })
      .then((res) => res.data.payload),

  //---------------------------------------//

  getGuppyUserByEmail: (email) =>
    axios
      .post(GET_USER_BY_EMAIL, email, {
        headers: Headers.getHeadersText(),
      })
      .then((res) => res.data.payload),

  //---------------------------------------//

  getZingAppUserByEmail: (email) =>
    axios
      .post(GET_ZING_APP_USER_BY_EMAIL, email, {
        headers: Headers.getHeadersText(),
      })
      .then((res) => res.data.payload),

  //---------------------------------------//

  addNewUserProfile: (data) =>
    axios
      .post(CREATE_ZING_APP_USER_PROFILE, data, {
        headers: Headers.getHeaders(),
      })
      .then((res) => res.data.payload),

  //---------------------------------------//

  receiveVerifyCode: (email) =>
    axios
      .post(RECEIVE_VERIFY_CODE, email, {
        headers: Headers.getHeadersText(),
      })
      .then((res) => res.data.payload),

  //---------------------------------------//

  changePassword: (data) =>
    axios
      .post(CHANGE_PASSWORD, data, {
        headers: Headers.getHeaders(),
      })
      .then((res) => res.data.payload),

  //---------------------------------------//
  
  
};
