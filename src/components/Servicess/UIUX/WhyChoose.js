import React from "react";
import WeHiring from "../../Careers/WeHiring";

const WhyChoose = () => {
  return (
    <div>
      <div className="py-24">
        <div className="container-lg mx-auto ">
          <h1 className="text-center stolzl-400 text-white text-5xl mb-5">
            Why Choose Fabzen for UI/UX Design
          </h1>
          <p className="text-center secondary-text leading-8 stolzl-200 mb-10">
            Our cross-functional team of UI designers are capable of curating
            mind-blowing visuals to depict your business workflow.
            <br /> We provide UI/UX consulting services to build front-end
            interfaces that meet business objectives and client needs.
          </p>
        </div>
        <div className="grid max-w-screen-xl   py-8 mx-auto lg:gap- xl:gap-0 lg:py-12 lg:grid-cols-12 -m-20">
          <div className="hidden lg:mt-0 lg:col-span-6 lg:flex  justify-space ">
            <img
              className=" gameimage "
              src={`/assets/images/whycooseus.png`}
              alt="Member of"
              loading="lazy"
            />
          </div>
          <div className="mr-auto place-self-center lg:col-span-6">
            {/* card-1 */}
            <div className="flex justify-between  mx-auto">
              <div
                class="rounded-md    h-42 p-6 w-42 item-center justify-center m-8  "
                style={{ background: "#2F1428" }}
              >
                <img
                  src={`/assets/images/icon-preproduction.png`}
                  height={190}
                  width={190}
                />
              </div>
              <div className="m-5">
                <h2 className="text-white stolzl-400 text-3xl mb-5 mt-3">
                  Innovative Design
                </h2>
                <p className="secondary-text ">
                  At this stage, game developers brainstorm ideas and come up
                  with a concept for a game. This includes choosing the game’s
                  target audience, genre, style, and overall theme.
                </p>
              </div>
            </div>
            {/* card-2 */}
            <div className="flex justify-between  mx-auto">
              <div
                class="rounded-md    h-42 p-6 w-42 item-center justify-center m-8  "
                style={{ background: "#2F1428" }}
              >
                <img
                  src={`/assets/images/icon-people.png`}
                  height={190}
                  width={190}
                />
              </div>
              <div className="m-5">
                <h2 className="text-white stolzl-400 text-3xl mb-5 mt-3">
                  Dedicated Team
                </h2>
                <p className="secondary-text ">
                  At this stage, game developers brainstorm ideas and come up
                  with a concept for a game. This includes choosing the game’s
                  target audience, genre, style, and overall theme.
                </p>
              </div>
            </div>
            {/* card-3 */}
            <div className="flex justify-between  mx-auto">
              <div
                class="rounded-md    h-42 p-6 w-42 item-center justify-center m-8  "
                style={{ background: "#2F1428" }}
              >
                <img
                  src={`/assets/images/icon-production.png`}
                  height={190}
                  width={190}
                />
              </div>
              <div className="m-5">
                <h2 className="text-white stolzl-400 text-3xl mb-5 mt-3">
                  User Friendly
                </h2>
                <p className="secondary-text ">
                  At this stage, game developers brainstorm ideas and come up
                  with a concept for a game. This includes choosing the game’s
                  target audience, genre, style, and overall theme.
                </p>
              </div>
            </div>

            {/* card-4 */}
            <div className="flex justify-between  mx-auto">
              <div
                class="rounded-md    h-42 p-6 w-42 item-center justify-center m-8  "
                style={{ background: "#2F1428" }}
              >
                <img
                  src={`/assets/images/icon-testing.png`}
                  height={190}
                  width={190}
                />
              </div>
              <div className="m-5">
                <h2 className="text-white stolzl-400 text-3xl mb-5 mt-3">
                  Technical Expertise
                </h2>
                <p className="secondary-text ">
                  At this stage, game developers brainstorm ideas and come up
                  with a concept for a game. This includes choosing the game’s
                  target audience, genre, style, and overall theme.
                </p>
              </div>
            </div>

            {/* card-5 */}
          </div>
        </div>
      </div>
      <section className="bg-upfootertest mt-16  max-w-[100rem] mx-auto">
        <div className="flex justify-center mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 m-2">
            <div className="col-span-1 md:col-span-1"></div>
            <div className="col-span-1 md:col-span-1">
              <div className="mt-24">
                <div className="flex justify-center">
                  <div>
                    <div>
                      <h2 className="text-[29px] text-center  w-[90rem] text-white font-stolzl-300">
                        Create a measurable impact on your
                      </h2>
                      <h2 className="text-center text-6xl text-white mt-2">
                        <strong className="font-stolzl-400">Games.</strong>
                      </h2>
                      <div className=" flex justify-center">
                        <button className="button-gradient text-white px-4 py-3 rounded-full mt-8 stolzl-300 text-1xl mb-32">
                          Request a Quote
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center"></div>
              </div>
            </div>
            <div className="col-span-1 md:col-span-1 ms-32"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyChoose;
