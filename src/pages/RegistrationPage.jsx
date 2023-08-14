import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';

const RegistrationPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const registrationHandler = async (e) => {
    e.preventDefault();

    if (
      username.trim() === '' ||
      password === '' ||
      confirmPassword === '' ||
      firstName.trim() === '' ||
      lastName.trim() === '' ||
      email.trim() === ''
    ) {
      swal('Attendance Sys Registration', 'All fields are required', 'warning');
      return;
    }

    if (password !== confirmPassword) {
      swal('Attendance Sys Registration', 'Passwords do not match', 'warning');
      return;
    }

    setIsLoading(true);

    // Your registration logic goes here

    setIsLoading(false);
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-md">
        <h1 className="text-4xl font-bold text-center mb-8">Register</h1>
        <form className="bg-white shadow-md rounded px-8 py-6 relative">
          {isLoading && (
            <div className="flex items-center justify-center h-full w-full flex-col absolute top-0 bottom-0 right-0 left-0 bg-white z-50 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60">
              <div className="custom-loader"></div>
              <h2 className="tracking-wide font-bold text-gray-600 mt-5 mb-0">
                HTU- ATTENDANCE PORTAL
              </h2>
              <small>
                v1.0 || developed by <span className="text-purple-700">TREBNET</span>
              </small>
            </div>
          )}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Username
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Enter your username"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmPassword">
              Confirm Password
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="confirmPassword"
              type="password"
              placeholder="Confirm your password"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">
              First Name
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="firstName"
              type="text"
              placeholder="Enter your first name"
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">
              Last Name
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="lastName"
              type="text"
              placeholder="Enter your last name"
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-center">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={(e) => registrationHandler(e)}
            >
              Register
            </button>
          </div>
          <div className="py-5 text-center">
            <Link
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              to="/login"
            >
              Already have an account? Login
            </Link>
          </div>
        </form>
        <p className="mt-4 text-center text-gray-500 text-xs">
          &copy; 2023 Trebnet. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default RegistrationPage;
