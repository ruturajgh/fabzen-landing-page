import React from "react";

function OurOffices() {
  return (
    <div>
      <div className=" mx-auto py-28 ">
        <h1 className="text-center stolzl-400 text-white text-4xl mb-5">
          Our Offices
        </h1>
        <p className="text-center secondary-text leading-8 stolzl-200 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil eos
          minima hic quo architecto libero
          <br />
          temporibus fuga sunt reiciendis illo possimus perferendis ea debitis
          officia praesentium odit, suscipit ullam unde!
        </p>
      </div>

      <div className="flex justify-center">
        <div>
          <img
            src={`/assets/images/OurOffice.png`}
            height={1100}
            width={1100}
          />
        </div>
      </div>
      <div className=" mx-auto py-28 mb-38 ">
        <h1 className="text-center stolzl-400 text-white text-4xl mb-5">
          Featured On
        </h1>
        <p className="text-center secondary-text leading-8 stolzl-200 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil eos
          minima hic quo architecto libero
          <br />
          temporibus fuga sunt reiciendis illo possimus perferendis ea debitis
          officia praesentium odit, suscipit ullam unde!d
        </p>
      </div>
     <div>
     <div className="flex justify-center gap-6 -mt-16 mb-16">
        <div className="">
          <img
            src={`/assets/images/logo-1.png`}
            height={250}
            width={250}
          />
        </div>
        <div>
          <img
            src={`/assets/images/logo-2.png`}
            height={250}
            width={250}
          />
        </div>
        <div>
          <img
            src={`/assets/images/logo-3.png`}
            height={250}
            width={250}
          />
        </div>
        <div>
          <img
            src={`/assets/images/logo-4.png`}
            height={250}
            width={250}
          />
        </div>
      </div>
     </div>
      <section className="bg-upfootertest mt-16">
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 m-2">
            <div className="col-span-1 md:col-span-1"></div>
            <div className="col-span-1 md:col-span-1">
              <div className="mt-24">
                <h2 className="text-3xl text-center text-white font-stolzl-300">
                  Create a measurable impact on your
                </h2>
                <h2 className="text-center text-6xl text-white mt-2">
                  <strong className="font-stolzl-400">Games.</strong>
                </h2>
                <div className="flex justify-center ">
                  <div className="me-5">
                    <button className="button-gradient  text-white px-4 py-3 rounded-full mt-8 stolzl-300 text-1xl mb-32">
                      Request a Quote
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-1 md:col-span-1 ms-32"></div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default OurOffices;
