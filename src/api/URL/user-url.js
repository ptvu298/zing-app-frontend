import { ZingAppLiveServerURL, GuppyLiveServerURL } from "./server-url";

const baseURL = ZingAppLiveServerURL + "/ZingAppApi/auth";

export const CREATE_CUSTOMER_BY_EMAIL =
  // GuppyLiveServerURL + "/public/api/customer/createCustomerByEmail";
  ZingAppLiveServerURL + "/api/auth/createCustomerByEmail";

export const CREATE_AUTH_INFO =
  // GuppyLiveServerURL + "/public/api/authInfo/createAuthInfo";
  ZingAppLiveServerURL + "/api/auth/createAuthInfo";

//--------------------user--------------------//
export const GET_ZING_APP_USER_BY_EMAIL =
  ZingAppLiveServerURL + "/api/auth/getUserByEmail";
export const GET_USER_BY_EMAIL = ZingAppLiveServerURL + "/api/auth/getGuppyUser";


export const CREATE_ZING_APP_USER_PROFILE =
  ZingAppLiveServerURL + "/api/auth/addNewUserProfile";

export const RECEIVE_VERIFY_CODE =
  ZingAppLiveServerURL + "/api/auth/sendVerifyCode";


export const CHANGE_PASSWORD = ZingAppLiveServerURL + "/api/auth/changePassword"
//--------------------------------------------//


//----------------------Login----------------//
export const LOGIN = ZingAppLiveServerURL + "/api/auth/login";
//--------------------------------------------//


export const GET_GUPPY_ACCOUNT_INTEGRATION_SETTING = ZingAppLiveServerURL + "/ZingApp/api/getGuppyAccountIntegrationSetting"