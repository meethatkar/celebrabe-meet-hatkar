/**
 * Layer 4: UI Components
 * Loading spinner shown while fetching data from Picsum API.
 */
export function LoadingSpinner() {
  return (
    <div className="flex flex-col items-center justify-center py-24" role="status" aria-live="polite">
      {/* Animated Tailwind SVG Spinner */}
      <div className="relative w-14 h-14">
        <div className="w-14 h-14 rounded-full border-4 border-slate-200 border-t-rose-500 animate-spin"></div>
      </div>
      <p className="mt-4 text-sm font-medium text-slate-600 animate-pulse">Loading photos...</p>
    </div>
  )
}
