import { IoSend } from "react-icons/io5";
import { FaFileUpload } from "react-icons/fa";
import { MdInventory } from "react-icons/md";
import { MdCorporateFare } from "react-icons/md";
import { MdOutlinePrecisionManufacturing } from "react-icons/md";
import React from "react";

export default function RequestForm() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12">
      <div className="mb-12 text-center md:text-left">
        <h1 className="text-[#0f181a]  text-5xl font-black leading-tight tracking-tight mb-4">
          Get a Precise Quote
        </h1>
        <p className="text-[#538893]   text-lg max-w-2xl">
          Partner with India's leading industrial castor manufacturer. Provide
          your project details below and our engineering team will provide a
          tailored quote within 24 hours.
        </p>
      </div>
      <form className="space-y-8">
        <div className="bg-white  rounded-xl border border-[#e8f0f2]  shadow-sm overflow-hidden">
          <div className="p-6 border-b border-[#e8f0f2]  bg-[#f8fbfb]  flex items-center gap-3">
            <span className="material-symbols-outlined text-primary">
              <MdCorporateFare />
            </span>
            <h2 className="text-[#0f181a]  text-xl font-bold">
              1. Personal &amp; Business Profile
            </h2>
          </div>
          <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-bold text-[#0f181a] ">
                Full Name *
              </label>
              <input
                className="form-input w-full rounded-lg border-[#d1e2e5] bg-transparent p-2 focus:ring-primary focus:border-primary "
                placeholder="John Doe"
                type="text"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-[#0f181a] ">
                Company Name *
              </label>
              <input
                className="form-input w-full rounded-lg border-[#d1e2e5]  bg-transparent p-2 "
                placeholder="Enter business name"
                type="text"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-[#0f181a] ">
                Email Address *
              </label>
              <input
                className="form-input w-full rounded-lg border-[#d1e2e5]   bg-transparent p-2  "
                placeholder="email@company.com"
                type="email"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-[#0f181a] ">
                Phone Number *
              </label>
              <input
                className="form-input w-full rounded-lg border-[#d1e2e5]  bg-transparent p-2 "
                placeholder="+91 00000-00000"
                type="tel"
              />
            </div>
            <div className="md:col-span-2 space-y-2">
              <label className="text-sm font-bold text-[#0f181a] ">
                City / Location *
              </label>
              <input
                className="form-input w-full rounded-lg border-[#d1e2e5]  bg-transparent p-2 "
                placeholder="e.g. Mumbai, Maharashtra"
                type="text"
              />
            </div>
          </div>
        </div>

        <div className="bg-white  rounded-xl border border-[#e8f0f2]  shadow-sm overflow-hidden">
          <div className="p-6 border-b border-[#e8f0f2]  bg-[#f8fbfb]  flex items-center gap-3">
            <span className="material-symbols-outlined text-primary">
              <MdInventory />
            </span>
            <h2 className="text-[#0f181a]   text-xl font-bold">
              2. Product Requirements
            </h2>
          </div>
          <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-bold text-[#0f181a]  ">
                Castor Category
              </label>
              <select className="form-input w-full rounded-lg border-[#d1e2e5]  bg-transparent p-2">
                <option>Heavy Duty Industrial</option>
                <option>Medical &amp; Healthcare</option>
                <option>Furniture &amp; Decor</option>
                <option>Institutional</option>
                <option>Custom Engineering</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-[#0f181a]  ">
                Product Code or Name
              </label>
              <input
                className="form-input w-full rounded-lg border-[#d1e2e5]   bg-transparent p-2  "
                placeholder="e.g. PU-75-HD"
                type="text"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-[#0f181a]  ">
                Required Quantity
              </label>
              <input
                className="form-input w-full rounded-lg border-[#d1e2e5]   bg-transparent p-2  "
                placeholder="50"
                type="number"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-[#0f181a]  ">
                Load Capacity (kg per castor)
              </label>
              <input
                className="form-input w-full rounded-lg border-[#d1e2e5]   bg-transparent p-2  "
                placeholder="e.g. 250kg"
                type="text"
              />
            </div>
          </div>
        </div>

        <div className="bg-white  rounded-xl border border-[#e8f0f2]  shadow-sm overflow-hidden">
          <div className="p-6 border-b border-[#e8f0f2] bg-[#f8fbfb]  flex items-center gap-3">
            <span className="material-symbols-outlined text-primary">
              <MdOutlinePrecisionManufacturing />
            </span>
            <h2 className="text-[#0f181a]   text-xl font-bold">
              3. Application &amp; Deployment
            </h2>
          </div>
          <div className="p-8 space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-bold text-[#0f181a]  ">
                Primary Application / Usage Environment
              </label>
              <textarea
                className="form-input w-full rounded-lg border-[#d1e2e5]   bg-transparent p-4  "
                placeholder="Describe where the castors will be used (e.g. humid warehouse, chemical lab, hospital floor)..."
                rows="3"
              ></textarea>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-[#0f181a]  ">
                  Preferred Delivery Date
                </label>
                <div className="relative">
                  <input
                    className="form-input w-full rounded-lg border-[#d1e2e5]   bg-transparent p-2  "
                    type="date"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-[#0f181a]  ">
                  Technical Drawings / Specs
                </label>
                <label className="flex flex-col items-center justify-center w-full h-14 border-2 border-dashed border-[#d1e2e5]   rounded-lg cursor-pointer hover:bg-primary/5 transition-colors">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">
                      <FaFileUpload />
                    </span>
                    <span className="text-sm text-[#538893]">
                      Upload PDF or DWG
                    </span>
                  </div>
                  <input className="hidden" type="file" />
                </label>
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-[#0f181a]  ">
                Additional Remarks
              </label>
              <textarea
                className="form-input w-full rounded-lg border-[#d1e2e5]   bg-transparent p-2  "
                placeholder="Any specific requirements for mounting, braking, or wheel material?"
                rows="2"
              ></textarea>
            </div>
          </div>
        </div>

        <div className="pt-6">
          <button
            className="w-full bg-primary hover:bg-[#156e80] text-white py-5 px-8 rounded-xl font-black text-xl shadow-lg shadow-primary/20 transition-all flex items-center justify-center gap-3"
            type="submit"
          >
            <span>Submit Request for Quotation</span>
            <span className="material-symbols-outlined">
              <IoSend />
            </span>
          </button>
          <p className="text-center mt-4 text-sm text-[#538893]  ">
            By submitting, you agree to our privacy policy and terms of service.
          </p>
        </div>
      </form>

     
    </main>
  );
}
