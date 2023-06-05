import { createSlice } from "@reduxjs/toolkit";

const authorizationSlice = createSlice({
  name: "authorization",
  initialState: {
    isLoggedIn: false,
    user: {},
  },
  reducers: {
    logUserIn(state) {
      state.isLoggedIn = true;
    },
    logUserOut(state) {
      state.isLoggedIn = false;
    },
    checkIfUserIsLogged(state) {
      return state.isLoggedIn;
    },
    setUser(state, action) {
      state.user = action.payload.user;
    },
  },
});

export const authorizationActions = authorizationSlice.actions;
export default authorizationSlice.reducer;
