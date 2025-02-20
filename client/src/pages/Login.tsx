import React, { useState } from "react";
import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Authcontext } from "../context/authContex";

const Login = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const [err, setError] = useState(null);
  const navigate = useNavigate();
  const { login } = useContext(Authcontext);

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(inputs);
      navigate("/");
    } catch (err) {
      setError(err.response.data);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-r from-blue-400 to-blue-700 px-4">
      <form className="w-full max-w-md bg-white shadow-lg rounded-lg p-6 md:p-8">
        <h2 className="text-2xl font-bold text-blue-600 text-center mb-4">
          Login to Your Account
        </h2>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-semibold">
            Email
          </label>
          <input
            name="email"
            onChange={handleChange}
            type="email"
            placeholder="johndoe@gmail.com"
            className="w-full mt-1 p-2 border-none rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
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
            className="w-full mt-1 p-2 border-none rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {err && <p className="text-red-500 text-center mb-3">{err}</p>}

        <button
          onClick={handleSubmit}
          className="w-full bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition-all"
        >
          Login
        </button>

        <p className="text-center text-gray-700 mt-4">
          Don’t have an account?{" "}
          <NavLink to="/register" className="text-blue-600 font-semibold hover:underline">
            Sign up
          </NavLink>
        </p>
      </form>
    </div>
  );
};

export default Login;
