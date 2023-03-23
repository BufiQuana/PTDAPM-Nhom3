import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../reducers/counterSlice";
import authReducer from "../reducers/Auth";
import navbarSearchReducer from "../reducers/NavbarSearch";
export default configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
    navbarSearch: navbarSearchReducer,
  },
});
