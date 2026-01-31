import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function UserLogin() {
  const [role, setRole] = useState("customer");
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center px-4 
      bg-gradient-to-br from-orange-100 via-rose-100 to-red-100">

      <div className="w-full max-w-sm bg-white/70 backdrop-blur-xl 
        rounded-3xl shadow-xl p-8 border border-white/40">

        {/* Logo */}
        <div className="flex flex-col items-center mb-4">
          <div className="w-14 h-14 rounded-full 
            bg-gradient-to-r from-orange-400 to-red-500 
            flex items-center justify-center text-white text-2xl shadow">
            🍔
          </div>
          <h1 className="text-2xl font-bold text-gray-800 mt-2">Foodie</h1>
        </div>

        <h2 className="text-xl font-semibold text-center text-gray-800">
          Login
        </h2>

        {/* Role Toggle */}
        <div className="flex bg-orange-50 rounded-xl p-1 mt-4 shadow-inner">
          <button
            onClick={() => {
              setRole("customer");
              navigate("/user/login");
            }}
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
              navigate("/food-partner/login");
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

        {/* Form */}
        <div className="mt-6 space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 rounded-xl 
              bg-white border border-gray-200 
              text-gray-800 placeholder-gray-400 outline-none"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 rounded-xl 
              bg-white border border-gray-200 
              text-gray-800 placeholder-gray-400 outline-none"
          />

          <button
            className="w-full py-3 rounded-xl 
              bg-gradient-to-r from-orange-400 to-red-500 
              text-white font-semibold shadow hover:scale-105 transition">
            Login
          </button>

          <div className="text-center text-sm text-gray-600">
            Don’t have an account?{" "}
            <Link
              to={role === "customer" ? "/user/register" : "/food-partner/register"}
              className="text-red-500 hover:underline font-semibold"
            >
              Register
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
