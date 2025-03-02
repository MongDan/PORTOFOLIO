import Navbar from "../components/Navbar";

const Project = () => {
  return (
    <div className="bg-gradient-to-tr from-indigo-600 via-black to-indigo-600 h-[2700px]  relative border">
      <Navbar />
      <div className="text-white flex justify-center text-8xl w-[40%] mt-65 ml-40 ">
          <h1>
            WELCOME TO MY <span className="text-amber-800">PROJECT</span>
          </h1>
      </div>

      <div className="text-white flex justify-center text-5xl w-[40%] mt-80 ml-[30%] ">
          <h1>
            IN PROGRESS
          </h1>
      </div>

      <div className="grid grid-cols-3 gap-10 mt-20 ml-20 yellowtail-font">
        <div className="grid-container py-4 px-4 opacity-40">PROJECT 1</div>
        <div className="grid-container py-4 px-4 opacity-40">PROJECT 2</div>
        <div className="grid-container py-4 px-4 opacity-40">PROJECT 3</div>
        <div className="grid-container py-4 px-4 opacity-40">PROJECT 4</div>
        <div className="grid-container py-4 px-4 opacity-40">PROJECT 5</div>
        <div className="grid-container py-4 px-4 opacity-40">PROJECT 6</div>
      </div>


      <div className="text-white flex justify-center text-5xl w-[40%] mt-60 ml-[30%] ">
          <h1>
            FINISHED
          </h1>
      </div>

      <div className="grid grid-cols-3 gap-10 mt-20 ml-20 yellowtail-font">
        <div className="grid-container py-4 px-4 opacity-40">PROJECT 1</div>
        <div className="grid-container py-4 px-4 opacity-40">PROJECT 2</div>
        <div className="grid-container py-4 px-4 opacity-40">PROJECT 3</div>
      </div>

      <div className="flex justify-between w-[80%] mt-[300px] ml-40 border-white px-40 text-slate-300 text-xl cursor-pointer ">
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

export default Project;
