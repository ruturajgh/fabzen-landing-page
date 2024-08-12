import React from "react";

function HomeService() {
  return (
    <div>
      

      <div className=" app-bg  mx-auto px-10 sm:px-6 p-8 lg:px-6      ">
        <div className=" mx-auto justify-center flex px-4 sm:px-6 lg:px-8 py-16">
          <div className="  grid md:grid-cols-2   md:items-center py-16 w-[75rem]">
            <div className="py-1 max-w-[75rem] ">
              <h1
                className="font-size-main stolzl-300 text-white w-[45rem]"
                style={{ lineHeight: "1.5" }}
              >
                UI/UX <br />
                <span className="text-color stolzl-400  ">Desgin</span>
                <span className="text-white font-bold stolzl-300">
                  {" "}
                  & Art Services
                </span>
              </h1>
              <p className="secondary-text stolzl-300 mt-3">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text.
              </p>
            </div>

            <div className=" ">
              <div className="flex justify-center">
                <div>
                  <img
                    className=" img-home-app rounded-md"
                    src={`/assets/images/ux-serviceshome-banner.png`}
                    alt="Image Description"
                    height={390}
                    width={390}
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeService;
