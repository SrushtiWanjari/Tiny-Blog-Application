import React from "react";
import { Link } from "react-router";

function Signup() {
  return (
    <div>
      <h1 className="text-center text-4xl my-4">Signup</h1>

      <div
        className="max-w-[400px] mx-auto border-1
      border-gray-500 py-10 px-14 rounded-md"
      >
        <input
          type="name"
          placeholder="Name"
          className="border p-2 rounded w-full mb-4"
        />
        <input
          type="email"
          placeholder="Email"
          className="border p-2 rounded w-full mb-4"
        />
        <input
          type="password"
          placeholder="Password"
          className="border p-2 rounded w-full mb-4"
        />
        <button className="bg-gray-700 text-white px-4 py-2 rounded-md">
          Signup
        </button>

         <p className="mt-6">
          Already have an account?&nbsp;
          <Link to="/login" className="text-blue-500 underline">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
