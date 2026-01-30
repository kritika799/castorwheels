import React, { useState, useEffect, useRef } from "react";
import { Search, X } from "lucide-react";
import { CiMenuBurger } from "react-icons/ci";
import { Link, useNavigate } from "react-router-dom";

const solutions = [
  { label: "Automotive Assemble", to: "/solution/industrial" },
  { label: "Medical Castors", to: "/solution/medical" },
  { label: "Heavy Duty", to: "/solution/heavy-duty" },
  { label: "Custom Solutions", to: "/solution/custom" },
  { label: "Warehouse & Logistics", to: "/solution/warehouse-logistics" },
  { label: "Furniture", to: "/solution/furniture" },
];

const mainNavItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "Who We Are" },
  { to: "/what-we-do", label: "What We Do" },
  { to: "/solution", label: "Product Showcase", items: solutions },
  { to: "/contact", label: "Get In Touch" },
];

export default function Header() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSolutionOpen, setMobileSolutionOpen] = useState(false);

  // Desktop dropdown state + timeout ref for smooth hover-out
  const [activeDropdown, setActiveDropdown] = useState(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        setMobileOpen(false);
        setActiveDropdown(null);
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const q = searchQuery.trim();
      navigate(q ? `/solution?q=${encodeURIComponent(q)}` : "/solution");
      setSearchQuery("");
      setMobileOpen(false);
    }
  };

  const closeMobile = () => {
    setMobileOpen(false);
    setMobileSolutionOpen(false);
  };

  // Desktop dropdown handlers
  const openDropdown = (label) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(label);
  };

  const closeDropdown = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 220); // small delay → easier to reach menu
  };

  const toggleDropdown = (label, e) => {
    if (e) e.preventDefault(); // prevent navigation if it's a link
    if (activeDropdown === label) {
      setActiveDropdown(null);
    } else {
      openDropdown(label);
    }
  };

  return (
    <>
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="mx-auto flex h-16 sm:h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5">
            <img
              src="./Casters_Global_Logo.png"
              alt="Casters global logo"
              className="h-20 w-full"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {mainNavItems.map((item) =>
              item.items ? (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => openDropdown(item.label)}
                  onMouseLeave={closeDropdown}
                >
                  <button
                    type="button"
                    onClick={(e) => toggleDropdown(item.label, e)}
                    className="flex items-center gap-1.5 text-base font-semibold text-slate-700 hover:text-blue-600 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    aria-expanded={activeDropdown === item.label}
                    aria-haspopup="true"
                  >
                    {item.label}
                    <svg
                      className={`size-4 transition-transform ${activeDropdown === item.label ? "rotate-180" : ""}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  {/* Dropdown panel */}
                  {activeDropdown === item.label && (
                    <div
                      className="absolute left-0 top-full z-10 mt-2 w-64 origin-top-left transition-all duration-150 ease-out"
                      onMouseEnter={() => {
                        if (timeoutRef.current)
                          clearTimeout(timeoutRef.current);
                      }}
                      onMouseLeave={closeDropdown}
                    >
                      <div className="rounded-xl bg-white shadow-xl ring-1 ring-black/5 py-2">
                        {item.items.map((sub) => (
                          <Link
                            key={sub.to}
                            to={sub.to}
                            className="block px-5 py-2.5 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-700 transition-colors"
                            onClick={() => setActiveDropdown(null)}
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.to}
                  to={item.to}
                  className="text-base font-semibold text-slate-700 hover:text-blue-600 transition-colors focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                >
                  {item.label}
                </Link>
              ),
            )}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            {/* <div className="hidden md:block relative w-64 lg:w-72">
              <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-400" />
              <input
                className="w-full rounded-full bg-slate-100 py-2.5 pl-10 pr-4 text-sm border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200/50 transition-all outline-none"
                placeholder="Search castors…"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={handleSearch}
              />
            </div> */}

            <Link
              to="/request-info"
              className="hidden sm:inline-flex h-10 items-center justify-center rounded-full bg-slate-900 px-5 text-sm font-semibold text-white hover:bg-slate-800 transition-colors shadow-sm"
            >
              Request Info
            </Link>

            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden p-2 text-slate-700 hover:text-blue-600 rounded-lg transition-colors"
              aria-label="Open navigation menu"
              aria-expanded={mobileOpen}
            >
              <CiMenuBurger size={26} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer – remains click-only */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-[9999] lg:hidden"
          role="dialog"
          aria-modal="true"
        >
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={closeMobile}
            aria-hidden="true"
          />

          <div className="absolute right-0 top-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl flex flex-col animate-in slide-in-from-right duration-300">
            <div className="flex items-center justify-between border-b border-slate-100 p-5">
              <h2 className="text-lg font-bold text-slate-900">Menu</h2>
              <button
                onClick={closeMobile}
                className="rounded-lg p-2 hover:bg-slate-100"
                aria-label="Close menu"
              >
                <X size={26} />
              </button>
            </div>

            <div className="p-5 border-b border-slate-100">
              <div className="relative">
                <Search className="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-slate-400" />
                <input
                  placeholder="Search castors…"
                  className="w-full rounded-full bg-slate-100 py-3 pl-12 pr-5 text-sm border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200/50 outline-none transition-all"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={handleSearch}
                />
              </div>
            </div>

            <nav className="flex-1 overflow-y-auto p-5 space-y-1">
              {mainNavItems.map((item) =>
                item.items ? (
                  <div key={item.label}>
                    <button
                      onClick={() => setMobileSolutionOpen((p) => !p)}
                      className="flex w-full items-center justify-between rounded-lg px-4 py-3 text-slate-700 font-medium hover:bg-slate-50 transition-colors"
                      aria-expanded={mobileSolutionOpen}
                    >
                      <span>{item.label}</span>
                      <svg
                        className={`size-4 transition-transform ${mobileSolutionOpen ? "rotate-180" : ""}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>

                    {mobileSolutionOpen && (
                      <div className="mt-1 ml-5 space-y-1 border-l-2 border-slate-200 pl-4 animate-fade-in">
                        {item.items.map((sub) => (
                          <Link
                            key={sub.to}
                            to={sub.to}
                            onClick={closeMobile}
                            className="block rounded-lg px-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-blue-600 transition-colors"
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={item.to}
                    to={item.to}
                    onClick={closeMobile}
                    className="flex rounded-lg px-4 py-3 text-slate-700 font-medium hover:bg-slate-50 hover:text-blue-600 transition-colors"
                  >
                    {item.label}
                  </Link>
                ),
              )}
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
