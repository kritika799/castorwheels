import React from "react";
import { LiaLinkedin } from "react-icons/lia";
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
      
       <a
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-40 bg-[#25D366] hover:bg-[#128C7E] text-white p-3 md:p-4 rounded-full shadow-lg transition-transform hover:-translate-y-1 hover:shadow-xl flex items-center justify-center group"
        href="#"
      >
        <svg className="w-6 h-6 md:w-8 md:h-8 fill-current" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"></path>
        </svg>
        <span className="ml-2 hidden md:inline font-bold">Chat with Us</span>
      </a>
      
      {/* Hero Section */}
      <div className="w-full">
        <div
          className="relative flex min-h-[60vh] lg:min-h-[70vh] items-center justify-center bg-cover bg-center bg-no-repeat px-6 py-16 text-center"
          style={{
            backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuARxoyF64VPBMsuMPfO3QrjAa54E3Y3mATAX__DnlUy5op9tB4w-K0575WRoInsyjfoDaVkhmFhudDIdAgd2IBSIc8z-F2Spf79lZVkAH3_lvWM48miPbu8Pxe-ODsw4LCJWIXznD-amcNorZNCm74IlFXE5py9AcBwc5UJ8W2fjYIJFRugjG67GeKjxtDwJtz_SenyIEuGVy0tNru6PEXfsC3RBoY3M65crcGnJp6j_tRWRav6IFf7YQgV7yLnWe4AxP1UyLhNIIOd')`,
          }}
        >
          {/* Overlay - works for both light & dark */}
          <div className="absolute inset-0 opacity-50 bg-linear-to-b from-black/50 via-black/60 to-black/70 dark:from-black/60 dark:via-black/75 dark:to-black/85"></div>

          <div className="relative z-10 max-w-4xl flex flex-col gap-6 md:gap-8">
            <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight">
              Engineering Mobility <br /> Moving the World Forward.
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

      {/* who we are */}
      <section className="py-20 lg:py-28 bg-background-light dark:bg-background-dark">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-10">
            Who We Are
          </h2>
          <div className="prose prose-lg prose-slate dark:prose-invert max-w-none text-lg">
            <p>
              <strong className="text-primary">Casters Global</strong> is a
              forward-thinking manufacturer of high-performance caster wheels
              and mobility solutions. We combine precision engineering, advanced
              manufacturing, and deep industry knowledge to deliver products
              that withstand the harshest conditions.
            </p>
            <p>
              From light-duty applications to heavy industrial use,
              customization is at our core. We serve diverse industries
              worldwide with one goal: to become the most trusted name in
              industrial mobility.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="w-full py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
            <div className="flex-1 order-2 lg:order-1">
              <div className="flex flex-col gap-5 ">
                <h2 className="text-3xl lg:text-4xl font-bold dark:text-slate-900">
                  Engineering Mobility Since Day One
                </h2>
                <div className="h-1 w-20 bg-primary rounded-full"></div>
              </div>

              <div className="mt-6 text-slate-600 dark:text-slate-900 text-lg leading-relaxed space-y-5">
                <p>
                  At Casters Global, we design and produce caster wheels that
                  combine precision engineering with industry-grade durability.
                  Our journey began with a simple mission — to redefine mobility
                  standards in industrial applications. Today, we serve clients
                  across continents with reliability, innovation, and
                  world-class service.
                </p>
                <p>
                  Our facility uses advanced CNC machining, ISO-aligned quality
                  control, and eco-friendly materials to deliver products that
                  perform under pressure — wherever they serve.
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
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-4/3 lg:aspect-auto">
                <img
                  alt="Close-up of precision heavy-duty castor wheel being manufactured"
                  className="object-cover w-full h-full"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBSMDUEmZ4Fp8tHTJxXOOzizUnwLmH0ZE1FCPC3yk_qXX1XFsy1UfPJe4tQERvfSmaJCihFozt7IusWYuWnD4tBImmfuwlqHjz3LnS45QdvXhkF3ziOqZiXQz0NQ9j2U0BMncfcKCqjeBaqxMpfKy3hsjGbpNzcwZrQb7e5qlfYOxaVtZ-hVVqLiygz0ssOQJcA_z0BxCtjh_4XxoTnjE7xmRj-fOZ4XMsuMZgvFf5M2VNy8mmNUcpSEHn0LdhKfwvRTOUYRDU50ocJ"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/80 to-transparent p-6">
                  <p className="text-white font-medium text-sm sm:text-base">
                    Precision engineered in our Bihar facility
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-gray-50 dark:bg-gray-900/50 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Our Core Principles
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Three pillars guide everything we build and every partnership we
              form.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
            {[
              {
                icon: MdOutlineTrackChanges,
                title: "Precision",
                desc: "Every component engineered to perform exactly as intended — no compromises.",
              },
              {
                icon: MdVisibility,
                title: "Reliability",
                desc: "Built for long-term performance and trusted partnerships that last.",
              },
              {
                icon: MdVerifiedUser,
                title: "Progress",
                desc: "Relentless improvement in technology, quality, sustainability and service.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group bg-white dark:bg-gray-800/80 p-8 lg:p-10 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-primary/50 hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-6 text-primary">
                  <item.icon size={40} className="flex-shrink-0" />
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {item.title}
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                  {item.desc}
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
              Our journey began with a simple but powerful insight — industries
              everywhere rely on mobility, yet often compromise on quality,
              lifespan, or customization.
            </p>
          </div>

          <div className="relative">
            {/* Gradient Vertical Line */}
            <div className="absolute left-4 sm:left-1/2 top-0 h-full w-1 bg-linear-to-b from-primary via-primary/60 to-transparent sm:-translate-x-1/2"></div>
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
                img: "./leaders/Dharampal_singh.png",
              },
              {
                name: "Saurabh Suman Pandey",
                role: "Head of Sales & Partnership",
                img: "./leaders/Suman_sourav_panday.png",
              },
              {
                name: "Seema Verma",
                role: "Head of Sales & Partnership",
                img: "./leaders/Seema_verma.png",
              },
              {
                name: "Pradeep Kumar",
                role: "Co-Founder & Chief Business Officer",
                img: "./leaders/Pradeep_kumar.png",
              },
            ].map((person, i) => (
              <div
                key={i}
                className="group relative rounded-2xl overflow-hidden bg-white dark:bg-[#1a2634] border border-slate-200 dark:border-slate-700 shadow-md hover:shadow-xl transition-all duration-300"
              >
                {/* Image */}
                <div className="relative overflow-hidden aspect-3/4 ">
                  <img
                    src={person.img}
                    alt={`${person.name} - ${person.role}`}
                    className="w-full h-full object-cover object-center"
                  />
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
      <section className="bg-primary/80 py-20 lg:py-28">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Let’s Move Forward Together
          </h2>
          <p className="text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed">
            From standard caster solutions to fully custom-engineered mobility
            systems — we deliver precision, durability, and reliability every
            time.
          </p>
          <p className="mt-6 text-lg font-medium opacity-90">
            Connect with our team today to discuss how we can support your
            operations.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-6">
            <a
              href="/contact"
              className="inline-flex h-14 px-12 items-center justify-center bg-white text-primary font-bold text-lg rounded-xl shadow-lg hover:bg-gray-100 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-white/40"
            >
              Get in Touch
            </a>
            <a
              href="/products"
              className="inline-flex h-14 px-12 items-center justify-center border-2 border-white text-white font-bold text-lg rounded-xl hover:bg-white/10 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-white/30"
            >
              View Products
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
