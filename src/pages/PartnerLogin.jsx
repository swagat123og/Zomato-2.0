import React, { useState } from "react";

export default function PartnerLogin() {
  const [role, setRole] = useState("partner");

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
      <div className="w-full max-w-sm bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-white/20">

        {/* Logo */}
        <div className="flex flex-col items-center mb-4">
          <div className="w-14 h-14 rounded-full bg-gradient-to-r from-pink-500 to-indigo-500 flex items-center justify-center text-white text-2xl shadow">
            🏪
          </div>
          <h1 className="text-2xl font-bold text-white mt-2">
            Foodie Partner
          </h1>
        </div>

        <h2 className="text-xl font-semibold text-center text-white">
          Partner Login
        </h2>

        {/* Role Toggle (UI only) */}
        <div className="flex bg-white/10 rounded-xl p-1 mt-4">
          <button
            onClick={() => setRole("customer")}
            className={`flex-1 py-2 rounded-lg text-sm font-semibold transition ${
              role === "customer"
                ? "bg-gradient-to-r from-pink-500 to-indigo-500 text-white shadow"
                : "text-white/70"
            }`}
          >
            Customer
          </button>
          <button
            onClick={() => setRole("partner")}
            className={`flex-1 py-2 rounded-lg text-sm font-semibold transition ${
              role === "partner"
                ? "bg-gradient-to-r from-pink-500 to-indigo-500 text-white shadow"
                : "text-white/70"
            }`}
          >
            Food Partner
          </button>
        </div>

        {/* Form */}
        <div className="mt-6 space-y-4">
          <input
            type="email"
            placeholder="Business Email"
            className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/30 text-white placeholder-white/60 outline-none"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/30 text-white placeholder-white/60 outline-none"
          />

          <button className="w-full py-3 rounded-xl bg-gradient-to-r from-pink-500 to-indigo-500 text-white font-semibold shadow hover:scale-105 transition">
            Login
          </button>

          <p className="text-center text-sm text-white/70">
            Don’t have a partner account? <span className="text-pink-400 cursor-pointer hover:underline">Register</span>
          </p>
        </div>
      </div>
    </div>
  );
}
