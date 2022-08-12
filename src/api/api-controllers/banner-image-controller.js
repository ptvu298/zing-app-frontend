import { GET_BANNER_IMAGES } from "../URL/banner-image-url";
import axios from "axios";

export default {
  getBannerImageIds: () =>
    axios
      .get(GET_BANNER_IMAGES, { headers: {} })
      .then((res) => res.data.payload),
};
