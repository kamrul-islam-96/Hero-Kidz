import React from "react";

export default function ProductSkeleton() {
  return (
    <div className="card w-full max-w-sm bg-base-100 shadow-md border border-base-200">
      <div className="px-4 pt-4">
        <div className="skeleton h-48 w-full rounded-xl"></div>
      </div>
      <div className="card-body p-5 space-y-3">
        <div className="flex justify-between items-center">
          <div className="skeleton h-6 w-2/3"></div>
          <div className="skeleton h-4 w-12"></div>
        </div>
        <div className="skeleton h-4 w-1/2"></div>
        <div className="skeleton h-8 w-1/3 mt-2"></div>
        <div className="skeleton h-12 w-full mt-4"></div>
      </div>
    </div>
  );
}
