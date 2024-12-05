import {jwtDecode} from "jwt-decode";

// Save token to localStorage
export const saveToken = (token) => {
  localStorage.setItem("token", token);
};

// Remove token from localStorage
export const clearToken = () => {
  localStorage.removeItem("token");
};

// Decode token to get user info
export const getUserFromToken = () => {
  const token = localStorage.getItem("token");
  if (token) {
    return jwtDecode(token); // Decode JWT to get user data
  }
  return null;
};

// Check if token is valid
export const isAuthenticated = () => {
  const token = localStorage.getItem("token");
  return !!token; // Returns true if token exists
};
