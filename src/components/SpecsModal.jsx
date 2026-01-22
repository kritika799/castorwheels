// src/components/SpecsModal.jsx
export default function SpecsModal({ product, onClose }) {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
      <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-xl">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-lg font-bold text-slate-900">
            {product.name} Specifications
          </h3>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-700 text-xl"
          >
            ✕
          </button>
        </div>

        <div className="divide-y rounded-lg border">
          {Object.entries(product.specs).map(([key, value]) => (
            <div key={key} className="flex justify-between px-4 py-3 text-sm">
              <span className="text-slate-500">{key}</span>
              <span className="font-medium text-slate-900">{value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
