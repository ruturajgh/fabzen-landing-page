import React from "react";

function AboutHome() {
  return (
    <div
      className="about-home"

    >
      <div className="max-w-[75rem] mx-auto px-8 sm:px-6 lg:px-6  ">
        <div className="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">
          <div className="max-w-full ">
            <h1
              className="font-size-main stolzl-300 text-white"
              style={{ lineHeight: "1.5" }}
            >
              Making change, <br />
              <span className="text-color stolzl-400  ">Fabzen</span>
              <span className="text-white font-bold stolzl-300">
                {" "}
                at a time
              </span>
            </h1>
            <p className="secondary-text mt-3 leading-9">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text.
            </p>
          </div>

          <div className="relative ms-4 " style={{ zIndex: "-100" }}>
            <div className="flex justify-center align-middle">
              <div>
                <img
                  className=" img-home-app rounded-md"
                  src={`/assets/images/abouthome.png`}
                  alt="Image Description"
                  height={300}
                  width={300}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutHome;
