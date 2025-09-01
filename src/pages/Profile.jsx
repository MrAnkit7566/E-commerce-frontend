import React, { useEffect, useState } from "react";
import { getUserProfile, updateUser } from "../services/userService";
import { toast } from "react-toastify";

export default function Profile() {
  const [isEdit, setIsEdit] = useState(false);
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    contactNo: "",
    password: "",
    address: "",
    gender: "",
    age: "",
  });
  const [loading, setLoading] = useState(true);

  const fetchUserInfo = async () => {
    try {
      const res = await getUserProfile({
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      });
      setProfile(res.data.userData);
      setLoading(false);
    } catch (error) {
      toast.error(error.res?.data?.msg || "Failed to load profile info");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUserInfo();
  }, []);

  const profileImage = () => {
    if (profile.gender.toLowerCase() === "male")
      return "https://gimgs2.nohat.cc/thumb/f/640/male-face-icon-default-profile-image--c3f2c592f9.jpg";
    if (profile.gender.toLowerCase() === "female")
      return "https://img.freepik.com/premium-vector/avatar-profile-icon-flat-style-female-user-profile-vector-illustration-isolated-background-women-profile-sign-business-concept_157943-38866.jpg";
    return "https://www.w3schools.com/howto/img_avatar.png";
  };

  const handleInputChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const updateProfile = async () => {
    try {
      
      const res = await updateUser(profile._id, profile, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      });
      console.log(res.data);
      
      toast.success(res.data.message || "Profile updated");
      setIsEdit(false);
      fetchUserInfo(); // refresh the data
    } catch (error) {
      toast.error(error.res?.data?.message || "Update failed");
    }
  };

  if (loading) return <p className="text-center mt-4">Loading...</p>;

  return (
    <div className="container d-flex justify-content-center">
      <div className="card w-50   p-4 mt-4 shadow-lg border-dark">
        <h3 className="card-title text-center " style={{textDecoration:"underline"}}>User Profile</h3><br />
        <div className="text-center">
          <img
            src={profileImage()}
            alt="Profile"
            className="img-fluid rounded-circle mb-3"
            style={{ width: "150px", height: "150px", objectFit: "cover" }}
          />
        </div>

        {isEdit ? (
          <>
            <input
              name="name"
              value={profile.name}
              onChange={handleInputChange}
              type="text"
              placeholder="Full Name"
              className="form-control mt-3"
            />
            <input
              name="email"
              value={profile.email}
              onChange={handleInputChange}
              type="email"
              placeholder="Email"
              className="form-control mt-3"

            />
            <input
              name="contactNo"
              value={profile.contactNo}
              onChange={handleInputChange}
              type="text"
              placeholder="Contact No"
              className="form-control mt-3"

            />
            <input
              name="address"
              value={profile.address}
              onChange={handleInputChange}
              type="text"
              placeholder="Address"
              className="form-control  mt-3"

            />
            <input
              name="gender"
              value={profile.gender}
              onChange={handleInputChange}
              type="text"
              placeholder="Gender"
              className="form-control  mt-3"
            />
            <input
              name="age"
              value={profile.age}
              onChange={handleInputChange}
              type="number"
              placeholder="Age"
              className="form-control  mt-3"
            />
            {/* <input
              name="password"
              value={profile.password}
              onChange={handleInputChange}
              type="password"
              placeholder="Password"
              className="form-control  mt-3"
            /> */}
          </>
        ) : (
          <>
            <h4 className="text-center">{profile.name}</h4>
            <hr />
            <p>Email: {profile.email}</p>
            <p>Contact: {profile.contactNo}</p>
            <p>Address: {profile.address}</p>
            <p>Gender: {profile.gender}</p>
            <p>Age: {profile.age} years old</p>
          </>
        )}

        <div className="d-flex justify-content-center gap-2 mt-3">
          {!isEdit ? (
            <button className="btn btn-primary" onClick={() => setIsEdit(true)}>
              Edit
            </button>
          ) : (
            <>
              <button className="btn btn-secondary" onClick={() => {
                setIsEdit(false);
                fetchUserInfo();
              }}>
                Discard
              </button>
              <button className="btn btn-success" onClick={updateProfile}>
                Save
              </button>
            </>
          )}

          <button className="btn btn-danger">Delete</button>
        </div>
      </div>
    </div>
  );
}
