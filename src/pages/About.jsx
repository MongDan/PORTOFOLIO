import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";

const About = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 500);
  }, []);

  return (
    <div className="bg-gradient-to-tr from-indigo-600 via-black to-indigo-600 h-[2680px] relative border nonito-font">
      <Navbar />
      <h1
        className={`text-white text-center text-8xl mt-32 font-bold transition-opacity duration-500 ${
          show ? "opacity-100" : "opacity-0"
        }`}
      >
        I&apos;m Dandy
      </h1>
      <div className={`mt-30 flex justify-end ${show ? 'opacity-100' : 'opacity-0'}`}>
        <img
          src="./src/img/Dandy.png"
          alt=""
          className="border rounded-t-full bg-gradient-to-r from-gray-400 to-slate-600"
        />
        <div
          className={`w-180 border-white ml-40 mr-20 text-white ${
            show ? "opacity-100" : "opacity-0"
          }`}
        >
          <h2 className=" text-4xl font-semibold">
            Saya seorang Mahasiswa yang berdedikasi untuk menciptakan solusi
            inovatif dan berkualitas tinggi.
          </h2>
          <p className="mt-10 text-lg">
            Saya merupakan mahasiswa di Universitas Islam Sultan Syarif Kasim
            Riau, saya seorang mahasiswa dari jurusan
            <span className="text-yellow-500 block hover:scale-110 cursor-pointer duration-100 transition hover:translate-x-10">
              TEKNIK INFORMATIKA
            </span>
          </p>
          <p className="mt-10 text-lg">
            Untuk sekarang, saya memfokuskan diri untuk belajar dan
            mengembangkan kemampuan saya dalam bidang
            <span className="text-yellow-500 uppercase flex hover:scale-110 cursor-pointer duration-100 transition hover:translate-x-10">
              Frontend Development
            </span>
          </p>
        </div>
      </div>

      <div
        className={`text-white flex justify-center text-8xl mt-50 transition-opacity duration-500 ${
          show ? "opacity-100" : "opacity-0"
        }`}
      >
        <h1 className="">Data Lengkap</h1>
      </div>

      <div
        className={`text-white flex justify-center text-2xl mt-50 transition-opacity duration-500 ${
          show ? "opacity-100" : "opacity-0"
        }`}
      >
        <table className="border-collapse border border-gray-400 font-semibold">
          <thead>
            <tr>
              <th className="border border-gray-300 px-40">State</th>
              <th className="border border-gray-300 px-40">City</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 px-40">Nama Lengkap</td>
              <td className="border border-gray-300 px-40">
                Dandy Teguh Pratama
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-40">
                Tanggal, Tempat Lahir
              </td>
              <td className="border border-gray-300 px-40">
                07-03-2005, Pekanbaru
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-40">Jenis Kelamin</td>
              <td className="border border-gray-300 px-40">Laki-Laki</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div
        className={`text-white flex justify-center text-8xl mt-60 transition-opacity duration-500 ${
          show ? "opacity-100" : "opacity-0"
        }`}
      >
        <h1 className="">Hobby</h1>
      </div>

      <div
        className={`flex flex-wrap ml-18 mt-40 grid grid-cols-3 gap-10 transition-opacity duration-500 ${
          show ? "opacity-100" : "opacity-0"
        }`}
      >
        <h1 className="absolute text-white bottom-[835px] left-[220px] text-4xl uppercase font-bold">
          Voly
        </h1>
        <h1 className="absolute text-white bottom-[835px] left-[730px] text-4xl uppercase font-bold">
          GYM
        </h1>
        <h1 className="absolute text-white bottom-[835px] left-[1225px] text-4xl uppercase font-bold">
          GAME
        </h1>
        <div className="grid-container">
          <img
            src="./src/img/voli.jpeg"
            alt=""
            className="object-cover bg-center rounded-xl h-[100%] w-[100%] shadow-xl"
          />
        </div>
        <div className="grid-container">
          <img
            src="./src/img/gym.jpeg"
            alt=""
            className="object-cover bg-center rounded-xl h-[100%] w-[100%] shadow-xl"
          />
        </div>
        <div className="grid-container">
          <img
            src="./src/img/game.png"
            alt=""
            className="object-cover bg-center rounded-xl h-[100%] w-[100%] shadow-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
