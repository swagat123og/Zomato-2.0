import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function UserRegister() {
  const [role, setRole] = useState("customer");
  const navigate = useNavigate();

  // form states
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
    phonenumber: "",
    address: "",
  });

  // handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:3000/api/auth/user/register",
        formData,
        { withCredentials: true } // for cookie
      );

      alert(res.data.messsage);
      navigate("/user/login");
    } catch (err) {
      alert(err.response?.data?.messsage || "Registration failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 
      bg-gradient-to-br from-orange-100 via-rose-100 to-red-100">

      <div className="w-full max-w-3xl bg-white/70 backdrop-blur-xl 
        rounded-3xl shadow-xl p-8 border border-white/40">

        {/* Header */}
        <div className="flex flex-col items-center mb-6">
          <div className="w-14 h-14 rounded-full 
            bg-gradient-to-r from-orange-400 to-red-500 
            flex items-center justify-center text-white text-2xl shadow">
            🍔
          </div>
          <h1 className="text-2xl font-bold text-gray-800 mt-2">Foodie</h1>
          <h2 className="text-gray-600">User Register</h2>
        </div>

        {/* Role Toggle */}
        <div className="flex bg-orange-50 rounded-xl p-1 mb-6 max-w-md mx-auto shadow-inner">
          <button
            onClick={() => setRole("customer")}
            className={`flex-1 py-2 rounded-lg text-sm font-semibold transition ${
              role === "customer"
                ? "bg-gradient-to-r from-orange-400 to-red-500 text-white shadow"
                : "text-gray-600"
            }`}
          >
            Customer
          </button>
          <button
            onClick={() => {
              setRole("partner");
              navigate("/food-partner/register");
            }}
            className={`flex-1 py-2 rounded-lg text-sm font-semibold transition ${
              role === "partner"
                ? "bg-gradient-to-r from-orange-400 to-red-500 text-white shadow"
                : "text-gray-600"
            }`}
          >
            Food Partner
          </button>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="fullname"
              placeholder="Full Name"
              className="input"
              value={formData.fullname}
              onChange={handleChange}
              required
            />
            <input
  type="email"
  name="email"
  placeholder="Email"
  className="input"
  value={formData.email}
  onChange={handleChange}
  autoComplete="username"
  required
/>

            <input
  type="password"
  name="password"
  placeholder="Password"
  className="input"
  value={formData.password}
  onChange={handleChange}
  autoComplete="current-password"
  required
/>

            <input
              type="tel"
              name="phonenumber"
              placeholder="Phone Number"
              className="input"
              value={formData.phonenumber}
              onChange={handleChange}
              required
            />
            <textarea
              rows="2"
              name="address"
              placeholder="Address"
              className="input md:col-span-2 resize-none"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </div>

          <button className="w-full mt-6 py-3 rounded-xl 
            bg-gradient-to-r from-orange-400 to-red-500 
            text-white font-semibold shadow hover:scale-105 transition">
            Register
          </button>
        </form>

        <p className="text-center mt-3 text-sm text-gray-600">
          Already have an account?{" "}
          <Link
            to={role === "customer" ? "/user/login" : "/food-partner/login"}
            className="text-red-500 hover:underline font-semibold"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
