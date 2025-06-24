import React from 'react'

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
            <li className="text-white hover:text-blue-200 cursor-pointer">Home</li>
            <li className="text-white hover:text-blue-200 cursor-pointer">About</li>
            <li className="text-white hover:text-blue-200 cursor-pointer">Contact</li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
