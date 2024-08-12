import React from "react";

const FooterSection = () => {
  return (
    <section className="bg-upfootertest mt-16  mx-auto">
      <div className="flex justify-center mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 m-2">
          <div className="col-span-1 md:col-span-1"></div>
          <div className=" max-w-[95rem] gap-4 md:gap-8 xl:gap-20 md:items-center mb-42 ">
              <div className="max-w-full m-7 mt-40  w-[100%] relative   ">
                <h1
                  className=" stolzl-300 text-white text-center "
                  style={{ lineHeight: "1.5", fontSize: "25px" }}
                >
                  Create a measurable impact on your
                </h1>
                <p className="secondary-text mt-3 leading-9 text-center text-6xl font-bold text-white mt-4 mb-6">
                Games.
                </p>
                <div className="flex justify-center">
                  <div>
                  <button className="button-gradient  text-white px-4 py-3 rounded-full mt-8 stolzl-300 text-1xl mb-32">
                  Read More
                </button>
                  </div>
                </div>
              </div>

              
            </div>
          <div className="col-span-1 md:col-span-1 ms-32"></div>
        </div>
      </div>
    </section>
  );
};

export default FooterSection;
