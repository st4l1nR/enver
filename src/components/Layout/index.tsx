import React from "react";
import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";
import FooterMobile from "./FooterMobile";
import FooterDesktop from "./FooterDesktop";

const index = ({ children }) => {
  return (
    <div>
      <div className="px-5 md:px-0">
        <NavbarDesktop />
        <NavbarMobile />
      </div>
      <div>{children}</div>
      <FooterMobile />
      <FooterDesktop />
    </div>
  );
};

export default index;
