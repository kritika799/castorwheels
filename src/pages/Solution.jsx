import React, { useState, useMemo } from "react";
import { IoSearchSharp } from "react-icons/io5";
import {
  MdGridView,
  MdViewList,
  MdDonutLarge,
  MdCategory,
  MdOutlineChevronRight,
  MdExpandMore,
} from "react-icons/md";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { IoMdFitness } from "react-icons/io";
import { useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";
import products from "../data/product";

// Sample data (in real app → come from API / database)
const allProducts = [
  {
    id: 1,
    code: "CC-HD-100-PU",
    name: "Heavy Duty Swivel Castor",
    slug: "5-inch-heavy-duty-swivel-castor-with-brake",

    category: "heavy duty",
    material: "Polyurethane (PU)",
    load: 300,
    wheelDia: 100,
    type: "Swivel",
    badge: "Top Seller",
    image: "/img/medium dutty fixed nylon 1.jpg",
  },
  {
    id: 2,
    code: "CC-MD-125-NY",
    name: "Medium Duty Fixed Nylon",
    category: "Light Duty",
    material: "nylon",
    load: 150,
    wheelDia: 125,
    type: "Fixed",
    image: "/img/medium dutty fixed nylon.jpg",
  },
  {
    id: 3,
    code: "CC-LD-050-RB",
    name: "Rubber Twin Wheel Castor",
    category: "Furniture",
    material: "Rubber",
    load: 50,
    wheelDia: 50,
    type: "Swivel",
    badge: "New",
    image: "https://images.unsplash.com/photo-1588286840104-8953a8214a8c?w=800",
  },
  {
    id: 4,
    code: "CC-MED-075-TPR",
    name: "Medical Grade Silent Castor",
    category: "Medical",
    material: "TPR",
    load: 80,
    wheelDia: 75,
    type: "Swivel",
    image: "https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?w=800",
  },
  {
    id: 5,
    code: "CC-EHD-200-CI",
    name: "Extra Heavy Cast Iron",
    category: "heavy duty",
    material: "Cast Iron",
    load: 800,
    wheelDia: 200,
    type: "Fixed",
    image: "https://images.unsplash.com/photo-1581092160560-3c6a6e9e6b5?w=800",
  },
  {
    id: 6,
    code: "CC-HD-125-ER",
    name: "Elastic Blue Rubber Swivel",
    category: "heavy duty",
    material: "Rubber",
    load: 250,
    wheelDia: 125,
    type: "Swivel",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
  },
  // Add more items here for realistic testing...
];

// ────────────────────────────────────────────────
export default function Shop() {
  const [searchParams] = useSearchParams();
  const intialSearch = searchParams.get("q") || "";
  const [search, setSearch] = useState(intialSearch);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedMaterials, setSelectedMaterials] = useState([]);
  const [loadRange, setLoadRange] = useState({ min: "", max: "" });
  const [viewMode, setViewMode] = useState("grid");
  const [sortBy, setSortBy] = useState("popularity");
  const [currentPage, setCurrentPage] = useState(1);

  const ITEMS_PER_PAGE = 9;

  const resetFilters = () => {
    setSelectedCategories([]);
    setSelectedMaterials([]);
    setLoadRange({ min: "", max: "" });
    setSearch("");
    setCurrentPage(1);
  };

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Search
    if (search.trim()) {
      const term = search.toLowerCase();
      result = result.filter(
        (p) =>
          p.code.toLowerCase().includes(term) ||
          p.name.toLowerCase().includes(term),
      );
    }

    // Categories
    if (selectedCategories.length > 0) {
      result = result.filter((p) => selectedCategories.includes(p.category));
    }

    // Materials
    if (selectedMaterials.length > 0) {
      result = result.filter((p) => selectedMaterials.includes(p.material));
    }

    // Load range
    const minLoad = loadRange.min ? Number(loadRange.min) : -Infinity;
    const maxLoad = loadRange.max ? Number(loadRange.max) : Infinity;
    if (minLoad !== -Infinity || maxLoad !== Infinity) {
      result = result.filter((p) => p.load >= minLoad && p.load <= maxLoad);
    }

    // Sorting
    if (sortBy === "name-asc") {
      result = [...result].sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === "name-desc") {
      result = [...result].sort((a, b) => b.name.localeCompare(a.name));
    }
    // popularity / newest → extend later if needed

    return result;
  }, [search, selectedCategories, selectedMaterials, loadRange, sortBy]);

  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE,
  );

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <main className="flex flex-col min-h-screen bg-gray-50 dark:bg-slate-950">
      {/* Header */}
      <div className="bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-slate-800">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4">
            <nav className="flex items-center gap-2 text-sm text-gray-500 dark:text-slate-400">
              <a
                href="#"
                className="hover:text-blue-600 dark:hover:text-blue-400"
              >
                Home
              </a>
              <MdOutlineChevronRight className="text-lg" />
              <span className="font-medium text-gray-900 dark:text-white">
                Castor Catalog
              </span>
            </nav>

            <div>
              <h1 className="text-3xl font-black tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                Castor Catalog
              </h1>
              <p className="mt-2 text-base text-gray-600 dark:text-slate-400">
                High-quality castors for Indian industries heavy duty, light
                duty & specialty.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto w-full max-w-7xl grow px-4 py-8 sm:px-6 lg:flex lg:gap-8 lg:px-8 ">
        {/* Filters Sidebar */}
        <aside className="w-full lg:w-72 lg:shrink-0 md:block hidden">
          <div className="sticky top-24 rounded-xl bg-white dark:bg-slate-900 p-6 shadow border border-gray-200 dark:border-slate-800">
            <div className="flex items-center justify-between pb-4 border-b dark:border-slate-700">
              <h3 className="font-bold text-lg text-gray-900 dark:text-white">
                Filters
              </h3>
              <button
                onClick={resetFilters}
                className="text-sm font-medium text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
              >
                Reset
              </button>
            </div>

            {/* Category */}
            <div className="mt-5">
              <h4 className="text-sm font-bold uppercase tracking-wide text-gray-500 dark:text-slate-400 mb-3">
                Category
              </h4>
              {["heavy duty", "Light Duty", "Medical", "Furniture"].map(
                (cat) => (
                  <label
                    key={cat}
                    className="flex items-center gap-3 py-1 cursor-pointer group"
                  >
                    <input
                      type="checkbox"
                      checked={selectedCategories.includes(cat)}
                      onChange={() =>
                        setSelectedCategories((prev) =>
                          prev.includes(cat)
                            ? prev.filter((c) => c !== cat)
                            : [...prev, cat],
                        )
                      }
                      className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 dark:bg-slate-800 dark:border-slate-600"
                    />
                    <span className="text-sm text-gray-700 dark:text-slate-300 group-hover:text-blue-600">
                      {cat}
                    </span>
                  </label>
                ),
              )}
            </div>

            <hr className="my-6 border-gray-200 dark:border-slate-700" />

            {/* Material */}
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wide text-gray-500 dark:text-slate-400 mb-3">
                Wheel Material
              </h4>
              {["Polyurethane (PU)", "nylon", "Rubber", "Cast Iron", "TPR"].map(
                (mat) => (
                  <label
                    key={mat}
                    className="flex items-center gap-3 py-1 cursor-pointer group"
                  >
                    <input
                      type="checkbox"
                      checked={selectedMaterials.includes(mat)}
                      onChange={() =>
                        setSelectedMaterials((prev) =>
                          prev.includes(mat)
                            ? prev.filter((m) => m !== mat)
                            : [...prev, mat],
                        )
                      }
                      className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 dark:bg-slate-800 dark:border-slate-600"
                    />
                    <span className="text-sm text-gray-700 dark:text-slate-300 group-hover:text-blue-600">
                      {mat}
                    </span>
                  </label>
                ),
              )}
            </div>

            <hr className="my-6 border-gray-200 dark:border-slate-700" />

            {/* Load */}
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wide text-gray-500 dark:text-slate-400 mb-3">
                Load Capacity (kg)
              </h4>
              <div className="flex items-center gap-4">
                <input
                  type="number"
                  placeholder="Min"
                  value={loadRange.min}
                  onChange={(e) =>
                    setLoadRange((p) => ({ ...p, min: e.target.value }))
                  }
                  className="w-full rounded-md border-gray-300 bg-gray-50 p-2.5 text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-800 dark:border-slate-600 dark:text-white"
                />
                <span className="text-gray-400">-</span>
                <input
                  type="number"
                  placeholder="Max"
                  value={loadRange.max}
                  onChange={(e) =>
                    setLoadRange((p) => ({ ...p, max: e.target.value }))
                  }
                  className="w-full rounded-md border-gray-300 bg-gray-50 p-2.5 text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-800 dark:border-slate-600 dark:text-white"
                />
              </div>
            </div>
          </div>
        </aside>

        {/* Products */}
        <div className="flex-1 flex flex-col gap-6">
          {/* Search + quick tags */}
          <div className="flex flex-col gap-4">
            <div className="relative">
              <IoSearchSharp className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xl pointer-events-none" />
              <input
                type="text"
                placeholder="Search model, name, material..."
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full rounded-xl border-gray-200 bg-white pl-10 py-3 text-gray-900 placeholder-gray-500 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-slate-700 dark:text-white dark:placeholder-slate-500"
              />
            </div>

            <div className="flex flex-wrap gap-2 md:block hidden">
              <button className="rounded-full bg-blue-700 px-4 py-1.5 text-sm font-medium text-white">
                All
              </button>
              {["Swivel", "Fixed", "Braked", "Anti-Static"].map((t) => (
                <button
                  key={t}
                  className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-sm font-medium text-gray-700 shadow-sm ring-1 ring-gray-200 hover:bg-gray-50 dark:bg-slate-800 dark:text-slate-300 dark:ring-slate-700"
                >
                  {t} <MdExpandMore />
                </button>
              ))}
            </div>
          </div>

          {/* Showing + sort + view */}
          <div className="flex flex-col gap-4 border-b pb-5 dark:border-slate-700 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-gray-600 dark:text-slate-400">
              Showing{" "}
              <span className="font-bold text-gray-900 dark:text-white">
                {paginatedProducts.length}
              </span>{" "}
              of{" "}
              <span className="font-bold text-gray-900 dark:text-white">
                {filteredProducts.length}
              </span>{" "}
              products
            </p>

            <div className="flex items-center gap-4">
              <label className="text-sm text-gray-600 dark:text-slate-400">
                Sort:
              </label>
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none rounded-lg bg-white py-2 pl-3 pr-9 text-sm font-medium text-gray-900 shadow-sm ring-1 ring-gray-200 focus:ring-blue-500 dark:bg-slate-900 dark:text-white dark:ring-slate-700"
                >
                  <option value="popularity">Popularity</option>
                  <option value="name-asc">Name: A → Z</option>
                  <option value="name-desc">Name: Z → A</option>
                </select>
                <MdExpandMore className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
              </div>

              <div className="flex rounded-lg bg-gray-100 p-1 dark:bg-slate-800 md:block hidden">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`rounded p-2 ${viewMode === "grid" ? "bg-white shadow dark:bg-slate-700" : ""}`}
                >
                  <MdGridView className="text-xl" />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`rounded p-2 ${viewMode === "list" ? "bg-white shadow dark:bg-slate-700" : ""}`}
                >
                  <MdViewList className="text-xl" />
                </button>
              </div>
            </div>
          </div>

          {/* Products display */}
          <div
            className={
              viewMode === "grid"
                ? "grid gap-6 sm:grid-cols-2 xl:grid-cols-3"
                : "flex flex-col gap-5"
            }
          >
            {paginatedProducts.length === 0 ? (
              <p className="col-span-full py-12 text-center text-gray-500 dark:text-slate-400">
                No matching products found.
              </p>
            ) : (
              paginatedProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  viewMode={viewMode}
                />
              ))
            )}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-10 flex items-center justify-center gap-2">
              <button
                onClick={() => goToPage(currentPage - 1)}
                disabled={currentPage === 1}
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 disabled:opacity-40 dark:border-slate-700 dark:text-slate-400 dark:hover:bg-slate-800"
              >
                <FaChevronLeft />
              </button>

              {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                let page = i + 1;
                if (currentPage > 3) page += currentPage - 3;
                if (page > totalPages) return null;
                return (
                  <button
                    key={page}
                    onClick={() => goToPage(page)}
                    className={`flex h-10 w-10 items-center justify-center rounded-lg border text-sm font-medium ${
                      page === currentPage
                        ? "border-blue-600 bg-blue-50 text-blue-600 dark:bg-blue-950 dark:border-blue-500 dark:text-blue-400"
                        : "border-gray-200 text-gray-600 hover:bg-gray-50 dark:border-slate-700 dark:text-slate-400 dark:hover:bg-slate-800"
                    }`}
                  >
                    {page}
                  </button>
                );
              })}

              {totalPages > 5 && currentPage < totalPages - 2 && (
                <span className="flex h-10 w-10 items-center justify-center text-gray-400">
                  ...
                </span>
              )}

              <button
                onClick={() => goToPage(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 disabled:opacity-40 dark:border-slate-700 dark:text-slate-400 dark:hover:bg-slate-800"
              >
                <FaChevronRight />
              </button>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

// ────────────────────────────────────────────────
function ProductCard({ product, viewMode }) {
  const isList = viewMode === "list";

  return (
    <div
      className={`group relative flex overflow-hidden rounded-xl border border-gray-200 bg-white transition-all hover:shadow-lg dark:border-slate-800 dark:bg-slate-900 ${
        isList ? "flex-row items-center gap-6 p-4" : "flex-col"
      }`}
    >
      {product.badge && (
        <div className="absolute left-3 top-3 z-10">
          <span
            className={`inline-block rounded-md px-2.5 py-1 text-xs font-bold uppercase text-white backdrop-blur-sm ${
              product.badge === "Top Seller"
                ? "bg-blue-600/90"
                : "bg-green-600/90"
            }`}
          >
            {product.badge}
          </span>
        </div>
      )}

      <div
        className={`relative overflow-hidden bg-gray-100 dark:bg-slate-800 ${
          isList ? "h-32 w-32 shrink-0" : "aspect-square"
        }`}
      >
        <img
          src={product.image}
          alt={product.name}
          className={`h-full w-full object-cover transition-transform duration-300 group-hover:scale-105 ${
            isList ? "object-contain p-2" : ""
          }`}
        />
      </div>

      <div className={`flex flex-1 flex-col p-5 ${isList ? "p-0 pr-5" : ""}`}>
        <div className="text-xs font-medium text-gray-500 dark:text-slate-400">
          {product.code}
        </div>

        <h3
          className={`font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors ${
            isList ? "text-xl mt-1" : "text-lg mt-2 mb-2"
          }`}
        >
          {product.name}
        </h3>

        <div
          className={`mb-4 flex flex-wrap gap-2 text-sm ${isList ? "mt-2" : ""}`}
        >
          <div className="flex items-center gap-1.5 rounded bg-gray-100 px-2.5 py-1 dark:bg-slate-800">
            <IoMdFitness className="text-gray-500" />
            <span>{product.load}kg</span>
          </div>
          <div className="flex items-center gap-1.5 rounded bg-gray-100 px-2.5 py-1 dark:bg-slate-800">
            <MdDonutLarge className="text-gray-500" />
            <span>{product.wheelDia}mm</span>
          </div>
          <div className="flex items-center gap-1.5 rounded bg-gray-100 px-2.5 py-1 dark:bg-slate-800">
            <MdCategory className="text-gray-500" />
            <span>{product.material}</span>
          </div>
        </div>

        <div
          className={`mt-auto flex gap-3 pt-4 ${
            isList
              ? "border-t border-gray-200 dark:border-slate-700 mt-4"
              : "border-t border-gray-200 dark:border-slate-700 pt-3"
          }`}
        >
          <Link
            to={`/solution/${product.slug}`}
            className="flex-1 rounded-lg border border-blue-600 px-4 py-2.5 text-sm font-bold text-blue-600 hover:bg-blue-50 dark:border-blue-500 dark:text-blue-400 dark:hover:bg-blue-950/30 text-center"
          >
            View Details
          </Link>
          <button className="flex-1 rounded-lg bg-blue-700 px-4 py-2.5 text-sm font-bold text-white hover:bg-blue-800">
            Inquire
          </button>
        </div>
      </div>
    </div>
  );
}
