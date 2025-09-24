import React from "react";
import Link from "next/link";


const Header = () => {
  return (
    <nav className="bg-gray-200 p-4 flex justify-around">
      <Link href="/home" className="mr-4 text-blue-500">Home</Link>
      <Link href="/about">About</Link>
    </nav>
  );
}

export default Header;
