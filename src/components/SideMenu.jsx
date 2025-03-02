import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

const SideMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  // Fungsi untuk menangani klik di luar menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="w-10 h-8 text-white p-4 flex items-center bg-transparent -mt-0.5  ">

      {/* Tombol untuk membuka menu */}
      <button onClick={() => setIsOpen(!isOpen)} className="font-bold text-lg hover-nav">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
          />
        </svg>
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <div ref={menuRef} className="absolute top-12 left-4 bg-gray-800 p-2 rounded-lg shadow-lg">
          <li>
          <Link to="/" className="side">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="side">
            About
          </Link>
        </li>
        <li>
          <Link to="/contact" className="side">
            Contact
          </Link>
        </li>
        <li>
          <Link to="/project" className="side">
            Project
          </Link>
        </li>
        <li>
          <Link to="/album" className="side">
            Album
          </Link>
        </li>
        </div>
      )}
    </nav>
  );
};

export default SideMenu;
