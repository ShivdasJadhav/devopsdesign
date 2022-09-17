import React from "react";

export default function Newsletter() {
  return (
    <div id="newsLetter" class="2xl:mx-auto 2xl:container mx-4 py-16">
      <div class="w-full relative flex items-center justify-center">
        <div class="bg-gray-800 flex flex-col md:flex-row gap-10 bg-opacity-80 md:my-16 lg:py-16 py-10 w-full md:mx-24 md:px-12 px-4 flex flex-col items-center justify-center relativ">
          <div>
            <h1 class="text-4xl font-semibold leading-9 text-white text-left">
              Don’t miss out!
            </h1>
            <p class="text-base leading-normal text-left text-white mt-6">
              Subscribe to your newsletter to stay in the loop. Our newsletter
              is sent once in <br />a week on every friday so subscribe to get
              latest news and updates.
            </p>
          </div>
          <div class="flex-col sm:flex-row flex gap-10 items-center lg:w-5/12 w-full space-y-4 sm:space-y-0">
            <input
              class="sm:border border-white border-b  text-base w-full font-medium leading-none text-white h-8 px-4 md:rounded-lg focus:outline-none bg-transparent placeholder-white"
              placeholder="Email Address"
            />
            <button class="focus:outline-none focus:ring-offset-2 focus:ring w-full sm:w-auto bg-orange-400 rounded-lg px-4 h-10 text-white bold lg hover:bg-opacity-35">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
