import React from "react";
import { IoMdArrowDown } from "react-icons/io";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { IoMdArrowRoundForward } from "react-icons/io";
import { IoArrowForwardOutline } from "react-icons/io5";
import { IoMdStar } from "react-icons/io";
import { BsStarHalf } from "react-icons/bs";
import { IoCall } from "react-icons/io5";

import {
  MdArrowOutward,
  MdOutlineEngineering,
  MdSupportAgent,
} from "react-icons/md";
import { MdOutlinePrecisionManufacturing } from "react-icons/md";
import { IoIosMail } from "react-icons/io";
export default function Home() {
  return (
    <section>
      <main className="flex-1">
        <section className="relative bg-slate-900 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              alt="Industrial Castor Background"
              className="h-full w-full object-cover opacity-30 mix-blend-overlay"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAVMPW5dNRf35bXTeaJavmHaHwJru1KdkmIC5RXG9AluEYf12Kv1jjlfIOWaMN-3h1gpWEIl6qzWDVlQ25MLYA2vB-TqdRHrwW4rpdPG4kJtW7oElN13_nEdDvxybhzc_5CwS_9sFKtjShg8_yiKuTYsw8h9XqpVDK3qewuJXgA6Uowh_JxspO41azSIPSoT4vARJVgRuG-7DuWJbZhe6cz1BGvogJgOyhRHxqEjAb4284BKKGRWb8hkajS7HIyiKP7EG9KMShKvFuz"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/90 to-slate-900/20"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
          </div>
          <div className="relative z-10 mx-auto max-w-[1280px] px-4 py-20 sm:px-6 lg:px-8 lg:py-32 flex flex-col justify-center min-h-[700px]">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in-up">
                <div className="inline-flex items-center gap-2 rounded-full bg-blue-500/10 border border-blue-500/20 px-3 py-1.5 mb-8 backdrop-blur-sm">
                  <span className="flex h-2 w-2 rounded-full bg-blue-400 animate-pulse"></span>
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-300">
                    India's Leading Castor Manufacturer
                  </span>
                </div>
                <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl mb-6 leading-[1.1]">
                  Engineering <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-200">
                    Perfect Mobility
                  </span>
                </h1>
                <p className="mt-4 text-xl text-slate-300 max-w-xl font-light leading-relaxed">
                  Discover a premium portfolio of heavy-duty industrial,
                  medical, and specialized castors. Engineered for the Indian
                  market, built for global standards.
                </p>
                <div className="mt-12 flex flex-wrap gap-5">
                  <a
                    className="flex items-center justify-center h-16 px-10 rounded-full accent-gradient text-lg font-black  font-bold shadow-2xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-200 hover:scale-105 hover:brightness-110 transition-all duration-300 border border-white/20"
                    href="#contact"
                  >
                    Get a Quote
                    <span className="material-symbols-outlined ml-2 text-[24px]">
                      <IoArrowForwardOutline />
                    </span>
                  </a>
                  <a
                    className="flex items-center justify-center h-16 px-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-lg font-bold text-white hover:bg-white/20 transition-all duration-300"
                    href="#portfolio"
                  >
                    Explore Products
                  </a>
                </div>
                <div className="mt-12 grid grid-cols-3 gap-8">
                  <div>
                    <p className="text-3xl font-black text-white">500+</p>
                    <p className="text-sm text-slate-400 font-medium">
                      Product Variants
                    </p>
                  </div>
                  <div>
                    <p className="text-3xl font-black text-white">25+</p>
                    <p className="text-sm text-slate-400 font-medium">
                      Years Experience
                    </p>
                  </div>
                  <div>
                    <p className="text-3xl font-black text-white">10M+</p>
                    <p className="text-sm text-slate-400 font-medium">
                      Units Shipped
                    </p>
                  </div>
                </div>
              </div>
              <div className="hidden lg:block relative">
                <div className="relative z-10 bg-gradient-to-br from-white/10 to-white/5 rounded-[40px] p-8 backdrop-blur-sm border border-white/10 shadow-2xl">
                  <img
                    alt="Featured Product"
                    className="w-full h-auto drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] transform rotate-12"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuASMfwCVXnv2T15BS2zFOXIQogm0KvT_0jICNsPfVvLV189vb4O5-Ujvx-wFFhouG0L9SER3_IVHaaZLEBt9TpkNSi_xkBwsykfxbAXNVYYXoWJOyERZORCWNxGQJ0279eK5tC-EQIsOIOcPy8Y4TAGp1bMMwuZt4Br-4KX93KGCGKkzfu1i3XywXX5Fgqj_KsENq_hE9XdCI9IbyeJKs_aTLXxjhRHg2a_IP0drlb7xUyi_y8JsY6h38etMzrikdmLCE8ufSDm724u"
                  />
                </div>
                <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary/20 rounded-full blur-[100px]"></div>
                <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-blue-500/20 rounded-full blur-[100px]"></div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-20 bg-white" id="features">
          <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Why Professionals Choose Us
              </h2>
              <p className="mt-4 text-lg text-slate-600">
                We combine engineering precision with aesthetic design to
                deliver the best mobility solutions.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
              <div className="group relative rounded-3xl bg-slate-50 p-8 transition-all hover:bg-white hover:shadow-xl border border-slate-100 hover:border-blue-100">
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-600/20 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-3xl">
                    <MdOutlinePrecisionManufacturing />
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  Precision Engineering
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Every castorwheel is manufactured with tight tolerances using
                  high-grade steel and polymers for consistent performance.
                </p>
              </div>
              <div className="group relative rounded-3xl bg-slate-50 p-8 transition-all hover:bg-white hover:shadow-xl border border-slate-100 hover:border-blue-100">
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-600 text-white shadow-lg shadow-indigo-600/20 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-3xl">
                    <IoShieldCheckmarkOutline />
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  Quality Assurance
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Rigorously tested for load capacity, abrasion resistance, and
                  smooth swiveling. ISO 9001 Certified processes.
                </p>
              </div>
              <div className="group relative rounded-3xl bg-slate-50 p-8 transition-all hover:bg-white hover:shadow-xl border border-slate-100 hover:border-blue-100">
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-600 text-white shadow-lg shadow-teal-600/20 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-3xl">
                    <MdSupportAgent />
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  Dedicated Support
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  From product selection to after-sales service, our technical
                  team ensures you find the perfect fit for your needs.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section
          className="py-24 bg-slate-50 border-t border-slate-200"
          id="portfolio"
        >
          <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <div>
                <span className="text-primary font-bold tracking-wider uppercase text-sm">
                  Our Portfolio
                </span>
                <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                  Explore by Category
                </h2>
              </div>
              <a
                className="inline-flex items-center text-sm font-bold text-primary hover:text-blue-700 group transition-colors"
                href="#"
              >
                View Full Catalog
                <span className="material-symbols-outlined ml-1 group-hover:translate-x-1 transition-transform">
                  <IoMdArrowRoundForward />
                </span>
              </a>
            </div>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <a
                className="group relative block overflow-hidden rounded-3xl bg-white shadow-sm hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                href="#"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 opacity-60 transition-opacity group-hover:opacity-40"></div>
                  <img
                    alt="Industrial Series"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    src="src\components\img\medium dutty fixed nylon 1.jpg"
                  />
                  <div className="absolute bottom-0 left-0 p-6 z-20">
                    <h3 className="text-2xl font-bold text-white mb-1">
                      Industrial Series
                    </h3>
                    <p className="text-sm text-slate-200 opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                      Heavy duty trolleys &amp; machinery
                    </p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-semibold text-slate-500">
                      24 Models Available
                    </span>
                    <div className="h-8 w-8 rounded-full  bg-black flex items-center justify-center text-slate-600 group-hover:bg-primary group-hover:text-white transition-colors">
                      <span className="material-symbols-outlined text-lg ">
                        <MdArrowOutward />
                      </span>
                    </div>
                  </div>
                </div>
              </a>
              <a
                className="group relative block overflow-hidden rounded-3xl bg-white shadow-sm hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                href="#"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 opacity-60 transition-opacity group-hover:opacity-40"></div>
                  <img
                    alt="Medical Series"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    src="src\components\img\medium dutty fixed nylon 1.jpg"
                  />
                  <div className="absolute bottom-0 left-0 p-6 z-20">
                    <h3 className="text-2xl font-bold text-white mb-1">
                      Medical Series
                    </h3>
                    <p className="text-sm text-slate-200 opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                      Hospital beds &amp; diagnostic carts
                    </p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-semibold text-slate-500">
                      18 Models Available
                    </span>
                    <div className="h-8 w-8 rounded-full bg-black flex items-center justify-center text-slate-600 group-hover:bg-primary group-hover:text-white transition-colors">
                      <span className="material-symbols-outlined text-lg">
                        <MdArrowOutward />
                      </span>
                    </div>
                  </div>
                </div>
              </a>
              <a
                className="group relative block overflow-hidden rounded-3xl bg-white shadow-sm hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                href="#"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 opacity-60 transition-opacity group-hover:opacity-40"></div>
                  <img
                    alt="Furniture Series"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    src="src\components\img\laveling castor.jpg"
                  />
                  <div className="absolute bottom-0 left-0 p-6 z-20">
                    <h3 className="text-2xl font-bold text-white mb-1">
                      Furniture Series
                    </h3>
                    <p className="text-sm text-slate-200 opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                      Office chairs &amp; home decor
                    </p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-semibold text-slate-500">
                      32 Models Available
                    </span>
                    <div className="h-8 w-8 rounded-full bg-black flex items-center justify-center text-slate-600 group-hover:bg-primary group-hover:text-white transition-colors">
                      <span className="material-symbols-outlined text-lg">
                        <MdArrowOutward />
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </section>
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
                Featured Solutions
              </h2>
              <p className="mt-2 text-slate-500">
                Browse technical specifications for our most popular models.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:gap-8 md:grid-cols-4">
              <div className="group rounded-2xl border border-slate-100 p-4 transition-all hover:border-blue-100 hover:shadow-lg hover:-translate-y-1 bg-white">
                <div className="mb-4 aspect-square w-full rounded-xl bg-slate-50 overflow-hidden relative">
                  <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div
                    style={{
                      backgroundImage: 'url("src\components\img\img6.jpg")',
                    }}
                    className="h-full w-full bg-contain bg-center bg-no-repeat transition-transform duration-500 group-hover:scale-105"
                    // style="
                    //   background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuASMfwCVXnv2T15BS2zFOXIQogm0KvT_0jICNsPfVvLV189vb4O5-Ujvx-wFFhouG0L9SER3_IVHaaZLEBt9TpkNSi_xkBwsykfxbAXNVYYXoWJOyERZORCWNxGQJ0279eK5tC-EQIsOIOcPy8Y4TAGp1bMMwuZt4Br-4KX93KGCGKkzfu1i3XywXX5Fgqj_KsENq_hE9XdCI9IbyeJKs_aTLXxjhRHg2a_IP0drlb7xUyi_y8JsY6h38etMzrikdmLCE8ufSDm724u');
                    // "
                  ></div>
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 mb-1">
                    Industrial
                  </span>
                  <h3 className="font-bold text-slate-900 truncate">
                    Heavy Duty PU
                  </h3>
                  <div className="mt-2 flex items-center gap-2 text-xs text-slate-500">
                    <span className="bg-slate-100 px-2 py-0.5 rounded">
                      500kg
                    </span>
                    <span className="bg-slate-100 px-2 py-0.5 rounded">
                      150mm
                    </span>
                  </div>
                  <button className="mt-4 w-full rounded-lg bg-slate-50 py-2 text-xs font-bold text-slate-700 hover:bg-primary hover:text-white transition-colors">
                    View Specs
                  </button>
                </div>
              </div>
              <div className="group rounded-2xl border border-slate-100 p-4 transition-all hover:border-blue-100 hover:shadow-lg hover:-translate-y-1 bg-white">
                <div className="mb-4 aspect-square w-full rounded-xl bg-slate-50 overflow-hidden relative">
                  <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div
                    style={{
                      backgroundImage:
                        'url ("src\components\img\laveling castor.jpg")',
                    }}
                    className="h-full w-full bg-contain bg-center bg-no-repeat transition-transform duration-500 group-hover:scale-105"
                    // style="
                    //   background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuDYH14qpjPkPbFsKpyBAkbPGfCJZjsAi1nh7yRmN-kOG4608MidSMJbHeu5Cys17Xd-m0Lbm0CDarJb0sBohAYKmzvGlywJdDAC2ktuasVO6DtXDsSnrAQfkgcHbrb9sZkY3n3esaf8bcUm8iybfspSvQtdgHMx48QnW7o1gHSbTSV9hYVLC3Su_WAp47t0nNZGuYiIp2iH0mgVGfd3WuSCctmBXorL5K-FMuSV6kjtsn0Nrwml7VeASXUEunUofG6R0cZaTSyf_gY3');
                    // "
                  ></div>
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 mb-1">
                    Industrial
                  </span>
                  <h3 className="font-bold text-slate-900 truncate">
                    Nylon Swivel
                  </h3>
                  <div className="mt-2 flex items-center gap-2 text-xs text-slate-500">
                    <span className="bg-slate-100 px-2 py-0.5 rounded">
                      300kg
                    </span>
                    <span className="bg-slate-100 px-2 py-0.5 rounded">
                      100mm
                    </span>
                  </div>
                  <button className="mt-4 w-full rounded-lg bg-slate-50 py-2 text-xs font-bold text-slate-700 hover:bg-primary hover:text-white transition-colors">
                    View Specs
                  </button>
                </div>
              </div>
              <div className="group rounded-2xl border border-slate-100 p-4 transition-all hover:border-blue-100 hover:shadow-lg hover:-translate-y-1 bg-white">
                <div className="mb-4 aspect-square w-full rounded-xl bg-slate-50 overflow-hidden relative">
                  <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div
                    className="h-full w-full bg-contain bg-center bg-no-repeat transition-transform duration-500 group-hover:scale-105"

                    // style="
                    //   background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuA6QKV4dBeWbc1yb1MptqLEoIXCNT9Okzh1TO5PsvqsHGp5DSwNujKvdULPvL1-HaPSebmwHi5EgqUd-0Kt2NT86W2XVHrpgPmG09g3OHNorCQGJT0HmCSGdbhoynpzn6pgpMsf1C7F5qi4Y48UruZ4O2YY0KRjTCoYWwH9jaahP2pYwvsCJI9pwjnwygBb_yG1CT1UMyYiEgiW4DI4CcJTMBixLD26dCx2D7rRgaUILzIMiA3Z0jOWnFYMq8AAX1gqwemmVeAAlm2H');
                    // "
                  ></div>
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 mb-1">
                    Medical
                  </span>
                  <h3 className="font-bold text-slate-900 truncate">
                    1 Twin Wheel Brake
                  </h3>
                  <div className="mt-2 flex items-center gap-2 text-xs text-slate-500">
                    <span className="bg-slate-100 px-2 py-0.5 rounded">
                      120kg
                    </span>
                    <span className="bg-slate-100 px-2 py-0.5 rounded">
                      125mm
                    </span>
                  </div>
                  <button className="mt-4 w-full rounded-lg bg-slate-50 py-2 text-xs font-bold text-slate-700 hover:bg-primary hover:text-white transition-colors">
                    View Specs
                  </button>
                </div>
              </div>
              <div className="group rounded-2xl border border-slate-100 p-4 transition-all hover:border-blue-100 hover:shadow-lg hover:-translate-y-1 bg-white">
                <div className="mb-4 aspect-square w-full rounded-xl bg-slate-50 overflow-hidden relative">
                  <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div
                    className="h-full w-full bg-contain bg-center bg-no-repeat transition-transform duration-500 group-hover:scale-105"
                    // style="
                    //   background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuB2fKRcsPSpkEDW5po1soQxqbwjG1k0oGaPDydwm5aWWl05uKm0UX6cKZu77EIsPZX1CmExhWWT-fLlhdg90T_rQa2LzhPQLZyxNfRuTcGLJbp7VToasRxQzpsFAeTwmveddZKeXuvC1YPkDX5SitV3xOYgKWuQRZVgNsD0jDHkcgrVdiczvgQ4z-JLIXjkCvQh6jtSYJxRpFcl8xNiHHUnda1rdwvajYqPSBKPKvcwlF4Gop6uUxD33NX2K1miKyaV1eEQdVu58YvD');
                    // "
                  ></div>
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 mb-1">
                    Furniture
                  </span>
                  <h3 className="font-bold text-slate-900 truncate">
                    Soft Rubber
                  </h3>
                  <div className="mt-2 flex items-center gap-2 text-xs text-slate-500">
                    <span className="bg-slate-100 px-2 py-0.5 rounded">
                      50kg
                    </span>
                    <span className="bg-slate-100 px-2 py-0.5 rounded">
                      50mm
                    </span>
                  </div>
                  <button className="mt-4 w-full rounded-lg bg-slate-50 py-2 text-xs font-bold text-slate-700 hover:bg-primary hover:text-white transition-colors">
                    View Specs
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className="py-24 bg-slate-900 text-white relative overflow-hidden"
          id="testimonials"
        >
          <div className="absolute top-0 right-0 -mr-20 -mt-20 h-[300px] w-[300px] rounded-full bg-blue-600/20 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 h-[300px] w-[300px] rounded-full bg-purple-600/20 blur-3xl"></div>
          <div className="relative mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Trusted Partners
              </h2>
              <p className="mt-4 text-slate-400">
                Hear from manufacturing leaders who rely on our mobility
                solutions.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="rounded-2xl bg-slate-800/50 p-8 border border-slate-700 hover:bg-slate-800 transition-colors">
                <div className="flex text-amber-400 mb-4">
                  <span className="material-symbols-outlined text-sm"></span>
                  <span className="material-symbols-outlined text-sm">
                    <IoMdStar />
                  </span>
                  <span className="material-symbols-outlined text-sm">
                    <IoMdStar />
                  </span>
                  <span className="material-symbols-outlined text-sm">
                    <IoMdStar />
                  </span>
                  <span className="material-symbols-outlined text-sm">
                    <IoMdStar />
                  </span>
                </div>
                <p className="text-slate-300 mb-6 italic">
                  "The consistency in quality for the heavy-duty series has
                  significantly reduced our maintenance downtime. Exceptional
                  engineering."
                </p>
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center font-bold text-white">
                    RJ
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm">Rajesh J.</h4>
                    <p className="text-xs text-slate-400">
                      Plant Manager, AutoCorp
                    </p>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl bg-slate-800/50 p-8 border border-slate-700 hover:bg-slate-800 transition-colors">
                <div className="flex text-amber-400 mb-4">
                  <span className="material-symbols-outlined text-sm">
                    <IoMdStar />
                  </span>
                  <span className="material-symbols-outlined text-sm">
                    <IoMdStar />
                  </span>
                  <span className="material-symbols-outlined text-sm">
                    <IoMdStar />
                  </span>
                  <span className="material-symbols-outlined text-sm">
                    <IoMdStar />
                  </span>
                  <span className="material-symbols-outlined text-sm">
                    <IoMdStar />
                  </span>
                </div>
                <p className="text-slate-300 mb-6 italic">
                  "We needed custom non-marking wheels for our new hospital
                  wing. Comfort Castors delivered exactly what we specified, on
                  time."
                </p>
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-teal-600 flex items-center justify-center font-bold text-white">
                    AS
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm">
                      Dr. Anita S.
                    </h4>
                    <p className="text-xs text-slate-400">
                      Procurement Head, MediCare
                    </p>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl bg-slate-800/50 p-8 border border-slate-700 hover:bg-slate-800 transition-colors">
                <div className="flex text-amber-400 mb-4">
                  <span className="material-symbols-outlined text-sm">
                    <IoMdStar />
                  </span>
                  <span className="material-symbols-outlined text-sm">
                    <IoMdStar />
                  </span>
                  <span className="material-symbols-outlined text-sm">
                    <IoMdStar />
                  </span>
                  <span className="material-symbols-outlined text-sm">
                    <IoMdStar />
                  </span>
                  <span className="material-symbols-outlined text-sm">
                    <BsStarHalf />
                  </span>
                </div>
                <p className="text-slate-300 mb-6 italic">
                  "A wide range of aesthetically pleasing castors that perfectly
                  complement our modern office furniture line."
                </p>
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-indigo-600 flex items-center justify-center font-bold text-white">
                    VK
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm">Vikram K.</h4>
                    <p className="text-xs text-slate-400">
                      Design Lead, FurniStyle
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className="py-24 bg-gradient-to-br from-white to-slate-50"
          id="contact"
        >
          <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
            <div className="overflow-hidden rounded-3xl bg-blue-400 shadow-2xl ring-1 ring-slate-900/5">
              <div className="flex flex-col lg:flex-row">
                <div className="flex-1 bg-primary p-10 lg:p-16 text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 opacity-10 transform translate-x-10 -translate-y-10">
                    <MdOutlineEngineering className="material-symbols-outlined text-[300px]" />
                  </div>
                  <div className="relative z-10">
                    <h2 className="mb-6 text-3xl font-bold lg:text-4xl">
                      Start Your Project
                    </h2>
                    <p className="mb-10 text-blue-100 text-lg leading-relaxed">
                      Need technical datasheets, bulk pricing, or custom
                      engineering? Our team is ready to assist you.
                    </p>
                    <div className="space-y-6">
                      <div className="flex items-center gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 backdrop-blur">
                          <span className="material-symbols-outlined">
                            <IoCall />
                          </span>
                        </div>
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-wider text-blue-200">
                            Phone
                          </p>
                          <p className="font-bold">+91 8826883046</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 backdrop-blur">
                          <span className="material-symbols-outlined">
                            <IoIosMail />
                          </span>
                        </div>
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-wider text-blue-200">
                            Email
                          </p>
                          <p className="font-bold">sales@castorwheels.com</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-1 p-10 lg:p-16 bg-white">
                  <form className="flex flex-col gap-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label
                          className="mb-2 block text-sm font-bold text-slate-700"
                          htmlFor="name"
                        >
                          Name
                        </label>
                        <input
                          className="block w-full rounded-lg border-slate-300 shadow-sm focus:border-primary focus:ring-primary py-3 px-4 bg-slate-50"
                          id="name"
                          placeholder="Your Name"
                          type="text"
                        />
                      </div>
                      <div>
                        <label
                          className="mb-2 block text-sm font-bold text-slate-700"
                          htmlFor="company"
                        >
                          Company
                        </label>
                        <input
                          className="block w-full rounded-lg border-slate-300 shadow-sm focus:border-primary focus:ring-primary py-3 px-4 bg-slate-50"
                          id="company"
                          placeholder="Company Name"
                          type="text"
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        className="mb-2 block text-sm font-bold text-slate-700"
                        htmlFor="email"
                      >
                        Work Email
                      </label>
                      <input
                        className="block w-full rounded-lg border-slate-300 shadow-sm focus:border-primary focus:ring-primary py-3 px-4 bg-slate-50"
                        id="email"
                        placeholder="john@company.com"
                        type="email"
                      />
                    </div>
                    <div>
                      <label
                        className="mb-2 block text-sm font-bold text-slate-700"
                        htmlFor="interest"
                      >
                        Interested In
                      </label>
                      <select
                        className="block w-full rounded-lg border-slate-300 shadow-sm focus:border-primary focus:ring-primary py-3 px-4 bg-slate-50"
                        id="interest"
                      >
                        <option>Industrial Castors</option>
                        <option>Medical Castors</option>
                        <option>Furniture Castors</option>
                        <option>Custom Solutions</option>
                        <option>Other Inquiry</option>
                      </select>
                    </div>
                    <div>
                      <label
                        className="mb-2 block text-sm font-bold text-slate-700"
                        htmlFor="message"
                      >
                        Message
                      </label>
                      <textarea
                        className="block w-full rounded-lg border-slate-300 shadow-sm focus:border-primary focus:ring-primary py-3 px-4 bg-slate-50"
                        id="message"
                        placeholder="Describe your requirements..."
                        rows="3"
                      ></textarea>
                    </div>
                    <button
                      className="mt-2 w-full rounded-lg bg-slate-900 py-4 text-base font-bold text-white shadow-lg hover:bg-slate-800 transition-all hover:scale-[1.01]"
                      type="button"
                    >
                      Send Inquiry
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </section>
  );
}
