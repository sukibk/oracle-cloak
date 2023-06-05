import { createSlice } from "@reduxjs/toolkit";

const navigationSlice = createSlice({
  name: "nav-toggle",
  initialState: {
    showNav: true,
  },
  reducers: {
    toggleNavigationVisibility(state) {
      state.showNav = !state.showNav;
    },
  },
});

export const navigationActions = navigationSlice.actions;
export default navigationSlice.reducer;
