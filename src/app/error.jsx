"use client";

export default function Error({ error, reset }) {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center space-y-4">
      <h2 className="text-3xl font-bold text-red-600">Something went wrong!</h2>
      <p className="text-gray-500 italic">
        An unexpected error occurred.
      </p>
      <button className="btn btn-error text-white" onClick={() => reset()}>
        Try again
      </button>
    </div>
  );
}
