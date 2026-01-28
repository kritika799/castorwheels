import React, { useState, useEffect } from "react";
import { Search } from "lucide-react";
import { IoClose } from "react-icons/io5";
import { CiMenuBurger } from "react-icons/ci";
import { Link, useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      navigate(
        searchQuery.trim()
          ? `/solution?q=${encodeURIComponent(searchQuery.trim())}`
          : "/solution",
      );
      setSearchQuery("");
      setOpen(false);
    }
  };

  return (
    <>
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-slate-200">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-br from-primary to-blue-600 text-white shadow-lg">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 48 48">
                <path d="M4 4H17.3334V17.3334H30.6666V30.6666H44V44H4V4Z" />
              </svg>
            </div>
            <h2 className="text-xl font-extrabold text-slate-900">
              Casters Global
            </h2>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {["/", "/about", "/solution", "/contact"].map((path, i) => (
              <Link
                key={i}
                to={path}
                className="text-sm font-semibold text-slate-600 hover:text-primary"
              >
                {path === "/" ? "Home" : path.replace("/", "")}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            {/* Desktop Search */}
            <div className="hidden md:block relative w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 h-4 w-4" />
              <input
                className="w-full rounded-full bg-slate-100 py-2 pl-9 pr-4 text-sm focus:ring-2 focus:ring-primary"
                placeholder="Search castors..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={handleSearch}
              />
            </div>

            <Link
              to="/request-info"
              className="hidden sm:flex h-10 items-center rounded-full bg-slate-900 px-6 text-sm font-bold text-white hover:bg-slate-800"
            >
              Request Info
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setOpen(true)}
              className="lg:hidden rounded-lg p-2 hover:bg-slate-100"
              aria-label="Open menu"
            >
              <CiMenuBurger size={24} />
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
      </header>

      {open && (
        <div
          className="fixed inset-0 z-9999 lg:hidden"
          role="dialog"
          aria-modal="true"
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
            onClick={() => setOpen(false)}
          />

          {/* Drawer */}
          <div className="absolute right-0 top-0 h-full w-80 max-w-[85%] bg-white shadow-2xl p-6 animate-slideIn">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-slate-900">Menu</h3>
              <button
                onClick={() => setOpen(false)}
                className="rounded-lg p-2 hover:bg-slate-100"
                aria-label="Close menu"
              >
                <IoClose size={24} />
              </button>
            </div>

            {/* Search */}
            <div className="relative mb-8">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 h-4 w-4" />
              <input
                type="text"
                placeholder="Search products..."
                className="w-full rounded-full bg-slate-100 py-2.5 pl-9 pr-4 text-sm focus:ring-2 focus:ring-primary outline-none"
                onKeyDown={handleSearch}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Navigation */}
            <nav className="flex flex-col gap-1">
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "About" },
                { to: "/solution", label: "Solution" },
                { to: "/industries", label: "Industries" },
                { to: "/contact", label: "Contact" },
              ].map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-3 text-slate-700 font-medium hover:bg-slate-100 hover:text-primary transition"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
