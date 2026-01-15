import React from "react";

export default function RequestForm() {
  return (
    <section className="w-full bg-white dark:bg-[#1a2634] py-16 lg:py-24">
      <div className="max-w-[900px] mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#0d131b] dark:text-white mb-4">
            Request a Quote / Information
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-lg">
            Share your requirements and our engineering team will contact you
            within 24–48 hours.
          </p>
        </div>

        {/* Form */}
        <form className="bg-slate-50 dark:bg-slate-800 p-8 rounded-2xl border border-slate-200 dark:border-slate-700 space-y-8">
          
          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-bold text-[#0d131b] dark:text-white mb-4">
              Contact Information
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Full Name *"
                required
                className="input"
              />
              <input
                type="email"
                placeholder="Email Address *"
                required
                className="input"
              />
              <input
                type="tel"
                placeholder="Phone Number *"
                required
                className="input"
              />
              <input
                type="text"
                placeholder="Company Name *"
                required
                className="input"
              />
            </div>
          </div>

          {/* Business Details */}
          <div>
            <h3 className="text-lg font-bold text-[#0d131b] dark:text-white mb-4">
              Business Details
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <select className="input">
                <option>Industry / Application *</option>
                <option>Automotive</option>
                <option>Medical Equipment</option>
                <option>Furniture</option>
                <option>Warehouse & Logistics</option>
                <option>Heavy Machinery</option>
                <option>Other</option>
              </select>

              <select className="input">
                <option>Request Type *</option>
                <option>Request a Quote</option>
                <option>Custom Engineering</option>
                <option>Bulk / OEM Order</option>
                <option>Technical Specifications</option>
                <option>General Inquiry</option>
              </select>
            </div>
          </div>

          {/* Technical Requirements */}
          <div>
            <h3 className="text-lg font-bold text-[#0d131b] dark:text-white mb-4">
              Technical Requirements
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <select className="input">
                <option>Estimated Quantity</option>
                <option>Prototype / Sample</option>
                <option>1 – 100 Units</option>
                <option>100 – 1,000 Units</option>
                <option>1,000+ Units</option>
              </select>

              <select className="input">
                <option>Required Load Capacity</option>
                <option>Up to 100 kg</option>
                <option>100 – 300 kg</option>
                <option>300 – 800 kg</option>
                <option>Custom</option>
              </select>
            </div>

            <textarea
              rows="5"
              placeholder="Describe your application, load conditions, environment, and usage frequency *"
              required
              className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary resize-none"
            ></textarea>
          </div>

          {/* Attachments */}
          <div>
            <h3 className="text-lg font-bold text-[#0d131b] dark:text-white mb-4">
              Attachments (Optional)
            </h3>

            <input
              type="file"
              className="block w-full text-sm text-slate-600 dark:text-slate-300
                         file:mr-4 file:py-2 file:px-4
                         file:rounded-lg file:border-0
                         file:bg-primary file:text-white
                         hover:file:bg-blue-600"
            />
          </div>

          {/* Consent */}
          <div className="flex items-start gap-3">
            <input type="checkbox" required className="mt-1" />
            <p className="text-sm text-slate-600 dark:text-slate-300">
              I agree to be contacted regarding this request.
            </p>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full h-12 bg-primary text-white rounded-lg font-bold hover:bg-blue-600 transition-colors"
          >
            Submit Request
          </button>
        </form>
      </div>

      {/* Reusable Input Styles */}
      <style jsx>{`
        .input {
          height: 48px;
          padding: 0 16px;
          border-radius: 8px;
          border: 1px solid rgb(203 213 225);
          background: white;
          color: rgb(15 23 42);
          outline: none;
        }
        .input:focus {
          border-color: #2563eb;
          box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.4);
        }
        .dark .input {
          background: rgb(15 23 42);
          border-color: rgb(71 85 105);
          color: white;
        }
      `}</style>
    </section>
  );
}

