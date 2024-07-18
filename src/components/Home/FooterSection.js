import React from "react";

const FooterSection = () => {
  return (
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
  );
};

export default FooterSection;
