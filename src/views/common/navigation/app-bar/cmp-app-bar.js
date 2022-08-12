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
import { Button } from "@material-ui/core";
import UserProfileContainer from "../../../user/user-profile/cnt-user-profile";
const drawerWidth = 240;
const logo = require("../../../../logos/ZingRewards_Logo_White.png");

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const useStyles = (theme) => ({
  root: {
    display: "flex",
  },
  userProfile: {
    right: "20px",
    position: "fixed",
  },
  title: {
    flexGrow: 1,
    position: "fixed",
    right: "0px",
    paddingRight: "50px",
  },

  appBar: {
    backgroundColor: "orange",
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "orange",
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
    backgroundColor: "black  ",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  logo: {
    width: "150px",
    height: "auto",
  },
});

class AppBarComponent extends Component {
  state = {
    openProfile: false,
  };

  handleClickProfile = () => {
    this.setState({ openProfile: true });
  };

  handleLogout = () => {
    // if (props.user.accountInfo.typeLogin === "Facebook") {
    // 	console.log("FB Logout...")
    // 	// Facebook log out
    // 	await window.FB.logout();
    // } else if (props.user.accountInfo.typeLogin === "Google") {
    // 	console.log("Google Logout...")
    // 	// Google log out
    // 	await window.gapi.auth2.getAuthInstance().disconnect();
    // }

    this.props.logout();
    this.props.history.push("/login");
  };

  handleCloseProfile = async () => {
    this.setState({ openProfile: false });
  };

  render() {
    const { classes, handleDrawerOpen, mobileOpen } = this.props;
    const { openProfile } = this.state;
    return (
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: mobileOpen,
        })}
      >
        <Toolbar>
          <IconButton
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, mobileOpen && classes.hide)}
          >
            <MenuIcon />
          </IconButton>

          <Typography
            className={classes.title}
            style={{ color: "black" }}
            noWrap
          >
            Hi {this.props.user.firstName}
          </Typography>

          <div className={classes.userProfile}>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              onClick={this.handleClickProfile}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>

            <UserProfileContainer
              handleClickProfile={this.handleClickProfile}
              handleCloseProfile={this.handleCloseProfile}
              openProfile={openProfile}
            ></UserProfileContainer>
          </div>
        </Toolbar>
      </AppBar>
    );
  }
}

AppBarComponent.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default withRouter(
  connect()(withStyles(useStyles, { withTheme: true })(AppBarComponent))
);
