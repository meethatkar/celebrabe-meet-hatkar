/**
 * UI Components Layer
 * SearchBar component for real-time author filtering.
 */

export function SearchBar({ value, onChange }) {
  return (
    <div className="w-full max-w-xl mx-auto mb-8 px-4">
      <div className="relative flex items-center">
        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>

        <input
          id="search-input"
          type="text"
          value={value}
          onChange={onChange}
          placeholder="Search photos by author..."
          className="w-full pl-11 pr-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all"
          aria-label="Search photos by author"
        />

        {value && (
          <button
            type="button"
            onClick={() => onChange({ target: { value: "" } })}
            className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-slate-600 transition-colors"
            aria-label="Clear search"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
}
