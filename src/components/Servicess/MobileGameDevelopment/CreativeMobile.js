import React from "react";


function CreativeMobile() {
  return (
    <div>
      <div className="max-w-[75rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-28 md:items-center">
          <div className="">
            <h1
              className="text-3xl stolzl-400  text-gray-800 text-white "
              style={{ lineHeight: "1.5" }}
            >
              We Craft Creative Mobile Games
            </h1>
            <p className="secondary-text mt-3">
              At Fabzen, our team of skilled mobile game developers loves taking
              the conceptive game from a dream to a reality. Our game app
              development expertise lies in end-to-end tailor-made solutions
              powered by robust code, high-quality graphics, and top-shelf user
              interfaces.
              <br /> <br />
              At Fabzen, our team of skilled mobile game developers loves taking
              the conceptive game from a dream to a reality. Our game app
              development expertise lies in end-to-end tailor-made solutions
              powered by robust code, high-quality graphics, and top-shelf user
              interfaces.
            </p>
          </div>

          <div className="relative ms-4 flex justify-center align-middle bg-creative">
            <div>
              <img
                className=" img-home-app rounded-md"
                src={`/assets/images/avatar.png`}
                alt="Image Description"
                height={350}
                width={350}
                loading="lazy"
              />
            </div>
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
                  <button className="button-gradient  text-white px-4 py-3 rounded-full mt-8 stolzl-300 text-1xl mb-32">Request a Quote</button>
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

export default CreativeMobile;
