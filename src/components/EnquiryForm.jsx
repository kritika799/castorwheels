import React, { useState } from "react";
import { IoCall } from "react-icons/io5";
import { MdOutlineEngineering } from "react-icons/md";
import { IoIosMail } from "react-icons/io";
const url =
  "https://script.google.com/macros/s/AKfycbxYlm9XxT4sHvBjzqoXO5QtABq25v53Bfwk3Wjox8MqngjSjBIjgcrf7rnYnLDLCYAU/exec";

export default function EnquiryForm() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    message: "",
    interest: "",
  });
  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch(url, {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "content-type": "application/json",
      },
    });

    // console.log(formData);
    alert("Message sent!");

    setFormData({
      name: "",
      company: "",
      email: "",
      message: "",
      interest: "",
    });
  };

  return (
    <section
      className="py-24 bg-linear-to-br from-white to-slate-50"
      id="contact"
    >
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl bg-blue-400 shadow-2xl ring-1 ring-slate-900/5">
          <div className="flex flex-col lg:flex-row">
            <div className="flex-1 bg-primary p-10 lg:p-16 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 opacity-10 transform translate-x-10 -translate-y-10">
                <MdOutlineEngineering className="material-symbols-outlined text-[300px]" />
              </div>
              <div className="relative z-10">
                <h2 className="mb-6 text-3xl font-bold lg:text-4xl">
                  Start Your Project
                </h2>
                <p className="mb-10 text-blue-100 text-lg leading-relaxed">
                  Need technical datasheets, bulk pricing, or custom
                  engineering? Our team is ready to assist you.
                </p>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 backdrop-blur">
                      <span className="material-symbols-outlined">
                        <IoCall />
                      </span>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-blue-200">
                        Phone
                      </p>
                      <p className="font-bold">+91 8826883046</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 backdrop-blur">
                      <span className="material-symbols-outlined">
                        <IoIosMail />
                      </span>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-blue-200">
                        Email
                      </p>
                      <p className="font-bold">sales@castorwheels.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 p-10 lg:p-16 bg-white">
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      className="mb-2 block text-sm font-bold text-slate-700"
                      htmlFor="name"
                    >
                      Name
                    </label>
                    <input
                      className="block w-full rounded-lg border-slate-300 shadow-sm focus:border-primary focus:ring-primary py-3 px-4 bg-slate-50"
                      name="name"
                      id="name"
                      placeholder="Your Name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label
                      className="mb-2 block text-sm font-bold text-slate-700"
                      htmlFor="company"
                    >
                      Company
                    </label>
                    <input
                      className="block w-full rounded-lg border-slate-300 shadow-sm focus:border-primary focus:ring-primary py-3 px-4 bg-slate-50"
                      id="company"
                      name="company"
                      placeholder="Company Name"
                      type="text"
                      value={formData.company}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div>
                  <label
                    className="mb-2 block text-sm font-bold text-slate-700"
                    htmlFor="email"
                  >
                    Work Email
                  </label>
                  <input
                    className="block w-full rounded-lg border-slate-300 shadow-sm focus:border-primary focus:ring-primary py-3 px-4 bg-slate-50"
                    id="email"
                    name="email"
                    placeholder="john@company.com"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label
                    className="mb-2 block text-sm font-bold text-slate-700"
                    htmlFor="interest"
                  >
                    Interested In
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    value={formData.interest}
                    onChange={handleChange}
                  >
                    <option value="">Select an option</option>
                    <option value="Industrial Castors">
                      Industrial Castors
                    </option>
                    <option value="Medical Castors">Medical Castors</option>
                    <option value="Furniture Castors">Furniture Castors</option>
                    <option value="Custom Solutions">Custom Solutions</option>
                    <option value="Other Inquiry">Other Inquiry</option>
                  </select>
                </div>
                <div>
                  <label
                    className="mb-2 block text-sm font-bold text-slate-700"
                    htmlFor="message"
                  >
                    Message
                  </label>
                  <textarea
                    className="block w-full rounded-lg border-slate-300 shadow-sm focus:border-primary focus:ring-primary py-3 px-4 bg-slate-50"
                    id="message"
                    placeholder="Describe your requirements..."
                    rows="3"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>
                <button
                  className="mt-2 w-full rounded-lg bg-slate-900 py-4 text-base font-bold text-white shadow-lg hover:bg-slate-800 transition-all hover:scale-[1.01]"
                  type="submit"
                >
                  Send Inquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
