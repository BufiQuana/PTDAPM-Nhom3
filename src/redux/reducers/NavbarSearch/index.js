import { createSlice } from "@reduxjs/toolkit";
export const navbarSearchSlice = createSlice({
  name: "navbarSearch",
  initialState: {
    value: "",
  },
  reducers: {
    setValue: (state, payload) => {
      state.value = payload.payload;
    },
  },
});
export const { setValue } = navbarSearchSlice.actions;
export default navbarSearchSlice.reducer;
