import React from "react";
import {
  MdOutlineTrackChanges,
  MdVisibility,
  MdVerifiedUser,
  MdOutlineSecurity,
  MdVerified,
  MdEco,
  MdFactory,
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
              A showcase of precision manufacturing, traditional craftsmanship,
              and modern engineering in heavy-duty castor production.
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
              { num: "5+", label: "Years of Engineering" },
              { num: "50+", label: "Global Partners" },
              { num: "2.5L+", label: "Units Engineered/Year" },
              { num: "10+", label: "Export Destinations" },
            ].map((item, i) => (
              <div key={i} className="flex flex-col gap-2">
                <p className="text-primary text-4xl sm:text-5xl font-black">
                  {item.num}
                </p>
                <p className="text-slate-500 dark:text-slate-400 font-medium text-sm sm:text-base">
                  {item.label}
                </p>
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
              <div className="flex flex-col gap-5 ">
                <h2 className="text-3xl lg:text-4xl font-bold dark:text-slate-900">
                  Our Story
                </h2>
                <div className="h-1 w-20 bg-primary rounded-full"></div>
              </div>

              <div className="mt-6 text-slate-600 dark:text-slate-900 text-lg leading-relaxed space-y-5">
                <p>
                  From a small workshop in the industrial heart of Delhi to a
                  global exporter, Comfort Castors has always been driven by a
                  singular mission: to make the world move smoother.
                </p>
                <p>
                  Established in 1995, we recognized a gap in the Indian market
                  for high-quality, durable load-bearing solutions that could
                  withstand rigorous industrial use...
                </p>
                <p>
                  Today, we are proud to be a "Make in India" success story...
                </p>
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
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Our Core Values
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-lg">
              Driven by precision, durability, and a commitment to Indian
              manufacturing excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                icon: MdOutlineTrackChanges,
                title: "Our Mission",
                text: "To provide durable, frictionless mobility solutions...",
              },
              {
                icon: MdVisibility,
                title: "Our Vision",
                text: "To be the global benchmark for quality in the castor manufacturing sector...",
              },
              {
                icon: MdVerifiedUser,
                title: "Our Promise",
                text: "Uncompromising quality controls...",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-slate-50 dark:bg-slate-800 p-6 lg:p-8 rounded-xl border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-shadow duration-300"
              >
                <div className=" rounded-xl bg-primary/10 flex items-center gap-2 justify-start text-primary mb-6 p-4 ">
                  <item.icon size={32} />
                  <h3 className="text-xl lg:text-2xl font-bold dark:text-white">
                    {item.title}
                  </h3>
                </div>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-16 lg:py-24 bg-background-light dark:bg-background-dark ">
        <div className="max-w-6xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-14 lg:mb-20">
            <h2 className="text-3xl lg:text-4xl font-bold dark:text-black">
              Our Journey
            </h2>
            <p className="mt-4 text-slate-600 dark:text-slate-900 max-w-2xl mx-auto">
              A timeline of milestones that shaped our growth and global
              presence.
            </p>
          </div>

          <div className="relative">
            {/* Gradient Vertical Line */}
            <div className="absolute left-4 sm:left-1/2 top-0 h-full w-1 bg-gradient-to-b from-primary via-primary/60 to-transparent sm:-translate-x-1/2"></div>

            {[
              {
                year: "2018",
                title: "The Beginning",
                desc: "Founded in a small workshop in New Delhi with a vision to build world-class castors.",
                align: "left",
              },
              {
                year: "2024",
                title: "Going Global",
                desc: "Secured our first major international partnership and expanded exports.",
                align: "right",
              },
              {
                year: "2025",
                title: "Expansion to Bihar",
                desc: "Inaugurated a 50,000 sq. ft. fully automated manufacturing facility.",
                align: "left",
              },
              {
                year: "2026",
                title: "Sustainable Future",
                desc: "Launched eco-friendly and sustainable castor solutions.",
                align: "right",
              },
            ].map((milestone, index) => (
              <div
                key={index}
                className={`relative mb-12 sm:mb-20 flex items-start sm:items-center ${
                  milestone.align === "right" ? "sm:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 sm:left-1/2 z-10 transform sm:-translate-x-1/2">
                  <div className="w-12 h-12 rounded-full bg-white dark:bg-[#0d1a27] border-4 border-primary shadow-lg flex items-center justify-center group hover:scale-110 transition-transform">
                    <span className="w-4 h-4 rounded-full bg-primary"></span>
                  </div>
                </div>

                {/* Card */}
                <div
                  className={`ml-16 sm:ml-0 w-full sm:w-5/12 rounded-2xl p-6 bg-white/80 dark:bg-[#1a2634] backdrop-blur border border-slate-200 dark:border-slate-700 shadow-md hover:shadow-xl transition-all duration-300 ${
                    milestone.align === "right"
                      ? "sm:text-right sm:mr-14 lg:mr-16"
                      : "sm:ml-14 lg:ml-15"
                  }`}
                >
                  <span className="inline-block text-primary font-bold text-sm mb-2">
                    {milestone.year}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold mb-2 dark:text-white">
                    {milestone.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
                    {milestone.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="w-full bg-white dark:bg-[#0f172a] py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <div className="flex flex-col gap-4 mb-12 lg:mb-16 text-center lg:text-left">
            <h2 className="text-3xl lg:text-4xl font-bold dark:text-white">
              Leadership Team
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-lg max-w-2xl">
              Meet the experts steering Casters Global towards innovation and
              excellence.
            </p>
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Dharmapal Singh",
                role: "Founder & Managing Director",
                img: "./Dharmpal Singh.png",
              },
              {
                name: "Saurabh Suman Pandey",
                role: "Head of Sales & Partnership",
                img: "./Saurabh _Suman Pandey (1).jpeg",
              },
              {
                name: "Seema Verma",
                role: "Head of Sales & Partnership",
                img: "./Seema_Verma.png",
              },
              {
                name: "Pradeep Kumar",
                role: "Co-Founder & Chief Business Officer",
                img: "./Pradeep_kumar.jpg",
              },
            ].map((person, i) => (
              <div
                key={i}
                className="group relative rounded-2xl overflow-hidden bg-white dark:bg-[#1a2634] border border-slate-200 dark:border-slate-700 shadow-md hover:shadow-xl transition-all duration-300"
              >
                {/* Image */}
                <div className="relative aspect-[4/4] overflow-hidden">
                  <img
                    src={person.img}
                    alt={`${person.name} - ${person.role}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* Hover Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Social Icons (optional) */}
                  <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-4 opacity-0 group-hover:opacity-100 transition duration-300">
                    <span className="w-9 h-9 flex items-center justify-center rounded-full bg-white/90 hover:bg-primary hover:text-white transition cursor-pointer">
                      <i className="ri-linkedin-fill"></i>
                    </span>
                    <span className="w-9 h-9 flex items-center justify-center rounded-full bg-white/90 hover:bg-primary hover:text-white transition cursor-pointer">
                      <i className="ri-twitter-x-fill"></i>
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 text-center">
                  <h3 className="text-lg font-bold dark:text-white">
                    {person.name}
                  </h3>
                  <p className="text-primary font-medium text-sm mt-1">
                    {person.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    

      {/* Final CTA */}
    </div>
  );
}
