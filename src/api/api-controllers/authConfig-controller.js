import { GET_GUPPY_ACCOUNT_INTEGRATION_SETTING } from "../URL/user-url";
import axios from "axios";

export default {
  getGuppyAccountIntegrationSetting: () =>
    axios
      .get(GET_GUPPY_ACCOUNT_INTEGRATION_SETTING, { headers: {} })
      .then((res) => res.data.payload),
};
