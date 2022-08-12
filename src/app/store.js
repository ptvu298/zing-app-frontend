import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../state/manager/reducer-manager";

export const store = configureStore({
  reducer: { rootReducer },
});
