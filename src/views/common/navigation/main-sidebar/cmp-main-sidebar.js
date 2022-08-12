import React, { Component } from "react";
import PropTypes from "prop-types";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { withStyles } from "@material-ui/core/styles";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import getSidebarItems from "../../utils/sidebar-nav-items";

let sidebarItems = getSidebarItems();
const drawerWidth = 240;
const logo = require("../../../../logos/ZingRewards_Logo_White.png");
const useStyles = (theme) => ({
  root: {
    display: "flex",
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
    padding: theme.spacing(0),
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
  logout: {
    position: "fixed",
    bottom: 0,
  },
});

class MainSidebarComponent extends Component {
  handleClickOnSidebarIcon = (path) => {
    const { history } = this.props;
    history.push(path);
  };

  handleClickOnLogout = () => {
    const { logout } = this.props;
    logout();
    this.props.history.push("login");
  };

  render() {
    const { classes, mobileOpen, handleDrawerClose } = this.props;

    return (
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={mobileOpen}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <img
            src={logo}
            onClick={this.handleClickLogo}
            className={classes.logo}
            alt=""
          ></img>
          <IconButton
            className={classes.drawerClose}
            onClick={handleDrawerClose}
          >
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>
          {sidebarItems.map((item) =>
            item.name === "Logout" ? (
              <ListItem
                className={classes.logout}
                key={item.name}
                onClick={() => this.handleClickOnLogout()}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.name} />
              </ListItem>
            ) : (
              <ListItem
                button
                key={item.name}
                onClick={() => this.handleClickOnSidebarIcon(item.path)}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.name} />
              </ListItem>
            )
          )}
        </List>
      </Drawer>
    );
  }
}

MainSidebarComponent.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default withRouter(
  connect()(withStyles(useStyles, { withTheme: true })(MainSidebarComponent))
);
