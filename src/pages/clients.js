import React from "react";
import Meta from "components/Meta";
import ClientsSection from "components/ClientsSection";

function ClientsPage(props) {
  return (
    <>
      <Meta title="Clients" />
      <ClientsSection
        bgColor="default"
        size="medium"
        bgImage=""
        bgImageOpacity={1}
        title="You're in good company"
        subtitle=""
      />
    </>
  );
}

export default ClientsPage;
