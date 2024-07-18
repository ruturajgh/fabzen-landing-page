import React from 'react'

function CloudHome() {
  return (
    <div>
      <div>
        <div>
          <div className="cloud-bg max-w-[100rem] mx-auto ">
            <div className="mx-auto">
              <div className="max-w-[80rem] mx-auto px-8 sm:px-6 lg:px-6  ">
                <div className="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center mb-42">
                  <div className="max-w-[100rem]  ">
                    <h1
                      className="font-size-main  stolzl-300 text-white w-[45rem]"
                      style={{ lineHeight: "1.5" }}
                    >
                     Cloud & <br />
                      <span className="text-color stolzl-400  ">Deveops</span>
                      <span className="text-white font-bold stolzl-300">
                        {" "}
                        Services
                      </span>
                    </h1>
                    <p className="secondary-text mt-3 leading-9">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text.
                    </p>
                  </div>

                  <div className=" ms-4 " >
                    <div className="flex justify-center align-middle mb-16" style={{position:"relative",zIndex:"100"}}>
                      <div>
                        <img
                          className=" img-home-app rounded-md"
                          src={`/assets/images/Cloud-home.png`}
                          alt="Image Description"
                          height={310}
                          width={310}
                          style={{zIndex:"-0"}}
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CloudHome
