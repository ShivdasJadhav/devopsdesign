import React from "react";
import dev2 from '../imgs/devops2.png'
function Footer() {
  return (
    <footer class="text-center bg-gray-800 p-10 lg:text-left w-full text-white">
      <div className="flex flex-col md:flex-row justify-center">
        <div class="w-3/12 mx-auto md:my-auto">
          <p class="md:ml-3 text-center md:text-left">
            <a href="#!" class="text-white">
              HTML5/CSS3
            </a>
          </p>
          <p class="md:ml-3 text-center md:text-left">
            <a href="#!" class="text-white">
              Javascript
            </a>
          </p>
          <p class="md:ml-3 text-center md:text-left">
            <a href="#!" class="text-white">
              Reactjs
            </a>
          </p>
          <p class="md:ml-3 text-center  md:text-left">
            <a href="#!" class="text-white">
              TailwindCss
            </a>
          </p>
        </div>
        <div className="lg:max-w-lg mx-auto py-10 lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <img
            className="object-cover md:w-3/4 object-center mx-auto rounded"
            alt="hero"
            src={dev2}
          />
        </div>
        <div class=" mx-auto md:w-3/12 py-10 right-0 text-center md:text-right">
          <div class=" md:text-right text-center mx-auto ">
            <div class="w-fit">
              <h6
                class="
              uppercase
              font-semibold
              mb-4
              md:text-right
              flex
              items-center
              justify-center
              md:justify-end
            "
              >
                Creater's for Developers
              </h6>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti, omnis aliquid consectetur dignissimos <br /> dolorum
                quam quaerat molestiae.
              </p>
              <p>Lorem ipsum, dolor sit amet consectetur</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
