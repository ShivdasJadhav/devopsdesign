import card1 from '../assets/imgs/card1.png';
import card2 from '../assets/imgs/card2.png';
import card3 from '../assets/imgs/card3.png';
import card4 from '../assets/imgs/card6.png';
const Services = () => {
  return (
    <section
      id="services"
      className="text-gray-600 h-fit body-font overflow-hidden"
    >
      <div className="container px-10 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">
            Services
          </h1>
        </div>
        <div className="flex flex-col gap-10 xl:flex-row ">
            <div className="rounded-lg bg-opacity-10 shadow-lg md:w-5/12 mx-auto w-full bg-gray-900">
              <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                <img 
                  className="rounded-t-lg w-full h-6/12 img"
                  src={card1}
                  alt=""
                />
              </a>
              <div className="p-6 text-white">
                <h5 className="text-xl font-medium mb-2">
                  Developer
                </h5>
                <p className=" text-base mb-4">
                 Developers are the peoples who brings the ideal world in Tech Industries into reality.
                </p>
                <button
                  type="button"
                  className="relative right-0 inline-block px-6 py-2.5 bg-gray-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-700 hover:shadow-lg focus:bg-gray-700 focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out"
                >
                  Devops
                </button>
              </div>
            </div>
            <div className="rounded-lg bg-opacity-10 shadow-lg md:w-5/12 mx-auto w-full bg-gray-900">
              <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                <img
                  className="rounded-t-lg w-full h-6/12 img"
                  src={card2}
                  alt=""
                />
              </a>
              <div className="p-6 text-white">
                <h5 className=" text-xl font-medium mb-2">
                  Analysts
                </h5>
                <p className=" text-base mb-4">
                  Analysts are the watchers who analyse everithing for predecting the related results.
                </p>
                <button
                  type="button"
                  className=" inline-block px-6 py-2.5 bg-gray-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-700 hover:shadow-lg  focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out"
                >
                  Analysis
                </button>
              </div>
            </div>
            <div className="rounded-lg bg-opacity-10 shadow-lg md:w-5/12 mx-auto w-full bg-gray-900">
              <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                <img
                  className="rounded-t-lg w-full h-6/12 img"
                  src={card3}
                  alt=""
                />
              </a> 
              <div className="p-6 text-white">
                <h5 className=" text-xl font-medium mb-2">
                  Users
                </h5>
                <p className=" text-base mb-4">
                  Users use the developed and provided new commerce trends to achieve their tasks.
                </p>
                <button
                  type="button"
                  className=" inline-block px-6 py-2.5 bg-gray-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-700 hover:shadow-lg focus:bg-gray-700 focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out"
                >
                  Consume
                </button>
              </div>
            </div>
            <div className="rounded-lg bg-opacity-10 shadow-lg md:w-5/12 mx-auto w-full bg-gray-900">
              <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                <img
                  className="rounded-t-lg w-full h-6/12 img"
                  src={card4}
                  alt=""
                />
              </a>
              <div className="p-6 text-white">
                <h5 className=" text-xl font-medium mb-2">
                 Managers
                </h5>
                <p className=" text-base mb-4">
                  The peoples who brings communication in between industry needs and developers.
                </p>
                <button
                  type="button"
                  className=" inline-block px-6 py-2.5 bg-gray-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-700 hover:shadow-lg focus:bg-gray-700 focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out"
                >
                  Manage
                </button>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
};
export default Services;
