import React from "react";
import Meta from "components/Meta";
import UsersSection from "components/UsersSection";

function SocialPage(props) {
  return (
    <>
      <Meta title="Social" />
      <UsersSection
        bgColor="default"
        size="medium"
        bgImage=""
        bgImageOpacity={1}
        title="Featured Users"
        subtitle=""
      />
    </>
  );
}

export default SocialPage;
