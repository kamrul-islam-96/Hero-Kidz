import React from "react";

export default function Loading() {
  return (
    <div className="container mx-auto px-4 py-10 animate-pulse">
      {/* Top Section: Image and Basic Info Skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-base-100 p-6 rounded-2xl shadow-sm border border-base-200">
        {/* Left: Product Image Skeleton */}
        <div className="relative bg-gray-200 rounded-2xl h-[300px] md:h-[500px] w-full"></div>

        {/* Right: Product Info Skeleton */}
        <div className="space-y-6">
          <div>
            {/* Title & Subtitle */}
            <div className="h-9 bg-gray-200 rounded-md w-3/4 mb-2"></div>
            <div className="h-6 bg-gray-200 rounded-md w-1/2"></div>
          </div>

          {/* Ratings, Reviews, Sold Info */}
          <div className="flex items-center gap-4">
            <div className="h-5 bg-gray-200 rounded w-16"></div>
            <div className="h-5 bg-gray-200 rounded w-24"></div>
            <div className="h-5 bg-gray-200 rounded w-20"></div>
          </div>

          {/* Price Skeleton */}
          <div className="flex items-baseline gap-3 pt-2">
            <div className="h-10 bg-gray-200 rounded w-32"></div>
            <div className="h-6 bg-gray-200 rounded w-20"></div>
          </div>

          <div className="divider"></div>

          {/* Key Features Skeleton */}
          <div className="space-y-4">
            <div className="h-6 bg-gray-200 rounded w-32"></div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="h-4 w-4 bg-gray-200 rounded-full"></div>
                  <div className="h-4 bg-gray-200 rounded w-full"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Buttons Skeleton */}
          <div className="flex gap-4 pt-4">
            <div className="h-12 bg-gray-200 rounded-lg flex-1"></div>
            <div className="h-12 bg-gray-200 rounded-lg flex-1"></div>
          </div>
        </div>
      </div>

      {/* Bottom Section: Description & QNA Skeleton */}
      <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Description Skeleton */}
        <div className="lg:col-span-2 space-y-4">
          <div className="bg-base-100 p-6 rounded-2xl border border-base-200">
            <div className="h-8 bg-gray-200 rounded w-40 mb-6"></div>
            <div className="space-y-3">
              <div className="h-4 bg-gray-200 rounded w-full"></div>
              <div className="h-4 bg-gray-200 rounded w-full"></div>
              <div className="h-4 bg-gray-200 rounded w-5/6"></div>
              <div className="h-4 bg-gray-200 rounded w-4/6"></div>
            </div>
          </div>
        </div>

        {/* QNA Skeleton */}
        <div className="bg-base-100 p-6 rounded-2xl border border-base-200 h-fit">
          <div className="h-7 bg-gray-200 rounded w-24 mb-6"></div>
          <div className="space-y-6">
            {[1, 2].map((i) => (
              <div key={i} className="space-y-2">
                <div className="h-4 bg-gray-200 rounded w-full"></div>
                <div className="h-3 bg-gray-200 rounded w-3/4"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
