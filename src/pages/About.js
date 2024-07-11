import React from "react";
import AboutHome from "../components/About/AboutHome";
import WhoWeAre from "../components/About/WhoWeAre";
import StoryOf from "../components/About/StoryOf";
import OurOffices from "../components/About/OurOffice";

function About() {
  return (
    <div>
      {/* className="bg-about" */}
      {/* <div className="py-44">
        <AboutHome />
        <WhoWeAre />
        <StoryOf />
        <OurOffices />
      </div> */}

      <div className="">
        <div className="">
          <AboutHome />
          <WhoWeAre />
          <StoryOf />
          <OurOffices />
        </div>
      </div>
    </div>
  );
}

export default About;
