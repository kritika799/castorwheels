// src/pages/SolutionIndustrial.jsx
import React from "react";

export default function SolutionIndustrial() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-700 to-blue-900 text-white py-20 px-6">
        <div className="mx-auto max-w-6xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Medical Castors
          </h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
            Quiet, smooth, non-marking, corrosion-resistant, easy to clean,
            swivel with total lock, low profile{" "}
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Key Features */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">
            Key Features
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md border border-slate-100">
              <h3 className="text-xl font-semibold mb-4">High Load Capacity</h3>
              <p>
                From 500 kg to several tons per caster — ideal for heavy
                machinery, carts, and platforms.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md border border-slate-100">
              <h3 className="text-xl font-semibold mb-4">Durable Materials</h3>
              <p>
                Polyurethane on cast iron, forged steel, nylon — excellent
                abrasion, impact & chemical resistance.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md border border-slate-100">
              <h3 className="text-xl font-semibold mb-4">
                Floor Protection Options
              </h3>
              <p>
                Non-marking treads, shock absorption, low rolling resistance for
                smooth movement on concrete & tiles.
              </p>
            </div>
          </div>
        </section>

        {/* Applications */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">
            Common Applications
          </h2>
          <ul className="list-disc list-inside text-lg text-slate-700 space-y-3 max-w-3xl mx-auto">
            <li>Warehouse & logistics carts</li>
            <li>Manufacturing assembly lines</li>
            <li>Material handling equipment</li>
            <li>Heavy tool cabinets & workbenches</li>
            <li>Automated guided vehicles (AGVs)</li>
          </ul>
        </section>

        {/* CTA */}
        <div className="text-center">
          <a
            href="/request-info"
            className="inline-block bg-blue-700 text-white font-semibold px-10 py-4 rounded-full text-lg hover:bg-blue-800 transition shadow-lg"
          >
            Request Industrial Castor Quote
          </a>
        </div>
      </div>
    </div>
  );
}
