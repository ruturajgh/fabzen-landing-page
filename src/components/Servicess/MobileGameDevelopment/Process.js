

import React from "react";


function Process() {
  return (
    <div>
      <div className="">
      <div className="container-lg mx-auto py-12">
        <h1 className="text-center stolzl-400 text-white text-4xl mb-5">
        Our Game Development Process
        </h1>
        <p className="text-center secondary-text leading-8 stolzl-200 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil eos
          minima hic quo architecto libero
          <br />
          temporibus fuga sunt reiciendis illo possimus perferendis ea debitis
          officia praesentium odit, suscipit ullam unde!
        </p>
      </div>
        <div className="grid max-w-screen-xl   py-8 mx-auto lg:gap- xl:gap-0 lg:py-12 lg:grid-cols-12">
          <div className="hidden lg:mt-0 lg:col-span-6 lg:flex  justify-space ">
            <img
              className=" gameimage "
              src={`/assets/images/procee-image.png`}
              
              alt="Member of"
              loading="lazy"
            />
          </div>
          <div className="mr-auto place-self-center lg:col-span-6">
            {/* card-1 */}
            <div className="flex justify-between  mx-auto">
              <div class="rounded-md    h-42 p-6 w-42 item-center justify-center m-8  " style={{background:"#2F1428"}}>
                <img src={`/assets/images/icon-planning.png`} height={190} width={190} loading="lazy"/>
              </div>
              <div className="m-5">
                <h2 className="text-white stolzl-400 text-3xl mb-5 mt-3">Planning</h2>
                <p className="secondary-text ">
                  At this stage, game developers brainstorm ideas and come up
                  with a concept for a game. This includes choosing the game’s
                  target audience, genre, style, and overall theme.
                </p>
              </div>
            </div>
            {/* card-2 */}
            <div className="flex justify-between  mx-auto">
              <div class="rounded-md    h-42 p-6 w-42 item-center justify-center m-8  " style={{background:"#2F1428"}}>
                <img src={`/assets/images/icon-preproduction.png`} height={190} width={190} loading="lazy"/>
              </div>
              <div className="m-5">
                <h2 className="text-white stolzl-400 text-3xl mb-5 mt-3">Pre-Production</h2>
                <p className="secondary-text ">
                  At this stage, game developers brainstorm ideas and come up
                  with a concept for a game. This includes choosing the game’s
                  target audience, genre, style, and overall theme.
                </p>
              </div>
            </div>
            {/* card-3 */}
            <div className="flex justify-between  mx-auto">
              <div class="rounded-md    h-42 p-6 w-42 item-center justify-center m-8  " style={{background:"#2F1428"}}>
                <img src={`/assets/images/icon-production.png`} height={190} width={190} loading="lazy"/>
              </div>
              <div className="m-5">
                <h2 className="text-white stolzl-400 text-3xl mb-5 mt-3">Production</h2>
                <p className="secondary-text ">
                  At this stage, game developers brainstorm ideas and come up
                  with a concept for a game. This includes choosing the game’s
                  target audience, genre, style, and overall theme.
                </p>
              </div>
            </div>

            {/* card-4 */}
            <div className="flex justify-between  mx-auto">
              <div class="rounded-md    h-42 p-6 w-42 item-center justify-center m-8  " style={{background:"#2F1428"}}>
                <img src={`/assets/images/icon-testing.png`} height={190} width={190} loading="lazy"/>
              </div>
              <div className="m-5">
                <h2 className="text-white stolzl-400 text-3xl mb-5 mt-3">Testing</h2>
                <p className="secondary-text ">
                  At this stage, game developers brainstorm ideas and come up
                  with a concept for a game. This includes choosing the game’s
                  target audience, genre, style, and overall theme.
                </p>
              </div>
            </div>

            {/* card-5 */}

            <div className="flex justify-between  mx-auto">
              <div class="rounded-md    h-42 p-6 w-42 item-center justify-center m-8  " style={{background:"#2F1428"}}>
                <img src={`/assets/images/icon-relase.png`} height={190} width={190} loading="lazy"/>
              </div>
              <div className="m-5">
                <h2 className="text-white stolzl-400 text-3xl mb-5 mt-3">Release</h2>
                <p className="secondary-text ">
                  At this stage, game developers brainstorm ideas and come up
                  with a concept for a game. This includes choosing the game’s
                  target audience, genre, style, and overall theme.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Process;
