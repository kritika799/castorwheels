import React from "react";
import { 
  MdOutlineTrackChanges, 
  MdVisibility, 
  MdVerifiedUser, 
  MdOutlineSecurity, 
  MdVerified, 
  MdEco, 
  MdFactory 
} from "react-icons/md";

export default function About() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-[#0d131b] dark:text-white font-display overflow-x-hidden">
      {/* Hero Section */}
      <div className="w-full">
        <div
          className="relative flex min-h-[60vh] lg:min-h-[70vh] items-center justify-center bg-cover bg-center bg-no-repeat px-6 py-16 text-center"
          style={{
            backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuARxoyF64VPBMsuMPfO3QrjAa54E3Y3mATAX__DnlUy5op9tB4w-K0575WRoInsyjfoDaVkhmFhudDIdAgd2IBSIc8z-F2Spf79lZVkAH3_lvWM48miPbu8Pxe-ODsw4LCJWIXznD-amcNorZNCm74IlFXE5py9AcBwc5UJ8W2fjYIJFRugjG67GeKjxtDwJtz_SenyIEuGVy0tNru6PEXfsC3RBoY3M65crcGnJp6j_tRWRav6IFf7YQgV7yLnWe4AxP1UyLhNIIOd')`,
          }}
        >
          {/* Overlay - works for both light & dark */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/60 to-black/70 dark:from-black/60 dark:via-black/75 dark:to-black/85"></div>

          <div className="relative z-10 max-w-4xl flex flex-col gap-6 md:gap-8">
            <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight">
              Engineering Mobility for
              <br className="sm:hidden" />
              India and the World
            </h1>

            <h2 className="text-slate-200 text-lg sm:text-xl lg:text-2xl font-normal max-w-3xl mx-auto">
              A showcase of precision manufacturing, traditional craftsmanship, and modern engineering in heavy-duty castor production.
            </h2>

            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
              <button className="h-12 px-8 bg-primary text-white rounded-lg font-bold hover:bg-blue-700 transition-colors shadow-md">
                Explore products
              </button>
              {/* You can add secondary button if needed */}
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="w-full bg-white dark:bg-[#1a2634] border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-10 lg:py-14">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 lg:gap-10 text-center">
            {[
              { num: "25+", label: "Years of Engineering" },
              { num: "500+", label: "Global Partners" },
              { num: "1M+", label: "Units Engineered/Year" },
              { num: "30+", label: "Export Destinations" },
            ].map((item, i) => (
              <div key={i} className="flex flex-col gap-2">
                <p className="text-primary text-4xl sm:text-5xl font-black">{item.num}</p>
                <p className="text-slate-500 dark:text-slate-400 font-medium text-sm sm:text-base">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Our Story */}
      <section className="w-full py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
            <div className="flex-1 order-2 lg:order-1">
              <div className="flex flex-col gap-5">
                <h2 className="text-3xl lg:text-4xl font-bold">Our Story</h2>
                <div className="h-1 w-20 bg-primary rounded-full"></div>
              </div>

              <div className="mt-6 text-slate-600 dark:text-slate-300 text-lg leading-relaxed space-y-5">
                <p>From a small workshop in the industrial heart of Delhi to a global exporter, Comfort Castors has always been driven by a singular mission: to make the world move smoother.</p>
                <p>Established in 1995, we recognized a gap in the Indian market for high-quality, durable load-bearing solutions that could withstand rigorous industrial use...</p>
                <p>Today, we are proud to be a "Make in India" success story...</p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <span className="px-5 py-2 bg-slate-100 dark:bg-slate-800 rounded text-sm font-semibold border border-slate-200 dark:border-slate-700">
                  ISO 9001:2015 Certified
                </span>
                <span className="px-5 py-2 bg-slate-100 dark:bg-slate-800 rounded text-sm font-semibold border border-slate-200 dark:border-slate-700">
                  Make In India
                </span>
              </div>
            </div>

            <div className="flex-1 order-1 lg:order-2 w-full">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] lg:aspect-auto">
                <img
                  alt="Close-up of precision heavy-duty castor wheel being manufactured"
                  className="object-cover w-full h-full"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBSMDUEmZ4Fp8tHTJxXOOzizUnwLmH0ZE1FCPC3yk_qXX1XFsy1UfPJe4tQERvfSmaJCihFozt7IusWYuWnD4tBImmfuwlqHjz3LnS45QdvXhkF3ziOqZiXQz0NQ9j2U0BMncfcKCqjeBaqxMpfKy3hsjGbpNzcwZrQb7e5qlfYOxaVtZ-hVVqLiygz0ssOQJcA_z0BxCtjh_4XxoTnjE7xmRj-fOZ4XMsuMZgvFf5M2VNy8mmNUcpSEHn0LdhKfwvRTOUYRDU50ocJ"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <p className="text-white font-medium text-sm sm:text-base">
                    Precision engineered in our Gujarat facility
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="w-full bg-white dark:bg-[#1a2634] py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-slate-600 dark:text-slate-300 text-lg">
              Driven by precision, durability, and a commitment to Indian manufacturing excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {[
              { icon: MdOutlineTrackChanges, title: "Our Mission", text: "To provide durable, frictionless mobility solutions..." },
              { icon: MdVisibility, title: "Our Vision", text: "To be the global benchmark for quality in the castor manufacturing sector..." },
              { icon: MdVerifiedUser, title: "Our Promise", text: "Uncompromising quality controls..." },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-slate-50 dark:bg-slate-800 p-6 lg:p-8 rounded-xl border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                  <item.icon size={32} />
                </div>
                <h3 className="text-xl lg:text-2xl font-bold mb-3 dark:text-white">{item.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Journey - Improved responsive timeline */}
      <section className="w-full py-16 lg:py-24 bg-background-light dark:bg-background-dark">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12 lg:mb-16">Our Journey</h2>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 sm:left-1/2 h-full w-0.5 bg-slate-300 dark:bg-slate-600 transform sm:-translate-x-1/2"></div>

            {[
              { year: "1995", title: "The Beginning", desc: "Founded in a small workshop in New Delhi...", align: "left" },
              { year: "2005", title: "Going Global", desc: "Secured our first major international partnership...", align: "right" },
              { year: "2012", title: "Expansion to Gujarat", desc: "Inaugurated a 50,000 sq. ft. automated facility...", align: "left" },
              { year: "2023", title: "Sustainable Future", desc: "Launched our eco-friendly line of castors...", align: "right" },
            ].map((milestone, index) => (
              <div
                key={index}
                className={`relative mb-10 sm:mb-16 flex items-start sm:items-center ${
                  milestone.align === "right" ? "sm:flex-row-reverse" : ""
                }`}
              >
                {/* Circle */}
                <div className="absolute left-0 sm:left-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full border-4 border-primary bg-white dark:bg-slate-800 flex items-center justify-center transform sm:-translate-x-1/2 z-10 shadow-sm">
                  <div className="w-3.5 h-3.5 sm:w-4 sm:h-4 bg-primary rounded-full"></div>
                </div>

                {/* Content card */}
                <div
                  className={`ml-16 sm:ml-0 w-full sm:w-5/12 bg-white dark:bg-[#1a2634] p-5 sm:p-6 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700 ${
                    milestone.align === "right" ? "sm:text-right sm:mr-12 lg:mr-16" : "sm:ml-12 lg:ml-16"
                  }`}
                >
                  <span className="text-primary font-bold text-sm sm:text-base block mb-1">
                    {milestone.year}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold mb-2 dark:text-white">{milestone.title}</h3>
                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
                    {milestone.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="w-full bg-white dark:bg-[#1a2634] py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col gap-4 mb-10 lg:mb-14">
            <h2 className="text-3xl lg:text-4xl font-bold">Leadership Team</h2>
            <p className="text-slate-600 dark:text-slate-300 text-lg max-w-2xl">
              Meet the experts steering Casters Global towards innovation and excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              { name: "Dharmapal singh", role: "Founder & Managing Director", img: "./Dharmpal Singh.png" },
              { name: "Saurabh suman pandey", role: "Head of Sales & Partnership",img: "./Saurabh _Suman Pandey (1).jpeg" },
            
              { name: "Seema Verma", role: "Head of Sales & Partnership",img:"./Seema_Verma.png" },
       
            ].map((person, i) => (
              <div key={i} className="group">
                <div className="aspect-[3/4] overflow-hidden rounded-xl bg-slate-100 dark:bg-slate-700 shadow-md">
                  <img
                    alt={`${person.name} - ${person.role}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    src={person.img} // Fix: use correct public path or import
                  />
                </div>
                <div className="mt-4 text-center">
                  <h3 className="text-lg font-bold dark:text-white">{person.name}</h3>
                  <p className="text-primary font-medium text-sm">{person.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted Standards */}
      <div className="w-full py-12 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <p className="text-slate-500 font-semibold uppercase tracking-wider text-sm whitespace-nowrap">
            Trusted Quality Standards:
          </p>

          <div className="flex flex-wrap justify-center gap-6 md:gap-10 lg:gap-12 opacity-70 hover:opacity-100 transition-opacity">
            {[
              { icon: MdVerified, label: "ISO 9001" },
              { icon: MdOutlineSecurity, label: "ISI Mark" },
              { icon: MdEco, label: "GreenPro" },
              { icon: MdFactory, label: "Make in India" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <item.icon size={36} className="text-primary" />
                <span className="font-bold text-lg">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="w-full bg-[#0d131b] py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto flex flex-col items-center gap-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-white">
            Committed to Engineering Excellence
          </h2>
          <p className="text-slate-300 text-lg max-w-xl">
            Browse our technical portfolio or connect with our engineering team for collaboration.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6 w-full sm:w-auto">
            <button className="h-12 px-8 bg-primary text-white rounded-lg font-bold hover:bg-blue-700 transition-colors shadow-md w-full sm:w-auto">
              View Technical Specs
            </button>
            <button className="h-12 px-8 bg-transparent border-2 border-slate-500 text-white rounded-lg font-bold hover:bg-slate-800 transition-colors w-full sm:w-auto">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}