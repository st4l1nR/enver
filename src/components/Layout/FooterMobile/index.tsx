import React from "react";
import Link from "next/link";

const index = () => {
  return (
    <div>
      {/*Footer Mobile*/}
      <div className="flex flex-col items-center py-5 mt-12 space-y-5 font-thin md:hidden text-white/70">
        <Link href="/">
          <img src="/icons/logo.svg" alt="" className="w-24" />
        </Link>
      </div>
    </div>
  );
};

export default index;
