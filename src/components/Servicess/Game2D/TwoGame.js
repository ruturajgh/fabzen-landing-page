import React from 'react'

function TwoGame() {
  return (
    <div>
      <div>
      <div className="">
      <div className="container-lg mx-auto py-16">
        <h1 className="text-center stolzl-400 text-white text-4xl mb-5">
       2D & 3D Game Development Process
        </h1>
        <p className="text-center secondary-text leading-8 stolzl-200 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil eos
          minima hic quo architecto libero
          <br />
          temporibus fuga sunt reiciendis illo possimus perferendis ea debitis
          officia praesentium odit, suscipit ullam unde!
        </p>
      </div>
        <div className="grid max-w-screen-xl   py-8 mx-auto lg:gap- xl:gap-0  lg:grid-cols-12">
          <div className="hidden lg:mt-0 lg:col-span-6 lg:flex  justify-center ">
            <img
              className="mt-28 md:items-center "
              src={`/assets/images/game-3d-dev-process.png`}
              style={{height:"750px"}}
             
              
              alt="Member of"
            />
          </div>
          <div className="mr-auto place-self-center lg:col-span-6">
            {/* card-1 */}
            <div className="flex justify-between  mx-auto">
              <div class="rounded-md    h-42 p-6 w-42 item-center justify-center m-8  " style={{background:"#2F1428"}}>
                <img src={`/assets/images/icon-planning.png`} height={190} width={190}/>
              </div>
              <div className="m-5">
                <h2 className="text-white stolzl-400 text-3xl mb-5 mt-3">Analysis</h2>
                <p className="secondary-text ">
                At this stage, game developers brainstorm ideas and come up with a concept for a game. This includes choosing the game’s target audience, genre, style, and overall theme.
                </p>
              </div>
            </div>
            {/* card-2 */}
            <div className="flex justify-between  mx-auto">
              <div class="rounded-md    h-42 p-6 w-42 item-center justify-center m-8  " style={{background:"#2F1428"}}>
                <img src={`/assets/images/icon-preproduction.png`} height={190} width={190}/>
              </div>
              <div className="m-5">
                <h2 className="text-white stolzl-400 text-3xl mb-5 mt-3">Customisation</h2>
                <p className="secondary-text ">
                The Pre-Production stage entails developing a game prototype and refining the concept. This is where the story, characters, levels, and other game features are created.
                </p>
              </div>
            </div>
            {/* card-3 */}
            <div className="flex justify-between  mx-auto">
              <div class="rounded-md    h-42 p-6 w-42 item-center justify-center m-8  " style={{background:"#2F1428"}}>
                <img src={`/assets/images/icon-production.png`} height={190} width={190}/>
              </div>
              <div className="m-5">
                <h2 className="text-white stolzl-400 text-3xl mb-5 mt-3">Future & Functionality</h2>
                <p className="secondary-text ">
                It is regarded as an important stage in game development. At this point, the game begins to take shape. The game's code, graphics, audio, and other elements are created during the Production stage.
                </p>
              </div>
            </div>

            {/* card-4 */}
            <div className="flex justify-between  mx-auto">
              <div class="rounded-md    h-42 p-6 w-42 item-center justify-center m-8  " style={{background:"#2F1428"}}>
                <img src={`/assets/images/icon-testing.png`} height={190} width={190}/>
              </div>
              <div className="m-5">
                <h2 className="text-white stolzl-400 text-3xl mb-5 mt-3">Beta Testing</h2>
                <p className="secondary-text ">
                The Testing phase is when the game is tested for bugs and other issues. The game's balance and difficulty settings are also modified at this time.
                </p>
              </div>
            </div>

            {/* card-5 */}

            <div className="flex justify-between  mx-auto">
              <div class="rounded-md    h-42 p-6 w-42 item-center justify-center m-8  " style={{background:"#2F1428"}}>
                <img src={`/assets/images/icon-relase.png`} height={190} width={190}/>
              </div>
              <div className="m-5">
                <h2 className="text-white stolzl-400 text-3xl mb-5 mt-3">Launch</h2>
                <p className="secondary-text ">
                The Testing phase is when the game is tested for bugs and other issues. The game's balance and difficulty settings are also modified at this time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default TwoGame
