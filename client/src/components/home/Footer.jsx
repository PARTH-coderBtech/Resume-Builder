import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="flex flex-wrap justify-between items-start gap-10 py-10 px-6 md:px-12 lg:px-20 text-[13px] text-gray-500 bg-gradient-to-r from-white via-green-200/40 to-white mt-20">

        {/* Left Section */}
        <div className="flex flex-wrap lg:flex-nowrap items-start gap-8 md:gap-14 xl:gap-20 flex-1 min-w-[280px]">

          <Link to="/">
            <img src="/logo.svg" alt="logo" className="w-24" />
          </Link>

          <div>
            <p className="text-slate-800 font-semibold">Product</p>
            <ul className="mt-2 space-y-1.5">
              <li><a href="/" className="hover:text-green-600">Home</a></li>
              <li><a href="/" className="hover:text-green-600">Support</a></li>
              <li><a href="/" className="hover:text-green-600">Pricing</a></li>
              <li><a href="/" className="hover:text-green-600">Affiliate</a></li>
            </ul>
          </div>

          <div>
            <p className="text-slate-800 font-semibold">Resources</p>
            <ul className="mt-2 space-y-1.5">
              <li><a href="/" className="hover:text-green-600">Company</a></li>
              <li><a href="/" className="hover:text-green-600">Blogs</a></li>
              <li><a href="/" className="hover:text-green-600">Community</a></li>
              <li>
                <a href="/" className="hover:text-green-600">
                  Careers
                  <span className="text-xs text-white bg-green-600 rounded ml-2 px-1.5 py-0.5">
                     We`re Hiring!
                  </span>
                </a>
              </li>
              <li><a href="/" className="hover:text-green-600">About</a></li>
            </ul>
          </div>

          <div>
            <p className="text-slate-800 font-semibold">Legal</p>
            <ul className="mt-2 space-y-1.5">
              <li><a href="/" className="hover:text-green-600">Privacy</a></li>
              <li><a href="/" className="hover:text-green-600">Terms</a></li>
            </ul>
          </div>

        </div>

        {/* Right Section */}
        <div className="flex flex-col items-end max-md:items-center max-md:text-center gap-3 lg:ml-auto min-w-[240px]">

          <p className="max-w-[40ch] leading-relaxed text-sm">
            Making every customer feel valued—no matter the size of your audience.
          </p>

          <div className="flex items-center gap-4">
            <a href="https://dribbble.com/prebuiltui" target="_blank" rel="noreferrer">
              <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" className="hover:text-green-500">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94"></path>
                <path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32"></path>
                <path d="M8.56 2.75c4.37 6 6 9.42 8 17.72"></path>
              </svg>
            </a>

            <a href="https://www.linkedin.com/company/prebuiltui" target="_blank" rel="noreferrer">
              <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" className="hover:text-green-500">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect width="4" height="12" x="2" y="9"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>

            <a href="https://x.com/prebuiltui" target="_blank" rel="noreferrer">
              <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" className="hover:text-green-500">
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
            </a>

            <a href="https://www.youtube.com/@prebuiltui" target="_blank" rel="noreferrer">
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" className="hover:text-green-500">
                <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path>
                <path d="m10 15 5-3-5-3z"></path>
              </svg>
            </a>
          </div>

          <p className="text-xs text-center">
            © 2025 <a href="https://prebuiltui.com" className="hover:text-green-600">Resume Builder</a>
          </p>
        </div>

      </footer>
    </>
  );
};

export default Footer;
