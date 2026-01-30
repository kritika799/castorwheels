import React, { useState } from "react";
import { IoCall } from "react-icons/io5";
import { MdOutlineEngineering } from "react-icons/md";
import { IoIosMail } from "react-icons/io";
import { SlBadge } from "react-icons/sl";
import { RiCustomerService2Line } from "react-icons/ri";
import { GrCertificate } from "react-icons/gr";

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
      className="py-24 bg-linear-to-br from-white to-slate-50 "
      id="contact"
    >
      <div className=" w-full sm:px-6 lg:px-8">
        <div className="overflow-hidden  bg-black shadow-2xl  ring-slate-900/5">
          <div className="flex flex-col lg:flex-row">
            <div  
            style={{
              backgroundImage: "url('./side_image2.png')"
            }}
            className="flex-1 bg-black p-10 lg:p-16 text-white relative overflow-hidden bg-center bg-cover w-full 
             object-cover
             opacity-50 dark:opacity-40"
             >
                 <div className="absolute inset-0 bg-gradient-to-r from-background-dark/95 via-background-dark/80 to-background-dark/40"></div>
        </div>
        <div className="relative z-10 max-w-[1280px] w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 
        items-center">
          <div className="lg:col-span-7 flex flex-col gap-6 text-white order-2 lg:order-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 w-fit backdrop-blur-md mx-auto lg:mx-0">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_10px_#13ec13]"></span>
              <span className="text-xs font-bold uppercase tracking-widest text-primary">
                Agritech Innovation
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
              Cultivating the <br />
              <span className="text-primary">Future of Food</span>
            </h1>
         </div>
         </div>
             
              <div className="relative z-10">
                 <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
              WHY CASTOR WHEELS ?<br />
              
            </h1>
                <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
                 {/* Item 1 */}
               <div className="flex flex-col items-center text-center">
                 <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full border-2 border-orange-400">
            <SlBadge  className="h-10 w-10 text-blue-700" />  
               </div>
               <p className="max-w[180px] text-base font-medium text-blue-700">
                Unmatched Quality
                </p>
                 </div>
                  <div className="flex flex-col items-center text-center">
                 <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full border-2 border-orange-400">
            <RiCustomerService2Line  className="h-10 w-10 text-blue-700" />  
               </div>
               <p className="max-w[180px] text-base font-medium text-blue-700">
                Customer Service
                </p>
                 </div>
                <div className="flex flex-col items-centre text-centre">
                   <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full border-2 border-orange-400">
            <GrCertificate   className="h-10 w-10 text-blue-700" />  
               </div>
               <p className="max-w-[180px] text-base font-medium text-blue-700">
                Certified by leading quality standard
                </p>
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
