import React from "react";
import Link from "next/link";

const index = () => {
  return (
    <div>
      {/*Footer Mobile*/}
      <div className="flex flex-col items-center py-5 mt-12 space-y-5 font-thin md:hidden text-white/70">
        <img src="/icons/logo.svg" alt="" className="w-24" />
        <Link href="/support">
          <span className="cursor-pointer hover:text-primary">Support</span>
        </Link>
        <Link href="/policy">
          <span className="cursor-pointer hover:text-primary">
            Privacy Policy
          </span>
        </Link>
        <Link href="/terms">
          <span className="cursor-pointer hover:text-primary">
            Terms and Conditions
          </span>
        </Link>
      </div>
    </div>
  );
};

export default index;
