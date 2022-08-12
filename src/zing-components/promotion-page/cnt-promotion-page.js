import PromotionPageComponent from "./cmp-promotion-page";
import { connect } from "react-redux";
import { getBannerImageIds } from "../../state/feature/banner-images/banner-images-action";

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps, { getBannerImageIds })(
  PromotionPageComponent
);
