import React from "react";
import Meta from "components/Meta";
import Navbar from "components/Navbar";
import Navbar3 from "components/Navbar3";
import Navbar2 from "components/Navbar2";

function NavbarPage(props) {
  return (
    <>
      <Meta title="Navbar" />
      <Navbar
        color="default"
        logo="https://uploads.divjoy.com/logo.svg"
        logoInverted="https://uploads.divjoy.com/logo-white.svg"
      />
      <Navbar3
        color="default"
        logo="https://uploads.divjoy.com/logo.svg"
        logoInverted="https://uploads.divjoy.com/logo-white.svg"
      />
      <Navbar2
        color="default"
        logo="https://uploads.divjoy.com/logo.svg"
        logoInverted="https://uploads.divjoy.com/logo-white.svg"
      />
    </>
  );
}

export default NavbarPage;
