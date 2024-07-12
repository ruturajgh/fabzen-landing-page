import React, { useState } from "react";

function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="">
      <div className="containe-lgr mx-20 px-6 py-3 mb-3">
        <div className="flex justify-between items-center mt-3">
          <a className="text-xl font-bold text-gray-800 lg:text-2xl" href="/">
            <img
              src={`/assets/images/logo.png`}
              height={300}
              width={300}
              alt="Logo"
            />
          </a>
          <div className="flex space-x-14">
            <a
              className="hover:text-pink-700 text-white stolzl-300 "
              href="/"
              style={{ textDecoration: "none", fontSize:"18px" }}
            >
              Home
            </a>
            <a
              className="hover:text-pink-700 text-white stolzl-300 "
              href="/about"
              style={{ textDecoration: "none"  ,fontSize:"18px" }}
            >
              About
            </a>
            <div className="relative">
              <a
                className="hover:text-pink-700 text-white stolzl-300 cursor-pointer "
                onClick={toggleDropdown}
                style={{ textDecoration: "none"  ,fontSize:"18px" }}
              >
                Services <i class="" ></i>
              </a>
              {isDropdownOpen && (
                <div
                  className="absolute bg-white shadow-lg mt-2 py-2  rounded-md ring-1 ring-black ring-opacity-5"
                  style={{ width: "250px" }}
                >
                  <a
                    href="/AppDevelopment"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-pink-700 hover:text-white"
                  >
                    Mobile Apps Development
                  </a>
                  <a
                    href="/GameDevelopment"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-pink-700 hover:text-white"
                  >
                    Mobile Games Development
                  </a>
                  <a
                    href="/CloudServices"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-pink-700 hover:text-white"
                  >
                    Cloud & Devops Services
                  </a>
                  <a
                    href="/UxServices"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-pink-700 hover:text-white"
                  >
                    UI/UX Desgin
                  </a>
                  <a
                    href="/service1"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-pink-700 hover:text-white"
                  >
                    Game Branding & Marketing
                  </a>
                  <a
                    href="/service1"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-pink-700 hover:text-white"
                  >
                    Game 2D/3D Desgin
                  </a>
                 
                </div>
              )}
            </div>
            <a
              className="hover:text-pink-700 text-white stolzl-300 "
              href="/uxservice"
              style={{ textDecoration: "none"   ,fontSize:"18px"}}
            >
            Our Product
            </a>
            <a
              className="hover:text-pink-700 text-white stolzl-300 "
              href="/contact"
              style={{ textDecoration: "none"  ,fontSize:"18px" }}
            >
              Careers
            </a>
            <a
              className="hover:text-pink-700 text-white stolzl-300 "
              href="/contact"
              style={{ textDecoration: "none"  ,fontSize:"18px" }}
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
