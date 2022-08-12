// import { userLoggedIn, userEditedProfile, userLoggedOut } from '../login/auth-action';
import userApi from "../../../api/api-controllers/user-controller";
import {
  USER_SELECTED,
  UPDATE_USER_SELECTED,
} from "../../manager/action-types";

/**
 * User login action creator
 * @param {Object} user include token, email and confirmed
 */
export const userSelected = (data) => ({
  type: USER_SELECTED,
  data,
});

/**
 * User login action creator
 * @param {Object} user include token, email and confirmed
 */
export const updateUserSelected = (data) => ({
  type: UPDATE_USER_SELECTED,
  data,
});

/**
 * signup function is used to register a new account
 * @param {Object} data includes email, password, firstName and lastName
 */
export const signup = (data) => (dispatch) => {
  userApi.signup(data).then((payload) => {
    return payload;
  });
};

/**
 * signup function is used to register a new account
 * @param {Object} data includes email, password, firstName and lastName
 */
export const getUserByGuppyId = (data) => (dispatch) =>
  userApi.getUserByGuppyId(data).then((payload) => {
    dispatch(updateUserSelected(payload));
  });

/**
 * signupGuppyAccount function is used to register a new guppy account
 * @param {Object} data includes guppyAccountId, ...
 */
export const signupGuppyAccount = (data) => (dispatch) =>
  userApi.signupGuppyAccount(data);

/**
 * createCustomerByEmail function is used to create customer profile before creating the auth account info
 * @param {Object} data includes email, ...
 */

export const createCustomerByEmail = (data) => (dispatch) =>
  userApi.createCustomerByEmail(data);

/**
 * getUerByEmail function is used to check if the email is existed
 * @param {Object} data includes email, ...
 */

export const getGuppyUserByEmail = (data) => (dispatch) =>
  userApi.getGuppyUserByEmail(data);

export const addNewUserProfile = (data) => (dispatch) =>
  userApi.addNewUserProfile(data);

export const changePassword = (data) => (dispatch) =>
  userApi.changePassword(data);

export const receiveVerifyCode = (data) => (dispatch) =>
  userApi.receiveVerifyCode(data);
