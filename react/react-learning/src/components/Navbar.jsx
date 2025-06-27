import React from "react";
import { Link } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa";
import { MdCancelPresentation } from "react-icons/md";


const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  console.log("Dropdown menu state:", isOpen);

  const popupmenu = () => {
    // Function to handle the dropdown menu click
    return setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="w-full bg-black text-white flex justify-between sm:justify-center py-2 item-centre gap-2">
        <span className="text-center xs:w-full">Sign up and get 10% off</span>{" "}
        <FaAngleDown className="cursor-pointer" onClick={popupmenu} />
      </div>
      {isOpen ? (
        <>
          <div className="bg-white text-black w-full sm:h-1/2 h-screen absolute flex top-0 sm:flex-row flex-col justify-around  items-center ">
          <span className="absolute top-7 right-7 cursor-pointer " onClick={popupmenu}><MdCancelPresentation size={50} />
</span>
            <li className="">home</li>
            <li className="">home</li>
            <li className="">home</li>
            <li className="">home</li>
          </div>
        </>
      ) : null}
      <div>
        <nav className="bg-blue-600 shadow-md">
          <div className="container mx-auto flex justify-between items-center p-4">
            <div className="flex items-center">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
                alt="Logo"
                className="w-10 h-10 mr-3"
              />
              <span className="text-white text-2xl font-bold">MyWebsite</span>
            </div>
            <ul className="flex space-x-8">
              <li>
                <Link
                  to="/"
                  className="text-white hover:text-blue-200 cursor-pointer"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-white hover:text-blue-200 cursor-pointer"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-white hover:text-blue-200 cursor-pointer"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
