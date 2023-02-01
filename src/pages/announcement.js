import React from "react";
import Meta from "components/Meta";
import Announcement from "components/Announcement";
import Announcement2 from "components/Announcement2";

function AnnouncementPage(props) {
  return (
    <>
      <Meta title="Announcement" />
      <Announcement
        bgColor="default"
        text="An important announcement!"
        buttonText="Get Started"
        buttonColor="primary"
        buttonPath="/pricing"
      />
      <Announcement2
        bgColor="default"
        text="An important announcement!"
        linkText="Get started"
        linkPath="/pricing"
      />
    </>
  );
}

export default AnnouncementPage;
