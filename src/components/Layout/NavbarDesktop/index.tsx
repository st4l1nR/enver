import React from "react";
import Link from "next/link";

const index = () => {
  return (
    <>
      {/* Navbar Desktop*/}
      <div className="sticky top-0 z-50 hidden h-24 max-w-6xl m-auto md:flex bg-obsidian">
        <div className="flex items-center justify-start basis-1/3">
          <Link href="/">
            <img className="cursor-pointer" src="/icons/logo.svg" alt="" />
          </Link>
        </div>
        <div className="flex items-center justify-center space-x-8 basis-1/3">
          <Link href="/">
            <span className="text-white cursor-pointer hover:text-primary">
              Home
            </span>
          </Link>
          <Link href="/services">
            <span className="text-white cursor-pointer hover:text-primary">
              Services
            </span>
          </Link>
          <Link href="/work">
            <span className="text-white cursor-pointer hover:text-primary">
              Work
            </span>
          </Link>
          <Link href="/about-us">
            <span className="text-white cursor-pointer hover:text-primary">
              About us
            </span>
          </Link>
        </div>
        <div className="flex items-center justify-end basis-1/3">
          <Link href="/contact-us">
            <button className="flex items-center justify-center w-40 h-12 text-white border border-white rounded-md hover:border-primary hover:text-primary">
              <span>Contact Us</span>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default index;
