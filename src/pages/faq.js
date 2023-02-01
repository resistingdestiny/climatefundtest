import React from "react";
import Meta from "components/Meta";
import FaqSection from "components/FaqSection";
import FaqSection2 from "components/FaqSection2";
import FaqSection3 from "components/FaqSection3";

function FaqPage(props) {
  return (
    <>
      <Meta title="Faq" />
      <FaqSection
        bgColor="default"
        size="medium"
        bgImage=""
        bgImageOpacity={1}
        title="Frequently Asked Questions"
        subtitle=""
      />
      <FaqSection2
        bgColor="default"
        size="medium"
        bgImage=""
        bgImageOpacity={1}
        title="Frequently Asked Questions"
        subtitle=""
      />
      <FaqSection3
        bgColor="default"
        size="medium"
        bgImage=""
        bgImageOpacity={1}
        title="Frequently Asked Questions"
        subtitle=""
      />
    </>
  );
}

export default FaqPage;
