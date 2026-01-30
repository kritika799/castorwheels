import React from "react";

import { MdArrowOutward } from "react-icons/md";
import FeaturedSolutions from "../components/FeaturedSolutions";
import EnquiryForm from "../components/EnquiryForm";
import Carousel from "../components/Carousel";
import WhyChooseUs from "../components/WhyChooseUs";
import { IoMdStar, IoMdStarHalf } from "react-icons/io";

const testimonials = [
  {
    quote:
      "The consistency in quality for the heavy-duty series has significantly reduced our maintenance downtime. Exceptional engineering.",
    author: "Rajesh J.",
    role: "Plant Manager, AutoCorp",
    avatarColor: "blue",
    rating: 5,
  },
  {
    quote:
      "We needed custom non-marking wheels for our new hospital wing. Comfort Castors delivered exactly what we specified, on time and with great support.",
    author: "Dr. Anita S.",
    role: "Procurement Head, MediCare",
    avatarColor: "teal",
    rating: 5,
  },
  {
    quote:
      "A wide range of aesthetically pleasing castors that perfectly complement our modern office furniture line. Highly recommend for design-focused projects.",
    author: "Vikram K.",
    role: "Design Lead, FurniStyle",
    avatarColor: "indigo",
    rating: 4.5,
  },
  {
    quote:
      "Switched to their polyurethane castors last year — excellent floor protection, smooth rolling even under full load, and zero complaints from our warehouse team.",
    author: "Priya M.",
    role: "Operations Manager, LogiTech India",
    avatarColor: "purple",
    rating: 5,
  },
];

export default function Home() {
  return (
    <section>
      <main className="flex-1">
        <Carousel />

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
              {/* <a
                  className="inline-flex items-center text-sm font-bold text-primary hover:text-blue-700 group transition-colors"
                  href="#"
                >
                  View Full Catalog
                  <span className="material-symbols-outlined ml-1 group-hover:translate-x-1 transition-transform">
                    <IoMdArrowRoundForward />
                  </span>
                </a> */}
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
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent z-10 opacity-60 transition-opacity group-hover:opacity-40"></div>
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
        <WhyChooseUs />

        <FeaturedSolutions />
        <section
          id="testimonials"
          className="py-20 md:py-24 lg:py-28 bg-slate-900 text-white relative overflow-hidden"
        >
          {/* Decorative blurred blobs */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 h-64 w-64 md:h-96 md:w-96 rounded-full bg-blue-600/20 blur-3xl" />
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 h-64 w-64 md:h-96 md:w-96 rounded-full bg-purple-600/20 blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
                Trusted by Industry Leaders
              </h2>
              <p className="mt-4 text-base md:text-lg text-slate-400 max-w-2xl mx-auto">
                Hear from manufacturing, healthcare, and design professionals
                who rely on our mobility solutions every day.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {testimonials.map((t, idx) => (
                <div
                  key={idx}
                  className={`
                group relative rounded-2xl md:rounded-3xl 
                bg-slate-800/50 backdrop-blur-sm 
                p-6 md:p-8 border border-slate-700/80 
                transition-all duration-300 ease-out
                hover:bg-slate-800/80 hover:shadow-xl hover:shadow-slate-900/40
                hover:-translate-y-1 hover:scale-[1.02]
              `}
                >
                  {/* Stars */}
                  <div className="flex text-amber-400 mb-5">
                    {[...Array(5)].map((_, i) => {
                      if (t.rating === 5 || i < Math.floor(t.rating)) {
                        return (
                          <IoMdStar key={i} className="text-lg md:text-xl" />
                        );
                      }
                      if (i === Math.floor(t.rating) && t.rating % 1 !== 0) {
                        return (
                          <IoMdStarHalf
                            key={i}
                            className="text-lg md:text-xl"
                          />
                        );
                      }
                      return null;
                    })}
                  </div>

                  <p className="text-slate-300 mb-6 md:mb-8 italic leading-relaxed text-base md:text-lg">
                    "{t.quote}"
                  </p>

                  <div className="flex items-center gap-4">
                    <div
                      className={`
                    h-10 w-10 md:h-12 md:w-12 rounded-full 
                    bg-gradient-to-br flex items-center justify-center 
                    font-bold text-white text-sm md:text-base shadow-md
                    transition-transform group-hover:scale-110
                  `}
                      style={{
                        background: `linear-gradient(to bottom right, var(--${t.avatarColor}-600), var(--${t.avatarColor}-700))`,
                      }}
                    >
                      {t.author
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>

                    <div>
                      <h4 className="font-semibold text-white text-sm md:text-base">
                        {t.author}
                      </h4>
                      <p className="text-xs md:text-sm text-slate-400">
                        {t.role}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* WhatsApp Floating Button – kept but improved */}
          <a
            aria-label="Chat on WhatsApp"
            className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#128C7E] text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex items-center justify-center group"
            href="https://wa.me/8826883046?text=Hello%21%20I%20would%20like%20to%20know%20more%20about%20your%20castors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              className="w-7 h-7 md:w-8 md:h-8 fill-current"
              viewBox="0 0 24 24"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            <span className="ml-2 hidden md:inline font-semibold text-sm">
              Chat with Us
            </span>
          </a>
        </section>

        <EnquiryForm />
      </main>
    </section>
  );
}
