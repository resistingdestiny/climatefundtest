import React from "react";
import Meta from "components/Meta";
import StatsSection from "components/StatsSection";

function StatsPage(props) {
  return (
    <>
      <Meta title="Stats" />
      <StatsSection
        bgColor="default"
        size="medium"
        bgImage=""
        bgImageOpacity={1}
      />
    </>
  );
}

export default StatsPage;
