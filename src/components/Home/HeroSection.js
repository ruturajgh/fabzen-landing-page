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

            <div className=" ms-4">
              <div className="flex justify-center">
                <div>
                  <img
                    className=" img-home-app rounded-md"
                    src={`/assets/images/home-sticker.png`}
                    alt="Image Description"
                    height={380}
                    width={380}
                    // style={{zIndex: "-100" }}
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-about ">
        <div className="overlay000 bg-dark p-5">
          <div className=" bg-secondsection max-w-[85rem] mx-auto px-10 sm:px-6 p-8 lg:px-6   bg-[#2F1428]  bg-second rounded-xl ">
            <div className="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center h-full ">
              <div className="max-w-full m-7 my-auto  ">
                <h1
                  className=" stolzl-400 text-white"
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
                <button className="button-gradient  text-white px-4 py-3 rounded-full mt-8 stolzl-300 text-1xl ">
                  Request a Quote
                </button>
              </div>

              <div className=" ms-4 ">
                <div className="flex justify-center align-middle mb-16">
                  <div>
                    {/* <img
                      className=" img-home-app rounded-md"
                      src={`/assets/images/pn-cover.png`}
                      alt="Image Description"
                      height={590}
                      width={590}
                    /> */}
                  </div>
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
