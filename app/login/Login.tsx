"use client";

import React, { useState } from "react";
import Image from "next/image";
import favicon from "../favicon.ico";
import Link from "next/link";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="flex flex-col items-center">
        <Image className="w-36" src={favicon} alt="Favicon" />
        <h1 className="text-4xl font-bold pt-8">TalkBridge</h1>
        <form action="" className="w-full max-w-lg mx-auto p-6 rounded-lg">
          <h2 className="text-base font-semibold text-gray-200 mb-6 text-center">
            Your connections are waiting—
            <span className="text-blue-500"> Log in</span> now and stay in the
            loop with just a tap!
          </h2>
          <div className="flex flex-col mb-4">
            <label
              htmlFor="email"
              className="text-base font-bold text-gray-300"
            >
              Email
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
              className="mt-1 px-2 py-3 bg-[#0a0a0a] border border-gray-300 rounded-md shadow-sm text-gray-300 outline-none"
            />
          </div>

          <div className="flex flex-col mb-2">
            <label
              htmlFor="password"
              className="text-base font-bold text-gray-300"
            >
              Password
            </label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="password"
              className="mt-1 px-2 py-3 bg-[#0a0a0a] border border-gray-300 rounded-md shadow-sm text-gray-300 outline-none"
            />
          </div>
          <h1 className="pb-6">
            Don&apos;t have an account ?{" "}
            <Link className="underline" href={"/register"}>
              Register now
            </Link>
          </h1>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md shadow hover:bg-blue-600"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
