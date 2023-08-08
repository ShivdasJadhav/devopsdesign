import devops from "../assets/imgs/devops.png";
const Main = () => {
  return (
    <section id="hero" className="">
      <div className="px-6 md:px-12 text-gray-800 text-center lg:text-left container mx-auto xl:px-32 grid lg:grid-cols-2 mb-20 gap-12 pt-16 flex h-fit items-center">
        <div className="lg:mb-0">
          <div className=" md:w-9/12 w-5/6 mx-auto mb-5 md:mb-10">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src={devops}
            />
          </div>
        </div>
        <div className="mt-8 text-center lg:text-right lg:mt-0">
          <h1 className="text-3xl md:text-4xl xl:text-6xl text-gray-700 font-bold tracking-tight mb-7">
            Developers for developers
            <br />
            <span className="text-gray-200 text-2xl">Creators</span>
          </h1>
          <p className="text-gray-800 ">
            In the vibrant realm of technology and innovation, developer
            communities shine like constellations in the vast digital galaxy.
            These communities are extraordinary ecosystems that bring together
            diverse minds, passionate hearts, and boundless creativity, creating
            a symphony of collective brilliance.
          </p>
          <div className="w-full flex justify-center lg:justify-start mt-10">
            <button className="bg-gray-700 hover:bg-gray-800 text-white bold lg mx-4 rounded-lg p-1 w-3/12 h-8">
              Devops
            </button>
            <button className="bg-orange-500 hover:bg-orange-600 text-white bold lg mx-4 rounded-lg p-1 w-3/12 h-8">
              Designs
            </button>
            <button className="bg-gray-200 hover:bg-gray-100 text-gray-400 bold lg mx-4 rounded-lg p-1 w-3/12 h-8">
              <a href="https://linkedin.com/in/shivdas-s-jadhav-7b8096210" target="_black">Developer</a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Main;
