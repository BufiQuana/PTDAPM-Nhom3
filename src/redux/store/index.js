import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../reducers/counterSlice";
import authReducer from "../reducers/Auth";
import navbarSearchReducer from "../reducers/NavbarSearch";
import loadingReducer from "../reducers/Loading";
export default configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
    navbarSearch: navbarSearchReducer,
    loading: loadingReducer,
  },
});
