import React, { useState } from "react";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div>
      <div className="flex justify-center mx-auto">
        <div>
          <nav className="flex space-x-1 " aria-label="Tabs" role="tablist">
            <button
              type="button"
              className={`hs-tab-active:bg-[#D01858] hs-tab-active:text-white m-4 w-25 hs-tab-active:hover:text-white hs-tab-active:dark:text-white py-3 px-16 rounded-xl inline-flex items-center gap-x-4 bg-transparent text-sm font-medium text-center text-white hover:text-blue-600 rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:text-neutral-300 ${
                activeTab === 1 ? "bg-red-600 text-white" : ""
              }`}
              id="pills-with-brand-color-item-1"
              aria-controls="pills-with-brand-color-1"
              role="tab"
              onClick={() => setActiveTab(1)}
            >
              Tab 1
            </button>
            <button
             type="button"
             className={`hs-tab-active:bg-[#D01858] hs-tab-active:text-white m-4 w-25 hs-tab-active:hover:text-white hs-tab-active:dark:text-white py-3 px-16 rounded-xl inline-flex items-center gap-x-4 bg-transparent text-sm font-medium text-center text-white hover:text-blue-600 rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:text-neutral-300 ${
               activeTab === 2 ? "bg-red-600 text-white" : ""
             }`}
              id="pills-with-brand-color-item-2"
              aria-controls="pills-with-brand-color-2"
              role="tab"
              onClick={() => setActiveTab(2)}
            >
              Tab 2
            </button>
            <button
              type="button"
              className={`hs-tab-active:bg-[#D01858] hs-tab-active:text-white m-4 w-25 hs-tab-active:hover:text-white hs-tab-active:dark:text-white py-3 px-16 rounded-xl inline-flex items-center gap-x-4 bg-transparent text-sm font-medium text-center text-white hover:text-blue-600 rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:text-neutral-300 ${
                activeTab === 3 ? "bg-red-600 text-white" : ""
              }`}
              id="pills-with-brand-color-item-3"
              aria-controls="pills-with-brand-color-3"
              role="tab"
              onClick={() => setActiveTab(3)}
            >
              Tab 3
            </button>
            <button
              type="button"
              className={`hs-tab-active:bg-[#D01858] hs-tab-active:text-white m-4 w-25 hs-tab-active:hover:text-white hs-tab-active:dark:text-white py-3 px-16 rounded-xl inline-flex items-center gap-x-4 bg-transparent text-sm font-medium text-center text-white hover:text-blue-600 rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:text-neutral-300 ${
                activeTab === 4 ? "bg-red-600 text-white" : ""
              }`}
              id="pills-with-brand-color-item-4"
              aria-controls="pills-with-brand-color-4"
              role="tab"
              onClick={() => setActiveTab(3)}
            >
              Tab 4
            </button>
          </nav>

          <div className="mt-3">
            <div
              id="pills-with-brand-color-1"
              role="tabpanel"
              aria-labelledby="pills-with-brand-color-item-1"
              className={`${activeTab === 1 ? "" : "hidden"}`}
            >
              <div className="flex flex-wrap justify-center ">
                {/* card 1 */}
                <div className="p-4 max-w-sm">
                  <div
                    className="flex rounded-lg h-full p-8 flex-col"
                    style={{ background: "#2F1428" }}
                  >
                    <div className="flex justify-center mb-3">
                      <div className="mb-3">
                        <img
                          src={`/assets/images/icon-remote.png`}
                          height={80}
                          width={80}
                        />
                      </div>
                    </div>
                    <h3 className="text-center stolzl-400 text-2xl text-white mb-3 leading-9 ">
                      Casual <br /> Game Development
                    </h3>
                    <div className="flex flex-col justify-between flex-grow">
                      <p
                        className="  text-center secondary-text leading-38"
                        style={{ fontSize: "12px", lineHeight: "1.9" }}
                      >
                        Lorem ipsum dolor sit amet. In quos laboriosam non neque
                        eveniet 33 nihil molestias. 33 nihil molestias.33 nihil
                        molestias.
                      </p>
                    </div>
                  </div>
                </div>
                {/* card 2 */}
                <div className="p-4 max-w-sm">
                  <div
                    className="flex rounded-lg h-full p-8 flex-col"
                    style={{ background: "#2F1428" }}
                  >
                    <div className="flex justify-center mb-3">
                      <div className="mb-3">
                        <img
                          src={`/assets/images/icon-multiple.png`}
                          height={80}
                          width={80}
                        />
                      </div>
                    </div>
                    <h3 className="text-center stolzl-400 text-2xl text-white mb-3 leading-9  ">
                      Casual <br /> Game Development
                    </h3>
                    <div className="flex flex-col justify-between flex-grow">
                      <p
                        className="  text-center secondary-text leading-38"
                        style={{ fontSize: "12px", lineHeight: "1.9" }}
                      >
                        Lorem ipsum dolor sit amet. In quos laboriosam non neque
                        eveniet 33 nihil molestias. 33 nihil molestias.33 nihil
                        molestias.
                      </p>
                    </div>
                  </div>
                </div>
                {/* card 3 */}
                <div className="p-4 max-w-sm">
                  <div
                    className="flex rounded-lg h-full p-8 flex-col"
                    style={{ background: "#2F1428" }}
                  >
                    <div className="flex justify-center mb-3">
                      <div className="mb-3">
                        <img
                          src={`/assets/images/icon-playearn.png`}
                          height={80}
                          width={80}
                        />
                      </div>
                    </div>
                    <h3 className="text-center stolzl-400 text-2xl text-white mb-3 leading-9  ">
                      Casual <br /> Game Development
                    </h3>
                    <div className="flex flex-col justify-between flex-grow">
                      <p
                        className="  text-center secondary-text leading-38"
                        style={{ fontSize: "12px", lineHeight: "1.9" }}
                      >
                        Lorem ipsum dolor sit amet. In quos laboriosam non neque
                        eveniet 33 nihil molestias. 33 nihil molestias.33 nihil
                        molestias.
                      </p>
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
              <div className="flex flex-wrap justify-center ">
                {/* card 1 */}
                <div className="p-4 max-w-sm">
                  <div
                    className="flex rounded-lg h-full p-8 flex-col"
                    style={{ background: "#2F1428" }}
                  >
                    <div className="flex justify-center mb-3">
                      <div className="mb-3">
                        <img
                          src={`/assets/images/icon-remote.png`}
                          height={80}
                          width={80}
                        />
                      </div>
                    </div>
                    <h3 className="text-center stolzl-400 text-2xl text-white mb-3 leading-9 ">
                      Casual <br /> Game Development
                    </h3>
                    <div className="flex flex-col justify-between flex-grow">
                      <p
                        className="  text-center secondary-text leading-38"
                        style={{ fontSize: "12px", lineHeight: "1.9" }}
                      >
                        Lorem ipsum dolor sit amet. In quos laboriosam non neque
                        eveniet 33 nihil molestias. 33 nihil molestias.33 nihil
                        molestias.
                      </p>
                    </div>
                  </div>
                </div>
                {/* card 2 */}
                <div className="p-4 max-w-sm">
                  <div
                    className="flex rounded-lg h-full p-8 flex-col"
                    style={{ background: "#2F1428" }}
                  >
                    <div className="flex justify-center mb-3">
                      <div className="mb-3">
                        <img
                          src={`/assets/images/icon-multiple.png`}
                          height={80}
                          width={80}
                        />
                      </div>
                    </div>
                    <h3 className="text-center stolzl-400 text-2xl text-white mb-3 leading-9  ">
                      Casual <br /> Game Development
                    </h3>
                    <div className="flex flex-col justify-between flex-grow">
                      <p
                        className="  text-center secondary-text leading-38"
                        style={{ fontSize: "12px", lineHeight: "1.9" }}
                      >
                        Lorem ipsum dolor sit amet. In quos laboriosam non neque
                        eveniet 33 nihil molestias. 33 nihil molestias.33 nihil
                        molestias.
                      </p>
                    </div>
                  </div>
                </div>
                {/* card 3 */}
                <div className="p-4 max-w-sm">
                  <div
                    className="flex rounded-lg h-full p-8 flex-col"
                    style={{ background: "#2F1428" }}
                  >
                    <div className="flex justify-center mb-3">
                      <div className="mb-3">
                        <img
                          src={`/assets/images/icon-playearn.png`}
                          height={80}
                          width={80}
                        />
                      </div>
                    </div>
                    <h3 className="text-center stolzl-400 text-2xl text-white mb-3 leading-9  ">
                      Casual <br /> Game Development
                    </h3>
                    <div className="flex flex-col justify-between flex-grow">
                      <p
                        className="  text-center secondary-text leading-38"
                        style={{ fontSize: "12px", lineHeight: "1.9" }}
                      >
                        Lorem ipsum dolor sit amet. In quos laboriosam non neque
                        eveniet 33 nihil molestias. 33 nihil molestias.33 nihil
                        molestias.
                      </p>
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
              <div className="flex flex-wrap justify-center ">
                {/* card 1 */}

                {/* card 2 */}
                <div className="p-4 max-w-sm">
                  <div
                    className="flex rounded-lg h-full p-8 flex-col"
                    style={{ background: "#2F1428" }}
                  >
                    <div className="flex justify-center mb-3">
                      <div className="mb-3">
                        <img
                          src={`/assets/images/icon-multiple.png`}
                          height={80}
                          width={80}
                        />
                      </div>
                    </div>
                    <h3 className="text-center stolzl-400 text-2xl text-white mb-3 leading-9  ">
                      Casual <br /> Game Development
                    </h3>
                    <div className="flex flex-col justify-between flex-grow">
                      <p
                        className="  text-center secondary-text leading-38"
                        style={{ fontSize: "12px", lineHeight: "1.9" }}
                      >
                        Lorem ipsum dolor sit amet. In quos laboriosam non neque
                        eveniet 33 nihil molestias. 33 nihil molestias.33 nihil
                        molestias.
                      </p>
                    </div>
                  </div>
                </div>
                {/* card 3 */}
                <div className="p-4 max-w-sm">
                  <div
                    className="flex rounded-lg h-full p-8 flex-col"
                    style={{ background: "#2F1428" }}
                  >
                    <div className="flex justify-center mb-3">
                      <div className="mb-3">
                        <img
                          src={`/assets/images/icon-playearn.png`}
                          height={80}
                          width={80}
                        />
                      </div>
                    </div>
                    <h3 className="text-center stolzl-400 text-2xl text-white mb-3 leading-9  ">
                      Casual <br /> Game Development
                    </h3>
                    <div className="flex flex-col justify-between flex-grow">
                      <p
                        className="  text-center secondary-text leading-38"
                        style={{ fontSize: "12px", lineHeight: "1.9" }}
                      >
                        Lorem ipsum dolor sit amet. In quos laboriosam non neque
                        eveniet 33 nihil molestias. 33 nihil molestias.33 nihil
                        molestias.
                      </p>
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
              <div className="flex flex-wrap justify-center ">
                {/* card 1 */}

                {/* card 2 */}
                <div className="p-4 max-w-sm">
                  <div
                    className="flex rounded-lg h-full p-8 flex-col"
                    style={{ background: "#2F1428" }}
                  >
                    <div className="flex justify-center mb-3">
                      <div className="mb-3">
                        <img
                          src={`/assets/images/icon-multiple.png`}
                          height={80}
                          width={80}
                        />
                      </div>
                    </div>
                    <h3 className="text-center stolzl-400 text-2xl text-white mb-3 leading-9  ">
                      Casual <br /> Game Development
                    </h3>
                    <div className="flex flex-col justify-between flex-grow">
                      <p
                        className="  text-center secondary-text leading-38"
                        style={{ fontSize: "12px", lineHeight: "1.9" }}
                      >
                        Lorem ipsum dolor sit amet. In quos laboriosam non neque
                        eveniet 33 nihil molestias. 33 nihil molestias.33 nihil
                        molestias.
                      </p>
                    </div>
                  </div>
                </div>
                {/* card 3 */}
                <div className="p-4 max-w-sm">
                  <div
                    className="flex rounded-lg h-full p-8 flex-col"
                    style={{ background: "#2F1428" }}
                  >
                    <div className="flex justify-center mb-3">
                      <div className="mb-3">
                        <img
                          src={`/assets/images/icon-playearn.png`}
                          height={80}
                          width={80}
                        />
                      </div>
                    </div>
                    <h3 className="text-center stolzl-400 text-2xl text-white mb-3 leading-9  ">
                      Casual <br /> Game Development
                    </h3>
                    <div className="flex flex-col justify-between flex-grow">
                      <p
                        className="  text-center secondary-text leading-38"
                        style={{ fontSize: "12px", lineHeight: "1.9" }}
                      >
                        Lorem ipsum dolor sit amet. In quos laboriosam non neque
                        eveniet 33 nihil molestias. 33 nihil molestias.33 nihil
                        molestias.
                      </p>
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
