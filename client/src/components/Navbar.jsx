import { useState } from "react";
import Image from "./Image";
//import { IKImage } from 'imagekitio-react';
import { Link } from "react-router-dom";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full h-12 md:h-20 flex items-center justify-between">
      {/* Logo */}
      <Link to="" className="flex items-center gap-4 text-xl font-bold">
        <Image src="logo.png" h={32} w={32} alt="logo" />
        <span className="text-blue-800 ">E-blog</span>
      </Link>
      {/* mobile button */}
      <div className="md:hidden">

        <div className="cursor-pointer text-4x" onClick={() => setOpen(prev => !prev)} >
          {open ? "X" : "☰"}
        </div>
        <div className={`w-full h-screen bg-[#e6e6ff] flex flex-col items-center justify-center gap-8 font-medium text-lg absolute top-16 transition-all ease-in-out ${open ? "-right-0" : "-right-[100%]"
          }`}>
          {/* mobile linked list */}
          <Link to="/">Home</Link>
          <Link to="/">Trending</Link>
          <Link to="/">Popular</Link>
          <Link to="/">About</Link>
          <Link to="">
            <button className=" text-white px-4 py-2 bg-blue-800 rounded-3xl">Login</button>
          </Link>


        </div>


      </div>
      {/* desktop menu */}
      <div className="hidden md:flex items-center gap-8 xl:gap-12 font-medium text-lg">
        {/* desktop linked list */}
        <Link to="/">Home</Link>
        <Link to="/">Trending</Link>
        <Link to="/">Popular</Link>
        <Link to="/">About</Link>
        <SignedOut>
        <Link to="/login">
          <button className=" text-white px-4 py-2 bg-blue-800 rounded-3xl">Login</button>
        </Link>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>

      </div>

    </div>
  )
}

export default Navbar;

