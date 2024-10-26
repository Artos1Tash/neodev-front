import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-2 w-200 bg-gray-800 font-mono">
      <Link href="/" className="text-center text-9xl text-white">
        About Us
      </Link>
      <p className="text-center text-7xl text-white">
        Our company thrives on helping people do chores faster. We make our
        products for that reason. For example, our newest product, the HarmoniQ,
        helps people not have to do the chore of choosing music. 
      </p>
    </div>
  );
}
