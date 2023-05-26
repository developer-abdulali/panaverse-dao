import React from "react";
import Image from "next/image";
import logo from "../../public/images/Panaverse.png";
import Link from "next/link";
import { FaFacebookF } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";
import { BsGithub } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="mt-20 max-w-screen-xl mx-auto px-4 mb-10">
      <div className="flex justify-between items-center">
        <div>
          <div>
            <Image src={logo} alt="Logo" className="w-20" />
          </div>
          <p className="mt-6 max-w-lg text-[16px] text-[#4A5B5C]">
            Certified Web 3.0 and Metaverse Developer A One and Quarter Years
            Panaverse DAO Earn as you Learn Program Getting Ready for the Next
            Generation of the Internet
          </p>
          <div className="flex gap-5 mt-4">
            <FaFacebookF />
            <FiYoutube />
            <BsGithub />
            <BsTwitter />
          </div>
        </div>
        <div>
          <h2>Programs</h2>
          <ul className="">
            <li className="mt-3">
              <Link href="/" className="text-[#4A5B5C]">
                Web 3.0 and Metaverse Developer
              </Link>
            </li>
            <li className="mt-3">
              <Link href="/" className="text-[#4A5B5C]">
                Artificial Intelligence
              </Link>
            </li>
            <li className="mt-3">
              <Link href="/" className="text-[#4A5B5C]">
                Cloud-Native Computing
              </Link>
            </li>
            <li className="mt-3">
              <Link href="/" className="text-[#4A5B5C]">
                Ambient Computing and Iot
              </Link>
            </li>
            <li className="mt-3">
              <Link href="/" className="text-[#4A5B5C]">
                Genomics and Bioformatics
              </Link>
            </li>
            <li className="mt-3">
              <Link href="/" className="text-[#4A5B5C]">
                Network Programmability and Automation
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2>Pages</h2>
          <ul>
            <li className="mt-3 text-[#4A5B5C]">
              <Link href="/">Home</Link>
            </li>
            <li className="mt-3 text-[#4A5B5C]">
              <Link href="/">Quarter 1</Link>
            </li>
            <li className="mt-3 text-[#4A5B5C]">
              <Link href="/">Quarter 2</Link>
            </li>
            <li className="mt-3 text-[#4A5B5C]">
              <Link href="/">Quarter 3</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
