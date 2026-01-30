import React from "react";
import { CiMail } from "react-icons/ci";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosCall } from "react-icons/io";
import { Link } from "react-router-dom";

export default function () {
  return (
    <footer className="bg-surface-light dark:bg-surface-dark border-t border-slate-200 dark:border-slate-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid  md:grid-cols-2 grid-cols-2 lg:grid-cols-4 gap-12 mb-12 place-items-center md:place-items-start">
          <div className="flex flex-col   col-span-2 md:col-span-1 place-items-center text-center md:place-items-start md:text-left">
            <Link to="/" >
              <img
                src="./Casters_Global_Logo.png"
                alt="Casters global logo"
                className="h-20 w-full"
              />
            </Link>
            <p className="text-sm text-text-sec-light leading-relaxed">
              Engineered caster solutions delivering smooth, reliable mobility
              across industries—built for performance, durability, and
              real-world demands since 2018.
            </p>
          </div>
          <div className="col-span-1">
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
                <a className="hover:text-primary" href="About">
                  Who We Are
                </a>
              </li>
              <li>
                <a className="hover:text-primary" href="About">
                  What we Do
                </a>
              </li>

              <li>
                <a className="hover:text-primary" href="solution">
                  Product Showcase
                </a>
              </li>
              <li>
                <a className="hover:text-primary" href="Contact">
                  Get in Touch
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
          <div className="col-span-2 md:col-span-1 place-items-center text-center md:place-items-start md:text-left flex flex-col justify-center items-center md:items-start">
            <h4 className="font-bold text-text-main-light dark:text-text-main-dark mb-4">
              Contact
            </h4>
            <ul className="space-y-3 text-sm flex justify-center flex-col items-center md:items-start text-text-sec-light">
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-lg">
                  <FaLocationDot />
                </span>
                <span>
                  Plot No.-298, 3rd Floor, Sector 10A, Gurgaon-122001, Haryana,
                  India.
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
                <span>sales@castersglobal.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-200 dark:border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-text-sec-light">
          <p>© 2018 Casters Global All rights reserved.</p>
          <div className="flex gap-4">
            <a className="hover:text-text-main-light p-2" href="/privacy">
              Privacy
            </a>
            <a className="hover:text-text-main-light p-2" href="/terms">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
