import axios from "axios";

const instance = axios.create({
  baseURL: "https://e-commerce-backend-chi-umber.vercel.app", // ✅ https:// add kiya
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;
  