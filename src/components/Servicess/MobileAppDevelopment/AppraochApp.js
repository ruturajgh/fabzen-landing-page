import React from "react";

function ApproachApp() {
  return (
    <div>
      <div className="py-16">
        <div className="container-lg mx-auto">
          <h1 className="text-center stolzl-400 text-white text-4xl mb-5">
            Approach to App Development
          </h1>
          <p className="text-center secondary-text leading-8 stolzl-200 mb-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil eos
            minima hic quo architecto libero
            <br />
            temporibus fuga sunt reiciendis illo possimus perferendis ea debitis
            officia praesentium odit, suscipit ullam unde!
          </p>
        </div>
      </div>

      <div className="relative  text-white p-8 rounded-lg shadow-lg max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 text-center lg:text-left mb-6 lg:mb-0">
            <div className="flex justify-between gap-8 mb-28 ">
              <div>
                <h4
                  className="text-2xl stolzl-400  mb-4 text-right"
                  style={{ fontSize: "20px" }}
                >
                  Platform Compatibility
                </h4>
                <p
                  className="mb-4 secondary-text leading-6  text-right stolzl-400"
                  style={{ fontSize: "12px" }}
                >
                  Fabzen is an established mobile app development company in
                  India leveraging end-to-end mobile app development solutions
                  for diverse industry domains including.
                </p>
              </div>
              <div>
                <img src={`/assets/images/icon-compatibility.png`} height={250} width={250} loading="lazy" />
              </div>
            </div>
            <div className="flex justify-between gap-8  ">
              <div>
                <h4
                  className="text-2xl stolzl-400  mb-4 text-right"
                  style={{ fontSize: "20px" }}
                >
Industry Standard Process                </h4>
                <p
                  className="mb-4 secondary-text leading-6  text-right stolzl-400"
                  style={{ fontSize: "12px" }}
                >
                  Fabzen is an established mobile app development company in
                  India leveraging end-to-end mobile app development solutions
                  for diverse industry domains including.
                </p>
              </div>
              <div>
              <img src={`/assets/images/icon-industry.png`} height={250} width={250} loading="lazy" />
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-center aligin-middle">
            <img
              src={`/assets/images/young-boy-holding-laptop-computer-dark-room-generative-ai 2.png`} 
              alt="Character"
              className=" h-auto rounded-full"
            />
          </div>
          <div className="lg:w-1/2 text-center lg:text-left  lg:mt-0 lg:pl-6 mb-10">
            <div className="flex justify-between gap-8 mt-16 mb-24">
              <div>
              <img src={`/assets/images/icon-domain.png`} height={250} width={250} loading="lazy" />
              </div>
              <div>
                <h4
                  className="text-2xl stolzl-400 mb-4 text-left"
                  style={{ fontSize: "20px" }}
                >
                  Domain-Specific Solutions
                </h4>
                <p
                  className="mb-4 secondary-text leading-6 stolzl-400  text-left"
                  style={{ fontSize: "12px" }}
                >
                  Fabzen is an established mobile app development company in
                  India leveraging end-to-end mobile app development solutions
                  for diverse industry domains including.
                </p>
              </div>
            </div>
            <div className="flex justify-between gap-8 ">
              <div>
              <img src={`/assets/images/icon-advance.png`} height={250} width={250}  loading="lazy"/>
              </div>
              <div>
                <h4
                  className="text-2xl stolzl-400 mb-4 text-left"
                  style={{ fontSize: "20px" }}
                >
                  Advanced Technology
                </h4>
                <p
                  className="mb-4 secondary-text leading-6 stolzl-400  text-left"
                  style={{ fontSize: "12px" }}
                >
                  Fabzen is an established mobile app development company in
                  India leveraging end-to-end mobile app development solutions
                  for diverse industry domains including.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ApproachApp;
