function SearchResults({ items }) {
  if (items.length === 0) {
    return (
      <div className="rounded-3xl border border-dashed border-white/15 bg-white/5 p-10 text-center text-slate-300">
        <p className="text-lg font-semibold text-white">No matches found</p>
        <p className="mt-2 text-sm">
          Try adjusting the search term or filters to broaden the results.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {items.map((item) => (
        <article
          key={item.id}
          className="group rounded-[1.75rem] border border-white/10 bg-slate-950/55 p-5 shadow-xl shadow-slate-950/25 transition hover:-translate-y-1 hover:border-sky-400/30 hover:bg-slate-950/75"
        >
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-xs uppercase tracking-[0.26em] text-sky-200/70">
                {item.category}
              </p>
              <h3 className="mt-2 text-xl font-semibold text-white">
                {item.name}
              </h3>
            </div>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-200">
              {item.tag}
            </span>
          </div>

          <p className="mt-4 text-sm leading-6 text-slate-300">
            {item.description}
          </p>

          <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4 text-sm">
            <div>
              <p className="text-slate-400">Price</p>
              <p className="text-lg font-semibold text-white">${item.price}</p>
            </div>
            <div className="text-right">
              <p className="text-slate-400">Rating</p>
              <p className="text-lg font-semibold text-amber-300">
                {item.rating}
              </p>
            </div>
            <div className="text-right">
              <p className="text-slate-400">Stock</p>
              <p className="text-lg font-semibold text-emerald-300">
                {item.stock}
              </p>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

export default SearchResults;
