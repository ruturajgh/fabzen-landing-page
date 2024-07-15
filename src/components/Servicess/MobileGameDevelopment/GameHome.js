import React from "react";

function GameHome() {
  return (
    <div className="bg-mobilegame">
      <div className="max-w-[65rem] mx-auto px-8 sm:px-6 lg:px-6 -mt-10 ">
        <div className="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">
          <div className="max-w-full ">
            <h2
              className=" stolzl-300 text-white max-w-full font-size-main"
              style={{ lineHeight: "1.5" }}
            >
              Mobile
              <span className="text-color stolzl-400  "> Game</span>
              <span className="text-white font-bold stolzl-300">
                {" "}
                Development
              </span>
            </h2>
            <p className="secondary-text mt-3 leading-9">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text.
            </p>
          </div>

          <div className="relative ms-4 -mt-10" >
            <div className="flex justify-center align-middle">
              <div>
                <img
                  className=" img-home-app rounded-md"
                  src={`/assets/images/gamehome.png`}
                  alt="Image Description"
                  height={320}
                  width={320}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GameHome;
