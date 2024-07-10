/* eslint-disable jsx-a11y/alt-text */
import React from "react";



function SecondAppSection() {
  return (
    <div className="">
      <div className="flex flex-wrap justify-center ">
        {/* card 1 */}
        <div className="p-4 max-w-sm">
          <div className="flex rounded-lg h-full p-8 flex-col">
            <div className="flex justify-center mb-3">
              <div className="mb-3">
                <img
                  src={`/assets/images/icon-tool.png`}
                  height={80}
                  width={80}
                />
              </div>
            </div>
            <h2 className="text-center  text-white mb-3 stolzl-400">
              Best Tools
            </h2>
            <div className="flex flex-col justify-between flex-grow">
              <p
                className="  text-center  secondary-text"
                style={{ fontSize: "15px" }}
              >
                Lorem ipsum dolor sit amet. In quos laboriosam non neque eveniet
                33 nihil molestias.
              </p>
            </div>
          </div>
        </div>
        {/* card 2 */}
        <div className="p-4 max-w-sm">
          <div className="flex rounded-lg h-full p-8 flex-col">
            <div className="flex justify-center mb-3">
            <div className="mb-3">
                <img
                  src={`/assets/images/icon-tool.png`}
                  height={80}
                  width={80}
                />
              </div>
            </div>
            <h2 className="text-center  text-white mb-3 stolzl-400">
              Best Tools
            </h2>
            <div className="flex flex-col justify-between flex-grow">
              <p
                className="  text-center  secondary-text"
                style={{ fontSize: "15px" }}
              >
                Lorem ipsum dolor sit amet. In quos laboriosam non neque eveniet
                33 nihil molestias.
              </p>
            </div>
          </div>
        </div>
        {/* card 3 */}
        <div className="p-4 max-w-sm">
          <div className="flex rounded-lg h-full p-8 flex-col">
            <div className="flex justify-center mb-3">
            <div className="mb-3">
                <img
                  src={`/assets/images/icon-tool.png`}
                  height={80}
                  width={80}
                />
              </div>
            </div>
            <h2 className="text-center  text-white mb-3 stolzl-400">
              Best Tools
            </h2>
            <div className="flex flex-col justify-between flex-grow">
              <p
                className="  text-center  secondary-text"
                style={{ fontSize: "15px" }}
              >
                Lorem ipsum dolor sit amet. In quos laboriosam non neque eveniet
                33 nihil molestias.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SecondAppSection;
