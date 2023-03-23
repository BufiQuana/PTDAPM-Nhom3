import { createSlice } from "@reduxjs/toolkit";
export const authSlice = createSlice({
  name: "auth",
  initialState: {
    username: localStorage.getItem("username") || "",
  },
  reducers: {
    login: (state, payload) => {
      state.username += payload.payload;
      localStorage.setItem("username", JSON.stringify(payload.payload));
    },
    logout: (state) => {
      state.username = "";
    },
  },
});
export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
