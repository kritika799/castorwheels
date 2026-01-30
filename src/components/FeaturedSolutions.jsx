import { useState } from "react";
import { featuredProducts } from "../data/FeaturedProducts";
import SpecsModal from "../components/SpecsModal";

export default function FeaturedSolutions() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <section className="pb-18 ">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900">
            Featured Solutions
          </h2>
          <p className="mt-5 text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Browse technical specifications for our most popular models.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:gap-8 md:grid-cols-4">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="group rounded-2xl border border-slate-100 p-4 transition-all hover:border-blue-100 hover:shadow-lg hover:-translate-y-1 bg-white"
            >
              <div className="mb-4 aspect-square rounded-xl bg-slate-50 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <span className="text-[10px] font-bold uppercase text-blue-600">
                {product.category}
              </span>

              <h3 className="font-bold text-slate-900 truncate">
                {product.name}
              </h3>

              <div className="mt-2 flex gap-2 text-xs text-slate-500">
                <span className="bg-slate-100 px-2 py-0.5 rounded">
                  {product.load}
                </span>
                <span className="bg-slate-100 px-2 py-0.5 rounded">
                  {product.wheel}
                </span>
              </div>

              <button
                onClick={() => setSelectedProduct(product)}
                className="mt-4 w-full rounded-lg bg-slate-50 py-2 text-xs font-bold text-slate-700 hover:bg-primary hover:text-white transition-colors"
              >
                View Specs
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <SpecsModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </section>
  );
}
