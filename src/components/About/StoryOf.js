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
      <div className=" mx-auto py-16 ">
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
          iconStyle={{
            background: "#CE1057",
            color: "#FFFFFF",
            border: "none",
            borderRadius: "30%",
            boxShadow: "none",
          }}
          icon={
            <div
              className="text-center"
              style={{ color: "white  ", padding: "6px" }}
            >
              2017
            </div>
          }
          style={{ color: "GrayText" }}
        >
          <h1 className="stolzl-300 text-white text-2xl -mt-6">
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
          iconStyle={{
            background: "#CE1057",
            color: "#FFFFFF",
            border: "none",
            borderRadius: "30%",
            boxShadow: "none",
          }}
          icon={
            <div
              className="text-center"
              style={{ color: "white  ", padding: "6px" }}
            >
              2019
            </div>
          }
          style={{ color: "GrayText" }}
        >
         <h1 className="stolzl-300 text-white text-2xl -mt-6">
         Ludo Empire Launch
          </h1>
          <p className="secondary-text stolzl-300">
          In 2019, Fabzen Technologies launched its first gaming application, Ludo Empire, an RNG and ISO-certified online skill-based Ludo game that reignited the classic antique spirit of the popular childhood board game, Ludo.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className=""
          iconStyle={{
            background: "#CE1057",
            color: "#FFFFFF",
            border: "none",
            borderRadius: "30%",
            boxShadow: "none",
          }}
          icon={
            <div
              className="text-center"
              style={{ color: "white  ", padding: "6px" }}
            >
              2021
            </div>
          }
          style={{ color: "GrayText" }}
        >
          <h1 className="stolzl-300 text-white text-2xl -mt-6">
          Callbreak Empire Launch
          </h1>
          <p className="secondary-text stolzl-300">
          In 2021, Fabzen Technologies launched its second gaming application, Callbreak Empire, an ISO-certified online skill-based card game that bought India's best strategic trick-based card game, Callbreak, into the palm of everybody's hands.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className=""
          iconStyle={{
            background: "#CE1057",
            color: "#FFFFFF",
            border: "none",
            borderRadius: "30%",
            boxShadow: "none",
          }}
          icon={
            <div
              className="text-center"
              style={{ color: "white  ", padding: "6px" }}
            >
              2022
            </div>
          }
          style={{ color: "GrayText" }}
        >
          <h1 className="stolzl-300 text-white text-2xl -mt-6">
          5 years and many more to go
          </h1>
          <p className="secondary-text stolzl-300">
          In 2022, Fabzen Technologies completed its five years with about 1+ Crore trusted players in its base. With the continuous and fabulous efforts of the team, Fabzen has grown explicitly to where it is today and keeps on doing so.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className=""
          iconStyle={{
            background: "#CE1057",
            color: "#FFFFFF",
            border: "none",
            borderRadius: "30%",
            boxShadow: "none",
          }}
          icon={
            <div
              className="text-center"
              style={{ color: "white  ", padding: "6px" }}
            >
              2023
            </div>
          }
          style={{ color: "GrayText" }}
        >
          <h1 className="stolzl-300 text-white text-2xl -mt-6">
          Global Growth and Progress
          </h1>
          <p className="secondary-text stolzl-300">
          In 2023, Fabzen Technologies launched its third gaming application, Skill Patti Empire, a skill-based online card game that brought India’s most popular and oldest card game, Teen Patti, into the hands of all who enjoy card gaming.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default StoryOf;
