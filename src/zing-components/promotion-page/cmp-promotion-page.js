import React, { Component } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import PropTypes from "prop-types";
import PromotionBannerContainer from "./promotion-banner/cnt-promotion-banner";
class PromotionPageComponent extends Component {
  state = {
    loading: true,
  };

  componentDidMount() {
    this.props.getBannerImageIds().then(() => {
      this.setState({ loading: false });
    });
  }

  render() {
    const { loading } = this.state;
    return (
      <>
        {loading === true ? (
          <CircularProgress />
        ) : (
          <PromotionBannerContainer></PromotionBannerContainer>
        )}
      </>
    );
  }
}

PromotionPageComponent.propTypes = {};

export default PromotionPageComponent;
