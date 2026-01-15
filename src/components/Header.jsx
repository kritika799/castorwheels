import { Search } from "lucide-react";
import React from "react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm transition-all duration-300">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div
          className="flex items-center gap-2.5 shrink-0 cursor-pointer"
          // onclick="window.location.href='#'"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-br from-primary to-blue-600 text-white shadow-lg shadow-blue-500/20">
            <svg
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 48 48"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M4 4H17.3334V17.3334H30.6666V30.6666H44V44H4V4Z"></path>
            </svg>
          </div>
          <div className="flex flex-col">
            <h2 className="text-xl font-extrabold leading-none tracking-tight text-slate-900">
              Castors
            </h2>
          </div>
        </div>
        <nav className="hidden lg:flex items-center gap-8">
          <a
            className="text-sm font-semibold text-slate-600 hover:text-primary transition-colors"
            href="/"
          >
            Home
          </a>
        
          <a
            className="text-sm font-semibold text-slate-600 hover:text-primary transition-colors"
            href="/About"
          >
            About
          </a>
      
          <a
            className="text-sm font-semibold text-slate-600 hover:text-primary transition-colors"
            href="/Products"
          >
            Products
          </a>
          <a
            className="text-sm font-semibold text-slate-600 hover:text-primary transition-colors"
            href="/Contact"
          >
            Contact
          </a>
          <a
            className="text-sm font-semibold text-slate-600 hover:text-primary transition-colors"
            href="/Industries"
          >
            Industries
          </a>
        </nav>
        <div className="flex items-center gap-4">
          <div className="hidden md:block relative w-64">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
              {/* <span className="material-symbols-outlined text-[18px]">search</span> */}
              <Search className="material-symbols-outlined text-[18px]" />
            </span>
            <input
              className="block w-full rounded-full border-0 bg-slate-100 py-2 pl-10 pr-4 text-sm font-medium text-slate-800 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-primary transition-all hover:bg-slate-50"
              placeholder="Search castors..."
              type="text"
            />
          </div>
          <a
            className="hidden sm:flex items-center justify-center h-10 px-6 rounded-full bg-slate-900 text-sm font-bold text-white shadow-lg shadow-slate-900/20 hover:bg-slate-800 hover:scale-105 transition-all duration-200"
            href="Form"
          >
            Request Info
          </a>
          <button className="lg:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-lg">
            <span className="material-symbols-outlined text-2xl">menu</span>
          </button>
        </div>
      </div>
    </header>
  );
}
