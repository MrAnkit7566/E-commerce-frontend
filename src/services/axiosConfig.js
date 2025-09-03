import axios from "axios";

const instance = axios.create({
  baseURL: "https://e-commerce-backend-2-ahyy.onrender.com", // ✅ https:// add kiya
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;
  
