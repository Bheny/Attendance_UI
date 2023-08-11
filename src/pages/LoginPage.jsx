import React, { useState } from 'react';
import {Link, NavLink, useNavigate} from "react-router-dom";
import image from "../assets/bg.jpg";
// import bg2 from "../assets/bg.jpeg"
import { useAuth } from "../context/auth";
import swal from "sweetalert";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();
  const formdata = new FormData();
  const loginHandler = async (e) => {
    e.preventDefault();

    if (username.trim() === "" || password === "") {
      swal("SchoolSync Login", "All fields are required", "warning");
      return;
    }

    setIsLoading(true);
    formdata.append("username", username);
    formdata.append("password", password);

    const user = await login(formdata);

    console.log(user);
    if (user === null) {
      setIsLoading(false);
      return;
    }
    if (user) {
      swal(
        "SchoolSync",
        `Welcome ${user?.profile.user.first_name} ${user?.profile.user.last_name}`,
        "success"
      );
    }

    if (user.profile.role === 1) {
      navigate("dashboard");
    } else if (user.profile.role === 2) {
      navigate("dashboard/teacher");
    } else {
      navigate("dashboard/parent");
    }
    setIsLoading(false);
    // navigate("dashboard/admin");
  };

  const backgroundImageUrl = 'url("../assets/bg2.jpeg")';
  const divStyle = {
    backgroundImage: backgroundImageUrl,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    width: '100%',
    height: '400px',
  
  };

  const [userborderColor, setuserBorderColor] = useState('white');
  const [passborderColor, setpassBorderColor] = useState('white');

  const handleuserClick = () => {
    // Update the border color on click
    setuserBorderColor('#fece48');
    setpassBorderColor('white');
  };

  const handlepassClick = () => {
    // Update the border color on click
    setpassBorderColor('#fece48');
    setuserBorderColor('white');
  };

  return (
   
    <div className="flex items-center justify-center min-h-screen">
    <div className="w-full max-w-md">
      <h1 className="text-4xl font-bold text-center mb-8">Login</h1>
      <form className="bg-white shadow-md rounded px-8 py-6 relative">
        {isLoading && <Loader />}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" for="username">Username</label>
          <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Enter your username" 
           onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" for="password">Password</label>
          <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Enter your password" 
          onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-between">
          <Link to="/dashboard"> <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button"
            onClick={(e) => loginHandler(e)}
          >
            Sign In
          </button></Link>
         
          <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
            Forgot Password?
          </a>
        </div>
        
        <div className="py-5 text-center">
            <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="register.html">
                Don't have an account? Register
              </a>
        </div>
      </form>
      <p className="mt-4 text-center text-gray-500 text-xs">
        &copy; 2023 Trebnet. All rights reserved.
      </p>
    </div>
  </div>
  );
};

export default LoginPage;


const Loader = () => {
  return (
    <div
      className={`flex items-center justify-center h-full w-full flex-col absolute top-0 bottom-0 right-0 left-0 bg-white z-50 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60`}>
      <div className="custom-loader"></div>
      <h2 className="tracking-wide font-bold text-gray-600 mt-5 mb-0">
       HTU- ATTENDANCE PORTAL
      </h2>
      <small>
        v1.0 || developed by{" "}
        <span className="text-purple-700">TREBNET</span>
      </small>
    </div>
  );
};