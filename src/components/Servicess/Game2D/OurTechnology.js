import React from "react";
import { useEffect } from "react";
import Glide from "@glidejs/glide";
import "@glidejs/glide/dist/css/glide.core.min.css";
import "@glidejs/glide/dist/css/glide.theme.min.css";
import "tailwindcss/tailwind.css";

// import utility from "../../asstes/images/unity.png"
// import react0 from "../../asstes/images/react.png"
// import swift0 from "../../asstes/images/swift.png"

const OurTechnologyUse = () => {
  useEffect(() => {
    const glide = new Glide(".glide-unique", {
      type: "slider",
      focusAt: "center",
      perView: 1,
      // autoplay: 3500,
      // animationDuration: 700,
      gap: 0,
      classes: {
        activeNav: "[&>*]:",
      },
    });

    glide.mount();
  }, []);

  return (
    <section className="">
      <div className="container-lg mx-auto py-12">
        <h1 className="text-center stolzl-400 text-white text-4xl mb-5">
         Our Technology Expertise
        </h1>
        <p className="text-center secondary-text leading-8 stolzl-200 mb-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil eos
          minima hic quo architecto libero
          <br />
          temporibus fuga sunt reiciendis illo possimus perferendis ea debitis
          officia praesentium odit, suscipit ullam unde!
        </p>
      </div>
      <div className="relative w-full glide-unique">
        {/* Slides */}
        <div className="overflow-hidden" data-glide-el="track">
          <ul className="relative w-full overflow-hidden p-0  flex flex-nowrap">
            <li className="w-full">
              <div className="flex flex-wrap justify-center ">
                {/* card 1 */}
                <div className="p-4 max-w-sm">
                  <div
                    className="flex rounded-lg  p-8 "
                    style={{ background: "#2F1428" }}
                  >
                    <img
                      src={`/assets/images/react.png`}
                         height={190}
                      width={190}
                      loading="lazy"
                    />
                  </div>
                </div>
                {/* card 2 */}
                <div className="p-4 max-w-sm">
                  <div
                    className="flex rounded-lg  p-8 "
                    style={{ background: "#2F1428" }}
                  >
                    <img
                      src={`/assets/images/react.png`}
                         height={190}
                      width={190}
                      loading="lazy"
                    />
                  </div>
                </div>
                {/* card 3 */}
                <div className="p-4 max-w-sm">
                  <div
                    className="flex rounded-lg  p-8 "
                    style={{ background: "#2F1428" }}
                  >
                    <img
                      src={`/assets/images/react.png`}
                         height={190}
                      width={190}
                      loading="lazy"
                    />
                  </div>
                </div>
                <div className="p-4 max-w-sm">
                  <div
                    className="flex rounded-lg  p-8 "
                    style={{ background: "#2F1428" }}
                  >
                    <img
                      src={`/assets/images/react.png`}
                         height={190}
                      width={190}
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </li>
            <li className="w-full">
              <div className="flex flex-wrap justify-center ">
                {/* card 1 */}
                <div className="p-4 max-w-sm">
                  <div
                    className="flex rounded-lg  p-8 "
                    style={{ background: "#2F1428" }}
                  >
                    <img
                      src={`/assets/images/react.png`}
                      height={190}
                      width={190}
                      loading="lazy"
                    />
                  </div>
                </div>
                {/* card 2 */}
                <div className="p-4 max-w-sm">
                  <div
                    className="flex rounded-lg  p-8 "
                    style={{ background: "#2F1428" }}
                  >
                    <img
                      src={`/assets/images/react.png`}
                         height={190}
                      width={190}
                      loading="lazy"
                    />
                  </div>
                </div>
                {/* card 3 */}
                <div className="p-4 max-w-sm">
                  <div
                    className="flex rounded-lg  p-8 "
                    style={{ background: "#2F1428" }}
                  >
                    <img
                      src={`/assets/images/react.png`}
                         height={190}
                      width={190} alt="technology"
                    />
                  </div>
                </div>
                <div className="p-4 max-w-sm">
                  <div
                    className="flex rounded-lg  p-8 "
                    style={{ background: "#2F1428" }}
                  >
                    <img
                      src={`/assets/images/react.png`}
                         height={190}
                      width={190}
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        {/* Controls */}
        <div
          className="flex items-center justify-center w-full gap-4 p-4 "
          data-glide-el="controls"
        >
          <button
            className="inline-flex items-center justify-center w-8 h-8 transition duration-300 rounded-full lg:w-12 lg:h-12 text-slate-700"
            data-glide-dir="<"
            aria-label="prev slide"
            style={{ backgroundColor: "#420E3A", border: "2px solid #884C69" }}
          >
            <span
              className="text-white inline-block text-transparent bg-clip-text fa-solid fa-chevron-left fs-3 font-bold"
              style={{
                background: "linear-gradient(to right, #C70062,#FF8A00)",
                WebkitTextFillColor: "transparent",
                WebkitBackgroundClip: "text",
              }}
            ></span>
          </button>
          <button
            className="inline-flex items-center justify-center w-8 h-8 transition duration-300 rounded-full lg:w-12 lg:h-12 text-slate-700 border-slate-700 hover:text-slate-900 hover:border-slate-900 focus-visible:outline-none bg-white/20"
            data-glide-dir=">"
            aria-label="next slide"
            style={{ backgroundColor: "#420E3A", border: "2px solid #884C69" }}
          >
            <span
              className="fa-solid fa-chevron-right fs-3 font-bold"
              style={{
                background: "linear-gradient(to right, #C70062,#FF8A00)",
                WebkitTextFillColor: "transparent",
                WebkitBackgroundClip: "text",
              }}
            ></span>
          </button>
        </div>
      </div>

     
    </section>
  );
};

export default OurTechnologyUse;
