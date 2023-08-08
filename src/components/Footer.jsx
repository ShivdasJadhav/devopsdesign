import React from "react";
import dev2 from "../assets/imgs/devops2.png";
function Footer() {
  return (
    <footer className="text-center bg-gray-800 p-10 lg:text-left w-full text-white">
      <div className="flex flex-col md:flex-row justify-center">
        <div className="w-full md:w-3/12 mx-auto py-10">
          <h6
            className="
              uppercase
              font-semibold
              mb-4
              flex
            "
          >
            Skills
          </h6>
          <p className="flex items-center md:ml-1 text-center md:text-left">
          <svg fill="white" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3 mr-2" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            <a href="#!" className="text-white">
              HTML5/CSS3
            </a>
          </p>
          <p className="flex items-center md:ml-1 text-center md:text-left">
            <svg fill="white" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3 mr-2" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            <a href="#!" className="text-white">
              Javascript
            </a>
          </p>
          <p className="flex items-center md:ml-1 text-center md:text-left">
            <svg fill="white" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3 mr-2" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            <a href="#!" className="text-white">
              Reactjs
            </a>
          </p>
          <p className="flex items-center md:ml-1 text-center  md:text-left">
          <svg fill="white" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3 mr-2" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            <a href="#!" className="text-white">
              TailwindCss
            </a>
          </p>
          <p className="flex items-center md:ml-1 text-center  md:text-left">
          <svg fill="white" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3 mr-2" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            <a href="#!" className="text-white">
              MERN stack
            </a>
          </p>
          <p className="flex items-center md:ml-1 text-center  md:text-left">
          <svg fill="white" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3 mr-2" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            <a href="#!" className="text-white">
              PHP
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
        <div className=" mx-auto md:w-3/12 py-10 right-0 text-center md:text-right">
          <div className=" md:text-right text-center mx-auto ">
            <div className="w-fit">
              <h6
                className="
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
                Creators are often a blend of artist and engineer, masterfully
                combining technical prowess with an artistic flair. They
                understand that aesthetics and user experience are just as
                crucial as functionality, and their creations reflect an
                unparalleled harmony between form and function.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
