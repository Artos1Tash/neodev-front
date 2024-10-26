import Link from "next/link";
import React from "react";
import EmojiCarousel from "../components/fetchVideo";

export default function Navbar() {
  return (
    <div className="flex flex-col h-screen bg-gray-800">
      <div className="navbar bg-lightBeige text-navy px-6 py-4 shadow-md flex items-center justify-between">
        <div className="logo text-xl font-bold">
          <p className="text-opaqueBlue text-3xl">HarmoniQ</p>
        </div>
        <div className="flex items-center space-x-6">
          <Link href="/about" className="hover:text-gray-700">
            About
          </Link>
          <Link href="/contact" className="hover:text-gray-700">
            Contact
          </Link>
          <Link href="/statistics" className="hover:text-gray-700">
            Statistics
          </Link>
        </div>
        <div className="flex space-x-5">
          <Link
            href="/login"
            className="bg-navy text-white px-4 py-2 rounded hover:bg-opacity-90"
          >
            Login
          </Link>
          <Link
            href="/signup"
            className="bg-opaqueBlue text-white px-4 py-2 rounded hover:bg-opacity-90"
          >
            Sign Up
          </Link>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center flex-grow">
        <h1 className="text-7xl text-white font-mono mb-8">Emotion</h1>
        <div className="w-full flex justify-center">
          <EmojiCarousel />
        </div>
      </div>
    </div>
  );
}
