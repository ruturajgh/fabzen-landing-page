import React from "react";

function GameHome() {
  return (
    <div>
      <div>
        <div>
          <div className="gameing-branding-bg  max-w-[100rem] mx-auto ">
            <div className="mx-auto ">
              <div className="max-w-[80rem] mx-auto px-8 sm:px-6 lg:px-6  ">
                <div className="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center mb-42">
                  <div className="  ">
                    <h1
                      className="font-size-main stolzl-300 text-white w-[45rem] "
                      style={{ lineHeight: "1.5" }}
                    >
                      <span>Game</span><br></br>
                      <span className="text-color stolzl-400  ">Branding</span>
                      <span className="text-white font-bold stolzl-300">
                        {" "}
                        & Marketing
                      </span>
                    </h1>
                    <p className="secondary-text mt-3 leading-9">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text.
                    </p>
                  </div>

                  <div className=" ms-4 ">
                    <div className="flex justify-center align-middle mb-16">
                      <div>
                        <img
                          className=" img-home-app rounded-md"
                          src={`/assets/images/gbranding-home.png`}
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
        </div>
      </div>
    </div>
  );
}

export default GameHome;
