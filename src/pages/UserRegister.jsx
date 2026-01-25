import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function UserRegister() {
  const [role, setRole] = useState("customer");

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">

      {/* CARD */}
      <div className="w-full max-w-3xl bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-white/20">

        {/* Header */}
        <div className="flex flex-col items-center mb-6">
          <div className="w-14 h-14 rounded-full bg-gradient-to-r from-pink-500 to-indigo-500 flex items-center justify-center text-white text-2xl shadow">
            🍔
          </div>
          <h1 className="text-2xl font-bold text-white mt-2">Foodie</h1>
          <h2 className="text-white/80">User Register</h2>
        </div>

        {/* Role Toggle */}
        <div className="flex bg-white/10 rounded-xl p-1 mb-6 max-w-md mx-auto">
          <button
            onClick={() => setRole("customer")}
            className={`flex-1 py-2 rounded-lg text-sm font-semibold ${
              role === "customer"
                ? "bg-gradient-to-r from-pink-500 to-indigo-500 text-white shadow"
                : "text-white/70"
            }`}
          >
            Customer
          </button>
          <button
            onClick={() => setRole("partner")}
            className={`flex-1 py-2 rounded-lg text-sm font-semibold ${
              role === "partner"
                ? "bg-gradient-to-r from-pink-500 to-indigo-500 text-white shadow"
                : "text-white/70"
            }`}
          >
            Food Partner
          </button>
        </div>

        {/* FORM GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input type="text" placeholder="Full Name" className="input" />
          <input type="email" placeholder="Email" className="input" />

          <input type="password" placeholder="Password" className="input" />
          <input type="tel" placeholder="Phone Number" className="input" />

          <textarea
            rows="2"
            placeholder="Address"
            className="input md:col-span-2 resize-none"
          />
        </div>

        <button className="w-full mt-6 py-3 rounded-xl bg-gradient-to-r from-pink-500 to-indigo-500 text-white font-semibold shadow hover:scale-105 transition">
          Register
        </button>

        <p className="text-center mt-3 text-sm text-white/70">
          Already have an account?{" "}
          <Link
            to={role === "customer" ? "/user-login" : "/partner-login"}
            className="text-pink-400 hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
