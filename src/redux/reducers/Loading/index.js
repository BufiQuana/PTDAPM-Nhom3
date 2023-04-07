import { createSlice } from "@reduxjs/toolkit";
export const loadingSlice = createSlice({
  name: "loading",
  initialState: {
    isShow: false,
  },
  reducers: {
    setIsShow: (state, payload) => {
      state.isShow = payload.payload;
    },
  },
});
export const { setIsShow } = loadingSlice.actions;
export default loadingSlice.reducer;
