import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white py-4 mt-8 shadow-inner  *:">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        <span className="text-sm">
          &copy; {new Date().getFullYear()} MyWebsite. All rights reserved.
        </span>
        <div className="flex space-x-4 mt-2 md:mt-0">
          <a href="#" className="hover:text-blue-200 transition">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-blue-200 transition">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
