import React, { useState } from "react";
import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Authcontext } from "../context/authContex";

const Register = () => {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [err, setError] = useState(null);
  const navigate = useNavigate();
  const { register } = useContext(Authcontext);

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await register(inputs);
      navigate("/");
    } catch (err) {
      setError(err.response.data);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-r from-blue-400 to-blue-600 px-4">
      <form className="w-full max-w-md bg-blue-100 shadow-lg rounded-lg p-6 md:p-6">
        <h2 className="text-2xl font-bold text-blue-600 text-center mb-4">
          Create an Account
        </h2>

        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-700 font-semibold">
            Username
          </label>
          <input
            name="username"
            onChange={handleChange}
            type="text"
            placeholder="JohnDoe"
            className="w-full mt-2  p-2   border rounded-sm focus:border-none focus:outline-1 focus:outline-blue-400"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-semibold">
            Email
          </label>
          <input
            name="email"
            onChange={handleChange}
            type="email"
            placeholder="johndoe@gmail.com"
            className="w-full mt-1 p-2 border rounded-sm focus:border-none focus:outline-1 focus:outline-blue-400"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 font-semibold">
            Password
          </label>
          <input
            name="password"
            onChange={handleChange}
            type="password"
            placeholder="**********"
            className="w-full mt-1 p-2 border rounded-sm focus:border-none focus:outline-1 focus:outline-blue-500"
          />
        </div>

        {err && <p className="text-red-500 text-center mb-3">{err}</p>}

        <button
          onClick={handleSubmit}
          className="w-full bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 rounded-md transition-all"
        >
          Register
        </button>

        <p className="text-center text-gray-700 mt-4">
          Already have an account?{" "}
          <NavLink to="/login" className="text-blue-600 font-semibold hover:underline">
            Login
          </NavLink>
        </p>
      </form>
    </div>
  );
};

export default Register;
