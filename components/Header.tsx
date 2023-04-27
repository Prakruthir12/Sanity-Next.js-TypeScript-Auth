"use client";

import Image from "next/image";
import Link from "next/link";
import logoDark from "../public/images/logoDark.png";
import { Popover } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import usericon from "../public/images/usericon.jpg"
import { useSession, signIn, signOut } from "next-auth/react"

const Header = () => {
  const {data: session} = useSession();
  return (
    <Popover className="w-full h-20 border-b-[1px] border-b-black font-titleFont sticky top-0 bg-white z-50 px-4">
      <div className="max-w-7xl h-full mx-auto flex justify-between items-center">
        <Link href="/">
          <div>
            <Image width={90} height={80} src={logoDark} alt="logoDark" />
          </div>
        </Link>
        <div>
          <ul className="hidden sm:flex items-center gap-8 uppercase text-sm font-semibold">
            <li className="headerLi"><a href="/#home">Home</a></li>
            <li className="headerLi"><a href="/#about">About</a></li>
            <li className="headerLi"><a href="/#pages">Pages</a></li>
            <li className="headerLi"><a href="/#features">Features</a></li>
            <li className="headerLi"><a href="/#contact">Contact</a></li>
          </ul>
        </div>

        <div className="flex grow items-center justify-end sm:hidden">
          <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text gray-400
          hover: bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-insert focus:ring-indigo-400">
            <span className="sr-only">Open menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </Popover.Button>
        </div>

        <Popover.Panel
          focus
          className="absolute inset-x-0 top-0 origin-top transform p-2 transition md:hidden">
          <div className="rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 divide-y-2 divide-gray-50">
            <div className="flex items-center justify-between">
              <h1 className="text-secondaryColor text-xl font-bold px-2 py-3">Fitness Cube</h1>
              <div className="-mr-2">

                <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text gray-400
          hover: bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-insert focus:ring-indigo-400">
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
            </div>
            <div className="mt-6">
              <nav className="grid gap-y-8">
                <Link
                  className="headerLi focus:outline-none focus:ring-2 focus:ring-inset focus:ring-secondaryColor px-2"
                  href="/#home">
                  Home
                </Link>
                <Link
                  className="headerLi focus:outline-none focus:ring-2 focus:ring-inset focus:ring-secondaryColor px-2"
                  href="/#about">
                  About
                </Link>
                <Link
                  className="headerLi focus:outline-none focus:ring-2 focus:ring-inset focus:ring-secondaryColor px-2"
                  href="/#pages">
                  Pages
                </Link>
                <Link
                  className="headerLi focus:outline-none focus:ring-2 focus:ring-inset focus:ring-secondaryColor px-2"
                  href="/#features">
                  Features
                </Link>

                <Link
                  className="headerLi focus:outline-none focus:ring-2 focus:ring-inset focus:ring-secondaryColor px-2"
                  href="/#contact">
                  Contact
                </Link>

              </nav>
            </div>
            <div className="mt-6 flex flex-col items-center gap-2">
              <Link
                href="login"
                className="rounded-md bg-white px-4 py-2 text-sm font-medium md:text-xl w-full border-2
              focus:outline-none focus:ring-2 focus:ring-inset focus:ring-secondaryColor  hover:text-white rounded-md hover:bg-secondaryColor transition-all duration-300">
                Sign In
              </Link>

            </div>
          </div>
        </Popover.Panel>

        <div className="hidden sm:flex items-center gap-8 text-lg">

          <div className="flex items-center gap-1">
            <Image
              className="w-8 h-8 rounded-full"
              src={
                session ? session?.user!.image! : usericon
              }
              width={usericon.width}
              height={usericon.height}
              alt="logo"
            />
            <p className="text-sm font-medium">
              {session ? session?.user!.name : "Hello stranger!"}
            </p>
          </div>

          {session ? (
            <button onClick={() => signOut()} className="uppercase text-sm border-[1px] border-primaryColor hover:border-secondaryColor px-4 py-1 font-semibold hover:text-white rounded-md hover:bg-secondaryColor transition-all duration-300 active:bg-yellow-600">
            Sign Out
          </button>
          ):(
            <button onClick={() => signIn()} className="uppercase text-sm border-[1px] border-primaryColor hover:border-secondaryColor px-4 py-1 font-semibold hover:text-white rounded-md hover:bg-secondaryColor transition-all duration-300 active:bg-yellow-600">
            Sign In
          </button>
          )
          } 
        </div>
      </div>
    </Popover>
  );
};

export default Header;
