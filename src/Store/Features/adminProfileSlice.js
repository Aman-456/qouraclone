import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  profile: JSON.parse(localStorage.getItem("customer")),
  loading: false,
};

export const ProfileAdminSlice = createSlice({
  name: "profileAdmin",
  initialState,
  reducers: {
    setProfile: (state, action) => {
      state.profile = action.payload;
      localStorage.setItem("admin", JSON.stringify(action.payload));
    },
    load: (state) => {
      state.loading = true;
    },
    unload: (state) => {
      state.loading = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setProfile, load, unload } = ProfileAdminSlice.actions;
export const PROFILE = (state, action) => state.profile.profile;
export const isLoading = (state) => state.profile.loading;

export default ProfileAdminSlice.reducer;
