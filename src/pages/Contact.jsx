import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";

export default function Project() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 500);
  }, []);

  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted!");
  };

  return (
    <div
      className={`bg-gradient-to-tr from-indigo-600 via-black to-indigo-600 border h-[1200px] ${
        show ? "opacity-100" : "opacity-0"
      }`}
    >
      <Navbar />
      <div className={`max-w-md mx-auto mt-50 p-6 bg-white shadow-lg rounded-lg ${
          show ? "opacity-100" : "opacity-0"
        }`}>
        <h2 className="text-xl font-semibold mb-4 ">Contact Us</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          ></textarea>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            Send Message
          </button>
        </form>
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
}
