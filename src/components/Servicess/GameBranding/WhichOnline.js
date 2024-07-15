import React from 'react'

function WhichOnline() {
  return (
    <div>
      <div>
      <div className="max-w-[75rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-28 md:items-center">
          <div className="">
            <h1
              className="text-3xl stolzl-400  text-gray-800 text-white "
              style={{ lineHeight: "1.5" }}
            >
             Which Online Marketing Services are Right for my Business?
            </h1>
            <p className="secondary-text mt-3">
              At Fabzen, our team of skilled mobile game developers loves taking
              the conceptive game from a dream to a reality. Our game app
              development expertise lies in end-to-end tailor-made solutions
              powered by robust code, high-quality graphics, and top-shelf user
              interfaces.
              <br /> <br />
              At Fabzen, our team of skilled mobile game developers loves taking
              the conceptive game from a dream to a reality. Our game app
              development expertise lies in end-to-end tailor-made solutions
              powered by robust code, high-quality graphics, and top-shelf user
              interfaces.
            </p>
          </div>

          <div className="relative ms-4 flex justify-center align-middle bg-creative">
            <div>
              <img
                className=" img-home-app rounded-md"
                src={`/assets/images/gbranding-online.png`}
                alt="Image Description"
                height={350}
                width={350}
              />
            </div>
          </div>
        </div>
      </div>
      
    </div>
    </div>
  )
}

export default WhichOnline
