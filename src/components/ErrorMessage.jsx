import alertIcon from "../assets/alert.svg";
import { Button } from "./Button";

/**
 * UI Components Layer
 * Error message shown if API fetch fails.
 */
export function ErrorMessage({ message, onRetry }) {
  return (
    <div
      className="max-w-md mx-auto my-12 p-6 bg-red-50 border border-red-200 rounded-2xl text-center shadow-sm"
      role="alert"
    >
      <div className="w-12 h-12 mx-auto mb-3 bg-red-100 rounded-full flex items-center justify-center">
        <img src={alertIcon} alt="" className="w-6 h-6" aria-hidden="true" />
      </div>
      <h3 className="text-base font-semibold text-red-800 mb-1">
        Failed to Load Photos
      </h3>
      <p className="text-sm text-red-600 mb-4">
        {message ||
          "Something went wrong while fetching photos from the server."}
      </p>
      {onRetry && (
        <Button variant="danger" onClick={onRetry}>
          Try Again
        </Button>
      )}
    </div>
  );
}
