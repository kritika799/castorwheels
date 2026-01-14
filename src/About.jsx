import { MdOutlineTrackChanges } from "react-icons/md";
import { MdVisibility } from "react-icons/md";
import { MdVerifiedUser } from "react-icons/md";
import React from "react";

export default function About() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-[#0d131b] dark:text-white font-display overflow-x-hidden">
      <div className="w-full">
        <div
          className="flex min-h-[400px] lg:min-h-[500px] flex-col items-center justify-center bg-cover bg-center bg-no-repeat p-8 text-center relative"
          data-alt="Modern industrial factory floor with automated machinery"
          style={{
            backgroundImage:
              "url('https://lh3.googleusercontent.com/aida-public/AB6AXuARxoyF64VPBMsuMPfO3QrjAa54E3Y3mATAX__DnlUy5op9tB4w-K0575WRoInsyjfoDaVkhmFhudDIdAgd2IBSIc8z-F2Spf79lZVkAH3_lvWM48miPbu8Pxe-ODsw4LCJWIXznD-amcNorZNCm74IlFXE5py9AcBwc5UJ8W2fjYIJFRugjG67GeKjxtDwJtz_SenyIEuGVy0tNru6PEXfsC3RBoY3M65crcGnJp6j_tRWRav6IFf7YQgV7yLnWe4AxP1UyLhNIIOd')",
          }}
          //   style="
          //   background-image: linear-gradient(
          //       rgba(16, 24, 34, 0.7) 0%,
          //       rgba(16, 24, 34, 0.8) 100%
          //     ),
          //     url('https://lh3.googleusercontent.com/aida-public/AB6AXuARxoyF64VPBMsuMPfO3QrjAa54E3Y3mATAX__DnlUy5op9tB4w-K0575WRoInsyjfoDaVkhmFhudDIdAgd2IBSIc8z-F2Spf79lZVkAH3_lvWM48miPbu8Pxe-ODsw4LCJWIXznD-amcNorZNCm74IlFXE5py9AcBwc5UJ8W2fjYIJFRugjG67GeKjxtDwJtz_SenyIEuGVy0tNru6PEXfsC3RBoY3M65crcGnJp6j_tRWRav6IFf7YQgV7yLnWe4AxP1UyLhNIIOd');
          // "
        >
          <div className="max-w-[800px] z-10 flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <span className="text-primary font-bold tracking-wider uppercase text-sm">
                Est. 2026
              </span>
              <h1 className="text-white text-4xl lg:text-6xl font-black leading-tight tracking-tight">
                Engineering Mobility for
                <br />
                India and the World
              </h1>
            </div>
            <h2 className="text-slate-200 text-lg lg:text-xl font-normal max-w-2xl mx-auto">
              A showcase of precision manufacturing, traditional craftsmanship,
              and modern engineering in heavy-duty castor production.
            </h2>
            <div className="flex justify-center gap-4 pt-4">
              <button className="h-12 px-8 bg-primary text-white rounded-lg font-bold hover:bg-blue-600 transition-colors">
                Explore Capabilities
              </button>
              <button className="h-12 px-8 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-lg font-bold hover:bg-white/20 transition-colors">
                Our Heritage
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-white dark:bg-[#1a2634] border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-[1200px] mx-auto px-4 py-8 lg:py-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex flex-col gap-1 items-center lg:items-start text-center lg:text-left">
              <p className="text-primary text-4xl font-black">25+</p>
              <p className="text-slate-500 dark:text-slate-400 font-medium">
                Years of Engineering
              </p>
            </div>
            <div className="flex flex-col gap-1 items-center lg:items-start text-center lg:text-left">
              <p className="text-primary text-4xl font-black">500+</p>
              <p className="text-slate-500 dark:text-slate-400 font-medium">
                Global Partners
              </p>
            </div>
            <div className="flex flex-col gap-1 items-center lg:items-start text-center lg:text-left">
              <p className="text-primary text-4xl font-black">1M+</p>
              <p className="text-slate-500 dark:text-slate-400 font-medium">
                Units Engineered/Year
              </p>
            </div>
            <div className="flex flex-col gap-1 items-center lg:items-start text-center lg:text-left">
              <p className="text-primary text-4xl font-black">30+</p>
              <p className="text-slate-500 dark:text-slate-400 font-medium">
                Export Destinations
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full py-16 lg:py-24">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
            <div className="flex-1 flex flex-col gap-6">
              <div className="flex flex-col gap-4">
                <h2 className="text-3xl lg:text-4xl font-bold text-[#0d131b] dark:text-white">
                  Our Story
                </h2>
                <div className="h-1 w-20 bg-primary rounded-full"></div>
              </div>
              <div className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed flex flex-col gap-4">
                <p>
                  From a small workshop in the industrial heart of Delhi to a
                  global exporter, Comfort Castors has always been driven by a
                  singular mission: to make the world move smoother.
                </p>
                <p>
                  Established in 1995, we recognized a gap in the Indian market
                  for high-quality, durable load-bearing solutions that could
                  withstand rigorous industrial use. What started as a modest
                  operation has grown into a state-of-the-art manufacturing
                  powerhouse.
                </p>
                <p>
                  Today, we are proud to be a "Make in India" success story,
                  combining indigenous innovation with global quality standards
                  to serve clients across automotive, medical, furniture, and
                  heavy machinery sectors.
                </p>
              </div>
              <div className="pt-4">
                <div className="flex items-center gap-4">
                  <span className="px-4 py-2 bg-slate-100 dark:bg-slate-800 rounded text-sm font-semibold text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                    ISO 9001:2015 Certified
                  </span>
                  <span className="px-4 py-2 bg-slate-100 dark:bg-slate-800 rounded text-sm font-semibold text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                    Make In India
                  </span>
                </div>
              </div>
            </div>
            <div className="flex-1 w-full">
              <div
                className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]"
                data-alt="Close up of a heavy duty steel castor wheel"
              >
                <img
                  alt="Industrial Castor Wheel"
                  className="object-cover w-full h-full"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBSMDUEmZ4Fp8tHTJxXOOzizUnwLmH0ZE1FCPC3yk_qXX1XFsy1UfPJe4tQERvfSmaJCihFozt7IusWYuWnD4tBImmfuwlqHjz3LnS45QdvXhkF3ziOqZiXQz0NQ9j2U0BMncfcKCqjeBaqxMpfKy3hsjGbpNzcwZrQb7e5qlfYOxaVtZ-hVVqLiygz0ssOQJcA_z0BxCtjh_4XxoTnjE7xmRj-fOZ4XMsuMZgvFf5M2VNy8mmNUcpSEHn0LdhKfwvRTOUYRDU50ocJ"
                />
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-8">
                  <p className="text-white font-medium">
                    Precision engineered in our Gujarat facility
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-white dark:bg-[#1a2634] py-16 lg:py-24">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0d131b] dark:text-white mb-4">
              Our Core Values
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-lg">
              Driven by precision, durability, and a commitment to Indian
              manufacturing excellence.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-50 dark:bg-slate-800 p-8 rounded-xl border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow">
              <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-6">
                <span className="material-symbols-outlined text-3xl">
                  <MdOutlineTrackChanges />
                </span>
              </div>
              <h3 className="text-xl font-bold mb-3 dark:text-white">
                Our Mission
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                To provide durable, frictionless mobility solutions that drive
                Indian industry forward, reducing downtime and increasing
                efficiency for our partners.
              </p>
            </div>
            <div className="bg-slate-50 dark:bg-slate-800 p-8 rounded-xl border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow">
              <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-6">
                <span className="material-symbols-outlined text-3xl">
                  <MdVisibility />
                </span>
              </div>
              <h3 className="text-xl font-bold mb-3 dark:text-white">
                Our Vision
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                To be the global benchmark for quality in the castor
                manufacturing sector, proving that world-className engineering
                thrives in India.
              </p>
            </div>
            <div className="bg-slate-50 dark:bg-slate-800 p-8 rounded-xl border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow">
              <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-6">
                <span className="material-symbols-outlined text-3xl">
                  <MdVerifiedUser />
                </span>
              </div>
              <h3 className="text-xl font-bold mb-3 dark:text-white">
                Our Promise
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Uncompromising quality controls. Every wheel is rigorously
                tested for load capacity, friction, and durability before it
                leaves our floor.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full py-16 lg:py-24 bg-background-light dark:bg-background-dark">
        <div className="max-w-[1000px] mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#0d131b] dark:text-white mb-12 text-center">
            Our Journey
          </h2>
          <div className="relative">
            <div className="absolute left-[19px] top-0 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-700 md:left-1/2 md:-ml-px"></div>
            <div className="relative flex items-start mb-12 md:justify-between md:items-center md:flex-row-reverse group">
              <div className="order-1 md:w-5/12"></div>
              <div className="absolute left-0 w-10 h-10 bg-white dark:bg-slate-800 border-4 border-primary rounded-full flex items-center justify-center z-10 md:left-1/2 md:-ml-5 shadow-sm">
                <div className="w-2.5 h-2.5 bg-primary rounded-full"></div>
              </div>
              <div className="order-1 flex-1 ml-12 md:ml-0 md:w-5/12 bg-white dark:bg-[#1a2634] p-6 rounded-lg shadow-sm border border-slate-100 dark:border-slate-800">
                <span className="text-primary font-bold text-sm mb-1 block">
                  1995
                </span>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  The Beginning
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  Founded in a small workshop in New Delhi with a single lathe
                  machine and a vision to serve the local furniture market.
                </p>
              </div>
            </div>
            <div className="relative flex items-start mb-12 md:justify-between md:items-center group">
              <div className="order-1 md:w-5/12"></div>
              <div className="absolute left-0 w-10 h-10 bg-white dark:bg-slate-800 border-4 border-slate-300 dark:border-slate-600 rounded-full flex items-center justify-center z-10 md:left-1/2 md:-ml-5 shadow-sm">
                <div className="w-2.5 h-2.5 bg-slate-400 rounded-full"></div>
              </div>
              <div className="order-1 flex-1 ml-12 md:ml-0 md:w-5/12 bg-white dark:bg-[#1a2634] p-6 rounded-lg shadow-sm border border-slate-100 dark:border-slate-800 md:text-right">
                <span className="text-primary font-bold text-sm mb-1 block">
                  2005
                </span>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  Going Global
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  Secured our first major international partnership, supplying
                  heavy-duty industrial castors to the Middle East.
                </p>
              </div>
            </div>
            <div className="relative flex items-start mb-12 md:justify-between md:items-center md:flex-row-reverse group">
              <div className="order-1 md:w-5/12"></div>
              <div className="absolute left-0 w-10 h-10 bg-white dark:bg-slate-800 border-4 border-slate-300 dark:border-slate-600 rounded-full flex items-center justify-center z-10 md:left-1/2 md:-ml-5 shadow-sm">
                <div className="w-2.5 h-2.5 bg-slate-400 rounded-full"></div>
              </div>
              <div className="order-1 flex-1 ml-12 md:ml-0 md:w-5/12 bg-white dark:bg-[#1a2634] p-6 rounded-lg shadow-sm border border-slate-100 dark:border-slate-800">
                <span className="text-primary font-bold text-sm mb-1 block">
                  2012
                </span>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  Expansion to Gujarat
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  Inaugurated a 50,000 sq. ft. automated facility in Gujarat to
                  meet growing domestic demand from the automotive sector.
                </p>
              </div>
            </div>
            <div className="relative flex items-start md:justify-between md:items-center group">
              <div className="order-1 md:w-5/12"></div>
              <div className="absolute left-0 w-10 h-10 bg-white dark:bg-slate-800 border-4 border-slate-300 dark:border-slate-600 rounded-full flex items-center justify-center z-10 md:left-1/2 md:-ml-5 shadow-sm">
                <div className="w-2.5 h-2.5 bg-slate-400 rounded-full"></div>
              </div>
              <div className="order-1 flex-1 ml-12 md:ml-0 md:w-5/12 bg-white dark:bg-[#1a2634] p-6 rounded-lg shadow-sm border border-slate-100 dark:border-slate-800 md:text-right">
                <span className="text-primary font-bold text-sm mb-1 block">
                  2023
                </span>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  Sustainable Future
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  Launched our eco-friendly line of castors utilizing recycled
                  polymers and solar-powered manufacturing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-white dark:bg-[#1a2634] py-16 lg:py-24">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="flex flex-col gap-4 mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0d131b] dark:text-white">
              Leadership Team
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-lg max-w-2xl">
              Meet the experts steering Comfort Castors towards innovation and
              excellence.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex flex-col gap-4 group">
              <div
                className="aspect-[3/4] overflow-hidden rounded-lg bg-slate-100 relative"
                data-alt="Portrait of Rajesh Kumar, Managing Director"
              >
                <img
                  alt="Rajesh Kumar"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBi9FdJUvkX2QKUoXNaRKJFEZq-3Xg97hGaTkuNd68I2ZvCfjVv4QdK5rF-w0sBKQ2UI3ysn5FXYN8aYmI3Ae0P4MkTMg_lEH1rvaoshoxrsntDpgUp9efsQ68zvajux25Wrt94-5KE8W0s-7VXRkUrit0qwqktLeusLjNwsI9uEZU1HjHj0QKYuA9k87MQ_Tp34PJDIkmHrpM-xyL4cbE6qcAP-NLLUWPtvDR9m1ieATCibxLpnI8Av1Qc1V6KDA_qwbiXNB8HxTxW"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#0d131b] dark:text-white">
                  Rajesh Kumar
                </h3>
                <p className="text-primary font-medium text-sm">
                  Managing Director
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-4 group">
              <div
                className="aspect-[3/4] overflow-hidden rounded-lg bg-slate-100 relative"
                data-alt="Portrait of Priya Sharma, Director of Operations"
              >
                <img
                  alt="Priya Sharma"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAL_QCZGhWibhmcbI0OCiySt9I0PhoeePtEZ0TwE9NhNTB3Xvam-3XGD92uMEJ3VvJ-FSVIEZr-1bDI8lef08npQ_V17vXcEDyIQd09jn7MH1DMzd5L2Qyxh22STs2534RIcCMZ6uvOvuL7eI3e7MtToxAk0YVsYOQVIyEsMYJsvz_gOdVHCAv8Bo_7gt30-Qi2jtcjGDUjuSE9w0FJkTGBc-vcxAM7ghTYxQcHzyIr5h2HXD1HmOOAdyu33RVBD_fT80fmGtMBznDN"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#0d131b] dark:text-white">
                  Priya Sharma
                </h3>
                <p className="text-primary font-medium text-sm">
                  Director of Operations
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-4 group">
              <div
                className="aspect-[3/4] overflow-hidden rounded-lg bg-slate-100 relative"
                data-alt="Portrait of Amit Singh, Head of Production"
              >
                <img
                  alt="Amit Singh"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCcogYbyvBEwc5-2JXlXepUYi3zJ8Ik5lN1aMFSP5wJykgioOEa2C7zh99JaoMtbJR2hGSPBy__DYq0IHsElZPKXg7vjnZgk_rkTM7cD_tfJI1DDn0iibiOhViZlw4MWmA4UwY2kJC38OsucFdKpyt6nioBHbZ526veMp866CtoZuvwjzmbwzZcU__cEh6StaGgafbZhsgt9Ukwe9gMXGncZJnNctwqJP39xgMM6p-sG3p_JuHisnUP-x-TkE9fz3R_bDbJXHO-9U6G"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#0d131b] dark:text-white">
                  Amit Singh
                </h3>
                <p className="text-primary font-medium text-sm">
                  Head of Production
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-4 group">
              <div
                className="aspect-[3/4] overflow-hidden rounded-lg bg-slate-100 relative"
                data-alt="Portrait of Vikram Malhotra, Chief Engineer"
              >
                <img
                  alt="Vikram Malhotra"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBKMjXehA1FLLTpcnWRPirsjTx0ROhLjHQtww5Ocnl9VPjuTUP4wys4tcyA65AsYCUjGFmtP2CIokofoEyz3-UBP6E1b3PGzt3IHG4zxLoxRWeW8Lhwqfo_2xK4TGxxyutq_e8dtKJcf_olAgc7p4tvxtCp5dpFz2ilGciXVMPkdpq5iXGY9pDZ0QEs9BymGKXzzgiBjHsDNlVsr1IfalI1HLXl4pNu5mhHrbuS818uFHu2_r65Xuu9wvs_cCRQ3B6AakpIjpBAyRJh"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#0d131b] dark:text-white">
                  Vikram Malhotra
                </h3>
                <p className="text-primary font-medium text-sm">
                  Chief Engineer
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full py-12 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-[1200px] mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
          <p className="text-slate-500 font-semibold uppercase tracking-wider text-sm whitespace-nowrap">
            Trusted Quality Standards:
          </p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-300">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-4xl">
                verified
              </span>
              <span className="font-bold text-xl">ISO 9001</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-4xl">
                security
              </span>
              <span className="font-bold text-xl">ISI Mark</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-4xl">eco</span>
              <span className="font-bold text-xl">GreenPro</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-4xl">
                factory
              </span>
              <span className="font-bold text-xl">Make in India</span>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-[#0d131b] py-20 px-4 text-center">
        <div className="max-w-2xl mx-auto flex flex-col items-center gap-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-white">
            Committed to Engineering Excellence
          </h2>
          <p className="text-slate-400 text-lg">
            Browse our technical portfolio or connect with our engineering team
            for collaboration.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full sm:w-auto">
            <button className="h-12 px-8 bg-primary text-white rounded-lg font-bold hover:bg-blue-600 transition-colors w-full sm:w-auto">
              View Technical Specs
            </button>
            <button className="h-12 px-8 bg-transparent border border-slate-600 text-white rounded-lg font-bold hover:bg-slate-800 transition-colors w-full sm:w-auto">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
