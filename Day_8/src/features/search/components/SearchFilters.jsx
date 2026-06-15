import { useContext } from "react";

import { SearchCatalogContext } from "../SearchPage.jsx";

const stockOptions = ["All", "In stock", "Low stock"];
const sortOptions = [
  { value: "featured", label: "Featured" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "rating-desc", label: "Top Rated" },
];

function SearchFilters() {
  const searchCatalog = useContext(SearchCatalogContext);

  if (!searchCatalog) {
    throw new Error("SearchFilters must be used within SearchCatalogContext.");
  }

  const {
    categories,
    query,
    category,
    stock,
    sortBy,
    updateQuery,
    updateCategory,
    updateStock,
    updateSortBy,
    resetFilters,
  } = searchCatalog;

  return (
    <section className="rounded-[2rem] border border-white/10 bg-white/6 p-5 shadow-2xl shadow-slate-950/30 backdrop-blur">
      <div className="mb-5 space-y-1 border-b border-white/10 pb-4">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-200/75">
          Filters
        </p>
        <h2 className="text-2xl font-semibold text-white">Refine products</h2>
        <p className="text-sm leading-6 text-slate-300">
          Search and narrow the catalog from this panel.
        </p>
      </div>

      <div className="grid gap-4">
        <label className="grid gap-2">
          <span className="text-xs font-medium uppercase tracking-[0.22em] text-sky-200/80">
            Search
          </span>
          <input
            value={query}
            onChange={(event) => updateQuery(event.target.value)}
            placeholder="Search products, tags, descriptions..."
            className="rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-400 focus:border-sky-400/70 focus:ring-2 focus:ring-sky-400/20"
          />
        </label>

        <label className="grid gap-2">
          <span className="text-xs font-medium uppercase tracking-[0.22em] text-sky-200/80">
            Category
          </span>
          <select
            value={category}
            onChange={(event) => updateCategory(event.target.value)}
            className="rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-sm text-white outline-none transition focus:border-sky-400/70 focus:ring-2 focus:ring-sky-400/20"
          >
            {categories.map((itemCategory) => (
              <option key={itemCategory} value={itemCategory}>
                {itemCategory}
              </option>
            ))}
          </select>
        </label>

        <label className="grid gap-2">
          <span className="text-xs font-medium uppercase tracking-[0.22em] text-sky-200/80">
            Stock
          </span>
          <select
            value={stock}
            onChange={(event) => updateStock(event.target.value)}
            className="rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-sm text-white outline-none transition focus:border-sky-400/70 focus:ring-2 focus:ring-sky-400/20"
          >
            {stockOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>

        <label className="grid gap-2">
          <span className="text-xs font-medium uppercase tracking-[0.22em] text-sky-200/80">
            Sort
          </span>
          <select
            value={sortBy}
            onChange={(event) => updateSortBy(event.target.value)}
            className="rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-sm text-white outline-none transition focus:border-sky-400/70 focus:ring-2 focus:ring-sky-400/20"
          >
            {sortOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>

        <div className="pt-1">
          <button
            type="button"
            onClick={resetFilters}
            className="w-full rounded-2xl border border-sky-400/30 bg-sky-400/10 px-4 py-3 text-sm font-semibold text-sky-100 transition hover:border-sky-300/50 hover:bg-sky-400/20"
          >
            Reset filters
          </button>
        </div>
      </div>
    </section>
  );
}

export default SearchFilters;
