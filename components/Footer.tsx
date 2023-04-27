import Image from "next/image";
import logoLight from "../public/images/logoLight.png";
import Link from "next/link";
import { AiOutlineCopyrightCircle } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="w-full py-10 bg-secondaryColor text-white/80 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-4 justify-center items-center md:justify-between">
        <div className="flex items-center gap-3">
          <Image src={logoLight} width={100} height={100} alt="logo" />
          <p className="flex items-center text-sm font-titleFont gap-1">
            <AiOutlineCopyrightCircle className="mt-[1px]" />
            FC || all rights reserved
          </p>
        </div>
        <div className="flex gap-4">
          <Link 
          className="w-6 h-6 text-white/80 hover:text-white cursor-pointer underline decoration-transparent transition duration-300 ease-in-out hover:decoration-inherit"
          href="/AboutUs">
          AboutUs
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
