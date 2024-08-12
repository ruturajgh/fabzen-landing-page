import React, { useState } from "react";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div>
      <div className="flex justify-center mx-auto w-[93%] mb-40">
        <div className="">
          <div className="">
          <nav
            className="flex  justify-center mx-auto border rounded-full bg-[#241E32] p-1  h-16 "
            aria-label="Tabs"
            role="tablist"
          >
            <button
              type="button"
              className={` hs-tab-active:text-white  rounded-full m-1  hs-tab-active:hover:text-white hs-tab-active:dark:text-white py-6 px-10  inline-flex items-center gap-x-4 bg-transparent text-2xl font-medium  text-white hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:text-white ${
                activeTab === 1 ? "bg-[#db175b] text-white" : ""
              }`}
              id="pills-with-brand-color-item-1"
              aria-controls="pills-with-brand-color-1"
              role="tab"
              onClick={() => setActiveTab(1)}
            >
              Development
            </button>
            <button
              type="button"
              className={`hs-tab-active:text-white  rounded-full m-1  hs-tab-active:hover:text-white hs-tab-active:dark:text-white py-6 px-10  inline-flex items-center gap-x-4 bg-transparent text-2xl font-medium  text-white hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:text-[#96718E] dark:hover:text-white ${
                activeTab === 2 ? "bg-[#db175b] text-white" : ""
              }`}
              id="pills-with-brand-color-item-2"
              aria-controls="pills-with-brand-color-2"
              role="tab"
              onClick={() => setActiveTab(2)}
            >
              Desgin
            </button>
            <button
              type="button"
              className={`hs-tab-active:text-white  rounded-full m-1  hs-tab-active:hover:text-white hs-tab-active:dark:text-white py-6 px-10  inline-flex items-center gap-x-4 bg-transparent text-2xl font-medium  text-white hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:text-[#96718E] dark:hover:text-white ${
                activeTab === 3 ? "bg-[#db175b] text-white" : ""
              }`}
              id="pills-with-brand-color-item-3"
              aria-controls="pills-with-brand-color-3"
              role="tab"
              onClick={() => setActiveTab(3)}
            >
              Marketing
            </button>
            <button
              type="button"
              className={`hs-tab-active:text-white  rounded-full m-1  hs-tab-active:hover:text-white hs-tab-active:dark:text-white py-6 px-10  inline-flex items-center gap-x-4 bg-transparent text-2xl font-medium  text-white hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:text-[#96718E] dark:hover:text-white ${
                activeTab === 4 ? "bg-[#db175b] text-white" : ""
              }`}
              id="pills-with-brand-color-item-4"
              aria-controls="pills-with-brand-color-4"
              role="tab"
              onClick={() => setActiveTab(3)}
            >
              Marketing
            </button>
            <button
              type="button"
              className={`hs-tab-active:text-white  rounded-full m-1  hs-tab-active:hover:text-white hs-tab-active:dark:text-white py-6 px-10  inline-flex items-center gap-x-4 bg-transparent text-2xl font-medium  text-white hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:text-[#96718E] dark:hover:text-white ${
                activeTab === 4 ? "bg-[#D01858] text-white" : ""
              }`}
              id="pills-with-brand-color-item-4"
              aria-controls="pills-with-brand-color-4"
              role="tab"
              onClick={() => setActiveTab(3)}
            >
              Administration
            </button>
            <button
              type="button"
              className={`hs-tab-active:text-white  rounded-full m-1  hs-tab-active:hover:text-white hs-tab-active:dark:text-white py-6 px-10  inline-flex items-center gap-x-4 bg-transparent text-2xl font-medium  text-white hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:text-[#96718E] dark:hover:text-white ${
                activeTab === 4 ? "bg-[#D01858] text-white" : ""
              }`}
              id="pills-with-brand-color-item-4"
              aria-controls="pills-with-brand-color-4"
              role="tab"
              onClick={() => setActiveTab(3)}
            >
              Customer Support
            </button>
          </nav>
          </div>

          <div className="mt-10">
            <div
              id="pills-with-brand-color-1"
              role="tabpanel"
              aria-labelledby="pills-with-brand-color-item-1"
              className={`${activeTab === 1 ? "" : "hidden"}`}
            >
              <div className="flex   justify-between  ">
                {/* card 1 */}
                <div className="  ">
                  <div
                    className="flex rounded-lg h-full p-8 flex-col"
                    style={{ background: "" }}
                  >
                    <div className="flex justify-center mb-3">
                      <div className="mb-3">
                        <img
                          src={`/assets/images/icon-remote.png`}
                          height={80}
                          width={80}
                          loading="lazy"
                        />
                      </div>
                    </div>
                    <h3 className="text-center stolzl-400 text-2xl text-white mb-3  ">
                      Casual <br /> Game Development
                    </h3>
                    <div className="flex justify-center mt-4">
                      <div>
                      <button className="rounded-full bg-[#D01858] text-white px-6 py-2">
                        Apply Now
                      </button>
                      </div>
                    </div>
                  </div>
                </div>
                {/* card 2 */}
                <div className="  ">
                  <div
                    className="flex rounded-lg h-full p-8 flex-col"
                    style={{ background: "" }}
                  >
                    <div className="flex justify-center mb-3">
                      <div className="mb-3">
                        <img
                          src={`/assets/images/icon-remote.png`}
                          height={80}
                          width={80}
                          loading="lazy"
                        />
                      </div>
                    </div>
                    <h3 className="text-center stolzl-400 text-2xl text-white mb-3  ">
                      Casual <br /> Game Development
                    </h3>
                    <div className="flex justify-center mt-4">
                      <div>
                      <button className="rounded-full bg-[#D01858] text-white px-6 py-2">
                        Apply Now
                      </button>
                      </div>
                    </div>
                  </div>
                </div>
                {/* card 3 */}
                <div className=" ">
                  <div
                    className="flex rounded-lg h-full p-8 flex-col"
                    style={{ background: "" }}
                  >
                    <div className="flex justify-center mb-3">
                      <div className="mb-3">
                        <img
                          src={`/assets/images/icon-remote.png`}
                          height={80}
                          width={80}
                          loading="lazy"
                        />
                      </div>
                    </div>
                    <h3 className="text-center stolzl-400 text-2xl text-white mb-3  ">
                      Casual <br /> Game Development
                    </h3>
                    <div className="flex justify-center mt-4">
                      <div>
                      <button className="rounded-full bg-[#D01858] text-white px-6 py-2">
                        Apply Now
                      </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="  ">
                  <div
                    className="flex rounded-lg h-full p-8 flex-col"
                    style={{ background: "" }}
                  >
                    <div className="flex justify-center mb-3">
                      <div className="mb-3">
                        <img
                          src={`/assets/images/icon-remote.png`}
                          height={80}
                          width={80}
                          loading="lazy"
                        />
                      </div>
                    </div>
                    <h3 className="text-center stolzl-400 text-2xl text-white mb-3  ">
                      Casual <br /> Game Development
                    </h3>
                    <div className="flex justify-center mt-4">
                      <div>
                      <button className="rounded-full bg-[#D01858] text-white px-6 py-2">
                        Apply Now
                      </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex   justify-between  ">
                {/* card 1 */}
                <div className="  ">
                  <div
                    className="flex rounded-lg h-full p-8 flex-col"
                    style={{ background: "" }}
                  >
                    <div className="flex justify-center mb-3">
                      <div className="mb-3">
                        <img
                          src={`/assets/images/icon-remote.png`}
                          height={80}
                          width={80}
                          loading="lazy"
                        />
                      </div>
                    </div>
                    <h3 className="text-center stolzl-400 text-2xl text-white mb-3  ">
                      Casual <br /> Game Development
                    </h3>
                    <div className="flex justify-center mt-4">
                      <div>
                      <button className="rounded-full bg-[#D01858] text-white px-6 py-2">
                        Apply Now
                      </button>
                      </div>
                    </div>
                  </div>
                </div>
                {/* card 2 */}
                <div className="  ">
                  <div
                    className="flex rounded-lg h-full p-8 flex-col"
                    style={{ background: "" }}
                  >
                    <div className="flex justify-center mb-3">
                      <div className="mb-3">
                        <img
                          src={`/assets/images/icon-remote.png`}
                          height={80}
                          width={80}
                          loading="lazy"
                        />
                      </div>
                    </div>
                    <h3 className="text-center stolzl-400 text-2xl text-white mb-3  ">
                      Casual <br /> Game Development
                    </h3>
                    <div className="flex justify-center mt-4">
                      <div>
                      <button className="rounded-full bg-[#D01858] text-white px-6 py-2">
                        Apply Now
                      </button>
                      </div>
                    </div>
                  </div>
                </div>
                {/* card 3 */}
                <div className=" ">
                  <div
                    className="flex rounded-lg h-full p-8 flex-col"
                    style={{ background: "" }}
                  >
                    <div className="flex justify-center mb-3">
                      <div className="mb-3">
                        <img
                          src={`/assets/images/icon-remote.png`}
                          height={80}
                          width={80}
                          loading="lazy"
                        />
                      </div>
                    </div>
                    <h3 className="text-center stolzl-400 text-2xl text-white mb-3  ">
                      Casual <br /> Game Development
                    </h3>
                    <div className="flex justify-center mt-4">
                      <div>
                      <button className="rounded-full bg-[#D01858] text-white px-6 py-2">
                        Apply Now
                      </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="  ">
                  <div
                    className="flex rounded-lg h-full p-8 flex-col"
                    style={{ background: "" }}
                  >
                    <div className="flex justify-center mb-3">
                      <div className="mb-3">
                        <img
                          src={`/assets/images/icon-remote.png`}
                          height={80}
                          width={80}
                          loading="lazy"
                        />
                      </div>
                    </div>
                    <h3 className="text-center stolzl-400 text-2xl text-white mb-3  ">
                      Casual <br /> Game Development
                    </h3>
                    <div className="flex justify-center mt-4">
                      <div>
                      <button className="rounded-full bg-[#D01858] text-white px-6 py-2">
                        Apply Now
                      </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              id="pills-with-brand-color-2"
              role="tabpanel"
              aria-labelledby="pills-with-brand-color-item-2"
              className={`${activeTab === 2 ? "" : "hidden"}`}
            >
               <div className="flex   justify-between  ">
                {/* card 1 */}
                <div className="  ">
                  <div
                    className="flex rounded-lg h-full p-8 flex-col"
                    style={{ background: "" }}
                  >
                    <div className="flex justify-center mb-3">
                      <div className="mb-3">
                        <img
                          src={`/assets/images/icon-remote.png`}
                          height={80}
                          width={80}
                          loading="lazy"
                        />
                      </div>
                    </div>
                    <h3 className="text-center stolzl-400 text-2xl text-white mb-3  ">
                      Casual <br /> Game Development
                    </h3>
                    <div className="flex justify-center mt-4">
                      <div>
                      <button className="rounded-full bg-[#D01858] text-white px-6 py-2">
                        Apply Now
                      </button>
                      </div>
                    </div>
                  </div>
                </div>
                {/* card 2 */}
                <div className="  ">
                  <div
                    className="flex rounded-lg h-full p-8 flex-col"
                    style={{ background: "" }}
                  >
                    <div className="flex justify-center mb-3">
                      <div className="mb-3">
                        <img
                          src={`/assets/images/icon-remote.png`}
                          height={80}
                          width={80}
                          loading="lazy"
                        />
                      </div>
                    </div>
                    <h3 className="text-center stolzl-400 text-2xl text-white mb-3  ">
                      Casual <br /> Game Development
                    </h3>
                    <div className="flex justify-center mt-4">
                      <div>
                      <button className="rounded-full bg-[#D01858] text-white px-6 py-2">
                        Apply Now
                      </button>
                      </div>
                    </div>
                  </div>
                </div>
                {/* card 3 */}
                <div className=" ">
                  <div
                    className="flex rounded-lg h-full p-8 flex-col"
                    style={{ background: "" }}
                  >
                    <div className="flex justify-center mb-3">
                      <div className="mb-3">
                        <img
                          src={`/assets/images/icon-remote.png`}
                          height={80}
                          width={80}
                          loading="lazy"
                        />
                      </div>
                    </div>
                    <h3 className="text-center stolzl-400 text-2xl text-white mb-3  ">
                      Casual <br /> Game Development
                    </h3>
                    <div className="flex justify-center mt-4">
                      <div>
                      <button className="rounded-full bg-[#D01858] text-white px-6 py-2">
                        Apply Now
                      </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="  ">
                  <div
                    className="flex rounded-lg h-full p-8 flex-col"
                    style={{ background: "" }}
                  >
                    <div className="flex justify-center mb-3">
                      <div className="mb-3">
                        <img
                          src={`/assets/images/icon-remote.png`}
                          height={80}
                          width={80}
                          loading="lazy"
                        />
                      </div>
                    </div>
                    <h3 className="text-center stolzl-400 text-2xl text-white mb-3  ">
                      Casual <br /> Game Development
                    </h3>
                    <div className="flex justify-center mt-4">
                      <div>
                      <button className="rounded-full bg-[#D01858] text-white px-6 py-2">
                        Apply Now
                      </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              id="pills-with-brand-color-3"
              role="tabpanel"
              aria-labelledby="pills-with-brand-color-item-3"
              className={`${activeTab === 3 ? "" : "hidden"}`}
            >
               <div className="flex   justify-between  ">
                {/* card 1 */}
                <div className="  ">
                  <div
                    className="flex rounded-lg h-full p-8 flex-col"
                    style={{ background: "" }}
                  >
                    <div className="flex justify-center mb-3">
                      <div className="mb-3">
                        <img
                          src={`/assets/images/icon-remote.png`}
                          height={80}
                          width={80}
                          loading="lazy"
                        />
                      </div>
                    </div>
                    <h3 className="text-center stolzl-400 text-2xl text-white mb-3  ">
                      Casual <br /> Game Development
                    </h3>
                    <div className="flex justify-center mt-4">
                      <div>
                      <button className="rounded-full bg-[#D01858] text-white px-6 py-2">
                        Apply Now
                      </button>
                      </div>
                    </div>
                  </div>
                </div>
                {/* card 2 */}
                <div className="  ">
                  <div
                    className="flex rounded-lg h-full p-8 flex-col"
                    style={{ background: "" }}
                  >
                    <div className="flex justify-center mb-3">
                      <div className="mb-3">
                        <img
                          src={`/assets/images/icon-remote.png`}
                          height={80}
                          width={80}
                          loading="lazy"
                        />
                      </div>
                    </div>
                    <h3 className="text-center stolzl-400 text-2xl text-white mb-3  ">
                      Casual <br /> Game Development
                    </h3>
                    <div className="flex justify-center mt-4">
                      <div>
                      <button className="rounded-full bg-[#D01858] text-white px-6 py-2">
                        Apply Now
                      </button>
                      </div>
                    </div>
                  </div>
                </div>
                {/* card 3 */}
                <div className=" ">
                  <div
                    className="flex rounded-lg h-full p-8 flex-col"
                    style={{ background: "" }}
                  >
                    <div className="flex justify-center mb-3">
                      <div className="mb-3">
                        <img
                          src={`/assets/images/icon-remote.png`}
                          height={80}
                          width={80}
                          loading="lazy"
                        />
                      </div>
                    </div>
                    <h3 className="text-center stolzl-400 text-2xl text-white mb-3  ">
                      Casual <br /> Game Development
                    </h3>
                    <div className="flex justify-center mt-4">
                      <div>
                      <button className="rounded-full bg-[#D01858] text-white px-6 py-2">
                        Apply Now
                      </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="  ">
                  <div
                    className="flex rounded-lg h-full p-8 flex-col"
                    style={{ background: "" }}
                  >
                    <div className="flex justify-center mb-3">
                      <div className="mb-3">
                        <img
                          src={`/assets/images/icon-remote.png`}
                          height={80}
                          width={80}
                          loading="lazy"
                        />
                      </div>
                    </div>
                    <h3 className="text-center stolzl-400 text-2xl text-white mb-3  ">
                      Casual <br /> Game Development
                    </h3>
                    <div className="flex justify-center mt-4">
                      <div>
                      <button className="rounded-full bg-[#D01858] text-white px-6 py-2">
                        Apply Now
                      </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              id="pills-with-brand-color-4"
              role="tabpanel"
              aria-labelledby="pills-with-brand-color-item-4"
              className={`${activeTab === 4 ? "" : "hidden"}`}
            >
              <div className="flex   justify-between  ">
                {/* card 1 */}
                <div className="  ">
                  <div
                    className="flex rounded-lg h-full p-8 flex-col"
                    style={{ background: "" }}
                  >
                    <div className="flex justify-center mb-3">
                      <div className="mb-3">
                        <img
                          src={`/assets/images/icon-remote.png`}
                          height={80}
                          width={80}
                          loading="lazy"
                        />
                      </div>
                    </div>
                    <h3 className="text-center stolzl-400 text-2xl text-white mb-3  ">
                      Casual <br /> Game Development
                    </h3>
                    <div className="flex justify-center mt-4">
                      <div>
                      <button className="rounded-full bg-[#D01858] text-white px-6 py-2">
                        Apply Now
                      </button>
                      </div>
                    </div>
                  </div>
                </div>
                {/* card 2 */}
                <div className="  ">
                  <div
                    className="flex rounded-lg h-full p-8 flex-col"
                    style={{ background: "" }}
                  >
                    <div className="flex justify-center mb-3">
                      <div className="mb-3">
                        <img
                          src={`/assets/images/icon-remote.png`}
                          height={80}
                          width={80}
                          loading="lazy"
                        />
                      </div>
                    </div>
                    <h3 className="text-center stolzl-400 text-2xl text-white mb-3  ">
                      Casual <br /> Game Development
                    </h3>
                    <div className="flex justify-center mt-4">
                      <div>
                      <button className="rounded-full bg-[#D01858] text-white px-6 py-2">
                        Apply Now
                      </button>
                      </div>
                    </div>
                  </div>
                </div>
                {/* card 3 */}
                <div className=" ">
                  <div
                    className="flex rounded-lg h-full p-8 flex-col"
                    style={{ background: "" }}
                  >
                    <div className="flex justify-center mb-3">
                      <div className="mb-3">
                        <img
                          src={`/assets/images/icon-remote.png`}
                          height={80}
                          width={80}
                          loading="lazy"
                        />
                      </div>
                    </div>
                    <h3 className="text-center stolzl-400 text-2xl text-white mb-3  ">
                      Casual <br /> Game Development
                    </h3>
                    <div className="flex justify-center mt-4">
                      <div>
                      <button className="rounded-full bg-[#D01858] text-white px-6 py-2">
                        Apply Now
                      </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="  ">
                  <div
                    className="flex rounded-lg h-full p-8 flex-col"
                    style={{ background: "" }}
                  >
                    <div className="flex justify-center mb-3">
                      <div className="mb-3">
                        <img
                          src={`/assets/images/icon-remote.png`}
                          height={80}
                          width={80}
                          loading="lazy"
                        />
                      </div>
                    </div>
                    <h3 className="text-center stolzl-400 text-2xl text-white mb-3  ">
                      Casual <br /> Game Development
                    </h3>
                    <div className="flex justify-center mt-4">
                      <div>
                      <button className="rounded-full bg-[#D01858] text-white px-6 py-2">
                        Apply Now
                      </button>
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
  );
};

export default Tabs;
