import React from "react";
import Link from "next/link";

const index = () => {
  return (
    <div>
      {/*Footer Desktop*/}
      <div className="items-center hidden max-w-6xl px-5 mx-auto mt-12 md:px-0 md:flex h-44">
        <div className="flex justify-start basis-1/4">
          <Link href="/">
            <img className='cursor-pointer' src="/icons/logo.svg" alt="" />
          </Link>
        </div>
        <div className="basis-2/4"></div>
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
