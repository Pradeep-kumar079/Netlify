import axios from "axios";

// ✅ Backend URL (use your actual deployed Render backend URL)
const API = axios.create({
  baseURL: "https://alumni-backend-bz8e.onrender.com/api",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true, // ✅ allows cookies/sessions if used
});

export default API;
