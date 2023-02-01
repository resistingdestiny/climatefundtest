import React from "react";
import Meta from "components/Meta";
import HeroSection2 from "components/HeroSection2";
import HeroSection from "components/HeroSection";
import HeroSection3 from "components/HeroSection3";
import HeroSection4 from "components/HeroSection4";

function HeroPage(props) {
  return (
    <>
      <Meta title="Hero" />
      <HeroSection2
        bgColor="default"
        size="medium"
        bgImage=""
        bgImageOpacity={1}
        title="Your landing page title here"
        subtitle="This landing page is perfect for showing off your awesome product and driving people to sign up for a paid plan."
        buttonText="Get Started"
        buttonColor="primary"
        buttonPath="/pricing"
      />
      <HeroSection
        bgColor="default"
        size="medium"
        bgImage=""
        bgImageOpacity={1}
        title="Your landing page title here"
        subtitle="This landing page is perfect for showing off your awesome product and driving people to sign up for a paid plan."
        image="https://uploads.divjoy.com/undraw-japan_ubgk.svg"
        buttonText="Get Started"
        buttonColor="primary"
        buttonPath="/pricing"
      />
      <HeroSection3
        bgColor="default"
        size="medium"
        bgImage=""
        bgImageOpacity={1}
        title="Your landing page title here"
        subtitle="This landing page is perfect for showing off your awesome product and driving people to sign up for a paid plan."
        image="https://uploads.divjoy.com/undraw-beer_celebration_cefj.svg"
        buttonText="Get Started"
        buttonColor="primary"
        buttonPath="/pricing"
      />
      <HeroSection4
        bgColor="default"
        size="medium"
        bgImage=""
        bgImageOpacity={1}
        title="Your landing page title here"
        subtitle="This landing page is perfect for showing off your awesome product and driving people to sign up for a paid plan."
      />
    </>
  );
}

export default HeroPage;
