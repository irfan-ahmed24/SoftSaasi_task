function SearchStats({ totalItems, filteredItems, currentPage, totalPages }) {
  return (
    <div className="flex flex-col gap-3 rounded-[2rem] border border-white/10 bg-white/5 px-5 py-4 text-sm text-slate-200 shadow-lg shadow-slate-950/30 backdrop-blur sm:flex-row sm:items-center sm:justify-between">
      <p className="leading-6">
        Showing{" "}
        <span className="font-semibold text-white">{filteredItems}</span> of{" "}
        <span className="font-semibold text-white">{totalItems}</span> items
      </p>
      <p className="leading-6">
        Page <span className="font-semibold text-white">{currentPage}</span> of{" "}
        <span className="font-semibold text-white">{totalPages}</span>
      </p>
    </div>
  );
}

export default SearchStats;
