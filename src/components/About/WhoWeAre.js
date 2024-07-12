import React from "react";

function WhoWeAre() {
  return (
   <div className="bg-upper">
     <div className="flex justify-center align-middle  py-16">
      <div className=" " >
        <div className=" mx-auto py-12 rounded-xl p-48" style={{background:"#2F1428"}}>
          <h1 className="text-center stolzl-400 text-white text-4xl mb-5">
          Who we are
          </h1>
          <p className="text-center secondary-text leading-8 stolzl-200 mb-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil eos
            minima hic quo architecto libero
            <br />
            temporibus fuga sunt reiciendis illo possimus perferendis ea debitis
            officia praesentium odit, suscipit ullam unde!
          </p>
          <p className="text-center secondary-text leading-8 stolzl-200 mb-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil eos
            minima hic quo architecto libero
            <br />
            temporibus fuga sunt reiciendis illo possimus perferendis ea debitis
            officia praesentium odit, suscipit ullam unde!
          </p>

          <div className="flex justify-center">
            <div>
              <img className="imgwe"src={`/assets/images/whowearesecondsection.png`}  height={600} width={600} />
            </div>
          </div>
        </div>
      </div>
    </div>
   </div>
  );
}

export default WhoWeAre;
