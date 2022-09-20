import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { withStyles } from "@material-ui/core/styles";
import Validator from "validator";
import logo2 from "../../../logos/ZingLogo.png"
import PropTypes from "prop-types";
import {
  alpha,
  // Divider,
  makeStyles
} from "@material-ui/core";
import './login.css'
import GoogleButton from "../external-login/google-login-button/cnt-google-buttton"

// function PoweredBy() {
//   return (
//     <Typography variant="body2" style={{ color: "white" }} align="center">
//       {"Powered by "}
//       <Link style={{ color: "white" }} href="http://www.redharestudios.sg/">
//         Guppy
//       </Link>{" "}
//       {/* {new Date().getFullYear()} */}
//       {/* {'.'} */}
//     </Typography>
//   );
// }

// function Copyright() {
//   return (
//     <Typography variant="body2" style={{ color: "white" }} align="center">
//       {"Copyright © "}
//       <Link style={{ color: "white" }} href="http://www.redharestudios.sg/">
//         Zing Ventures
//       </Link>{" "}
//       {new Date().getFullYear()}
//       {"."}
//     </Typography>
//   );
// }

const useStylesTF = makeStyles((theme) => ({

  root: {
    'label': {
      color: '8d8d8d'
    },
    border: '2px solid #8d8d8d',
    overflow: 'hidden',
    color: '#8d8d8d',
    borderRadius: '10px',
    backgroundColor: 'transparent',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    '&:hover': {
    },

    '&$focused': {
      border: '2px solid #e7a94b',
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
      color: '#fff'
    },
  },

  focused: {},
}));

function CustomTextField(props) {
  const classes = useStylesTF();

  return <TextField InputProps={{ classes, disableUnderline: true }} {...props} />;
}

const useStyles = ((theme) => ({
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
  signup: {
    margin: theme.spacing(3, 0, 2),
    background: "white",
    "&:hover": {
      backgroundColor: "grey",
    },
    width: "50%",
  },
  logo: {
    width: "300px",
    height: "auto",
  },
  SignInOption: {
    color: "white",
  },
  forgotPassword: {
    margin: theme.spacing(3, 0, 3),
    color: '#fff',
  },
  signup: {
    margin: theme.spacing(5, 0, 0),
    color: "#fff",
  },
  linkLogin: {
    fontWeight: "700",
    color: "#e7a94b",
    marginLeft: "5px"
  },
  loginGoogleGroup: {
    marginTop: '40px'
  }
}));

class LoginFormComponent extends Component {
  state = {
    data: {
      email: "",
      password: "",
      typeLogin: "Local",
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
    if (!data.password || data.password.length < 6) {
      errors.password = "The password is invalid or wrong";
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
    this.setState({ loading: true });
    const errors = this.validate(this.state.data);
    if (Object.keys(errors).length > 0) {
      this.setState({ errors });
    } else {
      this.props.getGuppyUserByEmail(this.state.data.email).then((payload) => {
        if (!payload) {
          const { errors } = this.state;

          errors.email = "The email is not registered";

          this.setState({ errors: errors });
        } else {
          this.props
            .submit(this.state.data)
            .then()
            .catch(() => {
              const { errors } = this.state;
              errors.password = "The password is incorrect";
              this.setState({ errors: errors });
            });
        }
      });
    }
  };

  render() {
    const { classes } = this.props;
    const { data, errors, loading } = this.state;
    return (
      <div>
        <div>
          <img src={logo2} className="imgLogoTop" />
        </div>

        <Box
          boxShadow={0}
          component={Grid}
          style={{
            align: "center",
            marginBottom: "5%",
            marginLeft: "10%",
            marginRight: "10%",
            marginTop: "3%",
            paddingBottom: "3%",
            backgroundColor: "#424040",
          }}
        >
          <Container className="main" component="main" maxWidth="sm">
            <CssBaseline />
            <div className={classes.paper}>

              <Grid container spacing={2}>
                <Grid item xs={6} align="left">
                  <div className="zingTitle">Z I N G</div>
                  <div className="rewardTitle">Rewards</div>
                </Grid>
              </Grid>


              <Grid align="left" >
                <div className="welcomeTitle">
                  Welcome back!
                </div>
              </Grid>

              <form
                onSubmit={this.onSubmit}
                className={classes.form}
                noValidate
              >
                <Grid container className={classes.loginInputGroup} spacing={2}>
                  <Grid item xs={12}>
                    <CustomTextField
                      className={classes.textField}
                      variant="filled"
                      required
                      fullWidth
                      id="email-login"
                      label="Email Address"
                      value={data.email}
                      onChange={this.onChange}
                      name="email"
                      error={!!errors.email}
                      // autoComplete="off"
                      helperText={errors.email}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <CustomTextField
                      variant="filled"
                      required
                      fullWidth
                      name="password"
                      value={data.password}
                      onChange={this.onChange}
                      label="Password"
                      type="password"
                      id="password-login"
                      helperText={errors.password}
                      error={!!errors.password}
                      autoComplete="off"
                    />
                  </Grid>
                </Grid>

                {/* <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              /> */}

                <Grid className={classes.forgotPassword} align="right">
                  <Link href="/forgotPassword" variant="body2" color="inherit">
                    Forgot your password?
                  </Link>
                </Grid>

                <Grid>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    className={classes.submit}
                    style={{
                      fontFamily: "Lucida Sans Unicode",
                      fontWeight: "800"
                    }}
                  >
                    Login
                  </Button>
                </Grid>

                <Grid container spacing={2}>
                  <Grid item xs={12} className={classes.loginGoogleGroup}>
                    <GoogleButton />
                  </Grid>
                </Grid>

                <Grid className={classes.signup}>
                  Not a member yet?
                  <Link href="/signup" variant="body2" className={classes.linkLogin}>
                    Join us now
                  </Link>
                </Grid>
              </form>
            </div>
          </Container>
        </Box>
      </div>
    );
  }
}

LoginFormComponent.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default withRouter(
  connect()(withStyles(useStyles, { withTheme: true })(LoginFormComponent))
);
