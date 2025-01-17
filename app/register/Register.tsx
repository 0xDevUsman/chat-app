"use client";

import React, { useState } from "react";
import Image from "next/image";
import favicon from "../favicon.ico";
import Link from "next/link";
const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <div className="flex justify-center items-center min-h-screen">
        <div className="flex flex-col items-center">
          <Image className="w-36" src={favicon} alt="Favicon" />
          <h1 className="text-4xl font-bold pt-8">TalkBridge</h1>
          <form action="" className="w-full max-w-lg mx-auto p-6 rounded-lg">
            <h2 className="text-base font-semibold text-gray-200 mb-6 text-center">
              Unlock a world of possibilities!{" "}
              <span className="text-blue-500">Register now</span> to start
              chatting, connecting, and sharing seamlessly.
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
              <div className="flex flex-col">
                <label
                  htmlFor="first-name"
                  className="text-base font-bold text-gray-300"
                >
                  First Name
                </label>
                <input
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  type="text"
                  id="first-name"
                  className="mt-1 px-2 py-3 bg-[#0a0a0a] border border-gray-300 rounded-md shadow-sm text-gray-300 outline-none"
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="last-name"
                  className="text-base font-bold text-gray-300"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  id="last-name"
                  className="mt-1 px-2 py-3 bg-[#0a0a0a] border border-gray-300 rounded-md shadow-sm text-gray-300 outline-none"
                />
              </div>
            </div>

            <div className="flex flex-col mb-4">
              <label
                htmlFor="username"
                className="text-base font-bold text-gray-300"
              >
                Username
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                id="username"
                className="mt-1 px-2 py-3 bg-[#0a0a0a] border border-gray-300 rounded-md shadow-sm text-gray-300 outline-none"
              />
            </div>

            <div className="flex flex-col mb-4">
              <label
                htmlFor="email"
                className="text-base font-bold text-gray-300"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 px-2 py-3 bg-[#0a0a0a] border border-gray-300 rounded-md shadow-sm text-gray-300 outline-none"
              />
            </div>
            <h1 className="pb-6">
              Already have an account ?{" "}
              <Link className="underline" href={"/login"}>
                Login now
              </Link>
            </h1>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-md shadow hover:bg-blue-600"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
