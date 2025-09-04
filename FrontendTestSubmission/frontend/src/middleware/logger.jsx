import axios from "axios";

const logger = axios.create();

logger.interceptors.request.use((config) => {
  console.log("📤 Request:", config.method.toUpperCase(), config.url, config.data || "");
  return config;
});


logger.interceptors.response.use(
  (response) => {
    console.log("✅ Response:", response.status, response.data);
    return response;
  },
  (error) => {
    console.error(" Error:", error.response ? error.response.data : error.message);
    return Promise.reject(error);
  }
);

export default logger;
