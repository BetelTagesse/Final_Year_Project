import React from "react";

import CustomPage from "./components/CustomPage";

const SecondPage = (props) => {
  return (
    <CustomPage
      title="SECURE BANK"
      description=" Here are the application logs. Watch what happens here when you
      interact with the vulnerable application.
   "
      seconddescription=" 
      You can trust us with your money, we almost never get hacked."
    />
  );
};

export default SecondPage;
