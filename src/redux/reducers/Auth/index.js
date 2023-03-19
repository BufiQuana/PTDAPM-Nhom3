import { createSlice } from "@reduxjs/toolkit";
export const counterSlice = createSlice({
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
export const { login, logout } = counterSlice.actions;
export default counterSlice.reducer;
