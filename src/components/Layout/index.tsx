import React from "react";
import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";

const index = ({ children }) => {
  return (
    <div>
      <div className="px-5 ">
        <NavbarDesktop />
        <NavbarMobile />
      </div>

      <div>{children}</div>
    </div>
  );
};

export default index;
