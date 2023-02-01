import React from "react";
import Meta from "components/Meta";
import TeamBiosSection2 from "components/TeamBiosSection2";
import TeamBiosSection3 from "components/TeamBiosSection3";
import TeamBiosSection4 from "components/TeamBiosSection4";
import TeamBiosSection from "components/TeamBiosSection";

function TeamPage(props) {
  return (
    <>
      <Meta title="Team" />
      <TeamBiosSection2
        bgColor="default"
        size="medium"
        bgImage=""
        bgImageOpacity={1}
        title="Meet the Team"
        subtitle=""
      />
      <TeamBiosSection3
        bgColor="default"
        size="medium"
        bgImage=""
        bgImageOpacity={1}
        title="Meet the Team"
        subtitle=""
      />
      <TeamBiosSection4
        bgColor="default"
        size="medium"
        bgImage=""
        bgImageOpacity={1}
        title="Meet the Team"
        subtitle=""
      />
      <TeamBiosSection
        bgColor="default"
        size="medium"
        bgImage=""
        bgImageOpacity={1}
        title="Meet the Team"
        subtitle=""
      />
    </>
  );
}

export default TeamPage;
