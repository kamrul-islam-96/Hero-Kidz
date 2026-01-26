"use client"; 

export default function GlobalError({ error, reset }) {
  return (
    <html>
      <body>
        <div className="min-h-screen flex flex-col items-center justify-center space-y-4">
          <h2 className="text-3xl font-bold text-red-600">Something went wrong globally!</h2>
          <p className="text-gray-500">{error?.message || "A critical error occurred."}</p>
          <button
            className="btn btn-error text-white"
            onClick={() => reset()}
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}