import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8080/apis/v1",
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.request.use((config) => {
  console.log("Request was sent");

  const access_token = localStorage.getItem('access_token');

  if (access_token) {
    config.headers['Authorization'] = `Bearer ${access_token}`;
  }
  return config;
});

instance.interceptors.response.use((response) => {
  console.log("Response was received");

  console.log(response.data);

  return response;
}, (error) => {
  console.log("Error was received");

  console.log(error);

  return Promise.reject(error);

});

export default instance;
