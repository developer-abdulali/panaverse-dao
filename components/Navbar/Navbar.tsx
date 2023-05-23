import React from "react";
import Image from "next/image";
import Link from "next/link";
const Navbar = () => {
  return (
    <header className="sticky top-0">
      <nav className="flex justify-between items-center max-w-screen-xl mx-auto py-5 px-4 bg-[rgba(256,256,256,0.9)] backdrop-blur">
        <div>
          <Image
            src="/images/panaverse.svg"
            alt="panaverse logo"
            width={100}
            height={50}
          />
        </div>
        <ul className="flex space-x-9 font-semibold">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/Courses">Courses</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Navbar;
