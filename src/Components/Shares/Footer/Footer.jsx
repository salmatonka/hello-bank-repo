import React from 'react';

const Footer = () => {
    return (
        <footer className="px-4 divide-y bg-gray-800 text-gray-100">
      <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
        <div className="lg:w-1/3">
          <a rel="noopener noreferrer" href="/" className="flex justify-center space-x-3 lg:justify-start">
            <div className="flex items-center justify-center w-12 h-12 rounded-full dark:bg-violet-400">
              <img src="https://upload.wikimedia.org/wikipedia/commons/f/ff/Hello_bank%21_Logo.png" class="h-6 mr-3 sm:h-7" alt="helloBank Logo" />
            </div>
            <span className="self-center text-2xl font-semibold">Hello Bank</span>
          </a>
        </div>
        <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
          <div className="space-y-3">
            <h3 className="tracki uppercase dark:text-gray-50">Terms shortcuts
            </h3>
            <ul className="space-y-1">
              <li>
                <a rel="noopener noreferrer" href="#">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a rel="noopener noreferrer" href="#">
                  FAQ
                </a>
              </li>
              <li>
                <a rel="noopener noreferrer" href="#">
                  Accessibility Statement</a>
              </li>

            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="tracki uppercase dark:text-gray-50">Privacy Shortcuts
            </h3>
            <ul className="space-y-1">
              <li>
                <a rel="noopener noreferrer" href="#">Privacy & Policy
                </a>
              </li>
              <li>
                <a rel="noopener noreferrer" href="#">Legal Information
                </a>
              </li>
              <li>
                <a rel="noopener noreferrer" href="#">
                  Security Information
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="uppercase dark:text-gray-50">About All
            </h3>
            <ul className="space-y-1">
              <li>
                <a rel="noopener noreferrer" href="#">Careers
                </a>
              </li>
              <li>
                <a rel="noopener noreferrer" href="#">
                  Customer Reviews
                </a>
              </li>
              <li>
                <a rel="noopener noreferrer" href="#">

                  About Us</a>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="uppercase dark:text-gray-50">Resources

            </h3>
            <ul className="space-y-1">
              <li>
                <a rel="noopener noreferrer" href="#">GitHub

                </a>
              </li>
              <li>
                <a rel="noopener noreferrer" href="#">

                  Contact Us
                </a>
              </li>

            </ul>
          </div>

        </div>
      </div>
      <div className="py-6 text-sm text-center dark:text-gray-400">© 1968 Company Co. All rights reserved.</div>


    </footer>

    );
};

export default Footer;