import React, { useEffect } from 'react';
import Glide from '@glidejs/glide';
import '@glidejs/glide/dist/css/glide.core.min.css';
import '@glidejs/glide/dist/css/glide.theme.min.css';
import 'tailwindcss/tailwind.css';


const GameDevelopmentProcess = () => {


  useEffect(() => {
    const glide = new Glide(".glide-custom", {
      type: "slider",
      focusAt: "center",
      perView: 1,
      autoplay: 3500,
      animationDuration: 700,
      gap: 0,
      classes: {
        activeNav: "[&>*]:",
      },
    });

    glide.mount();
  }, []);

  return (
    <div className="relative glide-custom mt-16 max-w-6xl mx-auto ">
      {/* Slides */}
      <div className="overflow-hidden w-9xl " data-glide-el="track">
        <ul className="relative  p-0  flex  mt-28">

          <li className="w-2/4">
            <div
              className="bg-img container-lg mx-auto rounded-3xl p-5 w-full"

            >
              <div className="flex flex-wrap">
                <div className=" w-1/2 p-4">
                <div className="flex flex-col justify-around h-full">
                    <div>
                      <h2 className="text-3xl font-normal text-white stolzl-400 mb-10" style={{ lineHeight: '1.3' }}>
                        Our
                        
                        Game <br/> Development Process
                      </h2>
                    </div>
                    <div>
                      <h4 className="text-white text-2xl mb-3">Requirement Gathering</h4>
                      <p className="text-gray-400 ">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem commodi corrupti,
                        totam inventore aut quam eius pariatur corporis ad. totam inventore aut quam eius
                        pariatur corporis ad. Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
                        nihil id, quam dignissimos aliquam consequuntur temporibus!
                      </p>
                      <div className="mt-3" data-glide-el="controls">
                        <button
                          className="inline-flex m-2 items-center justify-center w-8 h-8 transition duration-300 rounded-full text-slate-700"
                          data-glide-dir="<"
                          aria-label="prev slide"
                          style={{ backgroundColor: '#420E3A', border: '2px solid #884C69' }}
                        >
                          <span
                            className="text-white inline-block text-transparent bg-clip-text fa-solid fa-chevron-left fs-5 font-bold"
                            style={{
                              background: 'linear-gradient(to right, #C70062,#FF8A00)',
                              WebkitTextFillColor: 'transparent',
                              WebkitBackgroundClip: 'text',
                            }}
                          ></span>
                        </button>
                        <button
                          className="inline-flex  items-center justify-center w-8 h-8 transition duration-300 rounded-full text-slate-700 border-slate-700 hover:text-slate-900 hover:border-slate-900 focus-visible:outline-none bg-white/20"
                          data-glide-dir=">"
                          aria-label="next slide"
                          style={{ backgroundColor: '#420E3A', border: '2px solid #884C69' }}
                        >
                          <span
                            className="text-white inline-block text-transparent bg-clip-text fa-solid fa-chevron-right fs-5 font-bold"
                            style={{
                              background: 'linear-gradient(to right, #C70062,#FF8A00)',
                              WebkitTextFillColor: 'transparent',
                              WebkitBackgroundClip: 'text',
                            }}
                          ></span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-1/2 p-4">
                  <img style={{ zIndex: "10", position: "relative",marginTop:"-88px" }}
                    src={`/assets/images/9c21fdb5e89c26792ed5385d76064ec4.png`} 
                    height="690"
                    width="690"
                    className="transform scale-x-[-1] "
                    alt=""

                  />
                </div>
              </div>
            </div>
          </li>
          <li className="w-2/4">
            <div
              className="bg-img container-lg mx-auto rounded-3xl p-5 w-full"
             
            >
              <div className="flex flex-wrap">
                <div className=" md:w-1/2 p-4">
                  <div className="flex flex-col justify-between h-full">
                    <div>
                      <h2 className="text-3xl font-normal text-white stolzl-400 mb-10" style={{ lineHeight: '1.3' }}>
                        Our
                       
                        Game  <br /> Development Process
                      </h2>
                    </div>
                    <div>
                      <h4 className="text-white stolzl-200 text-2xl mb-3">Requirement Gathering</h4>
                      <p className="secondary-text stolzl-200">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem commodi corrupti,
                        totam inventore aut quam eius pariatur corporis ad. totam inventore aut quam eius
                        pariatur corporis ad. Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
                        nihil id, quam dignissimos aliquam consequuntur temporibus!
                      </p>
                      <div className="mt-3" data-glide-el="controls">
                        <button
                          className="inline-flex m-2 items-center justify-center w-8 h-8 transition duration-300 rounded-full text-slate-700"
                          data-glide-dir="<"
                          aria-label="prev slide"
                          style={{ backgroundColor: '#420E3A', border: '2px solid #884C69' }}
                        >
                          <span
                            className="text-white inline-block text-transparent bg-clip-text fa-solid fa-chevron-left fs-5 font-bold"
                            style={{
                              background: 'linear-gradient(to right, #C70062,#FF8A00)',
                              WebkitTextFillColor: 'transparent',
                              WebkitBackgroundClip: 'text',
                            }}
                          ></span>
                        </button>
                        <button
                          className="inline-flex items-center justify-center w-8 h-8 transition duration-300 rounded-full text-slate-700 border-slate-700 hover:text-slate-900 hover:border-slate-900 focus-visible:outline-none bg-white/20"
                          data-glide-dir=">"
                          aria-label="next slide"
                          style={{ backgroundColor: '#420E3A', border: '2px solid #884C69' }}
                        >
                          <span
                            className="text-white inline-block text-transparent bg-clip-text fa-solid fa-chevron-right fs-5 font-bold"
                            style={{
                              background: 'linear-gradient(to right, #C70062,#FF8A00)',
                              WebkitTextFillColor: 'transparent',
                              WebkitBackgroundClip: 'text',
                            }}
                          ></span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-1/2 p-4">
                <img style={{ zIndex: "10", position: "relative",marginTop:"-88px" }}
                     src={`/assets/images/9c21fdb5e89c26792ed5385d76064ec4.png`} 
                    height="690"
                    width="690"
                    className="transform scale-x-[-1] "
                    alt=""

                  />
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default GameDevelopmentProcess;
