import PromotionBannerComponent from "./cmp-promotion-banner";
import { connect } from "react-redux";
import { getBannerImageIds } from "../../../state/feature/banner-images/banner-images-action";

function mapStateToProps(state) {
  return {
    bannerImages: state.bannerImages
  };
}

export default connect(mapStateToProps, { getBannerImageIds })(
  PromotionBannerComponent
);
