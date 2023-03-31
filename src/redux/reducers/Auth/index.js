import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: localStorage.getItem("token") || "",
    email: "",
    fullName: "",
    roles: [],
    user_id: 0,
    colorAccent: "F0F1F3",
  },
  reducers: {
    changeColorAccent: (state, payload) => {
      state.colorAccent = payload.payload;
    },
    login: (state, payload) => {
      state.token = payload.payload.access_token;
      state.email = payload.payload.email;
      state.fullName = payload.payload.fullName;
      state.roles = payload.payload.roles;
      state.user_id = payload.payload.user_id;
      localStorage.setItem("token", JSON.stringify(state.token));
    },
    logout: (state) => {
      state.token = "";
      state.email = "";
      state.fullName = "";
      state.roles = [];
      state.user_id = 0;
      localStorage.setItem("token", JSON.stringify(""));
    },
  },
});
export const { login, logout, changeColorAccent } = authSlice.actions;
export default authSlice.reducer;
