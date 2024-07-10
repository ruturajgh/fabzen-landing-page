import React from "react";

function HeroSection() {
  return (
    <div>
      <div className="one-section container-lgmx-30   p-16 -mt-40 ">
        <div className="max-w-[75rem] mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center py-16">
            <div className="py-1">
              <h1
                className="text-5xl  stolzl-400 text-white w-full mt-16 "
                style={{ lineHeight: "1.5" }}
              >
                Explore New Games with Your Custom Decks
              </h1>
              <p className="secondary-text stolzl-300 mt-3">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text.
              </p>
              <button className="button-gradient  text-white px-4 py-3 rounded-full mt-8 stolzl-300 text-1xl mb-32">
                Find out more
              </button>
            </div>

            <div className="relative ms-4">
              <div className="flex justify-center">
                <div>
                  <img
                    className=" img-home-app rounded-md"
                    src={`/assets/images/main-side-right.png`}
                    alt="Image Description"
                    height={450}
                    width={450}
                    style={{zIndex: "-100" }}
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

export default HeroSection;
