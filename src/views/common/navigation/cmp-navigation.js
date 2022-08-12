import React, { Component } from "react";
import { Switch } from "react-router-dom";
// import styles from "../../../material-ui/assets/jss/material-dashboard-react/layouts/adminStyle.js";
import GuestRoute from "../../routes/guest-route";
import { Container, Row, Col } from "react-bootstrap";
import MainSidebarContainer from "./main-sidebar/cnt-main-sidebar";
import MainNavbarContainer from "./main-navbar/cnt-main-navbar";

class NavigationComponent extends Component {
  state = {
    mobileOpen: false,
    selectedFlag: true,
  };

  handleDrawerToggle = () => {
    this.setState({ mobileOpen: !this.state.mobileOpen });
  };

  componentDidMount = () => {};

  render() {
    const { isAuthenticated } = this.props;
    return (
      <>
        <Container fluid>
          <Row>
            {isAuthenticated ? (
              <Col className="main-content p-0" sm="12" tag="main">
                <MainNavbarContainer />
              </Col>
            ) : null}
          </Row>
        </Container>
      </>
    );
  }
}

export default NavigationComponent;
