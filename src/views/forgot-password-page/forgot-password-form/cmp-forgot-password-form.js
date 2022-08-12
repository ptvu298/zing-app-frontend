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
import { alpha, makeStyles, withStyles } from "@material-ui/core/styles";
import Validator from "validator";
import logo from "../../../logos/ZingRewards_Logo_White.png";
import PropTypes from "prop-types";
import { Button } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import { CircularProgress } from "@material-ui/core";

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
    // background: "orange",
    // borderRadius: "3px",
    margin: theme.spacing(3, 0, 0),
  },
  sendVerifyCodeButton: {
    margin: theme.spacing(0, 0, 0),
  },
  progress: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh"
  }
});

class ForgotPasswordFormComponent extends Component {
  state = {
    data: {
      email: "",
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
    return errors;
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { data } = this.state;

    const errors = this.validate(this.state.data);
    if (Object.keys(errors).length > 0) {
      this.setState({ errors });
    } else {
      this.props.getGuppyUserByEmail(this.state.data.email).then((payload) => {
        if (!payload) {
          const { errors } = this.state;
          errors.email = "The email is not valid";
          this.setState({ errors: errors });
        } else {
          this.setState({ loading: true });
          this.props
            .receiveVerifyCode(data.email)
            .then(() => this.props.history.push("resetPassword"));
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
                {/* <img src={logo} className={classes.logo} /> */}

                <Grid container spacing={2}>
                  <Grid item xs={6} align="left">
                    <div className="zingTitle">Z I N G</div>
                    {/* <hr className="hrTitle" /> */}
                    <div className="rewardTitle">Rewards</div>
                  </Grid>
                </Grid>
                {/* <Alert severity="info">
                  This is an info alert — <strong>check it out!</strong>
                </Alert> */}
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
                    <Alert style={{ color: "black" }} severity="info">
                      Please enter your email address. You will receive an email
                      message with instructions on how to reset your password.
                    </Alert>
                  </Grid>
                  <Grid
                    container
                    className={classes.forgotPasswordInputGroup}
                    spacing={2}
                  >
                    <Grid item xs={12}>
                      <CustomTextField
                        // inputProps={{
                        //   className: classes.textFieldLogin,
                        // }}
                        variant="filled"
                        required
                        fullWidth
                        id="email-forgot"
                        label="Email Address"
                        value={data.email}
                        onChange={this.onChange}
                        name="email"
                        error={!!errors.email}
                        autoComplete="off"
                        helperText={errors.email}
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
                      Send Verify Code
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

ForgotPasswordFormComponent.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default withRouter(
  connect()(
    withStyles(useStyles, { withTheme: true })(ForgotPasswordFormComponent)
  )
);
