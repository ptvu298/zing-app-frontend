import React, { Component } from "react";
import "../App.css";
import Proptypes from "prop-types";
import NotFound from "../views/common/not-found/page-not-found";
import LoginPageContainer from "../views/login-page/cnt-login-page";
import SignUpPageContainer from "../views/signup-page/cnt-signup-page";
import GuestRoute from "../views/routes/guest-route";
import UserRoute from "../views/routes/user-route";
import NavigationContainer from "../views/common/navigation/cnt-navigation";
import PromotionPageContainer from "../zing-components/promotion-page/cnt-promotion-page";
import ForgotPasswordPageContainer from "../views/forgot-password-page/cnt-forgot-password-page";
import ResetPasswordPageContainer from "../views/reset-password-page/cnt-reset-password-page";
import OtherInfoFormComponent from "../views/login-page/external-login/other-information-form/cmp-other-information-form";

class AppComponent extends Component {
  render() {
    const { location } = this.props;
    return (
      <div id="app">
        <NavigationContainer />

        <GuestRoute
          location={location}
          path={["/", "/login"]}
          exact
          component={LoginPageContainer}
        ></GuestRoute>

        <GuestRoute
          location={location}
          path="/signup"
          exact
          component={SignUpPageContainer}
        ></GuestRoute>

        <GuestRoute
          location={location}
          path="/notFound"
          exact
          component={NotFound}
        ></GuestRoute>

        <GuestRoute
          location={location}
          path="/forgotPassword"
          exact
          component={ForgotPasswordPageContainer}
        ></GuestRoute>

        <GuestRoute
          location={location}
          path="/resetPassword"
          exact
          component={ResetPasswordPageContainer}
        ></GuestRoute>

        <GuestRoute
          location={location}
          path="/addOnInfo"
          exact
          component={OtherInfoFormComponent}
        ></GuestRoute>

        <UserRoute
          location={location}
          path="/promotions"
          exact
          component={PromotionPageContainer}
        ></UserRoute>
      </div>
    );
  }
}

AppComponent.prototypes = {
  location: Proptypes.shape({
    pathname: Proptypes.string.isRequired,
  }).isRequired,
};

export default AppComponent;
