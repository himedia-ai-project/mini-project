import axios from "axios";
const axiosInstance = axios.create({
  baseURL: "http://localhost:8080", // 기본 URL (필요에 따라 변경)
  timeout: 10000, // 타임아웃 설정 (10초)
  headers: {
    "Content-Type": "application/json", // 기본 헤더
  },
});

export default axiosInstance;
