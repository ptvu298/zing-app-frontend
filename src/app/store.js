import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../state/manager/reducer-manager";

const store = configureStore({
  reducer: { rootReducer },
});

export default store