import React, { useState } from "react";
import { useLocation } from "react-router-dom";

function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const isActive = (path) => {
    return location.pathname === path ? "active-link" : "";
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
              className={`hover:text-pink-700 text-white stolzl-300 ${isActive("/")}`}
              href="/"
              style={{ textDecoration: "none", fontSize: "18px" }}
            >
              Home
            </a>
            <a
              className={`hover:text-pink-700 text-white stolzl-300 ${isActive("/about")}`}
              href="/about"
              style={{ textDecoration: "none", fontSize: "18px" }}
            >
              About
            </a>
            <div className="relative">
              <a
                className="hover:text-pink-700 text-white stolzl-300 cursor-pointer"
                onClick={toggleDropdown}
                style={{ textDecoration: "none", fontSize: "18px" }}
              >
                Services <i className=""></i>
              </a>
              {isDropdownOpen && (
                <div
                  className="absolute bg-white shadow-lg rounded-md ring-1 ring-black ring-opacity-5"
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
                    UI/UX Design
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
                    Game 2D/3D Design
                  </a>
                </div>
              )}
            </div>
            <a
              className={`hover:text-pink-700 text-white stolzl-300 ${isActive("/uxservice")}`}
              href="/uxservice"
              style={{ textDecoration: "none", fontSize: "18px" }}
            >
              Our Product
            </a>
            <a
              className={`hover:text-pink-700 text-white stolzl-300 ${isActive("/contact")}`}
              href="/contact"
              style={{ textDecoration: "none", fontSize: "18px" }}
            >
              Careers
            </a>
            <a
              className={`hover:text-pink-700 text-white stolzl-300 ${isActive("/contact")}`}
              href="/contact"
              style={{ textDecoration: "none", fontSize: "18px" }}
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
