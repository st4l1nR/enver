import React from "react";
import Link from "next/link";

const index = () => {
  return (
    <div>
      {/*Footer Desktop*/}
      <div className="items-center hidden max-w-6xl px-5 mx-auto mt-12 md:px-0 md:flex h-44">
        <div className="flex justify-start basis-1/4">
          <img src="/icons/logo.svg" alt="" />
        </div>
        <div className="flex justify-center space-x-4 text-sm font-thin basis-2/4 text-white/70">
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
        <div className="basis-1/4">
          <span className="text-sm font-thin text-white/70">
            © 2020 Enver, All Rights Reserved
          </span>
        </div>
      </div>
    </div>
  );
};

export default index;
