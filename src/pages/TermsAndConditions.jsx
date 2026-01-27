import React from "react";

const sections = [
  { id: "introduction", title: "Introduction" },
  { id: "eligibility", title: "Eligibility" },
  { id: "products", title: "Products & Services" },
  { id: "pricing", title: "Pricing & Payments" },
  { id: "shipping", title: "Shipping & Delivery" },
  { id: "returns", title: "Returns & Refunds" },
  { id: "liability", title: "Limitation of Liability" },
  { id: "intellectual", title: "Intellectual Property" },
  { id: "governing", title: "Governing Law" },
];

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-[#f7f9fb]">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-6 py-14 ">
          <h1 className="text-5xl font-bold text-gray-900 tracking-tight">
            Terms & Conditions
          </h1>
          <p className="mt-3 text-gray-600 max-w-2xl">
            These terms govern your access to and use of Casters Global website,
            products, and services.
          </p>
        </div>
      </div>

      {/* Body */}
      <div className="max-w-7xl mx-auto px-6 py-14 flex flex-col lg:flex-row gap-12">
        {/* Sidebar */}
        <aside className="lg:w-1/4">
          <div className="sticky top-28">
            <p className="text-xs font-semibold text-gray-400 tracking-widest mb-5">
              CONTENTS
            </p>
            <ul className="space-y-4 border-l border-gray-200 pl-4">
              {sections.map((section) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className="block text-sm text-gray-700 hover:text-emerald-600 transition"
                  >
                    {section.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Main Content */}
        <main className="lg:w-3/4 bg-white rounded-xl border border-gray-200 px-10 py-12 space-y-14">
          <Section id="introduction" title="Introduction">
            Welcome to <strong>CastersGlobal</strong>. By accessing or using our
            website, you agree to comply with and be bound by these Terms &
            Conditions.
          </Section>

          <Section id="eligibility" title="Eligibility">
            You must be at least 18 years old to use this website. By using
            CastorsGlobal, you represent that you meet this requirement.
          </Section>

          <Section id="products" title="Products & Services">
            CastorsGlobal provides industrial castors, wheels, and mobility
            solutions. Product specifications may change without prior notice.
          </Section>

          <Section id="pricing" title="Pricing & Payments">
            Prices are subject to change. Orders will be processed only after
            payment confirmation unless otherwise agreed.
          </Section>

          <Section id="shipping" title="Shipping & Delivery">
            Delivery timelines are estimates. CastorsGlobal is not responsible
            for delays caused by third-party logistics providers.
          </Section>

          <Section id="returns" title="Returns & Refunds">
            Returns are accepted in accordance with our return policy. Custom
            products may not be eligible for refunds.
          </Section>

          <Section id="liability" title="Limitation of Liability">
            CastorsGlobal shall not be liable for indirect or consequential
            damages resulting from the use of our products or website.
          </Section>

          <Section id="intellectual" title="Intellectual Property">
            All content, trademarks, and materials on this website are the
            intellectual property of CastorsGlobal.
          </Section>

          <Section id="governing" title="Governing Law">
            These Terms & Conditions shall be governed by applicable local laws.
          </Section>
        </main>
      </div>
    </div>
  );
}

function Section({ id, title, children }) {
  return (
    <section id={id} className="scroll-mt-32">
      <h2 className="text-2xl font-semibold text-gray-900 relative pl-4">
        <span className="absolute left-0 top-1 h-6 w-1 bg-emerald-500 rounded-full" />
        {title}
      </h2>
      <p className="mt-4 text-gray-700 leading-relaxed max-w-3xl">
        {children}
      </p>
    </section>
  );
}





