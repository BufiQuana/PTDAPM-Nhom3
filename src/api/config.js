import axios from "axios";

const request = axios.create({
  baseURL: "https://server.6figurespos.com/gateway",
  timeout: 300000,
});

request.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem("token");
    const tokenWithoutQuote = token.slice(1, -1);
    config.headers.Authorization = tokenWithoutQuote
      ? `Bearer ${tokenWithoutQuote}`
      : // ? `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJ1c2VyX25hbWUiOiJhZG1pbiIsInNjb3BlIjpbIm9wZW5pZCJdLCJyb2xlcyI6WyJST0xFX0FETUlOIiwiUk9MRV9TVEFGRiIsIlJPTEVfQ1VTVE9NRVIiLCJST0xFX0RFViJdLCJmdWxsTmFtZSI6ImFkbWluIiwiZXhwIjoxNjgwNzA1MjA3LCJhdXRob3JpdGllcyI6WyJST0xFX0NVU1RPTUVSIiwiUk9MRV9ERVYiLCJST0xFX0FETUlOIiwiUk9MRV9TVEFGRiJdLCJqdGkiOiI2ZGY4N2NmNC1jNmQ0LTRmMmItOTJiMy04OWU5MTk1ZTIwYjAiLCJlbWFpbCI6ImFkbWluQHBvcy5jb20iLCJjbGllbnRfaWQiOiJjbGllbnRfaWQifQ.z6jFxzX-Ham-5Yi1IS9H5zFm1gUEWlFvmcWMKir0Owo`
        "Basic Y2xpZW50X2lkOmNsaWVudF9zZWNyZXQ=";
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export { request };
