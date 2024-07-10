import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaGraduationCap } from "react-icons/fa";

const StoryOf = () => {
  return (
    <div className="experince">
      <div className=" mx-auto py-28 ">
        <h1 className="text-center stolzl-400 text-white text-4xl mb-5">
          Story of us
        </h1>
        <p className="text-center secondary-text leading-8 stolzl-200 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil eos
          minima hic quo architecto libero
          <br />
          temporibus fuga sunt reiciendis illo possimus perferendis ea debitis
          officia praesentium odit, suscipit ullam unde!
        </p>
      </div>
      <VerticalTimeline lineColor="#CE1057">
        <VerticalTimelineElement
          className=""
          iconStyle={{ background: "#CE1057", color: "#CE1057" }}
          icon={<FaGraduationCap />}
          style={{ color: "GrayText" }}
        >
          <h1 className="stolzl-300 text-white text-2xl">
            Foundation of Fabzen Technologies
          </h1>
          <p className="secondary-text stolzl-300 ">
            Fabzen Technologies Pvt Ltd. was first established in 2017 in Pune
            and has achieved the ISO Certificate for being a safe and secure
            company that works hard to provide the best security and is
            constantly working to create the most captivating and entertaining
            games for everyone.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className=""
          iconStyle={{ background: "#CE1057", color: "#CE1057" }}
          icon={<FaGraduationCap />}
          style={{ color: "GrayText" }}
        >
         <h1 className="stolzl-300 text-white text-2xl">
            Foundation of Fabzen Technologies
          </h1>
          <p className="secondary-text stolzl-300">
            Fabzen Technologies Pvt Ltd. was first established in 2017 in Pune
            and has achieved the ISO Certificate for being a safe and secure
            company that works hard to provide the best security and is
            constantly working to create the most captivating and entertaining
            games for everyone.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className=""
          iconStyle={{ background: "#CE1057", color: "#CE1057" }}
          icon={<FaGraduationCap />}
          style={{ color: "GrayText" }}
        >
          <h1 className="stolzl-300 text-white text-2xl">
            Foundation of Fabzen Technologies
          </h1>
          <p className="secondary-text stolzl-300">
            Fabzen Technologies Pvt Ltd. was first established in 2017 in Pune
            and has achieved the ISO Certificate for being a safe and secure
            company that works hard to provide the best security and is
            constantly working to create the most captivating and entertaining
            games for everyone.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className=""
          iconStyle={{ background: "#CE1057", color: "#CE1057" }}
          icon={<FaGraduationCap />}
          style={{ color: "GrayText" }}
        >
          <h1 className="stolzl-300 text-white text-2xl">
            Foundation of Fabzen Technologies
          </h1>
          <p className="secondary-text stolzl-300">
            Fabzen Technologies Pvt Ltd. was first established in 2017 in Pune
            and has achieved the ISO Certificate for being a safe and secure
            company that works hard to provide the best security and is
            constantly working to create the most captivating and entertaining
            games for everyone.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className=""
          iconStyle={{ background: "#CE1057", color: "#CE1057" }}
          icon={<FaGraduationCap />}
          style={{ color: "GrayText" }}
        >
          <h1 className="stolzl-300 text-white text-2xl">
            Foundation of Fabzen Technologies
          </h1>
          <p className="secondary-text ">
            Fabzen Technologies Pvt Ltd. was first established in 2017 in Pune
            and has achieved the ISO Certificate for being a safe and secure
            company that works hard to provide the best security and is
            constantly working to create the most captivating and entertaining
            games for everyone.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default StoryOf;
