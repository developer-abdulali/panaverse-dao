import React from "react";
import Image from "next/image";
import logo from "../../public/images/panaverse.svg";
import Link from "next/link";
import { FaFacebookF } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";
import { BsGithub } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="mt-8 md:mt-20 max-w-screen-xl mx-auto px-4 mb-20">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div>
          <div>
            <Image src={logo} alt="Logo" className="w-36 md:w-40" />
          </div>
          <p className="mt-5 max-w-screen-sm md:max-w-lg text-[15px] md:text-[17px] text-[#6f7f80]">
            Certified Web 3.0 and Metaverse Developer A One and Quarter Years
            Panaverse DAO Earn as you Learn Program Getting Ready for the Next
            Generation of the Internet
          </p>
          <div className="flex gap-5 mt-4">
            <Link target="_blank" href="https://www.facebook.com/groups/panaverse">
              <FaFacebookF className="border w-8 h-8 p-2 rounded-full bg-[#19c5c6] text-white" />
            </Link>
            <Link target="_blank" href="https://www.youtube.com/@panaverse/streams">
              <FiYoutube className="border w-8 h-8 p-2 rounded-full bg-[#19c5c6] text-white" />
            </Link>
            <Link target="_blank" href="https://github.com/panaverse">
              <BsGithub className="border w-8 h-8 p-2 rounded-full bg-[#19c5c6] text-white" />
            </Link>
            <Link target="_blank" href="https://twitter.com/Panaverse_edu">
              <BsTwitter className="border w-8 h-8 p-2 rounded-full bg-[#19c5c6] text-white" />
            </Link>
          </div>
        </div>
        <div>
          <h2 className="text-xl font-medium">Programs</h2>
          <ul>
            <li className="mt-3">
              <Link
                href="/"
                className="text-[#4A5B5C] hover:text-teal-900 duration-150"
              >
                Web 3.0 and Metaverse Developer
              </Link>
            </li>
            <li className="mt-3">
              <Link
                href="/"
                className="text-[#4A5B5C] hover:text-teal-900 duration-150"
              >
                Artificial Intelligence
              </Link>
            </li>
            <li className="mt-3">
              <Link
                href="/"
                className="text-[#4A5B5C] hover:text-teal-900 duration-150"
              >
                Cloud-Native Computing
              </Link>
            </li>
            <li className="mt-3">
              <Link
                href="/"
                className="text-[#4A5B5C] hover:text-teal-900 duration-150"
              >
                Ambient Computing and Iot
              </Link>
            </li>
            <li className="mt-3">
              <Link
                href="/"
                className="text-[#4A5B5C] hover:text-teal-900 duration-150"
              >
                Genomics and Bioformatics
              </Link>
            </li>
            <li className="mt-3">
              <Link
                href="/"
                className="text-[#4A5B5C] hover:text-teal-900 duration-150"
              >
                Network Programmability and Automation
              </Link>
            </li>
          </ul>
        </div>
        <div className="mt-10 md:-mt-20 mr-52 my name is in the Uber">
          <h2 className="text-xl font-medium">Pages</h2>
          <ul className="px-0">
            <li className="mt-3 text-[#6f7f80] hover:text-teal-900 duration-150">
              <Link href="/">Home</Link>
            </li>
            <li className="mt-3 text-[#6f7f80] hover:text-teal-900 duration-150">
              <Link href="/">Quarter 1</Link>
            </li>
            <li className="mt-3 text-[#6f7f80] hover:text-teal-900 duration-150">
              <Link href="/">Quarter 2</Link>
            </li>
            <li className="mt-3 text-[#6f7f80] hover:text-teal-900 duration-150">
              <Link href="/">Quarter 3</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
