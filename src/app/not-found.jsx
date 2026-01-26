import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center space-y-4">
      <h2 className="text-4xl font-bold text-error">404 - Page Not Found</h2>
      <p className="text-gray-500 text-lg">
        Oops! The page you are looking for doesn't exist.
      </p>
      <Link href="/" className="btn btn-primary">
        Back to Home
      </Link>
    </div>
  );
}
