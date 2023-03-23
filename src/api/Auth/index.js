import { useDispatch } from "react-redux";
import { request } from "../config";
import { END_POINTS } from "../url";

const AUTH_API = {
  onLogout: () => {
    const data = request
      .post(END_POINTS.Auth.test)
      .then((response) => {
        return response;
      })
      .catch((e) => {
        console.log(e);
        return null;
      });
    return data;
  },
};

export { AUTH_API };
