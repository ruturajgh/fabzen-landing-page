import React from "react";

function OurOffices() {
  return (
    <div>
      <div className=" mx-auto py-16 ">
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
            <img src={`/assets/images/logo-1.png`} height={250} width={250} />
          </div>
          <div>
            <img src={`/assets/images/logo-2.png`} height={250} width={250} />
          </div>
          <div>
            <img src={`/assets/images/logo-3.png`} height={250} width={250} />
          </div>
          <div>
            <img src={`/assets/images/logo-4.png`} height={250} width={250} />
          </div>
        </div>
      </div>
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
    </div>
  );
}

export default OurOffices;
