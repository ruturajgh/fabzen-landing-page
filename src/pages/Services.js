import React, { useEffect } from 'react';
import Glide from '@glidejs/glide';
import '@glidejs/glide/dist/css/glide.core.min.css';
import '@glidejs/glide/dist/css/glide.theme.min.css';


const ServicesSection = () => {
  useEffect(() => {
    const glide04 = new Glide('.glide-04', {
      type: 'slider',
      focusAt: 'center',
      perView: 1,
      autoplay: 3500,
      animationDuration: 700,
      gap: 0,
      classes: {
        activeNav: '[&>*]:',
      },
    });

    glide04.mount();
  }, []);

  return (
    <section className=" container-lg max-w-7xl mx-auto mt-20">
      <div className="container-lg mx-auto">
        <h1 className="text-center stolzl-400 text-white text-6xl mb-5">Services</h1>
        <p className="text-center secondary-text leading-8 stolzl-200">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil eos minima hic quo architecto libero
          <br />
          temporibus fuga sunt reiciendis illo possimus perferendis ea debitis officia praesentium odit, suscipit ullam unde!
        </p>
      </div>
      <div className="  glide-04 -mt-05">
        {/* Slides */}
        <div className="overflow-hidden" data-glide-el="track">
          <ul className="relative  overflow-hidden p-0  flex flex-no-wrap">
            <li className="mt-3">
              <div className="py-1 mt-lg-5">
                <div className="flex flex-wrap m-3 mt-40">
                  <div className="w-1/3 p-3">
                    <div className="p-3 rounded-3xl border-0" style={{ backgroundColor: '#E84C58' }}>
                      <div className="flex mb-3 justify-center">
                        <div>
                          <img src={`${process.env.PUBLIC_URL}/assets/images/c-2.png`}  alt="" height="320" width="320" className="-mt-32 " loading="lazy" />
                        </div>
                      </div>
                      <div className='w-full '>
                        <h2 className="text-center text-3xl text-white stolzl-400">
                          Mobile <br /> Game Development
                        </h2>
                        <p className="text-white  text-center mt-3 mb-6 stolzl-200 leading-8 break-words  flex " >
                           Lorem ipsum dolor sit, amet consectetur  adipisicing elit. Nulla et earum ut, error maiores   quo.
                        Esse? Lorem ipsum dolor sit,  amet consectetur adipisicing elit. Maxime,
                        </p>
                      </div>




                    </div>
                  </div>
                  <div className="w-full md:w-1/3 p-3">
                    <div className="p-3 rounded-3xl border-0" style={{ backgroundColor: '#8F63F5' }}>
                      <div className="flex mb-3 justify-center">
                        <div>
                          <img src={`${process.env.PUBLIC_URL}/assets/images/warrior-kid.png`}  height="320" width="320" alt="" className="-mt-32" loading="lazy"
                           />
                        </div>
                      </div>
                      <div className='w-full '>
                        <h2 className="text-center text-3xl text-white stolzl-400">
                          Mobile <br /> Game Development
                        </h2>
                        <p className="text-white  text-center mt-3 mb-6 stolzl-200 leading-8 break-words  flex " >
                           Lorem ipsum dolor sit, amet consectetur  adipisicing elit. Nulla et earum ut, error maiores   quo.
                        Esse? Lorem ipsum dolor sit,  amet consectetur adipisicing elit. Maxime,
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="w-full md:w-1/3 p-3">
                    <div className="p-3 rounded-3xl border-0" style={{ backgroundColor: '#35C6F3' }}>
                      <div className="flex mb-3 justify-center">
                        <div>
                          <img src={`${process.env.PUBLIC_URL}/assets/images/tree.png`}  alt="" height="320" width="320" className="-mt-32" loading="lazy" />
                        </div>
                      </div>
                      <div className='w-full '>
                        <h2 className="text-center text-3xl text-white stolzl-400">
                          Mobile <br /> Game Development
                        </h2>
                        <p className="text-white  text-center mt-3 mb-6  stolzl-200 leading-8 break-words  flex " >
                           Lorem ipsum dolor sit, amet consectetur  adipisicing elit. Nulla et earum ut, error maiores   quo.
                        Esse? Lorem ipsum dolor sit,  amet consectetur adipisicing elit. Maxime,
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="mt-3">
              <div className="py-1 mt-lg-5">
                <div className="flex flex-wrap m-3 mt-40">
                  <div className="w-1/3 p-3">
                    <div className="p-3 rounded-3xl border-0" style={{ backgroundColor: '#E84C58' }}>
                      <div className="flex mb-3 justify-center">
                        <div>
                          <img src={`${process.env.PUBLIC_URL}/assets/images/c-2.png`}  alt="" height="320" width="320" className="-mt-32 " loading="lazy" />
                        </div>
                      </div>
                      <div className='w-full '>
                        <h2 className="text-center text-3xl text-white stolzl-400">
                          Mobile <br /> Game Development
                        </h2>
                        <p className="text-white  text-center mt-3 mb-6 stolzl-200 leading-8 break-words  flex " >
                           Lorem ipsum dolor sit, amet consectetur  adipisicing elit. Nulla et earum ut, error maiores   quo.
                        Esse? Lorem ipsum dolor sit,  amet consectetur adipisicing elit. Maxime,
                        </p>
                      </div>




                    </div>
                  </div>
                  <div className="w-full md:w-1/3 p-3">
                    <div className="p-3 rounded-3xl border-0" style={{ backgroundColor: '#8F63F5' }}>
                      <div className="flex mb-3 justify-center">
                        <div>
                          <img src={`${process.env.PUBLIC_URL}/assets/images/warrior-kid.png`}  height="320" width="320" alt="" className="-mt-32" />
                        </div>
                      </div>
                      <div className='w-full '>
                        <h2 className="text-center text-3xl text-white stolzl-400">
                          Mobile <br /> Game Development
                        </h2>
                        <p className="text-white  text-center mt-3 mb-6 stolzl-200 leading-8 break-words  flex " >
                           Lorem ipsum dolor sit, amet consectetur  adipisicing elit. Nulla et earum ut, error maiores   quo.
                        Esse? Lorem ipsum dolor sit,  amet consectetur adipisicing elit. Maxime,
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="w-full md:w-1/3 p-3">
                    <div className="p-3 rounded-3xl border-0" style={{ backgroundColor: '#35C6F3' }}>
                      <div className="flex mb-3 justify-center">
                        <div>
                          <img src={`${process.env.PUBLIC_URL}/assets/images/tree.png`}  alt="" height="320" width="320" className="-mt-32" loading="lazy" />
                        </div>
                      </div>
                      <div className='w-full '>
                        <h2 className="text-center text-3xl text-white stolzl-400">
                          Mobile <br /> Game Development
                        </h2>
                        <p className="text-white  text-center mt-3 mb-6  stolzl-200 leading-8 break-words  flex " >
                           Lorem ipsum dolor sit, amet consectetur  adipisicing elit. Nulla et earum ut, error maiores   quo.
                        Esse? Lorem ipsum dolor sit,  amet consectetur adipisicing elit. Maxime,
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
           
          </ul>
        </div>
        {/* Controls */}
        <div className="flex items-center justify-center w-full gap-4 p-4">
          <button
            className="inline-flex items-center justify-center w-8 h-8 transition duration-300 rounded-full lg:w-12 lg:h-12 text-slate-700"
            data-glide-dir="<"
            aria-label="prev slide"
            style={{ backgroundColor: '#420E3A', border: '2px solid #884C69' }}
          >
            <span
              className="text-white inline-block text-transparent bg-clip-text fa-solid fa-chevron-left fs-3 font-bold"
              style={{
                background: 'linear-gradient(to right, #C70062,#FF8A00)',
                WebkitTextFillColor: 'transparent',
                WebkitBackgroundClip: 'text',
              }}
            ></span>
          </button>
          <button
            className="inline-flex items-center justify-center w-8 h-8 transition duration-300 rounded-full lg:w-12 lg:h-12 text-slate-700 border-slate-700 hover:text-slate-900 hover:border-slate-900 focus-visible:outline-none bg-white/20"
            data-glide-dir=">"
            aria-label="next slide"
            style={{ backgroundColor: '#420E3A', border: '2px solid #884C69' }}
          >
            <span
              className="fa-solid fa-chevron-right fs-3 font-bold"
              style={{
                background: 'linear-gradient(to right, #C70062,#FF8A00)',
                WebkitTextFillColor: 'transparent',
                WebkitBackgroundClip: 'text',
              }}
            ></span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
