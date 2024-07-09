import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/na_logo-removebg-preview.png";
import { FaBarsStaggered } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";

const Header = () => {
  const [showLinks, setShowLinks] = useState(false);

  const links = [
    { label: "HOME", url: "/" },
    { label: "ABOUT", url: "/about" },
    { label: "WORK", url: "/work" },
    { label: "SERVICES", url: "/services" },
    { label: "CONTACT", url: "/contact" },
    { label: "BLOG", url: "/blog" },
  ];

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    // <nav className="fixed top-0 left-0 right-0 flex items-center justify-between p-4 bg-blue-900 shadow-md">
    //   <div className="flex-shrink-0">
    //     <img className="h-8 w-8" src={logo} alt="Logo" />
    //   </div>
    //   <div className="flex-grow flex justify-center space-x-4">
    //     {links.map(({ label, url }) => (
    //       <Link
    //         to={url}
    //         key={url}
    //         className="text-white hover:text-gray-300"
    //       >
    //         {label}
    //       </Link>
    //     ))}
    //   </div>
    //   <div className="flex-shrink-0">
    //     <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
    //       Let's Talk
    //     </button>
    //   </div>
    //   <div>
    //   <FaBarsStaggered />
    //   <IoMdClose />
    //   </div>
    // </nav>

    <nav className="sticky z-10 top-0 left-0 right-0 flex items-center justify-between px-8 py-6 bg-purple-900 shadow-md">
      <div className="flex-shrink-0">
        <img className="h-14 w-14" src={logo} alt="Logo" />
      </div>

      {/* For screens with min-width of 1024px */}
      <div className="hidden md:flex md:justify-center md:space-x-6">
        {links.map(({ label, url }) => (
          <Link to={url} key={url} className="text-white hover:text-purple-400">
            {label}
          </Link>
        ))}
      </div>

      {/* For screens with max-width of 1024px */}
      <div className="md:hidden">
        {showLinks ? (
          <IoMdClose className="text-white text-2xl" onClick={toggleLinks} />
        ) : (
          <FaBarsStaggered
            className="text-white text-2xl"
            onClick={toggleLinks}
          />
        )}
      </div>

      {/* Links menu for screens with max-width of 1024px */}
      {showLinks && (
        <div className="md:hidden absolute top-full left-0 w-full bg-purple-600 flex flex-col items-start">
          {links.map(({ label, url }) => (
            <Link
              to={url}
              key={url}
              className="text-white hover:text-gray-300 py-4 px-6"
              onClick={toggleLinks}
            >
              {label}
            </Link>
          ))}
        </div>
      )}

      <div className="flex-shrink-0">
        <Link to="/contact">
          <button className="bg-purple-600 text-white px-8 py-3 rounded-md hover:text-black">
            LET'S TALK
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
