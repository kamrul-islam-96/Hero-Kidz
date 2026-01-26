import ProductSkeleton from "@/components/skeleton/ProductSkeleton";
import React from "react";

export default function loading() {
  return (
    <div>
      <div className="h-10 w-64 bg-gray-200 rounded-md mx-auto mb-10"></div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
        {[...Array(12)].map((_, index) => (
          <ProductSkeleton key={index} />
        ))}
      </div>
    </div>
  );
}
