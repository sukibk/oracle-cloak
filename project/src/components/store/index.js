import { configureStore } from "@reduxjs/toolkit";
import NavigationReducer from "./navigation-slice.js";
import AuthorizationReducer from "./authorization-slice.js";

const store = configureStore({
  reducer: {
    navigation: NavigationReducer,
    authorization: AuthorizationReducer,
  },
});

export default store;
