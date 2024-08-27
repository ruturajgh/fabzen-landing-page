import React from "react";
import { FaCircle } from "react-icons/fa6";

function HeroSection() {
  return (
    <div>
      <div className=" ">
      <div className="overlay000 bg-dark ">
          <div className=" bg-mainsection max-w-[100rem] mx-auto px-10 sm:px-6 p-8 lg:px-6  ">
            <div className=" max-w-[100rem] gap-2 md:gap- xl:gap-10 md:items-center mb-42 ">
              <div className="max-w-full m-7 mt-64  w-[50%] relative    ms-24 ">
                <h1
                  className=" stolzl-400 text-white "
                  style={{ lineHeight: "1.5", fontSize: "46px" }}
                >
                  Explore New Games with  <br /> Your Custom Decks
                </h1>
                <p className="secondary-text mt-3 leading-9">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. <br /> Lorem Ipsum has been the industry's
                  standard dummy text.
                </p>
                <button className="button-gradient  text-white px-4 py-3 rounded-full mt-8 stolzl-300 text-1xl mb-32">
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-about ">
        <div className="overlay000 bg-dark   ">
          <div className=" bg-secondsection max-w-[80rem] mx-auto px-10 sm:px-6 p-8 lg:px-6   bg-[#2F1428]  bg-second rounded-xl ">
            <div className=" max-w-[70rem] gap-4 md:gap-8 xl:gap-20 md:items-center mb-42 ">
              <div className="max-w-full m-7 mt-40  w-[50%] relative   ">
                <h1
                  className=" stolzl-400 text-white "
                  style={{ lineHeight: "1.5", fontSize: "36px" }}
                >
                  We're a global Game design agency curating experiences that
                  users fall in love with
                </h1>
                <p className="secondary-text mt-3 leading-9">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text.
                </p>
                <button className="button-gradient  text-white px-4 py-3 rounded-full mt-8 stolzl-300 text-1xl mb-32">
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
