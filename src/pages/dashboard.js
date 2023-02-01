import React from "react";
import Meta from "components/Meta";
import DashboardSection2 from "components/DashboardSection2";
import DashboardSection from "components/DashboardSection";
import { requireAuth } from "util/auth";

function DashboardPage(props) {
  return (
    <>
      <Meta title="Dashboard" />
      <DashboardSection2
        bgColor="default"
        size="medium"
        bgImage=""
        bgImageOpacity={1}
        title="Dashboard"
        subtitle=""
      />
      <DashboardSection
        bgColor="default"
        size="medium"
        bgImage=""
        bgImageOpacity={1}
        title="Dashboard"
        subtitle=""
      />
    </>
  );
}

export default requireAuth(DashboardPage);
