import React from "react";
import Meta from "components/Meta";
import VideoSection from "components/VideoSection";
import AppleMusicSection from "components/AppleMusicSection";

function MediaPage(props) {
  return (
    <>
      <Meta title="Media" />
      <VideoSection
        bgColor="default"
        size="medium"
        bgImage=""
        bgImageOpacity={1}
        title="Your title here"
        subtitle=""
        embedUrl="https://www.youtube.com/embed/z9Ul9ccDOqE"
      />
      <AppleMusicSection
        bgColor="default"
        size="medium"
        bgImage=""
        bgImageOpacity={1}
        title="Featured Song"
        subtitle=""
      />
    </>
  );
}

export default MediaPage;
