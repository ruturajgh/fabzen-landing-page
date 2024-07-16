import React from 'react';


const FooterSection = () => {
  return (
    <section className='bg-upfooter mt-10'>
      <div className="flex justify-center mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 m-2">
          <div className="col-span-1 md:col-span-1">
            <img className="mt-16" src={`/assets/images/sticker-2.png`} height="390" width="390" alt="" style={{ position: 'relative', marginTop: '120px' }} loading="lazy" />
          </div>
          <div className="col-span-1 md:col-span-1">
            <div className="mt-24">
              <h2 className="text-3xl text-center text-white font-stolzl-300">Create a measurable impact on your</h2>
              <h2 className="text-center text-6xl text-white mt-2"><strong className="font-stolzl-400">Games.</strong></h2>
              <div className="flex justify-center mb-10">
                <div className="me-5">
                <button className="button-gradient  text-white px-4 py-3 rounded-full mt-8 stolzl-300 text-1xl">
                Request a Quote
              </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-1 md:col-span-1 ms-32">
            <img src={`/assets/images/sticker-1.png`}  height="230" width="230" className="" style={{ position: 'relative', zIndex: '10', marginTop: '-60px' }} loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default FooterSection;
