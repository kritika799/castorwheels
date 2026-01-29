import React from "react";
import { IoMdArrowDown } from "react-icons/io";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { IoMdArrowRoundForward } from "react-icons/io";
import { IoArrowForwardOutline } from "react-icons/io5";
import { AiOutlineGlobal } from "react-icons/ai";
import { IoMdStar } from "react-icons/io";
import { FaRecycle } from "react-icons/fa";

import { BsStarHalf } from "react-icons/bs";

import {
  MdArrowOutward,
  MdOutlineEngineering,
  MdSupportAgent,
} from "react-icons/md";
import { MdOutlinePrecisionManufacturing } from "react-icons/md";
import { IoIosMail } from "react-icons/io";
import { featuredProducts } from "../data/FeaturedProducts";
import FeaturedSolutions from "../components/FeaturedSolutions";
import EnquiryForm from "../components/EnquiryForm";
import Carousel from "../components/Carousel";

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
            <div className="absolute inset-0 bg-linear-to-r from-slate-950 via-slate-900/90 to-slate-900/20"></div>
            <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-transparent to-transparent"></div>
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
                  <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-blue-200">
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
                    className="flex items-center justify-center  px-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-lg font-bold text-white hover:bg-white/20 transition-all duration-300 group"
                    href="Shop"
                  >
                    Explore Catalog
                    <IoArrowForwardOutline className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                  <a
                    className="flex items-center justify-center h-16 px-10 rounded-full accent-gradient text-lg font-bold shadow-2xl text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-blue-200 hover:scale-105 hover:brightness-110 transition-all duration-300 border border-white/20"
                    href="#contact"
                  >
                    Get a Quote
                  </a>
                </div>
                <div className="mt-12 grid grid-cols-4 gap-8">
                  <div>
                    <p className="text-3xl font-black text-white">500+</p>
                    <p className="text-sm text-slate-400 font-medium">
                      Product Variants
                    </p>
                  </div>
                  <div>
                    <p className="text-3xl font-black text-white">5+</p>
                    <p className="text-sm text-slate-400 font-medium">
                      Years Experience
                    </p>
                  </div>
                  <div>
                    <p className="text-3xl font-black text-white">2.5L+</p>
                    <p className="text-sm text-slate-400 font-medium">
                      Units Shipped
                    </p>
                  </div>
                  <div>
                    <p className="text-3xl font-black text-white">ISO</p>
                    <p className="text-sm text-slate-400 font-medium">
                      Certified
                    </p>
                  </div>
                </div>
              </div>
              <div className="hidden lg:block relative">
                {/* <div className="relative z-10 bg-linear-to-br from-white/10 to-white/5 rounded-[40px] p-8 backdrop-blur-sm border border-white/10 shadow-2xl">
                  <img
                    alt="Featured Product"
                    className="w-full h-auto drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] transform rotate-12"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuASMfwCVXnv2T15BS2zFOXIQogm0KvT_0jICNsPfVvLV189vb4O5-Ujvx-wFFhouG0L9SER3_IVHaaZLEBt9TpkNSi_xkBwsykfxbAXNVYYXoWJOyERZORCWNxGQJ0279eK5tC-EQIsOIOcPy8Y4TAGp1bMMwuZt4Br-4KX93KGCGKkzfu1i3XywXX5Fgqj_KsENq_hE9XdCI9IbyeJKs_aTLXxjhRHg2a_IP0drlb7xUyi_y8JsY6h38etMzrikdmLCE8ufSDm724u"
                  />
                </div> */}
                <Carousel />
                <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary/20 rounded-full blur-[100px]"></div>
                <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-blue-500/20 rounded-full blur-[100px]"></div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-20 bg-white" id="features">
          <section
            className="py-24 bg-slate-50 border-t border-slate-200"
            id="portfolio"
          >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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
                  <div className="relative aspect-4/3 overflow-hidden">
                    <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent z-10 opacity-60 transition-opacity group-hover:opacity-40"></div>
                    <img
                      alt="Industrial Series"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      src="./featured-product/automotive assembly.png"
                    />
                    <div className="absolute bottom-0 left-0 p-6 z-20">
                      <h3 className="text-2xl font-bold text-white mb-1">
                        Automotive Assembly
                      </h3>
                      <p className="text-sm text-slate-200 opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                        Heavy duty trolleys &amp; machinery
                      </p>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-semibold text-slate-500">
                        {/* 24 Models Available */}
                        Explore
                      </span>
                      <div className="h-8 w-8 rounded-full  bg-black flex items-center justify-center  text-white transition-colors">
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
                  <div className="relative aspect-4/3 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 opacity-60 transition-opacity group-hover:opacity-40"></div>
                    <img
                      alt="Medical Series"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      src="./featured-product/twin wheel for medical brake.png"
                    />
                    <div className="absolute bottom-0 left-0 p-6 z-20">
                      <h3 className="text-2xl font-bold text-white mb-1">
                        Hospitality & Medical
                      </h3>
                      <p className="text-sm text-slate-200 opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                        Hospital beds &amp; diagnostic carts
                      </p>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-semibold text-slate-500 flex items-center gap-2">
                        {/* 18 Models Available */}
                        Explore{" "}
                      </span>
                      <div className="h-8 w-8 rounded-full bg-black flex items-center justify-center text-white transition-colors">
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
                  <div className="relative aspect-4/3 overflow-hidden">
                    <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent z-10 opacity-60 transition-opacity group-hover:opacity-40"></div>
                    <img
                      alt="Furniture Series"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      src="./featured-product/soft rubber caster for furniture.png"
                    />
                    <div className="absolute bottom-0 left-0 p-6 z-20">
                      <h3 className="text-2xl font-bold text-white mb-1">
                        Retail & Shopping
                      </h3>
                      <p className="text-sm text-slate-200 opacity-0 transform translate-y-4 transition-all duration-300 ">
                        Office chairs &amp; home decor
                      </p>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-semibold text-slate-500">
                        {/* 32 Models Available */}
                        Explore
                      </span>
                      <div className="h-8 w-8 rounded-full bg-black flex items-center justify-center  text-white transition-colors">
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
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Why Professionals Choose Us
              </h2>
              <p className="mt-4 text-lg text-slate-600">
                We combine engineering precision with aesthetic design to
                deliver the best mobility solutions.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap- lg:gap-14">
              <div className="group relative rounded-3xl bg-slate-50 p-8 transition-all hover:bg-white hover:shadow-xl border border-slate-100 hover:border-blue-100">
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-600/20 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-3xl">
                    <MdOutlinePrecisionManufacturing />
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  Premium Quality Materials
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Steel, PU, Nylon & Rubber wheels built for life-long
                  performance.
                </p>
              </div>
              <div className="group relative rounded-3xl bg-slate-50 p-8 transition-all hover:bg-white hover:shadow-xl border border-slate-100 hover:border-blue-100">
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-600 text-white shadow-lg shadow-indigo-600/20 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-3xl">
                    <AiOutlineGlobal />
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  Global Standards Certified
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Tested and compliant with international quality benchmarks.
                </p>
              </div>
              <div className="group relative rounded-3xl bg-slate-50 p-8 transition-all hover:bg-white hover:shadow-xl border border-slate-100 hover:border-blue-100">
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-900   text-white shadow-lg shadow-teal-600/20 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-3xl">
                    <MdSupportAgent />
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  Fast Delivery & Support
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Efficient logistics & responsive technical assistance.
                </p>
              </div>
              <div className="group relative rounded-3xl bg-slate-50 p-8 transition-all hover:bg-white hover:shadow-xl border border-slate-100 hover:border-blue-100">
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-600 text-white shadow-lg shadow-teal-600/20 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-3xl">
                    <FaRecycle />
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  Sustainable Manufacturing
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Eco-conscious processes and recyclable materials.
                </p>
              </div>
            </div>
          </div>
        </section>

        <FeaturedSolutions />
        <section
          className="py-24 bg-slate-900 text-white relative overflow-hidden"
          id="testimonials"
        >
          <div className="absolute top-0 right-0 -mr-20 -mt-20 h-75 w-75 rounded-full bg-blue-600/20 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 h-75 w-75 rounded-full bg-purple-600/20 blur-3xl"></div>
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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
          <a
            aria-label="Chat on WhatsApp"
            className="fixed bottom-6 right-6 z-40 bg-[#25D366] hover:bg-[#128C7E] text-white p-3 md:p-4 rounded-full shadow-lg transition-transform hover:-translate-y-1 hover:shadow-xl flex items-center justify-center group"
            href="#"
          >
            <svg
              className="w-6 h-6 md:w-8 md:h-8 fill-current"
              viewBox="0 0 24 24"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"></path>
            </svg>
            <span className="ml-2 hidden md:inline font-bold">
              Chat with Us
            </span>
          </a>
        </section>

        <EnquiryForm />
      </main>
      {/* <Carousel/> */}
    </section>
  );
}
