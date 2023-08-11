import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";
import swal from "sweetalert";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [profile, setProfile] = useState(null);
  const proUrl = import.meta.env.VITE_PROFILE;
    const lurl = import.meta.env.VITE_LOGIN;
  const fetchData = async (id) => {
    const url = proUrl + id;
    try {
      const response = await axios.get(url);
      localStorage.setItem("userProfile", JSON.stringify(response.data));
      console.log("fetching profile works");
    } catch (error) {
      console.log("Error fetching profile data:", error);
    }
  };


  const login = async (userData) => {
    try {
      const response = await axios.post(
        lurl,
        userData,
        {
          headers: {
            accept: "*/*",
            "Content-Type": "application/json",
          },
        }
      );

      // Assuming the response contains the user data upon successful login
      const loggedInUser = response.data;

      // Store the user data in localStorage
      localStorage.setItem("user", JSON.stringify(loggedInUser));
      localStorage.setItem(
        "userProfile",
        JSON.stringify(loggedInUser?.profile)
      );
      localStorage.setItem("token", JSON.stringify(loggedInUser?.token));

      // Set the user state with the logged-in user
      setUser(loggedInUser);
      setProfile(loggedInUser?.profile);
      setToken(loggedInUser?.token);
      return loggedInUser;
    } catch (error) {
      // Handle any errors that occur during the login request
      console.error("Login error:", error);
      if (error?.response.data.non_field_errors)
        swal(
          "SchoolSync Login Failed",
          error?.response.data.non_field_errors[0],
          "error"
        );
      return null;
    }
  };
  // Function to handle user logout
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    localStorage.clear();
    window.location.replace("/");
  };

  // Check for user data in localStorage on component mount
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const storedToken = localStorage.getItem("token");
    const user = JSON.parse(storedUser);
    fetchData(user?.profile.id);
    const storedProfile = localStorage.getItem("userProfile");
    if (storedUser) {
      setUser(JSON.parse(storedUser));

      setProfile(JSON.parse(storedProfile));
      setToken(JSON.parse(storedToken));
    }
  }, []);

  return (
    <AuthContext.Provider value={{ profile, token, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};