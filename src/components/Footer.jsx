import React from "react";
import { CiMail } from "react-icons/ci";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosCall } from "react-icons/io";

export default function () {
  return (
    <footer className="bg-surface-light dark:bg-surface-dark border-t border-slate-200 dark:border-slate-800 pt-16 pb-8">
      <div className="max-w-[1280px] mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="size-6 text-primary">
                <svg
                  fill="currentColor"
                  viewBox="0 0 48 48"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M4 4H17.3334V17.3334H30.6666V30.6666H44V44H4V4Z"></path>
                </svg>
              </div>
              <span className="font-bold text-lg"> Castors</span>
            </div>
            <p className="text-sm text-text-sec-light leading-relaxed">
              Leading manufacturer of industrial wheels and castors in India.
              Providing mobility solutions since .
            </p>
          </div>
          <div>
            <h4 className="font-bold text-text-main-light dark:text-text-main-dark mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm text-text-sec-light">
              <li>
                <a className="hover:text-primary" href="Home">
                  Home
                </a>
              </li>
              <li>
                <a className="hover:text-primary" href="Contact">
                  Contact
                </a>
              </li>
              <li>
                <a className="hover:text-primary" href="About">
                  About
                </a>
              </li>
              
              <li>
                <a className="hover:text-primary" href="product">
                  Product
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-text-main-light dark:text-text-main-dark mb-4">
              Support
            </h4>
            <ul className="space-y-2 text-sm text-text-sec-light">
              <li>
                <a className="hover:text-primary" href="#">
                  Contact Us
                </a>
              </li>
              <li>
                <a className="hover:text-primary" href="#">
                  Shipping Policy
                </a>
              </li>
              <li>
                <a className="hover:text-primary" href="#">
                  Warranty
                </a>
              </li>
              <li>
                <a className="hover:text-primary" href="#">
                  Terms &amp; Conditions
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-text-main-light dark:text-text-main-dark mb-4">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-text-sec-light">
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-lg">
                  <FaLocationDot />
                </span>
                <span>
                  Regd.off Plot No.-298,3rd floor,sector
                  10A,Gurgaon-122001,Haryana,India.
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-lg">
                  <IoIosCall />
                </span>
                <span>+91 8826883046</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-lg">
                  <CiMail />
                </span>
                <span>sales@castorwheels.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-200 dark:border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-text-sec-light">
          <p>© 2026 Castorwheels India Pvt Ltd. All rights reserved.</p>
          <div className="flex gap-4">
            <a className="hover:text-text-main-light" href="#">
              Privacy
            </a>
            <a className="hover:text-text-main-light" href="#">
              Terms
            </a>
         
          </div>
        </div>
      </div>
    </footer>
  );
}
