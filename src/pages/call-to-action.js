import React from "react";
import Meta from "components/Meta";
import CtaSection2 from "components/CtaSection2";
import CtaSection from "components/CtaSection";
import CtaSection3 from "components/CtaSection3";

function CallToActionPage(props) {
  return (
    <>
      <Meta title="Call To Action" />
      <CtaSection2
        bgColor="default"
        size="medium"
        bgImage=""
        bgImageOpacity={1}
        title="Ready to get started?"
        subtitle=""
        buttonText="Get Started"
        buttonColor="primary"
        buttonPath="/pricing"
      />
      <CtaSection
        bgColor="primary"
        size="medium"
        bgImage="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
        bgImageOpacity={0.8}
        title="Check out our products"
        subtitle=""
        buttonText="Explore"
        buttonColor="primary"
        buttonPath="/pricing"
      />
      <CtaSection3
        bgColor="default"
        size="medium"
        bgImage=""
        bgImageOpacity={1}
        title="Ready to get started?"
        subtitle="Or please get started now even if you don't feel ready. We're just really going to need you to get started. Click it. Click the button."
        buttonText="Get Started"
        buttonColor="primary"
        buttonPath="/pricing"
      />
    </>
  );
}

export default CallToActionPage;
