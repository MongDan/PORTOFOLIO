import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const Home = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowContent(true);
    }, 500); // Muncul setelah 500ms
  }, []);

  return (
    <div className="bg-gradient-to-tr from-indigo-600 via-black to-indigo-600 h-[1300px] border relative font-nunito">
      <Navbar />
      <div
        className={`flex justify-between w-[80%] mt-50 ml-40 border-white px-40 text-8xl transition-opacity duration-500 ${
          showContent ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="-ml-30 uppercase mt-10">
          <h1 className="text-white mr-40 font-bold">
            Hi!, I&apos;m Dandy
            <span className="text-amber-800"> A Designer </span>
          </h1>
          <div className="flex space-x-10 ml-2 mt-3">
            <Link to="/">
              <img
                src="/img/home.svg"
                alt=""
                className="size-10 mt-2 hover-nav"
              />
            </Link>
            <Link to="/contact">
              <img
                src="/img/PESAN.svg"
                alt=""
                className="size-10 mt-2 hover-nav ml-2"
              />
            </Link>
            <Link to="/about">
              <img
                src="/img/user.svg"
                alt=""
                className="mt-2 hover-nav ml-2 size-10"
              />
            </Link>
            <Link to="/project">
              <img
                src="/img/work.svg"
                alt=""
                className="mt-2 hover-nav ml-2 size-10"
              />
            </Link>
            <Link to="/album">
              <img
                src="/img/photo.svg"
                alt=""
                className="mt-2 hover-nav ml-2 size-10"
              />
            </Link>
          </div>
        </div>

        <div>
          <img src="/img/Dandy2.png" alt="" className="scale-120 ml-40" />
        </div>
      </div>

      {/* FOOTER */}
      <div className="flex justify-between w-[80%] mt-[400px] ml-40 border-white px-40 text-slate-300 text-xl cursor-pointer">
        <div className="-ml-20">
          <h3 className="hover:scale-110 hover:font-semibold hover:text-sky-400 duration-200 transition">
            © 2025 Dandy Teguh Pratama
          </h3>
        </div>
        <div className="grid grid-cols-1 gap-10">
          <h3>
            <a
              href="https://tailwindcss.com/"
              className="hover:scale-110 hover:font-semibold hover:text-sky-400 duration-200 transition"
            >
              Tailwind
            </a>
          </h3>
          <h3>
            <a
              href="https://react.dev/"
              className="hover:scale-110 hover:font-semibold hover:text-sky-400 duration-200 transition"
            >
              React
            </a>
          </h3>
          <h3>
            <a
              href="https://vite.dev/"
              className="hover:scale-110 hover:font-semibold hover:text-sky-400 duration-200 transition"
            >
              Vite
            </a>
          </h3>
          <h3>
            <a
              href="https://github.com/MongDan"
              className="hover:scale-110 hover:font-semibold hover:text-sky-400 duration-200 transition"
            >
              Github
            </a>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Home;
