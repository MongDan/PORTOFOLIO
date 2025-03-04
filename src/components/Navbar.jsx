
import { Link } from "react-router-dom";
import SideMenu from "./SideMenu";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 500);
  }, []);

  return (
    <nav>
  
 
      <ul
        className={`flex justify-center space-x-2  p-5 transition duration-500 ease-in py-4 rounded-full backdrop-blur border-none text-white border fixed top-8 left-1/2 -translate-x-1/2 text-lg font-base hover:outline-blue-800 ${
          show ? "opacity-100" : "opacity-0"
        }`}
      >
        <SideMenu />
        <li className="hover-nav">
          <Link to="/" className="btn">
            Home
          </Link>
        </li>
        <li className="hover-nav">
          <Link to="/about" className="btn">
            About
          </Link>
        </li>
        <li className="hover-nav">
          <Link to="/contact" className="btn">
            Contact
          </Link>
        </li>
        <li className="hover-nav">
          <Link to="/project" className="btn">
            Project
          </Link>
        </li>
        <li className="hover-nav">
          <Link to="/album" className="btn">
            Album
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
