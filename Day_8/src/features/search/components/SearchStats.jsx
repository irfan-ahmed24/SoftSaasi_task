function SearchStats({ totalItems, filteredItems, currentPage, totalPages }) {
  return (
    <div className="flex flex-col gap-3 rounded-3xl border border-white/10 bg-white/5 p-4 text-sm text-slate-200 shadow-lg shadow-slate-950/30 backdrop-blur sm:flex-row sm:items-center sm:justify-between">
      <p>
        Showing{" "}
        <span className="font-semibold text-white">{filteredItems}</span> of{" "}
        <span className="font-semibold text-white">{totalItems}</span> items
      </p>
      <p>
        Page <span className="font-semibold text-white">{currentPage}</span> of{" "}
        <span className="font-semibold text-white">{totalPages}</span>
      </p>
    </div>
  );
}

export default SearchStats;
