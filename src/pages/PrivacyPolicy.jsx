import React from "react";

export default function PrivacyPolicy() {
  return (
    <div className="bg-white text-slate-900">
      {/* Hero */}
      <header className="bg-emerald-50 border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-6 py-16 text-center">
          <h1 className="text-4xl font-semibold tracking-tight">
            Privacy Policy
          </h1>
          <p className="mt-3 text-slate-600">
            How Casters Global handles your data
          </p>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-5xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Sidebar (optional, like Shopify docs) */}
          <aside className="md:col-span-1">
            <nav className="space-y-3 text-sm text-slate-600 sticky top-24">
              <a href="#introduction" className="block hover:text-slate-900">
                Introduction
              </a>
              <a href="#data-collection" className="block hover:text-slate-900">
                Data we collect
              </a>
              <a href="#data-use" className="block hover:text-slate-900">
                How we use data
              </a>
              <a href="#sharing" className="block hover:text-slate-900">
                Data sharing
              </a>
              <a href="#rights" className="block hover:text-slate-900">
                Your rights
              </a>
              <a href="#contact" className="block hover:text-slate-900">
                Contact
              </a>
            </nav>
          </aside>

          {/* Main text */}
          <section className="md:col-span-3 space-y-12">
            <div id="introduction">
              <h2 className="text-2xl font-semibold mb-3">Introduction</h2>
              <p className="text-slate-700 leading-relaxed">
                This Privacy Policy explains how Casters Global collects, uses,
                and protects your information when you visit our website or
                inquire about our industrial wheels and caster products.
              </p>
            </div>

            <div id="data-collection">
              <h2 className="text-2xl font-semibold mb-3">
                Information we collect
              </h2>
              <ul className="list-disc pl-5 space-y-2 text-slate-700">
                <li>Contact details such as name, email, and phone number</li>
                <li>Company and shipping information</li>
                <li>Product inquiries and quote requests</li>
                <li>Website usage data and cookies</li>
              </ul>
            </div>

            <div id="data-use">
              <h2 className="text-2xl font-semibold mb-3">
                How we use your information
              </h2>
              <ul className="list-disc pl-5 space-y-2 text-slate-700">
                <li>Respond to inquiries and provide quotes</li>
                <li>Process orders and deliveries</li>
                <li>Improve our products and website</li>
                <li>Comply with legal and regulatory requirements</li>
              </ul>
            </div>

            <div id="sharing">
              <h2 className="text-2xl font-semibold mb-3">Data sharing</h2>
              <p className="text-slate-700 leading-relaxed">
                Casters Global does not sell your personal data. Information may
                be shared only with logistics partners, payment providers, or
                service vendors when necessary to fulfill orders or operate our
                business.
              </p>
            </div>

            <div id="rights">
              <h2 className="text-2xl font-semibold mb-3">Your rights</h2>
              <ul className="list-disc pl-5 space-y-2 text-slate-700">
                <li>Request access to your personal information</li>
                <li>Request correction or deletion of your data</li>
                <li>Opt out of non-essential communications</li>
              </ul>
            </div>

            <div id="contact">
              <h2 className="text-2xl font-semibold mb-3">Contact us</h2>
              <p className="text-slate-700">
                If you have questions about this Privacy Policy, contact us at{" "}
                <a
                  href="mailto:info@caasterglobal.com"
                  className="text-emerald-600 hover:underline"
                >
                  info@castersglobal.com
                </a>
                .
              </p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
