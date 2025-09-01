import axios from "./axiosConfig";

// Login API Call
export const loginUser = async (userData) => {
  return await axios.post("/login", userData);
};

// Signup API Call
export const signupUser = async (userData) => {
  return await axios.post("/addUser", userData,{
    headers: {
      Authorization: localStorage.getItem("token"),
    },
  });
};

export const getAllUsers = async (userData) => {
  return await axios.get("/getAllUsers" , userData ,{
    headers: {
      Authorization: localStorage.getItem("token"),
    },
  });
};

export const getUserProfile = async (userData) => {
  return await axios.get("/getUserProfile" , userData,{
    headers: {
      Authorization: localStorage.getItem("token"),
    },
  });
};

export const updateUser = async (userId, userData, config = {}) => {
  return await axios.put(`/updateUser/${userId}`, userData, config);
};