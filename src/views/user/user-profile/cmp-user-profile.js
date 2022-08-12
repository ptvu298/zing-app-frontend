import React, { Component } from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import clsx from "clsx";
import IconButton from "@material-ui/core/IconButton";
import { AccountCircle } from "@material-ui/icons";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Divider from "@material-ui/core/Divider";
import Dialog from "@material-ui/core/Dialog";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
import logo from "../../../logos/ZingRewards_Logo_White.png";
import { Grid,Box,Container,CssBaseline } from "@material-ui/core";
import qr_code from "../../../images/QR_Code.png"
const formatDate = (date) => {
  const yyyy = date.getFullYear();
  let mm = date.getMonth() + 1; // Months start at 0!
  let dd = date.getDate();

  if (dd < 10) dd = "0" + dd;
  if (mm < 10) mm = "0" + mm;

  return dd + "/" + mm + "/" + yyyy;
};

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const useStyles = (theme) => ({
  appBar: {
    position: "relative",
    backgroundColor: "orange",
  },
  paper: {
    marginTop: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
  },
  title: {
    color: "black",
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  logo: {
    width: "300px",
    height: "auto",
  },
  qr_code:{
    width: "250px",
    height: "auto",
  },
  userInfo: {
    position: "fixed",
    right: "10px",
    fontFamily: "Arial Black",
  },
});

class UserProfileComponent extends Component {
  state = {};

  render() {
    const { openProfile, handleCloseProfile, classes, user } = this.props;
    return (
      <Dialog
        fullScreen
        open={openProfile}
        onClose={handleCloseProfile}
        TransitionComponent={Transition}
      >
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton
              edge="start"
              onClick={handleCloseProfile}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              User Profile
            </Typography>
          </Toolbar>
        </AppBar>
        

        <div>
        <Box
          component={Grid}
          style={{
            align: "center",
            marginBottom: "5%",
            marginLeft: "10%",
            marginRight: "10%",
            marginTop: "3%",
            paddingBottom: "3%",
          }}
        >
          <Container className="main" component="main" maxWidth="sm">
            <CssBaseline />
            <div className={classes.paper}>
              <img src={logo} className={classes.logo} />

              <div>
                <h1>{user.firstName + " " + user.lastName}</h1>

                <img src={qr_code} className={classes.qr_code} />


                <h2>Membership ID: {user.membershipId}</h2>

                <h4>Zingster Since: {formatDate(new Date(user.dateCreated))}</h4>
              </div>
             
            </div>

          </Container>
        </Box>
      </div>

        {/* <List>
          <ListItem button>
            <p>User Name:</p>
            <p className={classes.userInfo}>
              {user.firstName + " " + user.lastName}
            </p>
          </ListItem>
          <Divider />
          <ListItem button>
            <p>Membership No:</p>
            <p className={classes.userInfo}>{user.membershipId}</p>
          </ListItem>
          <Divider />
          <ListItem button>
            <p>Zingster Since:</p>
            <p className={classes.userInfo}>
              {formatDate(new Date(user.dateCreated))}
            </p>
          </ListItem>
        </List> */}
      </Dialog>
    );
  }
}

UserProfileComponent.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default withRouter(
  connect()(withStyles(useStyles, { withTheme: true })(UserProfileComponent))
);
