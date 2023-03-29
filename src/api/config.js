import axios from "axios";

const request = axios.create({
  baseURL: "https://server.6figurespos.com/gateway",
  timeout: 300000,
});

// request.interceptors.request.use(
//   async (config) => {
//     const token = localStorage.getItem("token");
//     config.headers.Authorization = token
//       ? "Bearer " + token
//       : "Basic Y2xpZW50X2lkOmNsaWVudF9zZWNyZXQ=";
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

export { request };
