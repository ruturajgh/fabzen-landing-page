import React from "react";

function Footer() {
  return (
    <footer
      className="footer-bg text-white py-8"
      // style={{ backgroundImage: "url('../../src/asstes/images/footer-main.png')", backgroundSize: 'cover' }}
    >
      <div className="container mx-auto px-10">
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
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div>
            <img
              src={`/assets/images/logo.png`}
              height="240"
              width="240"
              alt="Logo"
            />

            <p
              className="secondary-text w-60 mt-3"
              style={{ fontSize: "13px" }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
              eligendi iure natus perspiciatis sed, enim officiis minus eaque
              maiores.
            </p>
          </div>
          <div>
            <h5 className="font-medium mb-4 m-3 ms-5 stolzl-400">Company</h5>
            <ul className="ms-4">
              <li className="mb-2">
                <a
                  href="#"
                  className="secondary-text no-underline"
                  style={{ fontSize: "13px" }}
                >
                  Design
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="secondary-text no-underline"
                  style={{ fontSize: "13px" }}
                >
                  Development
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="secondary-text no-underline"
                  style={{ fontSize: "13px" }}
                >
                  Promotions
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="secondary-text no-underline"
                  style={{ fontSize: "13px" }}
                >
                  Digital Marketing
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="font-medium mb-4 m-3 ms-5 stolzl-400">Company</h5>
            <ul className="ms-4">
              <li className="mb-2">
                <a
                  href="#"
                  className="secondary-text no-underline"
                  style={{ fontSize: "13px" }}
                >
                  About Us
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="secondary-text no-underline"
                  style={{ fontSize: "13px" }}
                >
                  Our Team
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="secondary-text no-underline"
                  style={{ fontSize: "13px" }}
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="secondary-text no-underline"
                  style={{ fontSize: "13px" }}
                >
                  Careers
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
                  className="secondary-text no-underline"
                  style={{ fontSize: "13px" }}
                >
                  ISO Certified
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="secondary-text no-underline"
                  style={{ fontSize: "13px" }}
                >
                  Privacy Policy
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="secondary-text no-underline"
                  style={{ fontSize: "13px" }}
                >
                  Terms and Conditions
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="secondary-text no-underline"
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
            />
          </div>
        </div>
      </div>
      <hr className="mt-6" style={{ color: "aliceblue" }} />
      <h5 className="secondary-text text-center mt-3 mb-4 font-light">
        ©2023 All Rights Reserved.
      </h5>
    </footer>
  );
}

export default Footer;
