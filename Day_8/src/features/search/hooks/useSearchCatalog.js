import { useMemo, useState } from "react";

export function useSearchCatalog(items, itemsPerPage) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [stock, setStock] = useState("All");
  const [sortBy, setSortBy] = useState("featured");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredItems = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return items
      .filter((item) => {
        const matchesQuery = !normalizedQuery
          ? true
          : item.name.toLowerCase().includes(normalizedQuery) ||
            item.category.toLowerCase().includes(normalizedQuery) ||
            item.tag.toLowerCase().includes(normalizedQuery) ||
            item.description.toLowerCase().includes(normalizedQuery);
        const matchesCategory =
          category === "All" ? true : item.category === category;
        const matchesStock = stock === "All" ? true : item.stock === stock;
        return matchesQuery && matchesCategory && matchesStock;
      })
      .sort((left, right) => {
        if (sortBy === "price-asc") return left.price - right.price;
        if (sortBy === "price-desc") return right.price - left.price;
        if (sortBy === "rating-desc") return right.rating - left.rating;
        return right.id - left.id;
      });
  }, [category, items, query, sortBy, stock]);

  const totalPages = Math.max(
    1,
    Math.ceil(filteredItems.length / itemsPerPage),
  );

  const visibleItems = useMemo(() => {
    const safePage = Math.min(currentPage, totalPages);
    const startIndex = (safePage - 1) * itemsPerPage;

    return filteredItems.slice(startIndex, startIndex + itemsPerPage);
  }, [currentPage, filteredItems, itemsPerPage, totalPages]);

  const updatePage = (nextPage) => {
    const boundedPage = Math.min(Math.max(nextPage, 1), totalPages);
    setCurrentPage(boundedPage);
  };

  const updateQuery = (value) => {
    setQuery(value);
    setCurrentPage(1);
  };

  const updateCategory = (value) => {
    setCategory(value);
    setCurrentPage(1);
  };

  const updateStock = (value) => {
    setStock(value);
    setCurrentPage(1);
  };

  const updateSortBy = (value) => {
    setSortBy(value);
    setCurrentPage(1);
  };

  const resetFilters = () => {
    setQuery("");
    setCategory("All");
    setStock("All");
    setSortBy("featured");
    setCurrentPage(1);
  };

  return {
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
  };
}
