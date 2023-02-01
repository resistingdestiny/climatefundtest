import React from "react";
import Meta from "components/Meta";
import NewsletterSection2 from "components/NewsletterSection2";
import NewsletterSection3 from "components/NewsletterSection3";
import NewsletterSection from "components/NewsletterSection";

function NewsletterPage(props) {
  return (
    <>
      <Meta title="Newsletter" />
      <NewsletterSection2
        bgColor="default"
        size="medium"
        bgImage=""
        bgImageOpacity={1}
        title="Stay in the know"
        subtitle="Receive our latest articles and feature updates"
        buttonText="Subscribe"
        buttonColor="primary"
        inputPlaceholder="Enter your email"
        subscribedMessage="You are now subscribed!"
      />
      <NewsletterSection3
        bgColor="default"
        size="medium"
        bgImage=""
        bgImageOpacity={1}
        title="Stay in the know"
        subtitle="Receive our latest articles and feature updates"
        buttonText="Subscribe"
        buttonColor="primary"
        inputPlaceholder="Enter your email"
        subscribedMessage="You are now subscribed!"
      />
      <NewsletterSection
        bgColor="default"
        size="medium"
        bgImage=""
        bgImageOpacity={1}
        title="Stay in the know"
        subtitle="Do you like email? Do you like a lot of email!? Well, you're in luck! Sign up to get blasted with a dozen emails a day of varying quality."
        buttonText="Subscribe"
        buttonColor="primary"
        inputPlaceholder="Enter your email"
        subscribedMessage="You are now subscribed!"
        image="https://uploads.divjoy.com/undraw-newsletter_vovu.svg"
        imageSuccess="https://uploads.divjoy.com/undraw-high_five_u364.svg"
      />
    </>
  );
}

export default NewsletterPage;
