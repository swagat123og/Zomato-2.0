import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function PartnerRegister() {
  const [role, setRole] = useState("partner");
  const Navigate=useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center px-4 
      bg-gradient-to-br from-orange-100 via-rose-100 to-red-100">
      
      {/* CARD */}
      <div className="w-full max-w-3xl bg-white/70 backdrop-blur-xl 
        rounded-3xl shadow-xl p-8 border border-white/40">

        {/* Header */}
        <div className="flex flex-col items-center mb-6">
          <div className="w-14 h-14 rounded-full 
            bg-gradient-to-r from-orange-400 to-red-500 
            flex items-center justify-center text-white text-2xl shadow">
            🏪
          </div>
          <h1 className="text-2xl font-bold text-gray-800 mt-2">
            Foodie Partner
          </h1>
          <h2 className="text-lg text-gray-600">Partner Register</h2>
        </div>

        {/* Role Toggle */}
        <div className="flex bg-orange-50 rounded-xl p-1 mb-6 max-w-md mx-auto shadow-inner">
          <button
            onClick={() => {
              setRole("customer");
              Navigate("/user/register");
            }}
            className={`flex-1 py-2 rounded-lg text-sm font-semibold ${
              role === "customer"
                ? "bg-gradient-to-r from-orange-400 to-red-500 text-white shadow"
                : "text-gray-600"
            }`}
          >
            Customer
          </button>
          <button
            onClick={() => setRole("partner")}
            className={`flex-1 py-2 rounded-lg text-sm font-semibold ${
              role === "partner"
                ? "bg-gradient-to-r from-orange-400 to-red-500 text-white shadow"
                : "text-gray-600"
            }`}
          >
            Food Partner
          </button>
        </div>

        {/* FORM GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input type="text" placeholder="Business Name" className="input" />
          <input type="text" placeholder="Contact Person Name" className="input" />
          <input type="tel" placeholder="Phone Number" className="input" />
          <input type="email" placeholder="Business Email" className="input" />

          <textarea
            placeholder="Business Address"
            rows="3"
            className="input md:col-span-2 resize-none"
          />

          <input
            type="password"
            placeholder="Password"
            className="input md:col-span-2"
          />
        </div>

        {/* Button */}
        <button
          className="w-full mt-6 py-3 rounded-xl 
            bg-gradient-to-r from-orange-400 to-red-500 
            text-white font-semibold shadow hover:scale-105 transition">
          Register
        </button>

        <p className="text-center mt-3 text-sm text-gray-600">
          Already a partner?{" "}
          <span className="text-red-500 cursor-pointer hover:underline font-semibold">
            <Link to="/food-partner/login">Login</Link>
          </span>
        </p>
      </div>
    </div>
  );
}
