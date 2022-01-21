import React, { useState } from "react";
import Link from "next/link";
import { X as Close } from "react-feather";

const index = () => {
  const [menu, setMenu] = useState(false);
  return (
    <>
      {/* Navbar Mobile*/}

      <div className="sticky top-0 z-50 flex items-center justify-between h-24 md:hidden bg-obsidian">
        <Link href="/">
          <img className="w-24 h-auto" src="/icons/logo.svg" alt="" />
        </Link>
        <img
          className="w-5 h-5"
          src="/icons/sort.svg"
          alt=""
          onClick={() => setMenu(true)}
        />
      </div>
      <div
        className={`fixed top-0 left-0 z-50 w-screen h-screen flex flex-col justify-center items-center text-2xl bg-gradient-to-b from-primary to-obsidian space-y-5 ${
          !menu && "hidden"
        }`}
      >
        <Close
          className="absolute text-white transition right-4 top-4 "
          onClick={() => setMenu(false)}
        />
        <Link href="/">
          <span className="text-white cursor-pointer hover:text-primary" onClick={() => setMenu(false)}>
            Home
          </span>
        </Link>
        <Link href="/services">
          <span className="text-white cursor-pointer hover:text-primary" onClick={() => setMenu(false)}>
            Services
          </span>
        </Link>
        <Link href="/about-us">
          <span className="text-white cursor-pointer hover:text-primary" onClick={() => setMenu(false)}>
            About us
          </span>
        </Link>
        <Link href="/contact-us">
          <span className="text-white cursor-pointer hover:text-primary" onClick={() => setMenu(false)}>
            Contact us
          </span>
        </Link>
      </div>
    </>
  );
};

export default index;
