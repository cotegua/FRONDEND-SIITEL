import axios, { Axios } from "axios";
export const BASE_URL = "https://localhost:7012";
export const BASE_URL_API = `${BASE_URL}/`;

const instance = axios.create({
  baseURL: BASE_URL_API,
});

//intercerceptores..........(CLIENTE-HEADERS(TOKENS))

instance.interceptors.request.use((config) => {
  const token = localStorage.getItem("access_token");
  if (token) {
    config.headers.Authorization = "Bearer " + token;
  }
  return config;
});
//intercerceptores..........(SERVIDOR)
instance.interceptors.response.use(
  (respuesta) => {
    return respuesta;
  },
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem("access_token");
      location.href = "/auth/login";
    }
    return Promise.reject(error);
  }
);
export default instance;
