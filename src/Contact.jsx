import { IoStorefront } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { MdOpenInNew } from "react-icons/md";
import { MdOutlineVerified } from "react-icons/md";
import React from "react";
import { MdOutlineSchedule } from "react-icons/md";



export default function Contact() {
  return (
    <section>
      <div className="relative w-full bg-slate-900">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-overlay"
          data-alt="Industrial factory floor with machinery"
          style={{
            backgroundImage:"url('https://lh3.googleusercontent.com/aida-public/AB6AXuDaJgGZZatbToKxXrct-Erneh_clnKrizuRQhVde15D83sIFboX6_L_9nDmJwjkHmMZGrcZn1v0z4vwvAmVyaRMLxP7-E3c9B9Abty8Y1LInUoB2DX4LTCAGsVW71yFNOdAMzb0Qn7Tmf-XujTAtXcEP4xXNqO8A6xMfD8nGGg4Ou1fmaFoxnB4Y_jIEcAKgClkAtkSeg_f9g6eYwkSWzpZzGmNVj6NG8wu4z82kVU8fCOjYiHRDfLAf1qFTaXVo7vmt5mCHs4rIVVZ')"
          }}
        //   style="
        //   // background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuDaJgGZZatbToKxXrct-Erneh_clnKrizuRQhVde15D83sIFboX6_L_9nDmJwjkHmMZGrcZn1v0z4vwvAmVyaRMLxP7-E3c9B9Abty8Y1LInUoB2DX4LTCAGsVW71yFNOdAMzb0Qn7Tmf-XujTAtXcEP4xXNqO8A6xMfD8nGGg4Ou1fmaFoxnB4Y_jIEcAKgClkAtkSeg_f9g6eYwkSWzpZzGmNVj6NG8wu4z82kVU8fCOjYiHRDfLAf1qFTaXVo7vmt5mCHs4rIVVZ');
        // "
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/40"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 flex flex-col justify-center min-h-[300px]">
          <h1 className="text-white text-4xl md:text-5xl font-black leading-tight tracking-tight mb-4">
            Let's Connect
          </h1>
          <p className="text-slate-200 text-lg md:text-xl font-normal max-w-2xl leading-relaxed">
            Explore our engineering portfolio. We are ready to discuss your
            requirements and share information about our mobility solutions.
          </p>
        </div>
      </div>
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7 xl:col-span-8 flex flex-col gap-6">
            <div>
              <h2 className="text-slate-900  text-3xl font-bold tracking-tight mb-2">
                Request Information
              </h2>
              <p className="text-slate-500 dark:text-slate-400">
                Complete the form below for general inquiries or to learn more
                about our products.
              </p>
            </div>
            <form className="bg-white  p-6 md:p-8 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <label className="flex flex-col gap-2 ">
                  <span className="text-black font-semibold">
                    Full Name
                  </span>
                  <input
                    className="w-full h-12 px-4 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-600 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-slate-400 dark:text-white"
                    placeholder="John Doe"
                    type="text"
                  />
                </label>
                <label className="flex flex-col gap-2">
                  <span className="text-slate-900  font-semibold">
                    Company Name
                  </span>
                  <input
                    className="w-full h-12 px-4 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-600 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-slate-400 dark:text-white"
                    placeholder="Your Company"
                    type="text"
                  />
                </label>
                <label className="flex flex-col gap-2">
                  <span className="text-slate-900  text-sm font-semibold">
                    Phone Number
                  </span>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 dark:text-slate-400 font-medium border-r border-slate-300 dark:border-slate-600 pr-2 mr-2">
                      +91
                    </span>
                    <input
                      className="w-full h-12 pl-16 pr-4 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-600 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-slate-400 dark:text-white"
                      placeholder="98XXX XXXXX"
                      type="tel"
                    />
                  </div>
                </label>
                <label className="flex flex-col gap-2">
                  <span className="text-slate-900 text-sm font-semibold">
                    Email Address
                  </span>
                  <input
                    className="w-full h-12 px-4 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-600 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-slate-400 dark:text-white"
                    placeholder="name@company.com"
                    type="email"
                  />
                </label>
                <label className="flex flex-col gap-2 md:col-span-2">
                  <span className="text-slate-900  text-sm font-semibold">
                    Topic
                  </span>
                  <select className="w-full h-12 px-4 rounded-lg bg-slate-50 dark:bg-slate-800 border-slate-300 border  dark:border-slate-600 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-slate-700 dark:text-white appearance-none cursor-pointer ">
                    <option disabled="" selected="" value="">
                      Select a topic
                    </option>
                    <option>Product Information</option>
                    <option>Collaboration Proposal</option>
                    <option>Technical Support</option>
                    <option>General Inquiry</option>
                  </select>
                </label>
                <label className="flex flex-col gap-2 md:col-span-2">
                  <span className="text-slate-900 text-sm font-semibold">
                    Message
                  </span>
                  <textarea
                    className="w-full p-4 rounded-lg bg-slate-50  border dark:bg-slate-800 border-slate-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-slate-400 resize-none dark:text-white"
                    placeholder="How can we help you?"
                    rows="4"
                  ></textarea>
                </label>
              </div>
              <div className="flex items-center justify-between mt-4">
                <div className="hidden md:flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm">
                  <span className="material-symbols-outlined text-lg text-green-600">
                    <MdOutlineVerified />

                  </span>
                  <span>Your information is secure</span>
                </div>
                <button
                  className="bg-primary hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg shadow-md hover:shadow-lg transition-all transform active:scale-95 w-full md:w-auto"
                  type="button"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
          <div className="lg:col-span-5 xl:col-span-4 flex flex-col gap-8">
            <div className="bg-white dark:bg-[#1a2634] rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
              <div className="p-6 md:p-8 flex flex-col gap-8">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">
                    Contact Details
                  </h3>
                  <div className="flex flex-col gap-6">
                    <div className="flex gap-4">
                      <div className="shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        <span className="material-symbols-outlined">
                          <IoStorefront />
                        </span>
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1">
                          Our Location
                        </h4>
                        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                          Plot No. 298, 3rd floor 10A ,
                          <br />
                          Gurugram, Haryana 122001,
                          <br />
                          India
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        <span className="material-symbols-outlined"><FaPhoneAlt /></span>
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1">
                          Phone
                        </h4>
                        <a
                          className="block text-slate-600 dark:text-slate-400 text-sm hover:text-primary transition-colors"
                          href="tel:+919800000000"
                        >
                          +91 8826883046
                        </a>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        <span className="material-symbols-outlined"><CiMail /></span>
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1">
                          Email
                        </h4>
                        <a
                          className="block text-slate-600 dark:text-slate-400 text-sm hover:text-primary transition-colors"
                          href="mailto:sales@comfortcastors.com"
                        >
                          sales@castorwheels.com
                        </a>
                        <a
                          className="block text-slate-600 dark:text-slate-400 text-sm hover:text-primary transition-colors"
                          href="mailto:info@comfortcastors.com"
                        >
                          info@castorwheels.com
                        </a>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        <span className="material-symbols-outlined"><MdOutlineSchedule /></span>
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1">
                          Opening Hours
                        </h4>
                        <p className="text-slate-600 dark:text-slate-400 text-sm">
                          Mon - Sat: 9:00 AM - 6:00 PM
                        </p>
                        <p className="text-slate-600 dark:text-slate-400 text-sm">
                          Sunday: Closed
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pt-6 border-t border-slate-100 dark:border-slate-700">
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-4">
                    Social Media
                  </h4>
                  <div className="flex gap-4">
                    <a
                      className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-primary hover:text-white transition-all"
                      href="#"
                    >
                      <svg
                        aria-hidden="true"
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          clip-rule="evenodd"
                          d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                          fill-rule="evenodd"
                        ></path>
                      </svg>
                    </a>
                    <a
                      className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-primary hover:text-white transition-all"
                      href="#"
                    >
                      <svg
                        aria-hidden="true"
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          clip-rule="evenodd"
                          d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772 4.902 4.902 0 011.772-1.153c.636-.247 1.363-.416 2.427-.465C9.673 2.013 10.03 2 12.48 2h-.165zm-3.77 4.933c-2.12 1.543-3.156 4.192-2.726 7.072.486 3.255 3.167 5.768 6.435 6.033 4.545.368 8.164-3.21 8.164-7.462 0-2.126-1.077-4.11-2.94-5.46-2.12-1.543-5.06-1.785-7.433-.618-.466.228-.795.534-.5.435zm2.747 1.838c.683-.398 1.48-.56 2.277-.478 2.043.21 3.654 1.854 3.824 3.902.164 1.98-.948 3.79-2.748 4.475-1.928.734-4.066-.3-4.823-2.16-.547-1.343-.27-2.873.712-3.996.223-.255.49-.49.758-.743z"
                          fill-rule="evenodd"
                        ></path>
                      </svg>
                    </a>
                    <a
                      className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-primary hover:text-white transition-all"
                      href="#"
                    >
                      <svg
                        aria-hidden="true"
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          clip-rule="evenodd"
                          d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                          fill-rule="evenodd"
                        ></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className="h-64 w-full bg-slate-200 dark:bg-slate-700 relative group overflow-hidden cursor-pointer rounded-b-xl">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  data-alt="Map showing location of factory in Gurgaon, India"
                  data-location="Gurgaon, India"
                  style={{
                    backgroundImage:"url('https://lh3.googleusercontent.com/aida-public/AB6AXuBVheQR2T6lPWXUXuvSdFa6qdP4AN_Cs7TG_snln7i5WmUPnUr6UP96hWrMybFrnMAyNZ_F7svR1U0-w16uZ9tAPPBM7CbQLVzh2NBQMVBcr6URCT1LeMIjyU8z_TCBp3KNeAh69zwVXtx7M6WnM4bf2qjEcg4xYnb919L1YVELza2nPiB2iZFFVQ-w_u5muI87QHAyEiIAhE52FYlRIfv2m_qUSKhxH1M-C3zvbzFcVxQ_Q6kVJrLkR982XVqINsGbGad6uup83CFD')"
                  }}
                //   style="
                //   background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuBVheQR2T6lPWXUXuvSdFa6qdP4AN_Cs7TG_snln7i5WmUPnUr6UP96hWrMybFrnMAyNZ_F7svR1U0-w16uZ9tAPPBM7CbQLVzh2NBQMVBcr6URCT1LeMIjyU8z_TCBp3KNeAh69zwVXtx7M6WnM4bf2qjEcg4xYnb919L1YVELza2nPiB2iZFFVQ-w_u5muI87QHAyEiIAhE52FYlRIfv2m_qUSKhxH1M-C3zvbzFcVxQ_Q6kVJrLkR982XVqINsGbGad6uup83CFD');
                // "
                ></div>
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                  <span className="bg-white/90 backdrop-blur-sm text-slate-900 px-4 py-2 rounded-full font-bold text-sm shadow-lg flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-sm">
                      <MdOpenInNew />
                    </span>
                    View on Google Maps
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
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
    </section>
  );
}
