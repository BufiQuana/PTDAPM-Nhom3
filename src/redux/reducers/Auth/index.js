import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: localStorage.getItem("token") || "",
  },
  reducers: {
    login: (state, payload) => {
      state.token += payload.payload;
      localStorage.setItem("token", JSON.stringify(payload.payload));
    },
    logout: (state) => {
      state.token = "";
      localStorage.setItem("token", JSON.stringify(""));
    },
  },
});
export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
