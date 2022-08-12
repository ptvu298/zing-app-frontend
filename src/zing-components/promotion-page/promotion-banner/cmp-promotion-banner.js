import React, { Component } from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

class PromotionBannerComponent extends Component {
  state = {
    loading: false,
    listOfImages: [],
  };

  componentDidMount() {}

  showPromotionBanners = (images) => {
    return images.map((imageUrl, k) => {
      return (
        <div key={k}>
          <img style={{minHeight:"calc(100vh - 56px)", width:"100%"}} src={imageUrl} />
        </div>
      );
    });
  };

  render() {
    return (
      <div>
        <Carousel
          height={"100%"}
          showArrows={false}
          showStatus={false}
          showThumbs={false}
          showIndicators={false}
          autoPlay={true}
          infiniteLoop={true}
          interval={7000}
          dynamicHeight={true}
        >
          {this.showPromotionBanners(this.props.bannerImages)}
        </Carousel>
      </div>
    );
  }
}

export default PromotionBannerComponent;
