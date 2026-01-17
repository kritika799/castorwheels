import React from "react";
import { IoSearchSharp } from "react-icons/io5";
import {
  MdGridView,
  MdViewList,
  MdDonutLarge,
  MdCategory,
  MdOutlineChevronRight,
  MdExpandMore,
} from "react-icons/md";
import { IoMdFitness } from "react-icons/io";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function Shop() {
  return (
    <main className="flex flex-col min-h-screen">
      <div className="bg-white dark:bg-slate-900 border-b border-[#e7ecf3] dark:border-slate-800">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4">
            <div className="flex flex-wrap items-center gap-2 text-sm">
              <a
                className="text-[#4c6c9a] hover:text-primary dark:text-slate-400"
                href="#"
              >
                Home
              </a>
              <span className="material-symbols-outlined text-[16px] text-[#4c6c9a] dark:text-slate-500">
                <MdOutlineChevronRight />
              </span>
              <a
                className="text-[#4c6c9a] hover:text-primary dark:text-slate-400"
                href="#"
              >
                Products
              </a>
              <span className="material-symbols-outlined text-[16px] text-[#4c6c9a] dark:text-slate-500">
                <MdOutlineChevronRight />
              </span>
             
            </div>
            <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
              <div className="max-w-2xl">
                <h1 className="text-3xl font-black tracking-tight text-[#0d131b] dark:text-white sm:text-4xl">
                   Castor Catalog
                </h1>
                <p className="mt-2 text-base text-[#4c6c9a] dark:text-slate-400">
                  Browse our comprehensive range of high-quality castors
                  manufactured for Indian industries. Heavy duty, light duty,
                  and specialty wheels available.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto flex w-full max-w-7xl grow flex-col gap-8 px-4 py-8 sm:px-6 lg:flex-row lg:px-8">
        <aside className="w-full shrink-0 lg:w-72">
          <div className="sticky top-24 flex flex-col gap-6 rounded-xl bg-white dark:bg-slate-900 p-5 shadow-sm border border-slate-100 dark:border-slate-800">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800">
              <h3 className="font-bold text-[#0d131b] dark:text-white text-lg">
                Filters
              </h3>
              <button className="font-bold text-[#0d131b] dark:text-white text-lg">
                Reset
              </button>
            </div>
            <div className="space-y-3">
              <h4 className="text-sm font-bold uppercase tracking-wide text-[#4c6c9a] dark:text-slate-400">
                Category
              </h4>
              <div className="space-y-2">
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input
                    checked=""
                    className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary dark:border-slate-600 dark:bg-slate-800"
                    type="checkbox"
                  />
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300 group-hover:text-primary transition-colors">
                    heavy duty
                  </span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input
                    className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary dark:border-slate-600 dark:bg-slate-800"
                    type="checkbox"
                  />
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300 group-hover:text-primary transition-colors">
                    Light Duty
                  </span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input
                    className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary dark:border-slate-600 dark:bg-slate-800"
                    type="checkbox"
                  />
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300 group-hover:text-primary transition-colors">
                    Medical
                  </span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input
                    className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary dark:border-slate-600 dark:bg-slate-800"
                    type="checkbox"
                  />
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300 group-hover:text-primary transition-colors">
                    Furniture
                  </span>
                </label>
              </div>
            </div>
            <hr className="border-slate-100 dark:border-slate-800" />
            <div className="space-y-3">
              <h4 className="text-sm font-bold uppercase tracking-wide text-[#4c6c9a] dark:text-slate-400">
                Wheel Material
              </h4>
              <div className="space-y-2">
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input
                    checked=""
                    className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary dark:border-slate-600 dark:bg-slate-800"
                    type="checkbox"
                  />
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300 group-hover:text-primary transition-colors">
                    Polyurethane (PU)
                  </span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input
                    className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary dark:border-slate-600 dark:bg-slate-800"
                    type="checkbox"
                  />
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300 group-hover:text-primary transition-colors">
                    nylon
                  </span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input
                    className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary dark:border-slate-600 dark:bg-slate-800"
                    type="checkbox"
                  />
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300 group-hover:text-primary transition-colors">
                    Rubber
                  </span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input
                    className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary dark:border-slate-600 dark:bg-slate-800"
                    type="checkbox"
                  />
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300 group-hover:text-primary transition-colors">
                    Cast Iron
                  </span>
                </label>
              </div>
            </div>
            <hr className="border-slate-100 dark:border-slate-800" />
            <div className="space-y-3">
              <h4 className="text-sm font-bold uppercase tracking-wide text-[#4c6c9a] dark:text-slate-400">
                Load Capacity (kg)
              </h4>
              <div className="flex items-center gap-4">
                <input
                  className="w-full rounded-md border-gray-300 bg-slate-50 p-2 text-sm focus:border-primary focus:ring-primary dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                  placeholder="Min"
                  type="number"
                />
                <span className="text-slate-400">-</span>
                <input
                  className="w-full rounded-md border-gray-300 bg-slate-50 p-2 text-sm focus:border-primary focus:ring-primary dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                  placeholder="Max"
                  type="number"
                />
              </div>
            </div>
          </div>
        </aside>
        <div className="flex flex-1 flex-col gap-6">
          <div className="flex flex-col gap-4">
            <div className="relative w-full">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-[#4c6c9a]">
                <span className="material-symbols-outlined text-[24px]">
                  <IoSearchSharp />
                </span>
              </div>
              <input
                className="block w-full rounded-xl border-none bg-white py-3 pl-10 pr-3 text-base text-[#0d131b] placeholder:text-[#4c6c9a] shadow-sm ring-1 ring-inset ring-slate-200 focus:ring-2 focus:ring-primary dark:bg-slate-900 dark:text-white dark:ring-slate-800 dark:placeholder:text-slate-500"
                placeholder="Search by model number, material, or load capacity..."
                type="text"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              <button className="inline-flex items-center gap-1.5 rounded-full bg-primary px-3 py-1.5 text-sm font-medium text-white bg-blue-700">
                All Products
              </button>
              <button className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-sm font-medium text-slate-700 shadow-sm ring-1 ring-inset ring-slate-200 hover:bg-slate-50 dark:bg-slate-900 dark:text-slate-300 dark:ring-slate-700 dark:hover:bg-slate-800">
                Swivel
                <span className="material-symbols-outlined text-[16px]">
                  <MdExpandMore />
                </span>
              </button>
              <button className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-sm font-medium text-slate-700 shadow-sm ring-1 ring-inset ring-slate-200 hover:bg-slate-50 dark:bg-slate-900 dark:text-slate-300 dark:ring-slate-700 dark:hover:bg-slate-800">
                Fixed
                <span className="material-symbols-outlined text-[16px]">
                  <MdExpandMore />
                </span>
              </button>
              <button className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-sm font-medium text-slate-700 shadow-sm ring-1 ring-inset ring-slate-200 hover:bg-slate-50 dark:bg-slate-900 dark:text-slate-300 dark:ring-slate-700 dark:hover:bg-slate-800">
                Braked
                <span className="material-symbols-outlined text-[16px]">
                  <MdExpandMore />
                </span>
              </button>
              <button className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-sm font-medium text-slate-700 shadow-sm ring-1 ring-inset ring-slate-200 hover:bg-slate-50 dark:bg-slate-900 dark:text-slate-300 dark:ring-slate-700 dark:hover:bg-slate-800">
                Anti-Static
              </button>
            </div>
          </div>
          <div className="flex flex-col justify-between gap-4 border-b border-slate-200 pb-4 dark:border-slate-800 sm:flex-row sm:items-center">
            <p className="text-sm font-medium text-[#4c6c9a] dark:text-slate-400">
              Showing
              <span className="font-bold  ">1-9</span>
              of
              <span className="font-bold text-[#0d131b]">156</span>
              products
            </p>
            <div className="flex items-center gap-3">
              <label className="text-sm text-[#4c6c9a] dark:text-slate-400">
                Sort by:
              </label>
              <div className="relative">
                <select className="appearance-none rounded-lg border-none bg-white py-1.5 pl-3 pr-8 text-sm font-medium text-[#0d131b] shadow-sm ring-1 ring-inset ring-slate-200 focus:ring-2 focus:ring-primary dark:bg-slate-900 dark:text-white dark:ring-slate-700">
                  <option>Popularity</option>
                  <option>Name: A to Z</option>
                  <option>Name: Z to A</option>
                  <option>Newest Arrivals</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-slate-500">
                  <span className="material-symbols-outlined text-[18px]">
                    <MdExpandMore />
                  </span>
                </div>
              </div>
              <div className="flex rounded-lg bg-slate-100 p-1 ">
                <button className="rounded-m p-1 text-primary shadow-sm dark:bg-slate-700 dark:text-white">
                  <span className="material-symbols-outlined text-[20px] block">
                    <MdGridView />
                  </span>
                </button>
                <button className="rounded-md p-1  hover:text-[#0d131b]">
                  <span className="material-symbols-outlined text-[20px] block">
                    <MdViewList />
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
            <div className="group relative flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white transition-all hover:shadow-lg dark:border-slate-800 dark:bg-slate-900">
              <div className="absolute left-3 top-3 z-10 flex flex-col gap-1">
                <span className="inline-block rounded-md bg-primary/90 px-2 py-1 text-xs font-bold uppercase text-white backdrop-blur-sm">
                  Top Seller
                </span>
              </div>
              <div className="relative aspect-square overflow-hidden bg-slate-100">
                <img
                  alt="CastorWheels"
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  data-alt="Close up of an industrial heavy duty castorwheels on concrete"
                  src="src/components/img/medium dutty fixed nylon 1.jpg"
                />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <div className="mb-2 text-xs font-medium text-slate-500 dark:text-slate-400">
                  CC-HD-100-PU
                </div>
                <h3 className="mb-2 text-lg font-bold text-[#0d131b] dark:text-white group-hover:text-primary transition-colors">
                  Heavy Duty Swivel Castor
                </h3>
                <div className="mb-4 flex flex-wrap gap-2 text-sm text-slate-600 dark:text-slate-300">
                  <div className="flex items-center gap-1 rounded bg-slate-100 px-2 py-1 dark:bg-slate-800">
                    <span className="material-symbols-outlined text-[16px] text-[#4c6c9a]">
                      <IoMdFitness />
                    </span>
                    <span>300kg</span>
                  </div>
                  <div className="flex items-center gap-1 rounded bg-slate-100 px-2 py-1 dark:bg-slate-800">
                    <span className="material-symbols-outlined text-[16px] text-[#4c6c9a]">
                      <MdDonutLarge />
                    </span>
                    <span>100mm</span>
                  </div>
                  <div className="flex items-center gap-1 rounded bg-slate-100 px-2 py-1 dark:bg-slate-800">
                    <span className="material-symbols-outlined text-[16px] text-[#4c6c9a]">
                      <MdCategory />
                    </span>
                    <span>PU</span>
                  </div>
                </div>
                <div className="mt-auto flex items-center justify-between gap-3 pt-3 border-t border-slate-100 dark:border-slate-800">
                  <button className="flex-1 rounded-lg border border-primary text-primary  px-4 py-2.5 font-bold ">
                    View Details
                  </button>
                  <button className="flex-1 rounded-lg bg-primary px-4 py-2.5 text-sm font-bold text-white transition-color bg-blue-700">
                    Inquire
                  </button>
                </div>
              </div>
            </div>
            <div className="group relative flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white transition-all hover:shadow-lg dark:border-slate-800 dark:bg-slate-900">
              <div className="relative aspect-square overflow-hidden bg-slate-100">
                <img
                  alt="Red PU Castor"
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  data-alt="Industrial red polyurethane castorwheels close up"
                  src="src/components/img/medium dutty fixed nylon.jpg"
                />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <div className="mb-2 text-xs font-medium text-slate-500 dark:text-slate-400">
                  CC-MD-125-NY
                </div>
                <h3 className="mb-2 text-lg font-bold text-[#0d131b] dark:text-white group-hover:text-primary transition-colors">
                  Medium Duty Fixed Nylon
                </h3>
                <div className="mb-4 flex flex-wrap gap-2 text-sm text-slate-600 dark:text-slate-300">
                  <div className="flex items-center gap-1 rounded bg-slate-100 px-2 py-1 dark:bg-slate-800">
                    <span className="material-symbols-outlined text-[16px] text-[#4c6c9a]">
                      <IoMdFitness />
                    </span>
                    <span>150kg</span>
                  </div>
                  <div className="flex items-center gap-1 rounded bg-slate-100 px-2 py-1 dark:bg-slate-800">
                    <span className="material-symbols-outlined text-[16px] text-[#4c6c9a]">
                      <MdDonutLarge />
                    </span>
                    <span>125mm</span>
                  </div>
                  <div className="flex items-center gap-1 rounded bg-slate-100 px-2 py-1 dark:bg-slate-800">
                    <span className="material-symbols-outlined text-[16px] text-[#4c6c9a]">
                      <MdCategory />
                    </span>
                    <span>Nylon</span>
                  </div>
                </div>
                <div className="mt-auto flex items-center justify-between gap-3 pt-3 border- border-slate-100 border-blue">
                  <button className="flex-1 rounded-lg border border-primary text-primary  px-4 py-2.5 font-bold">
                    View Details
                  </button>
                  <button className="flex-1 rounded-lg bg-primary px-4 py-2.5 text-sm font-bold text-white transition-color bg-blue-700">
                    Inquire
                  </button>
                </div>
              </div>
            </div>
            <div className="group relative flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white transition-all hover:shadow-lg dark:border-slate-800 dark:bg-slate-900">
              <div className="absolute left-3 top-3 z-10 flex flex-col gap-1">
                <span className="inline-block rounded-md bg-green-600/90 px-2 py-1 text-xs font-bold uppercase text-white backdrop-blur-sm">
                  New
                </span>
              </div>
              <div className="relative aspect-square overflow-hidden bg-slate-100">
                <img
                  alt="Furniture Castor"
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  data-alt="Small furniture castorwheels on a wooden surface"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC6qL92CK6SFplgwABdjxfthZ90KXM9zSpqrqhZhjtb4zmlKJStDSAEaSnXXvdir_6mBFcTXMeHgTm3aDZCbhQ9UdP3jekexT-AX5V7HaeFGoD7gzQZE2LInIr6V5CS23vfmzVHuZT_vGYH8pgkE0d3pUEBcBbvW_jY6euE5LBZGTIx-EDaHJyxCF1obMvIuH19EahqxSBab_s2AJg6wLO1heUBOT2YIUm5c_JnNusr-leoL8lg7XQrwIKyeGW0Qg7Ud1wHeH8gsJTq"
                />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <div className="mb-2 text-xs font-medium text-slate-500 dark:text-slate-400">
                  CC-LD-050-RB
                </div>
                <h3 className="mb-2 text-lg font-bold text-[#0d131b] dark:text-white group-hover:text-primary transition-colors">
                  Rubber Twin Wheel Castor
                </h3>
                <div className="mb-4 flex flex-wrap gap-2 text-sm text-slate-600 dark:text-slate-300">
                  <div className="flex items-center gap-1 rounded bg-slate-100 px-2 py-1 dark:bg-slate-800">
                    <span className="material-symbols-outlined text-[16px] text-[#4c6c9a]">
                      <IoMdFitness />
                    </span>
                    <span>50kg</span>
                  </div>
                  <div className="flex items-center gap-1 rounded bg-slate-100 px-2 py-1 dark:bg-slate-800">
                    <span className="material-symbols-outlined text-[16px] text-[#4c6c9a]">
                      <MdDonutLarge />
                    </span>
                    <span>50mm</span>
                  </div>
                  <div className="flex items-center gap-1 rounded bg-slate-100 px-2 py-1 dark:bg-slate-800">
                    <span className="material-symbols-outlined text-[16px] text-[#4c6c9a]">
                      <MdCategory />
                    </span>
                    <span>Rubber</span>
                  </div>
                </div>
                <div className="mt-auto flex items-center justify-between gap-3 pt-3 border-t border-slate-100 dark:border-slate-800">
                  <button className="flex-1 rounded-lg border border-primary text-primary  px-4 py-2.5 font-bold">
                    View Details
                  </button>
                  <button className="flex-1 rounded-lg bg-primary px-4 py-2.5 text-sm font-bold text-white transition-color bg-blue-700">
                    Inquire
                  </button>
                </div>
              </div>
            </div>
            <div className="group relative flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white transition-all hover:shadow-lg dark:border-slate-800 dark:bg-slate-900">
              <div className="relative aspect-square overflow-hidden bg-slate-100">
                <img
                  alt="Medical Castor"
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  data-alt="Shiny metallic castor wheel for medical equipment"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCM0vRQ6Uy3LsVfBcbdiBQmx6oq83RkOzwGT7rcnlOzMqEOGRKEFBWhAF8c42npVKHt_nFerPsYd3La8WK0rDpmISyTYxB1cHuZFupKALh7uYtgh-Q5Gp3WfQNI2fquYhr7ut0tpMRz3QLyiC_Z4qV6Wgb8U1ckisX-z0shL2CnquEHbP8XfaROo4QDE6m3gmYIbS1wbxnfTgsAomVyfcVh6trs15H8t1y8hZve9FzpnvKRZDhtmGsUCzFIZqI87mXMu5YJpi8gCuGR"
                />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <div className="mb-2 text-xs font-medium text-slate-500 dark:text-slate-400">
                  CC-MED-075-TPR
                </div>
                <h3 className="mb-2 text-lg font-bold text-[#0d131b] dark:text-white group-hover:text-primary transition-colors">
                  Medical Grade Silent Castor
                </h3>
                <div className="mb-4 flex flex-wrap gap-2 text-sm text-slate-600 dark:text-slate-300">
                  <div className="flex items-center gap-1 rounded bg-slate-100 px-2 py-1 dark:bg-slate-800">
                    <span className="material-symbols-outlined text-[16px] text-[#4c6c9a]">
                      <IoMdFitness />
                    </span>
                    <span>80kg</span>
                  </div>
                  <div className="flex items-center gap-1 rounded bg-slate-100 px-2 py-1 dark:bg-slate-800">
                    <span className="material-symbols-outlined text-[16px] text-[#4c6c9a]">
                      <MdDonutLarge />
                    </span>
                    <span>75mm</span>
                  </div>
                  <div className="flex items-center gap-1 rounded bg-slate-100 px-2 py-1 dark:bg-slate-800">
                    <span className="material-symbols-outlined text-[16px] text-[#4c6c9a]">
                      <MdCategory />
                    </span>
                    <span>TPR</span>
                  </div>
                </div>
                <div className="mt-auto flex items-center justify-between gap-3 pt-3 border-t border-slate-100 dark:border-slate-800">
                  <button className="flex-1 rounded-lg border border-primary text-primary  px-4 py-2.5 font-bold">
                    View Details
                  </button>
                  <button className="flex-1 rounded-lg bg-primary px-4 py-2.5 text-sm font-bold text-white transition-color bg-blue-700">
                    Inquire
                  </button>
                </div>
              </div>
            </div>
            <div className="group relative flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white transition-all hover:shadow-lg dark:border-slate-800 dark:bg-slate-900">
              <div className="relative aspect-square overflow-hidden bg-slate-100">
                <img
                  alt="Cast Iron Wheel"
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  data-alt="Heavy duty cast iron industrial wheel on pallet"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAw7-s_FwQWl6GQ3m6C_IwMoy33pBJPEgug-H0G1Ec6SAJ2b_uKTfaMTRTMaoKMW_WZpC_Ljgct_pqXMH_-j_Yu010dba9bJfkbwZfdk7OO4fPYuNuuQH7mtGLWiEOCV3iRY385DBXQ_-ObrZ6pguXB-5qA8euGtyfvbmNv1ylBcCwFbamxmfrsqNfaruXTzz6_sfrr39R90H4BkLcvs3hCkhNnFOXaf0SBpzTSSW2EQKjPKA9uyKbDwDRbTwRIpJC18hJ9XfS7JUcm"
                />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <div className="mb-2 text-xs font-medium text-slate-500 dark:text-slate-400">
                  CC-EHD-200-CI
                </div>
                <h3 className="mb-2 text-lg font-bold text-[#0d131b] dark:text-white group-hover:text-primary transition-colors">
                  Extra Heavy Cast Iron
                </h3>
                <div className="mb-4 flex flex-wrap gap-2 text-sm text-slate-600 dark:text-slate-300">
                  <div className="flex items-center gap-1 rounded bg-slate-100 px-2 py-1 dark:bg-slate-800">
                    <span className="material-symbols-outlined text-[16px] text-[#4c6c9a]">
                      <IoMdFitness />
                    </span>
                    <span>800kg</span>
                  </div>
                  <div className="flex items-center gap-1 rounded bg-slate-100 px-2 py-1 dark:bg-slate-800">
                    <span className="material-symbols-outlined text-[16px] text-[#4c6c9a]">
                      <MdDonutLarge />
                    </span>
                    <span>200mm</span>
                  </div>
                  <div className="flex items-center gap-1 rounded bg-slate-100 px-2 py-1 dark:bg-slate-800">
                    <span className="material-symbols-outlined text-[16px] text-[#4c6c9a]">
                      <MdCategory />
                    </span>
                    <span>Iron</span>
                  </div>
                </div>
                <div className="mt-auto flex items-center justify-between gap-3 pt-3 border-t border-slate-100 dark:border-slate-800">
                  <button className="flex-1 rounded-lg border border-primary text-primary  px-4 py-2.5 font-bold">
                    View Details
                  </button>
                  <button className="flex-1 rounded-lg bg-primary px-4 py-2.5 text-sm font-bold text-white transition-color bg-blue-700">
                    Inquire
                  </button>
                </div>
              </div>
            </div>
            <div className="group relative flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white transition-all hover:shadow-lg dark:border-slate-800 dark:bg-slate-900">
              <div className="relative aspect-square overflow-hidden bg-slate-100">
                <img
                  alt="Elastic Rubber Wheel"
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  data-alt="Blue elastic rubber castor wheel on white background"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUeY0uqfXZpyMsKZ3qA3p0D8858eqlrnxbtjOpatsg-yP67yoOzO2h1EmX9YNjX3rRofOf0fr0aXZfFA5Gyivpe2CeTmlZNGAfoe0L8_6-eBvnVGqVJ0PwIDbC8om5X89J2qnWaQQgQsjcxRqpbmHhA0_Z0wN4CsB856vdqlJzqSHNi0rVS08oXTU0L9hyCBiIhbxtkv6e7OiHc12jAw0-EHiX_ZmYvL2B4GKOluGHyr-47OTXo5QhdWGg_-5XYyGPgHr5SobZZ3ky"
                />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <div className="mb-2 text-xs font-medium text-slate-500 dark:text-slate-400">
                  CC-HD-125-ER
                </div>
                <h3 className="mb-2 text-lg font-bold text-[#0d131b] dark:text-white group-hover:text-primary transition-colors">
                  Elastic Blue Rubber Swivel
                </h3>
                <div className="mb-4 flex flex-wrap gap-2 text-sm text-slate-600 dark:text-slate-300">
                  <div className="flex items-center gap-1 rounded bg-slate-100 px-2 py-1 dark:bg-slate-800">
                    <span className="material-symbols-outlined text-[16px] text-[#4c6c9a]">
                      <IoMdFitness />
                    </span>
                    <span>250kg</span>
                  </div>
                  <div className="flex items-center gap-1 rounded bg-slate-100 px-2 py-1 dark:bg-slate-800">
                    <span className="material-symbols-outlined text-[16px] text-[#4c6c9a]">
                      <MdDonutLarge />
                    </span>
                    <span>125mm</span>
                  </div>
                  <div className="flex items-center gap-1 rounded bg-slate-100 px-2 py-1 dark:bg-slate-800">
                    <span className="material-symbols-outlined text-[16px] text-[#4c6c9a]">
                      <MdCategory />
                    </span>
                    <span>Rubber</span>
                  </div>
                </div>
                <div className="mt-auto flex items-center justify-between gap-3 pt-3 border-white">
                  <button className="flex-1 rounded-lg border border-primary text-primary  px-4 py-2.5 font-bold">
                    View Details
                  </button>
                  <button className="flex-1 rounded-lg bg-primary px-4 py-2.5 text-sm font-bold text-white transition-color bg-blue-700">
                    Inquire
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 flex items-center justify-center gap-2">
            <button className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-500 hover:bg-slate-50 hover:text-[#0d131b] dark:border-slate-700 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white">
              <span className="material-symbols-outlined text-[20px]">
                <FaChevronLeft />
              </span>
            </button>
            <button className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-[#0d131b] dark:border-slate-700 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white">
              1
            </button>
            <button className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-[#0d131b] dark:border-slate-700 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white">
              2
            </button>
            <button className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-[#0d131b] dark:border-slate-700 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white">
              3
            </button>
            <span className="flex h-10 w-10 items-center justify-center text-slate-400">
              ...
            </span>
            <button className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-[#0d131b] dark:border-slate-700 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white">
              12
            </button>
            <button className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-500 hover:bg-slate-50 hover:text-[#0d131b] dark:border-slate-700 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white">
              <span className="material-symbols-outlined text-[20px]">
                <FaChevronRight />
              </span>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
