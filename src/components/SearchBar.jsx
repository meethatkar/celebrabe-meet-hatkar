import searchIcon from '../assets/search.svg'
import closeIcon from '../assets/close.svg'
import { Button } from './Button'

/**
 * UI Components Layer
 * SearchBar component for real-time author filtering.
 */

export function SearchBar({ value, onChange }) {
  return (
    <div className="w-full max-w-xl mx-auto mb-8 px-4">
      <div className="relative flex items-center">
        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
          <img src={searchIcon} alt="" className="w-5 h-5 opacity-70" aria-hidden="true" />
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
          <Button
            variant="ghost"
            onClick={() => onChange({ target: { value: '' } })}
            className="absolute inset-y-0 right-0 pr-3.5"
            aria-label="Clear search"
          >
            <img src={closeIcon} alt="" className="w-4 h-4 opacity-70 hover:opacity-100 transition-opacity" aria-hidden="true" />
          </Button>
        )}
      </div>
    </div>
  );
}
