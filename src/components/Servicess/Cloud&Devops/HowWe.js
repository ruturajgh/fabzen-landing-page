import React from 'react'

function HowWe() {
  return (
    <div>

<div className="py-24">
        <div className="container-lg mx-auto ">
          <h1 className="text-center stolzl-400 text-white text-5xl ">
          How we do it?
          </h1>
          <p className="text-center secondary-text leading-8 stolzl-200 mb-10">
            Our cross-functional team of UI designers are capable of curating
            mind-blowing visuals to depict your business workflow.
            <br /> We provide UI/UX consulting services to build front-end
            interfaces that meet business objectives and client needs.
          </p>
        </div>
        <div className="grid max-w-screen-xl   py-8 mx-auto lg:gap- xl:gap-0 lg:py-12 lg:grid-cols-12">
          <div className="hidden lg:mt-0 lg:col-span-6 lg:flex  justify-space ">
            <img className=" gameimage " src={`/assets/images/cloud-how.png`}  alt="Member of" loading="lazy" />
          </div>
          <div className="mr-auto place-self-center lg:col-span-6">
            {/* card-1 */}
            <div className="flex justify-between  mx-auto">
              <div
                class="rounded-md    h-42 p-6 w-42 item-center justify-center m-8  "
                style={{ background: "#2F1428" }}
              >
                <img src={`/assets/images/icon-preproduction.png`}  height={190} width={190} />
              </div>
              <div className="m-5">
                <h2 className="text-white stolzl-400 text-3xl mb-5 mt-3">
                  Innovative Design
                </h2>
                <p className="secondary-text ">
                  At this stage, game developers brainstorm ideas and come up
                  with a concept for a game. This includes choosing the game’s
                  target audience, genre, style, and overall theme.
                </p>
              </div>
            </div>
            {/* card-2 */}
            <div className="flex justify-between  mx-auto">
              <div
                class="rounded-md    h-42 p-6 w-42 item-center justify-center m-8  "
                style={{ background: "#2F1428" }}
              >
                <img src={`/assets/images/icon-people.png`}  height={190} width={190} />
              </div>
              <div className="m-5">
                <h2 className="text-white stolzl-400 text-3xl mb-5 mt-3">
                  Dedicated Team
                </h2>
                <p className="secondary-text ">
                  At this stage, game developers brainstorm ideas and come up
                  with a concept for a game. This includes choosing the game’s
                  target audience, genre, style, and overall theme.
                </p>
              </div>
            </div>
            {/* card-3 */}
            <div className="flex justify-between  mx-auto">
              <div
                class="rounded-md    h-42 p-6 w-42 item-center justify-center m-8  "
                style={{ background: "#2F1428" }}
              >
                <img src={`/assets/images/icon-production.png`}  height={190} width={190} />
              </div>
              <div className="m-5">
                <h2 className="text-white stolzl-400 text-3xl mb-5 mt-3">
                  User Friendly
                </h2>
                <p className="secondary-text ">
                  At this stage, game developers brainstorm ideas and come up
                  with a concept for a game. This includes choosing the game’s
                  target audience, genre, style, and overall theme.
                </p>
              </div>
            </div>

            {/* card-4 */}
            <div className="flex justify-between  mx-auto">
              <div
                class="rounded-md    h-42 p-6 w-42 item-center justify-center m-8  "
                style={{ background: "#2F1428" }}
              >
                <img src={`/assets/images/icon-tool.png`} height={190} width={190} />
              </div>
              <div className="m-5">
                <h2 className="text-white stolzl-400 text-3xl mb-5 mt-3">
                  Technical Expertise
                </h2>
                <p className="secondary-text ">
                  At this stage, game developers brainstorm ideas and come up
                  with a concept for a game. This includes choosing the game’s
                  target audience, genre, style, and overall theme.
                </p>
              </div>
            </div>

            {/* card-5 */}
          </div>
        </div>
      </div>


    </div>
  )
}

export default HowWe