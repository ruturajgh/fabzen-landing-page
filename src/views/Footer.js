import React from "react";

function Footer() {
  return (
    <footer
      className="footer-bg text-white py-8  mx-auto"
      // style={{ backgroundImage: "url('../../src/asstes/images/footer-main.png')", backgroundSize: 'cover' }}
    >
      <div className=" mx-auto px-10">
        <div>
          <h2 className="mt-4 text-center font-extralight text-2xl mb-12 stolzl-300 ">
            Follow Our Work
          </h2>
        </div>
        <div className="flex flex-wrap ms-5 mb-12">
          <div className="md:w-1/5">
            <h4 className="font-light text-4xl stolzl-400">LinkedIn</h4>
          </div>
          <div className="md:w-1/5">
            <h4 className="font-light text-4xl stolzl-400">Facebook</h4>
          </div>
          <div className="md:w-1/5">
            <h4 className="font-light text-4xl stolzl-400">Twitter</h4>
          </div>
          <div className="md:w-1/5">
            <h4 className="font-light text-4xl stolzl-400">Instagram</h4>
          </div>
          <div className="md:w-1/5">
            <h4 className="font-light text-4xl stolzl-400">YouTube</h4>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-24">
          <div className="me-8">
            <img
              src={`/assets/images/logo.png`}
              height="240"
              width="240"
              alt="Logo"
              loading="lazy"
            />

            <p
              className="secondary-text w-60 mt-3"
              style={{ fontSize: "14px" }}
            >
             A Terralogic company crafting meaningful experiences through Research, Design and Development.
            </p>
          </div>
          <div className="items-center">
            <h5 className="font-medium mb-4 m-3 ms-5 stolzl-400">Services</h5>
            <ul className="">
              <li className="mb-2 ms-5">
                <a
                  href="/GameDevelopment"
                  className="secondary-text no-underline stolzl-300"
                  style={{ fontSize: "13px" }}
                >
                 Mobile Game Development
                </a>
              </li>
              <li className="mb-2 ms-5">
                <a
                  href="/AppDevelopment"
                  className="secondary-text no-underline stolzl-300"
                  style={{ fontSize: "13px" }}
                >
                 Mobile App Development
                </a>
              </li>
              <li className="mb-2 ms-5">
                <a
                  href="/CloudServices"
                  className="secondary-text no-underline stolzl-300"
                  style={{ fontSize: "13px" }}
                >
                 Cloud & Devops Services
                </a>
              </li>
              <li className="ms-5 mb-2">
                <a
                  href="/UxServices"
                  className="secondary-text no-underline stolzl-300"
                  style={{ fontSize: "13px" }}
                >
                  UI/UX Design
                </a>
              </li>
              <li className="ms-5 mb-2">
                <a
                  href="GameBrandingMarket"
                  className="secondary-text no-underline stolzl-300"
                  style={{ fontSize: "13px" }}
                >
                Branding/Marketing
                </a>
              </li>
              <li className="ms-5">
                <a
                  href="/GameDesign"
                  className="secondary-text no-underline stolzl-300"
                  style={{ fontSize: "13px" }}
                >
                2D/3D Design
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="font-medium mb-4 m-3 ms-5 stolzl-400">Company</h5>
            <ul className="ms-4">
              <li className="mb-2 ms-1">
                <a
                  href="/about"
                  className="secondary-text no-underline stolzl-300"
                  style={{ fontSize: "13px" }}
                >
                  About Us
                </a>
              </li>
              <li className="mb-2 ms-1">
                <a
                  href="#"
                  className="secondary-text no-underline stolzl-300"
                  style={{ fontSize: "13px" }}
                >
                  Our Team
                </a>
              </li>
              <li className="mb-2 ms-1">
                <a
                  href="#"
                  className="secondary-text no-underline stolzl-300"
                  style={{ fontSize: "13px" }}
                >
                  Portfolio
                </a>
              </li>
              <li className="ms-1">
                <a
                  href="/Careers"
                  className="secondary-text no-underline stolzl-300"
                  style={{ fontSize: "13px" }}
                >
                  Careers
                </a>
              </li>
              <li className="ms-1 mt-2">
                <a
                  href="/contact-us"
                  className="secondary-text no-underline stolzl-300"
                  style={{ fontSize: "13px" }}
                >
                 Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="font-medium mb-4 m-3 ms-5 stolzl-400">
              Quick Links
            </h5>
            <ul className="ms-4">
              <li className="mb-2">
                <a
                  href="#"
                  className="secondary-text no-underline  stolzl-300"
                  style={{ fontSize: "13px" }}
                >
                  ISO Certified
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="secondary-text no-underline  stolzl-300"
                  style={{ fontSize: "13px" }}
                >
                  Privacy Policy
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="secondary-text no-underline  stolzl-300"
                  style={{ fontSize: "13px" }}
                >
                  Terms and Conditions
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="secondary-text no-underline  stolzl-300"
                  style={{ fontSize: "13px" }}
                >
                  Refund Policy
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="font-medium mb-4 m-3 ms-5 stolzl-400">Member of</h5>
            <img
              className="ms-5"
              src={`/assets/images/footer-left-13.png`}
              height="90"
              width="90"
              alt="Member of"
              loading="lazy"
            />
          </div>
        </div>
      </div>
      <hr className="mt-16" style={{ color: "aliceblue" }} />
      <h5 className="secondary-text text-center mt-6 mb-4 font-light stolzl-300 ">
        ©2023 All Rights Reserved.
      </h5>
    </footer>
  );
}

export default Footer;
