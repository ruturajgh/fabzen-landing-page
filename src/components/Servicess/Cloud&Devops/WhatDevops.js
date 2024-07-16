import React from 'react'

function WhatDevops() {
  return (
    <div>

<div className="bg-about ">
        <div className="overlay000 bg-dark p-5">
          <div className="max-w-[85rem] mx-auto px-10 sm:px-6 p-8 lg:px-6   bg-[#2F1428]  bg-second rounded-xl ">
            <div className="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center mb-42">
              <div className="max-w-full m-7  ">
                <h1
                  className=" stolzl-400 text-white"
                  style={{ lineHeight: "1.5", fontSize: "36px" }}
                >
                  What is DevOps?
                </h1>
                <p className="secondary-text mt-3 leading-9">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text. Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text. Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text.
                </p>
               
              </div>

              <div className=" ms-4 ">
                <div className="flex justify-center align-middle mb-16">
                  <div>
                    <img
                      className=" img-home-app rounded-md"
                      src={`/assets/images/cloud-devops.png`}
                      alt="Image Description"
                      height={590}
                      width={590}
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
  )
}

export default WhatDevops