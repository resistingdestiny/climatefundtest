import React from "react";
import Meta from "components/Meta";
import Footer2 from "components/Footer2";
import Footer from "components/Footer";

function FooterPage(props) {
  return (
    <>
      <Meta title="Footer" />
      <Footer2
        bgColor="default"
        size="medium"
        bgImage=""
        bgImageOpacity={1}
        description="A short description of what you do here"
        copyright={`© ${new Date().getFullYear()} Company`}
        logo="https://uploads.divjoy.com/logo.svg"
        logoInverted="https://uploads.divjoy.com/logo-white.svg"
        // Disable sticky footer for Divjoy Library because we want to
        // view multiple footers in a list.
        sticky={false}
      />
      <Footer
        bgColor="default"
        size="medium"
        bgImage=""
        bgImageOpacity={1}
        copyright={`© ${new Date().getFullYear()} Company`}
        logo="https://uploads.divjoy.com/logo.svg"
        logoInverted="https://uploads.divjoy.com/logo-white.svg"
        sticky={false}
      />
    </>
  );
}

export default FooterPage;
