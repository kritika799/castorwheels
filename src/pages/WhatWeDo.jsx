"use client";
import React from "react";
import {
  MdArrowForward,
  MdFactory,
  MdEco,
  MdVerifiedUser,
} from "react-icons/md";

export default function WhatWeDo() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-gray-900 dark:text-gray-100 font-display min-h-screen overflow-x-hidden">
    

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
    
      {/* Hero – clean, powerful, minimal overlay */}
      <section
        className="relative min-h-[70vh] lg:min-h-[85vh] flex items-center justify-center bg-cover bg-center bg-no-repeat px-6 py-20 text-center"
        style={{
          backgroundImage: `url('./WhatWeDo.png')`, // Replace with better hero image if available
        }}
      >
        <div
          className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/75 to-black/85"
          aria-hidden="true"
        />
        <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center gap-8">
          <h1 className="text-white text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight drop-shadow-xl">
            Precision Mobility
            <br className="hidden md:block" /> Engineered for Performance
          </h1>

          <p className="text-gray-200 text-xl lg:text-2xl font-light max-w-4xl opacity-95">
            High-performance caster wheels and mobility systems designed for
            reliability, efficiency, and longevity across demanding industrial
            environments.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 mt-8">
            <a
              href="/request-info"
              className="group inline-flex items-center gap-3 px-10 py-5 bg-primary text-white font-bold text-lg rounded-xl shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:scale-[1.02] transition-all duration-300"
            >
              Get a Quote
              <MdArrowForward className="text-xl group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="/products"
              className="inline-flex items-center px-10 py-5 border-2 border-white/70 text-white font-semibold text-lg rounded-xl hover:bg-white/10 transition-all duration-300"
            >
              Explore Products
            </a>
          </div>
        </div>
      </section>

      {/* Core Offerings – clean grid, icons */}
      <section className="py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl lg:text-5xl font-bold text-center text-gray-900 dark:text-white mb-16">
            What We Engineer
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {[
              {
                title: "Light Duty Casters",
                desc: "Ideal for furniture, office equipment, displays and low-load applications requiring smooth, quiet movement.",
              },
              {
                title: "Medium Duty Casters",
                desc: "Reliable performance for carts, racks, workstations and moderate industrial use.",
              },
              {
                title: "Heavy Duty & Industrial Casters",
                desc: "Built for manufacturing floors, logistics, material handling — high load capacity and extreme durability.",
              },
              {
                title: "Medical & Specialty Casters",
                desc: "Precision, hygiene, safety-focused solutions for healthcare, labs and sensitive environments.",
              },
              {
                title: "Custom Mobility Solutions",
                desc: "Tailored designs engineered to exact specifications, load conditions, floor types and operational needs.",
              },
              {
                title: "High-Performance Polyurethane & Rubber Wheels",
                desc: "designed for low noise, floor protection, and long service life.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white dark:bg-gray-800/70 p-8 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md hover:border-primary/40 transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-12 text-center text-lg lg:text-xl text-gray-700 dark:text-gray-300 max-w-4xl mx-auto">
            Every product is engineered with a focus on{" "}
            <strong>load performance</strong>, <strong>smooth rolling</strong>,{" "}
            <strong>noise reduction</strong>, and{" "}
            <strong>exceptional service life</strong>.
          </p>
        </div>
      </section>

      {/* Engineering & Quality – with image */}
      <section className="py-20 lg:py-28 bg-gray-50 dark:bg-gray-900/40">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8 order-2 lg:order-1">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
              Engineering & Quality Excellence
            </h2>
            <p className="text-xl font-medium text-primary">
              Designed with Precision. Built to Last.
            </p>

            <div className="space-y-6 text-lg text-gray-700 dark:text-gray-300">
              <p>
                Engineering is the backbone of Casters Global. Our disciplined
                process includes:
              </p>
              <ul className="space-y-3 list-disc pl-6">
                <li>
                  Material selection optimized for application stress and
                  environment
                </li>
                <li>
                  Structural design for ideal load distribution and fatigue
                  resistance
                </li>
                <li>Precision CNC machining and controlled assembly</li>
                <li>
                  Rigorous in-house testing — load, endurance, swivel, rolling
                  resistance
                </li>
              </ul>
              <p className="font-medium">
                Strict quality protocols ensure consistency, reliability, and
                compliance with international standards — delivering products
                that perform reliably throughout their lifecycle.
              </p>
            </div>
          </div>

          <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-4/3 lg:aspect-auto order-1 lg:order-2 group border">
            <grok-card
              data-id="cc0687"
              data-type="image_card"
              data-plain-type="render_searched_image"
              data-arg-size="LARGE"
            ></grok-card>

            <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
            <div>
              <img src="./side_image-2.png" alt="" />
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability – subtle green accent */}
      {/* <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-3 mb-6">
            <MdEco className="text-5xl text-green-600 dark:text-green-500" />
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
              Commitment to Sustainability
            </h2>
          </div>

          <p className="text-xl font-medium text-green-700 dark:text-green-400 mb-10">
            Responsible Manufacturing for a Moving World
          </p>

          <div className="prose prose-lg prose-slate dark:prose-invert  text-left lg:text-center">
            <p>
              Sustainability is embedded in our operations — from material
              choices to production processes and product longevity.
            </p>
            <ul className="list-disc space-y-3 mt-6 inline-block text-left">
              <li>
                Use of recyclable and eco-friendly materials wherever feasible
              </li>
              <li>Energy-efficient manufacturing technologies</li>
              <li>Waste minimization and material recycling programs</li>
              <li>
                Long-life designs that reduce replacement frequency and
                environmental footprint
              </li>
            </ul>
            <p className="mt-8 font-medium">
              We help customers achieve both high performance and environmental
              responsibility.
            </p>
          </div>

          <div className="mt-12">
            <grok-card
              data-id="9b0e42"
              data-type="image_card"
              data-plain-type="render_searched_image"
              data-arg-size="LARGE"
            ></grok-card>
          </div>
        </div>
      </section> */}
      <section className="py-20 lg:py-28 bg-gray-50 dark:bg-gray-900/40">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-4/3 lg:aspect-auto order-2 lg:order-1 group">
            <grok-card
              data-id="cc0687"
              data-type="image_card"
              data-plain-type="render_searched_image"
              data-arg-size="LARGE"
            ></grok-card>

            <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
            <div>
              <img src="./side_image-1.png" alt="" />
            </div>
          </div>

          <div className="space-y-8 order-1 lg:order-2">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
              Commitment to Sustainability
            </h2>
            <p className="text-xl font-medium text-primary">
              Responsible Manufacturing for a Moving World
            </p>

            <div className="space-y-6 text-lg text-gray-700 dark:text-gray-300">
              <p>
                Sustainability is embedded in our operations — from material
                choices to production processes and product longevity.
              </p>
              <ul className="space-y-3 list-disc pl-6">
                <li>
                  Use of recyclable and eco-friendly materials wherever feasible
                </li>
                <li>Energy-efficient manufacturing technologies</li>
                <li>Waste minimization and material recycling programs</li>
                <li>
                  Long-life designs that reduce replacement frequency and
                  environmental footprint
                </li>
              </ul>
              <p className="font-medium">
                We help customers achieve both high performance and
                environmental responsibility.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve – minimal tags/grid */}
      <section className="py-20 lg:py-28 bg-gray-50 dark:bg-gray-900/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl lg:text-5xl font-bold text-center text-gray-900 dark:text-white mb-16">
            Industries We Empower
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {[
              "Manufacturing & Industrial Production",
              "Warehousing & Logistics",
              "Healthcare & Medical Equipment",
              "Retail & Commercial Infrastructure",
              "Automotive & Tooling Systems",
              "Hospitality & Institutional Furniture",
              "OEMs & Project-Based Applications",
              "Aerospace, Defense & Heavy Engineering",
            ].map((industry, i) => (
              <div
                key={i}
                className="bg-white dark:bg-gray-800 p-8 rounded-2xl border border-gray-200 dark:border-gray-700 text-center hover:border-primary/50 transition-colors"
              >
                <p className="text-xl font-semibold text-gray-900 dark:text-white">
                  {industry}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16">
            <grok-card
              data-id="8fba00"
              data-type="image_card"
              data-plain-type="render_searched_image"
              data-arg-size="LARGE"
            ></grok-card>
          </div>

          <p className="mt-10 text-center text-lg text-gray-600 dark:text-gray-400 max-w-4xl mx-auto">
            Each sector brings unique mobility challenges — we deliver tailored,
            high-performance solutions that address them directly.
          </p>
        </div>
      </section>

      {/* Custom & Approach – combined minimal section */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-16">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-8">
              Custom Solutions & Technical Support
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Beyond catalog products, we provide full custom engineering —
              collaborating closely on load conditions, floor surfaces, movement
              patterns, safety, and environmental factors to create optimized
              caster solutions.
            </p>
            <p className="mt-6 text-lg font-medium">
              Our technical team offers application guidance to ensure the right
              product for maximum efficiency and uptime.
            </p>
          </div>

          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-8">
              Our Approach
            </h2>
            <ul className="space-y-6 text-lg text-gray-700 dark:text-gray-300">
              <li className="flex items-start gap-4">
                <MdVerifiedUser className="text-3xl text-primary flex-shrink-0 mt-1" />
                <div>
                  <strong className="block text-xl">
                    Customer-Centric Engineering
                  </strong>
                  Solutions built around real operational needs
                </div>
              </li>
              <li className="flex items-start gap-4">
                <MdFactory className="text-3xl text-primary flex-shrink-0 mt-1" />
                <div>
                  <strong className="block text-xl">
                    Consistency & Reliability
                  </strong>
                  Repeatable quality in every batch
                </div>
              </li>
              <li className="flex items-start gap-4">
                <MdEco className="text-3xl text-primary flex-shrink-0 mt-1" />
                <div>
                  <strong className="block text-xl">
                    Continuous Improvement
                  </strong>
                  Ongoing advancement in technology, processes, and materials
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Final CTA – strong, minimal */}
      <section className="py-20 lg:py-28 bg-primary text-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-6xl font-extrabold mb-8">
            Move Forward with Confidence
          </h2>

          <p className="text-xl lg:text-2xl max-w-4xl mx-auto mb-12 leading-relaxed">
            Whether you need standard high-performance casters or fully custom
            mobility systems, Casters Global delivers engineering you can trust
            — today and for the long term.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a
              href="/products"
              className="inline-flex items-center justify-center px-12 py-6 bg-white text-primary font-bold text-xl rounded-xl shadow-lg hover:bg-gray-100 transition-all duration-300"
            >
              Explore Our Range
            </a>
            <a
              href="/request-info"
              className="inline-flex items-center justify-center px-12 py-6 border-2 border-white text-white font-bold text-xl rounded-xl hover:bg-white/10 transition-all duration-300"
            >
              Request a Quote
            </a>
          </div>

          <p className="mt-12 text-lg opacity-90">
            Contact our engineering team for application-specific advice.
          </p>
        </div>
      </section>
    </div>
  );
}
