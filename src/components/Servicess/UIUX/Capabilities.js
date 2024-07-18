import React from "react";

const capabilities = [
  "User Experience Design",
  "Frictionless UX",
  "Mobile & Web Design",
  "High-End Graphics",
  "High Fidelity Prototypes",
  "Branding",
  "Usability Testing",
  "Visual Conceptualization",
  "Engaging UI",
  "Product Design",
];

const Capabilities = () => {
  return (
    <div className=" text-white ">
      <div className="container mx-auto px-6">
        <div className="container-lg mx-auto">
          <h1 className="text-center stolzl-400 text-white text-5xl mb-5">
            Capabilities
          </h1>
          <p className="text-center secondary-text leading-8 stolzl-200 mb-10">
            Our cross-functional team of UI designers are capable of curating
            mind-blowing visuals to depict your business workflow.
            <br /> We provide UI/UX consulting services to build front-end
            interfaces that meet business objectives and client needs.
          </p>
        </div>
       <div className="flex justify-center mx-auto">
       <div className="grid grid-cols-2 md:grid-cols-4 gap-6 ">
          {capabilities.map((capability, index) => (
            <div key={index} className="">
              <span
                className=" text-3xl m-5 stolzl-300"
                style={{ color: "#CE1057" }}
              >
                ◆
              </span>
              <span className="mt-2 stolzl-300 ">{capability}</span>
            </div>
          ))}
        </div>
       </div>
      </div>
    </div>
  );
};
export default Capabilities;
