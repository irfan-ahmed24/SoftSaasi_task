import { createContext } from "react";

import { catalog, categories } from "./data/catalog.js";
import { useSearchCatalog } from "./hooks/useSearchCatalog.js";
import SearchFilters from "./components/SearchFilters.jsx";
import SearchResults from "./components/SearchResults.jsx";
import Pagination from "./components/Pagination.jsx";
import SearchStats from "./components/SearchStats.jsx";

export const SearchCatalogContext = createContext(null);

function SearchPage() {
  const {
    query,
    category,
    stock,
    sortBy,
    currentPage,
    totalPages,
    filteredItems,
    visibleItems,
    updatePage,
    updateQuery,
    updateCategory,
    updateStock,
    updateSortBy,
    resetFilters,
  } = useSearchCatalog(catalog, 3);

  return (
    <SearchCatalogContext.Provider
      value={{
        categories,
        query,
        category,
        stock,
        sortBy,
        currentPage,
        totalPages,
        filteredItems,
        visibleItems,
        totalItems: catalog.length,
        updatePage,
        updateQuery,
        updateCategory,
        updateStock,
        updateSortBy,
        resetFilters,
      }}
    >
      <main className="min-h-screen px-4 py-8 text-white sm:px-6 lg:px-8">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-6">
          <SearchFilters />

          <SearchStats
            totalItems={catalog.length}
            filteredItems={filteredItems.length}
            currentPage={currentPage}
            totalPages={totalPages}
          />

          <SearchResults items={visibleItems} />

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={updatePage}
          />
        </div>
      </main>
    </SearchCatalogContext.Provider>
  );
}

export default SearchPage;
