import React, { Component } from "react";

import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";
import googleIcon from '../../../../images/google-icon.svg'

const GOOGLE_BUTTON_ID = "google-sign-in-button";

//Old and disable. No use
class GoogleButtonDisable extends Component {
  componentDidMount() {
    // this.googleSDK();
    window.gapi.signin2.render(GOOGLE_BUTTON_ID, {
      onsuccess: this.onSuccess,
    });
  }

  onSuccess = (googleUser) => {
    const profile = googleUser.getBasicProfile();

    console.log('ID: ' + profile.getId());
    console.log('Full Name: ' + profile.getName());
    console.log('Given Name: ' + profile.getGivenName());
    console.log('Family Name: ' + profile.getFamilyName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail())
    console.log('Token: ', profile.getToken())
    let dataResponse = {
      email: profile.getEmail(),
      password: "",
      typeLogin: "Google",
    };
    this.props.onLogin(dataResponse);
  };
  render() {
    return (
      // <div
      //   id={GOOGLE_BUTTON_ID}
      //   style={{ margin: "24px 0px", width: "100%", borderRadius: "5px", justifyContent:"center" }}
      // />

      <Link>
        <Button
          type="submit"
          fullWidth
          id={GOOGLE_BUTTON_ID}
          variant="contained"
          style={{
            fontFamily: "Lucida Sans Unicode",
            fontWeight: "800"
          }}

        >
          <img src={googleIcon} style={{ width: '25px', height: '25px', marginRight: '10px' }} />
          Login with google
        </Button>
      </Link>
    );
  }
}
export default GoogleButtonDisable;



