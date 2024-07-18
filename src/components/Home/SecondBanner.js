import React from 'react'
import { FaCircle } from "react-icons/fa6";

function SecondBanner() {
  return (
    <div>
        <div>
        <div className="bg-about -mt-16 ">
          <div className="overlay000 bg-dark ">
            <div className=" bg-thirdsection max-w-[100rem] mx-auto px-10 sm:px-6 p-8 lg:px-6   bg-[#2F1428]  bg-second  ">
              <div className="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center mb-42 ">
                <div className="max-w-full m-7 mt-40  ">
                  <h1
                    className=" stolzl-400 text-white"
                    style={{ lineHeight: "1.5", fontSize: "36px" }}
                  >
                   Why Do Businesses Choose  Fabzen for Game Development?
                  </h1>
                  <p className="secondary-text mt-3 leading-9">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text.
                  </p>
                  <ul className="mt-5">
                    <li className="secondary-text">
                      <div className="flex">
                        <div className="m-3">
                          <FaCircle style={{fontSize:"13px"}} className="group-hover:text-pink-700" />
                        </div>
                        <div className="m-1 -mt-09">Next-generation Games</div>
                      </div>
                    </li>
                    <li className="secondary-text">
                      <div className="flex">
                        <div className="m-3">
                          <FaCircle style={{fontSize:"13px"}} className="group-hover:text-pink-700" />
                        </div>
                        <div className="m-1 -mt-09"> Reliable Client Support</div>
                      </div>
                    </li>
                    <li className="secondary-text">
                      <div className="flex">
                        <div className="m-3">
                          <FaCircle style={{fontSize:"13px"}} className="group-hover:text-pink-700" />
                        </div>
                        <div className="m-1 -mt-09">After-launch Maintenance</div>
                      </div>
                    </li>
                    <li className="secondary-text">
                      <div className="flex">
                        <div className="m-3">
                          <FaCircle style={{fontSize:"13px"}} className="group-hover:text-pink-700" />
                        </div>
                        <div className=" m-1 -mt-09">
                          {" "}
                          Tailor-made Gaming Solutions
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className=" ms-4 ">
                  <div className="flex justify-center align-middle mb-16">
                    <div>
                      {/* <img
                      className=" img-home-app rounded-md"
                      src={`/assets/images/pn-cover.png`}
                      alt="Image Description"
                      height={590}
                      width={590}
                    /> */}
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

export default SecondBanner