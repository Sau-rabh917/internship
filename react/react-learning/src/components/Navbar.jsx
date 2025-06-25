import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
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
              <Link to="/" className="text-white hover:text-blue-200 cursor-pointer">Home</Link>
            </li>
            <li>
              <Link to="/about" className="text-white hover:text-blue-200 cursor-pointer">About</Link>
            </li>
            <li>
              <Link to="/contact" className="text-white hover:text-blue-200 cursor-pointer">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
