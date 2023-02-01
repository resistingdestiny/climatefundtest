import React from "react";
import Meta from "components/Meta";
import FeaturesSection2 from "components/FeaturesSection2";
import FeaturesSection3 from "components/FeaturesSection3";
import FeaturesSection4 from "components/FeaturesSection4";
import FeaturesSection from "components/FeaturesSection";

function FeaturesPage(props) {
  return (
    <>
      <Meta title="Features" />
      <FeaturesSection2
        bgColor="default"
        size="medium"
        bgImage=""
        bgImageOpacity={1}
        title="Features"
        subtitle="All the features you need to move faster"
      />
      <FeaturesSection3
        bgColor="default"
        size="medium"
        bgImage=""
        bgImageOpacity={1}
        title="Features"
        subtitle="All the features you need to move faster"
      />
      <FeaturesSection4
        bgColor="default"
        size="medium"
        bgImage=""
        bgImageOpacity={1}
      />
      <FeaturesSection
        bgColor="default"
        size="medium"
        bgImage=""
        bgImageOpacity={1}
        image="https://uploads.divjoy.com/undraw-chatting_2yvo.svg"
      />
    </>
  );
}

export default FeaturesPage;
