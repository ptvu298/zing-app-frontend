import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Link from "@material-ui/core/Link";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { withStyles } from "@material-ui/core/styles";
import Validator from "validator";
import logo from "../../../logos/ZingRewards_Logo_White.png";
import PropTypes from "prop-types";
import { Button } from "@material-ui/core";
import { Alert  } from "@material-ui/lab";
import {CircularProgress} from "@material-ui/core";

function PoweredBy() {
  return (
    <Typography variant="body2" style={{ color: "white" }} align="center">
      {"Powered by "}
      <Link style={{ color: "white" }} href="http://www.redharestudios.sg/">
        Guppy
      </Link>{" "}
      {/* {new Date().getFullYear()} */}
      {/* {'.'} */}
    </Typography>
  );
}

function Copyright() {
  return (
    <Typography variant="body2" style={{ color: "white" }} align="center">
      {"Copyright © "}
      <Link style={{ color: "white" }} href="http://www.redharestudios.sg/">
        Zing Ventures
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = (theme) => ({
  textFieldLogin: {
    background: "white",
    borderRadius: "4px",
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(2),
    fullWidth: true,
  },
  submit: {
    margin: theme.spacing(3, 0, 0),
    background: "orange",
    "&:hover": {
      backgroundColor: "darkorange",
    },
  },
  logo: {
    width: "300px",
    height: "auto",
  },
  forgotPasswordInputGroup: {
    background: "orange",
    borderRadius: "3px",
    margin: theme.spacing(3, 0, 0),
  },
  sendVerifyCodeButton: {
    margin: theme.spacing(0, 0, 0),
  },
  progress:{
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    minHeight:"100vh"
  }
});

class ResetPasswordFormComponent extends Component {
  state = {
    data: {
      email: "",
      newPassword: "",
      confirmNewPassword: "",
      verifyCode: "",
    },
    errors: {},
    redtutorUser: {},
    loading: false,
  };

  onChange = (e) => {
    this.setState({
      ...this.state,
      data: { ...this.state.data, [e.target.name]: e.target.value },
    });
  };

  validate = (data) => {
    const errors = {};
    if (!Validator.isEmail(data.email)) {
      errors.email = "Must be valid email";
    }
    if (!data.newPassword || data.newPassword.length < 6) {
      errors.newPassword = "The password is invalid or wrong";
    }

    if (data.newPassword != data.confirmNewPassword) {
      errors.confirmNewPassword = "The confirm password is not matched";
    }
    if (!data.verifyCode) {
      errors.verifyCode = "The verify code is invalid";
    }
    return errors;
  };

  checkEmail = (email) => {
    const errors = {};
    if (!Validator.isEmail(email)) {
      errors.email = "Must be valid email";
    }
    this.setState({ errors });
  };

  handleKeyPress = (event, email) => {
    if (event.charCode === 13) {
      this.checkEmail(email);
    }
  };

  onGoogleLogin = (data) => {
    console.log("data", data);
    this.props.submit(data);
  };

  onSubmit = (e) => {
    e.preventDefault();

    const { data } = this.state;
    const errors = this.validate(this.state.data);

    const changePasswordRequest = {
      email: data.email,
      password: data.newPassword,
      verifyCode: data.verifyCode,
    };

    if (Object.keys(errors).length > 0) {
      this.setState({ errors });
    } else {
      this.props.getGuppyUserByEmail(this.state.data.email).then((payload) => {
        if (!payload) {
          const { errors } = this.state;
          errors.email = "The email is invalid";
          this.setState({ errors: errors });
        } else {
          this.setState({ loading: true });
          this.props
            .changePassword(changePasswordRequest)
            .then(() => this.props.history.push("login"));
        }
      });
    }
  };

  render() {
    const { classes } = this.props;
    const { data, errors, loading } = this.state;

    if (loading) {
      return (<div className={classes.progress}><CircularProgress /></div>)
    } else {
      return (
        <div>
          <Box
            boxShadow={10}
            component={Grid}
            style={{
              align: "center",
              marginBottom: "5%",
              marginLeft: "10%",
              marginRight: "10%",
              marginTop: "3%",
              paddingBottom: "3%",
              backgroundColor: "black",
            }}
          >
            <Container className="main" component="main" maxWidth="sm">
              <CssBaseline />
              <div className={classes.paper}>
                <img src={logo} className={classes.logo} />

                <form
                  onSubmit={this.onSubmit}
                  className={classes.form}
                  noValidate
                >
                  <Grid
                    container
                    className={classes.forgotPasswordInputGroup}
                    spacing={2}
                  >
                    <Alert style={{ width: "100%" }} severity="success">
                      A verify code is sent to your email account, please check
                      your email to get the code.
                    </Alert>
                  </Grid>

                  <Grid
                    container
                    className={classes.forgotPasswordInputGroup}
                    spacing={2}
                  >
                    <Grid item xs={12}>
                      <TextField
                        inputProps={{
                          className: classes.textFieldLogin,
                        }}
                        variant="outlined"
                        required
                        fullWidth
                        id="email"
                        label="Email"
                        value={data.email}
                        onChange={this.onChange}
                        name="email"
                        error={!!errors.email}
                        helperText={errors.email}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        inputProps={{
                          className: classes.textFieldLogin,
                        }}
                        variant="outlined"
                        required
                        fullWidth
                        type="password"
                        id="newPassword"
                        label="New Password"
                        value={data.newPassword}
                        onChange={this.onChange}
                        name="newPassword"
                        error={!!errors.newPassword}
                        helperText={errors.newPassword}
                      />
                      <Grid />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        inputProps={{
                          className: classes.textFieldLogin,
                        }}
                        variant="outlined"
                        required
                        fullWidth
                        id="confirmNewPassword"
                        label="Confirm New Password"
                        value={data.confirmNewPassword}
                        onChange={this.onChange}
                        name="confirmNewPassword"
                        type="password"
                        error={!!errors.confirmNewPassword}
                        helperText={errors.confirmNewPassword}
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <TextField
                        inputProps={{
                          className: classes.textFieldLogin,
                        }}
                        variant="outlined"
                        required
                        fullWidth
                        id="verifyCode"
                        label="Verify Code"
                        value={data.verifyCode}
                        onChange={this.onChange}
                        name="verifyCode"
                        error={!!errors.verifyCode}
                        helperText={errors.verifyCode}
                      />
                    </Grid>
                  </Grid>

                  <Grid
                    spacing={2}
                    container
                    className={classes.sendVerifyCodeButton}
                  >
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      className={classes.submit}
                      style={{ fontFamily: "Lucida Sans Unicode" }}
                    >
                      Reset Password
                    </Button>
                  </Grid>
                </form>
              </div>

              <Box mt={5}>
                <Copyright />
              </Box>
            </Container>
          </Box>
        </div>
      );
    }
  }
}

ResetPasswordFormComponent.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default withRouter(
  connect()(
    withStyles(useStyles, { withTheme: true })(ResetPasswordFormComponent)
  )
);
