import React from "react";

import CustomPage from "./components/CustomPage";

const FirstPage = (props) => {
  return (
    <CustomPage
      title="SECURE BANK"
      description="This is the vulnerable application we will be trying to hack with"
      seconddescription=" You can trust us with your money, we almost never get hacked."
    />
  );
};

export default FirstPage;
