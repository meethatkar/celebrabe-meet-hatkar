/**
 * Layer 4: UI Components
 * Error message shown if API fetch fails.
 */
export function ErrorMessage({ message, onRetry }) {
  return (
    <div className="max-w-md mx-auto my-12 p-6 bg-red-50 border border-red-200 rounded-2xl text-center shadow-sm" role="alert">
      <div className="w-12 h-12 mx-auto mb-3 text-red-500 bg-red-100 rounded-full flex items-center justify-center">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      </div>
      <h3 className="text-base font-semibold text-red-800 mb-1">Failed to Load Photos</h3>
      <p className="text-sm text-red-600 mb-4">{message || 'Something went wrong while fetching photos from the server.'}</p>
      {onRetry && (
        <button
          type="button"
          onClick={onRetry}
          className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-red-600 hover:bg-red-700 rounded-xl transition-colors shadow-sm"
        >
          Try Again
        </button>
      )}
    </div>
  )
}
