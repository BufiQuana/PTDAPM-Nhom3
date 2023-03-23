import axios from "axios";

const request = axios.create({
  baseURL: "https://127.0.0.1:8000/api/test",
  timeout: 300000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});

export { request };
