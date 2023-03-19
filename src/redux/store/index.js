import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../reducers/counterSlice";
import authReducer from "../reducers/Auth";
export default configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
  },
});
