import { GET_BANNER_IMAGES } from "../../manager/action-types";

export function bannerImages(state = [], action = {}) {

  switch (action.type) {
    case GET_BANNER_IMAGES:
      return action.bannerImages;
    default:
      return state;
  }
}
