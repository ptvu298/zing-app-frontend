import { GET_GUPPY_ACCOUNT_INTEGRATION_SETTING } from "../../manager/action-types";
import bannerImageIds from "../../../api/api-controllers/banner-image-controller";
import { BANNER_IMAGE } from "../../../api/URL/banner-image-url";
import { GET_BANNER_IMAGES } from "../../manager/action-types";
/**
 * get the api key and channel ref key
 * @param {Object} empty object
 */
export const getBannerImages = (bannerImages) => ({
  type: GET_BANNER_IMAGES,
  bannerImages,
});

/**
 * getGuppyAccountIntegrationSetting function is used to get the api key and channel ref key
 * @param {Object} empty object
 */

export const getBannerImageIds = () => (dispatch) =>
  bannerImageIds.getBannerImageIds().then((payload) => {
    let data = [];
    payload.map((banner) => {
      let bannerImgUrl = BANNER_IMAGE + "/" + banner.id;
      data.push(bannerImgUrl);
    });
    dispatch(getBannerImages(data));
    return payload;
  });
