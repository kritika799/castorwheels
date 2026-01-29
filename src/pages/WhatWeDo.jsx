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
