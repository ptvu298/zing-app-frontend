import React, { Component } from "react";
import PropTypes from "prop-types";
import CssBaseline from "@material-ui/core/CssBaseline";
import clsx from "clsx";
import GuestRoute from "../../../routes/guest-route";
import { Switch } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import AppBarContainer from "../app-bar/cnt-app-bar";
import MainSidebarContainer from "../main-sidebar/cnt-main-sidebar";

import PromotionPageContainer from "../../../../zing-components/promotion-page/cnt-promotion-page";
const drawerWidth = 240;

const useStyles = (theme) => ({
  root: {
    display: "flex",
    padding: 0,
  },
  userProfile: {
    justifyContent: "end",
  },
  title: {
    flexGrow: 1,
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
    marginRight: theme.spacing(0),
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
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
    backgroundColor: "black",
  },
  content: {
    flexGrow: 1,
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
  drawerClose: {
    color: "white",
  },
});

class MainNavbarComponent extends Component {
  state = {
    mobileOpen: false,
  };

  handleDrawerClose = () => {
    this.setState({ mobileOpen: false });
  };

  handleDrawerOpen = () => {
    this.setState({ mobileOpen: true });
  };

  handleClickLogo = () => {
    window.location("/promotions");
  };

  createRoutes = () => {
    const { location } = this.props;
    return (
      <Switch>
        <GuestRoute
          location={location}
          path="/promotions"
          exact
          component={PromotionPageContainer}
        ></GuestRoute>
      </Switch>
    );
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <CssBaseline />

        <AppBarContainer
          mobileOpen={this.state.mobileOpen}
          handleDrawerOpen={this.handleDrawerOpen}
        />
        <MainSidebarContainer
          mobileOpen={this.state.mobileOpen}
          handleDrawerOpen={this.handleDrawerOpen}
          handleDrawerClose={this.handleDrawerClose}
        />
        <main
          className={clsx(classes.content, {
            [classes.contentShift]: this.state.mobileOpen,
          })}
        >
          <div className={classes.drawerHeader} />
          {this.createRoutes()}
        </main>
      </div>
    );
  }
}

MainNavbarComponent.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default withRouter(
  connect()(withStyles(useStyles, { withTheme: true })(MainNavbarComponent))
);
