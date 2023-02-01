import React from "react";
import Meta from "components/Meta";
import TestimonialsSection2 from "components/TestimonialsSection2";
import TestimonialsSection from "components/TestimonialsSection";

function TestimonialsPage(props) {
  return (
    <>
      <Meta title="Testimonials" />
      <TestimonialsSection2
        bgColor="default"
        size="medium"
        bgImage=""
        bgImageOpacity={1}
        title="Here's what people are saying"
        subtitle=""
      />
      <TestimonialsSection
        bgColor="default"
        size="medium"
        bgImage=""
        bgImageOpacity={1}
        title="Here's what people are saying"
        subtitle=""
      />
    </>
  );
}

export default TestimonialsPage;
