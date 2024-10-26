import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-2 w-200 bg-gray-800 font-mono">
      <Link href="/" className="text-center text-8xl text-white">
        Contact Information: +1 555 8927
      </Link>
    </div>
  );
}