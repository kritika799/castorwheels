import { MdOutlinePrecisionManufacturing, MdSupportAgent } from "react-icons/md";
import { AiOutlineGlobal } from "react-icons/ai";
import { FaRecycle } from "react-icons/fa";
import clsx from "clsx"; // ← install if you don't have it: npm install clsx

export default function WhyChooseUs() {
  const features = [
    {
      icon: <MdOutlinePrecisionManufacturing className="text-4xl" />,
      baseColor: "blue",
      title: "Premium Quality Materials",
      description:
        "Steel, PU, Nylon & Rubber wheels built for life-long performance and heavy-duty reliability.",
    },
    {
      icon: <AiOutlineGlobal className="text-4xl" />,
      baseColor: "indigo",
      title: "Global Standards Certified",
      description:
        "Tested and compliant with international quality benchmarks and industrial norms.",
    },
    {
      icon: <MdSupportAgent className="text-4xl" />,
      baseColor: "amber",
      title: "Fast Delivery & Support",
      description:
        "Efficient pan-India logistics paired with responsive technical assistance.",
    },
    {
      icon: <FaRecycle className="text-4xl" />,
      baseColor: "teal",
      title: "Sustainable Manufacturing",
      description:
        "Eco-conscious processes using recyclable materials without compromising strength.",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20 lg:py-24">
      <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900">
          Why Professionals Choose Us
        </h2>
        <p className="mt-5 text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
          We combine engineering precision with thoughtful design to deliver mobility solutions that last.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
        {features.map((feature, idx) => {
          const color = feature.baseColor;

          return (
            <div
              key={idx}
              className={clsx(
                "group relative overflow-hidden rounded-2xl md:rounded-3xl",
                "bg-linear-to-br from-white via-slate-50",
                color === "blue" && "to-blue-50/30",
                color === "indigo" && "to-indigo-50/30",
                color === "amber" && "to-amber-50/30",
                color === "teal" && "to-teal-50/30",
                "border border-slate-200/80",
                "p-7 md:p-8 lg:p-10",
                "transition-all duration-400 ease-out",
                "hover:shadow-2xl",
                color === "blue" && "hover:shadow-blue-600/25",
                color === "indigo" && "hover:shadow-indigo-600/25",
                color === "amber" && "hover:shadow-amber-600/25",
                color === "teal" && "hover:shadow-teal-600/25",
                "hover:-translate-y-3 hover:scale-[1.04]",
                "hover:from-white",
                color === "blue" && "hover:via-blue-100/50 hover:to-blue-200/40",
                color === "indigo" && "hover:via-indigo-100/50 hover:to-indigo-200/40",
                color === "amber" && "hover:via-amber-100/50 hover:to-amber-200/40",
                color === "teal" && "hover:via-teal-100/50 hover:to-teal-200/40",
                "focus-within:shadow-xl focus-within:-translate-y-1",
                "focus-within:outline-none focus-within:ring-2",
                color === "blue" && "focus-within:ring-blue-500/40",
                color === "indigo" && "focus-within:ring-indigo-500/40",
                color === "amber" && "focus-within:ring-amber-500/40",
                color === "teal" && "focus-within:ring-teal-500/40"
              )}
            >
              {/* Shine sweep */}
              <div
                className={clsx(
                  "absolute inset-0 opacity-0 group-hover:opacity-100",
                  "bg-linear-to-r from-transparent via-white/20 to-transparent",
                  "-translate-x-full group-hover:translate-x-full",
                  "transition-transform duration-700 ease-out pointer-events-none"
                )}
              />

              {/* Icon */}
              <div
                className={clsx(
                  "mb-6 inline-flex h-16 w-16 md:h-20 md:w-20 items-center justify-center rounded-2xl",
                  "text-white shadow-xl transition-all duration-400",
                  "group-hover:scale-110 group-hover:rotate-6",
                  color === "blue" && "bg-linear-to-br from-blue-600 to-blue-700 shadow-blue-700/30 group-hover:shadow-blue-600/50",
                  color === "indigo" && "bg-linear-to-br from-indigo-600 to-indigo-700 shadow-indigo-700/30 group-hover:shadow-indigo-600/50",
                  color === "amber" && "bg-linear-to-br from-amber-600 to-amber-700 shadow-amber-700/30 group-hover:shadow-amber-600/50",
                  color === "teal" && "bg-linear-to-br from-teal-600 to-teal-700 shadow-teal-700/30 group-hover:shadow-teal-600/50"
                )}
              >
                {feature.icon}
              </div>

              <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-3 tracking-tight">
                {feature.title}
              </h3>

              <p className="text-slate-600 leading-relaxed text-[15px] md:text-base">
                {feature.description}
              </p>

              {/* Bottom accent */}
              <div
                className={clsx(
                  "absolute bottom-0 left-0 right-0 h-1.5",
                  "bg-linear-to-r from-transparent",
                  color === "blue" && "via-blue-600",
                  color === "indigo" && "via-indigo-600",
                  color === "amber" && "via-amber-600",
                  color === "teal" && "via-teal-600",
                  "to-transparent",
                  "opacity-40 group-hover:opacity-100 transition-opacity duration-400"
                )}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}