import React from "react";
import manIcon from "../imgs/manIcon.jpg";
function Review() {
  return (
    <section
      id="review"
      className="text-gray-600 h-fit body-font overflow-hidden"
    >
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">
            Reviews
          </h1>
        </div>
        <div className="flex flex-col md:flex-row gap-10 justify-center mx-auto p-6 -m-4">
          <div className="md:w-5/12 w-full shadow-2xl bg-gray-400 mx-auto p-6">
            <div className="flex">
              <img
                alt="content"
                className="h-12 w-12 justify-center rounded-full"
                src={manIcon}
              />
              <h2 className="font-medium justify-center ml-3 text-left title-font text-gray-900 text-lg">
                @JadhavShivdas
                <p>*****</p>
              </h2>
            </div>
            <div className="flex flex-col items-center text-center justify-center">
              <div className="w-12 h-1 bg-orange-400 rounded mt-2 mb-4"></div>
              <p className="text-base text-left">
                “The best way to predict the future is to create it.” Lorem
                ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis
                ratione aut deserunt est laboriosam inventore. Iusto, temporibus
                in doloribus aliquam nemo pariatur asperiores fuga ratione
                laudantium, non perferendis? Quasi, ab?
              </p>
            </div>
          </div>
          <div className="md:w-5/12 w-full shadow-2xl mx-auto text-center bg-gray-400 p-6">
            <div className="flex">
              <img
                alt="content"
                className="h-12 w-12 justify-center rounded-full"
                src={manIcon}
              />
              <h2 className="font-medium justify-center ml-3 text-left title-font text-gray-900 text-lg">
                @JadhavShivdas
                <p>*****</p>
              </h2>
            </div>
            <div className="flex flex-col items-center text-center justify-center">
              <div className="w-12 h-1 bg-orange-400 rounded mt-2 mb-4"></div>
              <p className="text-base text-left">
                “The best way to predict the future is to create it.” Lorem
                ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis
                ratione aut deserunt est laboriosam inventore. Iusto, temporibus
                in doloribus aliquam nemo pariatur asperiores fuga ratione
                laudantium, non perferendis? Quasi, ab?
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Review;
