import React from "react";

function WhichOnline() {
  return (
    <div className="rightsidebg">
      <div>
        <div className="max-w-[75rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-28 md:items-center">
            <div className="">
              <h1
                className="text-3xl stolzl-400  text-gray-800 text-white "
                style={{ lineHeight: "1.5" }}
              >
                Which Online Marketing Services are Right for my Business?
              </h1>
              <p className="secondary-text mt-3">
                At Fabzen, our team of skilled mobile game developers loves
                taking the conceptive game from a dream to a reality. Our game
                app development expertise lies in end-to-end tailor-made
                solutions powered by robust code, high-quality graphics, and
                top-shelf user interfaces.
                <br /> <br />
                <h1 className="text-white">
                  Which services are best for your business depends on a few
                  things:
                </h1>
                <div className=" ">
                  <div className="w-[9rem] ">
                    <span
                      className=" text-3xl  stolzl-300"
                    
                    >
                      <span style={{ color: "#CE1057" }}>+</span>
                    </span>
                    <span className=" stolzl-300 text-white "> Your Budget</span>
                  </div>
                  <div className="w-[9rem] ">
                    <span
                      className=" text-3xl  stolzl-300"
                     
                    >
                      <span style={{ color: "#CE1057" }}>+</span>
                    </span>
                    <span className=" stolzl-300  text-white "> Your Goals</span>
                  </div>
                  <div className="w-[16rem] ">
                    <span
                      className=" text-3xl  stolzl-300"
                      
                    >
                      <span style={{ color: "#CE1057" }}>+</span>
                    </span>
                    <span className=" stolzl-300  text-white "> Your Product & Services</span>
                  </div>
                  <div className="w-[13rem] ">
                    <span
                      className=" text-3xl  stolzl-300"
                    
                    >
                      <span  style={{ color: "#CE1057" }}>+</span>
                    </span>
                    <span className=" stolzl-300  text-white "> Your Target Audience</span>
                  </div>
                </div>
              </p>
            </div>

            <div className="relative ms-4 flex justify-center align-middle bg-creative">
              <div>
                <img
                  className=" img-home-app rounded-md"
                  src={`/assets/images/gbranding-online.png`}
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
  );
}

export default WhichOnline;
