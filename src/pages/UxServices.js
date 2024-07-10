import React from "react";
import HomeService from "../components/Servicess/UIUX/HomeServices";
import DesginServices from "../components/Servicess/UIUX/DesginServices";
import Capabilities from "../components/Servicess/UIUX/Capabilities";
import WhyChoose from "../components/Servicess/UIUX/WhyChoose";

function UxServices() {
  return (
    <div>
      <HomeService />
      <DesginServices />
      <Capabilities />
      <WhyChoose />
    </div>
  );
}

export default UxServices;
