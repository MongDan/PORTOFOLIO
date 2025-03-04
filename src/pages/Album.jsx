import Navbar from "../components/Navbar";

const Album = () => {
  return (
    <div className="bg-gradient-to-tr from-indigo-600 via-black to-indigo-600 h-[2300px]  border">
      <Navbar />
      <div className="flex flex-wrap justify-end mt-40  space-x-6 mr-25 px-96 nonito-font">
        <h1 className="text-white mt-35 text-8xl">MY ALBUM</h1>
        <p className="text-white mr-8 mt-5 text-2xl">
          🫂Cuman sekedar kenangan kebersamaan 👋
        </p>
      </div>

      <div className="container w-full mt-[500px] h-[600px]">
        <h1 className="text-white text-center text-8xl mb-20">Me & Friends</h1>
        <div className="justify-center py-40 space-x-20 px-20 grid grid-cols-3">
          <div className="grid-container -mt-20 hover:scale-110 transition duration-100 ease-in-out ">
            <img
              src="/img/foto1.JPG"
              alt=""
              className="object-cover rounded-xl h-[100%] w-[100%] "
            />
          </div>
          <div className="grid-container -mt-20 hover:scale-110 transition-all duration-300 ">
            <img
              src="/img/foto2.JPG"
              alt=""
              className="object-cover rounded-xl h-[100%] w-[100%] "
            />
          </div>
          <div className="grid-container -mt-20 hover:scale-110 transition duration-100 ease-in-out ">
            <img
              src="/img/foto3.JPG"
              alt=""
              className="object-cover rounded-xl h-[100%] w-[100%] "
            />
          </div>
          <div className="grid-container mt-10 hover:scale-110 transition duration-100 ease-in-out ">
            <img
              src="/img/foto4.jpg"
              alt=""
              className="object-cover rounded-xl h-[100%] w-[100%] "
            />
          </div>
          <div className="grid-container mt-10 hover:scale-110 transition duration-100 ease-in-out">
            <img
              src="/img/foto5.jpg"
              alt=""
              className="object-cover bg-center rounded-xl h-[100%] w-[100%] "
            />
          </div>
          <div className="grid-container mt-10 hover:scale-110 transition duration-100 ease-in-out ">
            <img
              src="/img/foto6.jpg"
              alt=""
              className="object-cover rounded-xl h-[100%] w-[100%] "
            />
          </div>
        </div>
      </div>

      <div className="flex justify-between w-[80%] mt-[400px] ml-40 border-white px-40 text-slate-300 text-xl cursor-pointer ">
        <div className="-ml-20">
          <h3 className="hover:scale-110 hover:font-semibold hover:text-sky-400 duration-200 transtion ">
            © 2025 Dandy Teguh Pratama
          </h3>
        </div>
        <div className="grid grid-cols-1 gap-10">
          <h3>
            <a
              href="https://tailwindcss.com/"
              className="hover:scale-110 hover:font-semibold hover:text-sky-400 duration-200 transtion"
            >
              Tailwind
            </a>
          </h3>
          <h3>
            <a
              href="https://react.dev/"
              className="hover:scale-110 hover:font-semibold hover:text-sky-400 duration-200 transtion"
            >
              React
            </a>
          </h3>
          <h3>
            <a
              href="https://vite.dev/"
              className="hover:scale-110 hover:font-semibold hover:text-sky-400 duration-200 transtion"
            >
              Vite
            </a>
          </h3>
          <h3>
            <a
              href="https://github.com/MongDan"
              className="hover:scale-110 hover:font-semibold hover:text-sky-400 duration-200 transtion"
            >
              Github
            </a>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Album;
