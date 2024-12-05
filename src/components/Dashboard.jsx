import React, { useEffect, useState } from "react";
import { clearToken, getUserFromToken } from "../services/auth";
import api from "../services/api";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [user, setUser] = useState(null); // State to store user data
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const profile = await api.get("/85391ad0-43f9-4040-ab18-639c82d3c3dc"); // Fetch the mock profile
        setUser(profile.data); // Set user data to state
      } catch (err) {
        navigate("/login"); // Redirect if not authenticated
      }
    };

    fetchUser();
  }, [navigate]);

  const handleLogout = () => {
    const userData = getUserFromToken();
    console.log(userData)
    clearToken(); // Clear auth token
    navigate("/login"); // Redirect to login
  };

  if (!user) return <p>Loading...</p>; // Show loading while fetching user data

  return (
    <div>
      <h1>
        Welcome, {user.firstName} {user.lastName}
      </h1>
      <p>Email: {user.email}</p>
      <p>Role: {user.role}</p>
      <p>Bio: {user.bio}</p>
      <img
        src={user.avatar}
        alt={`${user.firstName}'s avatar`}
        style={{ width: "150px", borderRadius: "50%" }}
      />
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;
