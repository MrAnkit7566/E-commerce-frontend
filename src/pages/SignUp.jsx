import React, { useState } from "react";
import { signupUser } from "../services/userService";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../style/login.css";

const SignupModal = ({ closeModal, openLoginModal }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNo: "",
    password: "",
    address: "",
    gender: "",
    age: "",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await signupUser(formData);
      toast.success(res.data.msg);
      closeModal();
      openLoginModal();
    } catch (error) {
      toast.error(error.response?.data?.msg || "Signup Failed");
    }
  };

  return (
    <div className="auth-modal-overlay ">
      <div className="auth-modal-content card w-25 ">
        <span className="auth-close-button" onClick={closeModal}>
          &times;
        </span>
        <h2>Signup To MyShop</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            className="form-control"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            className="form-control"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="number"
            name="contactNo"
            placeholder="Enter Contact Number"
            className="form-control"
            value={formData.contactNo}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            className="form-control"
            value={formData.password}
            onChange={handleChange}
          />
          <input
            type="text"
            name="address"
            className="form-control"
            placeholder="Enter Address"
            value={formData.address}
            onChange={handleChange}
          />
          <select name="gender" className="form-select" value={formData.gender} onChange={handleChange}>
            <option selected="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="others">Others</option>
          </select><br />
          <input
            type="number"
            name="age"
            placeholder="Enter Age"
            value={formData.age}
            className="form-control"
            onChange={handleChange}
          />
          <button className="btn btn-dark w-100" type="submit">Signup</button>
        </form>

        <p className="auth-switch-text">
          Already have an account?{" "}
          <span
            onClick={() => {
              closeModal();
              openLoginModal();
            }}
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignupModal;
