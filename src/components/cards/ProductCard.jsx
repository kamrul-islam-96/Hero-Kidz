import Image from "next/image";
import React from "react";
import { FaStar, FaShoppingCart, FaCheckCircle } from "react-icons/fa";

export default function ProductCard({ product }) {
  const discountedPrice =
    product.price - (product.price * product.discount) / 100;

  return (
    <div className="card w-full max-w-sm bg-base-100 shadow-xl border border-base-200 hover:shadow-2xl transition-all duration-300">
      {/* Product Image */}
      <figure className="relative px-4 pt-4">
        <Image
          width={380}
          height={190}
          src={product.image}
          alt={product.title}
          className="rounded-xl h-48 w-full object-contain bg-gray-50"
        />
        {product.percentage > 0 && (
          <div className="badge badge-secondary absolute top-6 right-6 font-bold">
            -{product.percentage}%
          </div>
        )}
      </figure>

      <div className="card-body p-5">
        {/* Title & Sold Count */}
        <div className="flex justify-between items-start gap-2">
          <h2 className="card-title text-lg leading-tight text-neutral">
            {product.title}
          </h2>
          <span className="text-xs font-medium text-gray-500 whitespace-nowrap pt-1">
            {product.sold} Sold
          </span>
        </div>

        {/* Ratings & Reviews */}
        <div className="flex items-center gap-2 mt-1">
          <div className="flex items-center text-warning">
            <FaStar className="mr-1" />
            <span className="font-bold text-sm">{product.ratings}</span>
          </div>
          <div className="text-gray-400 text-xs">
            ({product.reviews} reviews)
          </div>
        </div>

        {/* Price Section */}
        <div className="flex items-baseline gap-2 mt-3">
          <span className="text-2xl font-bold text-primary">
            ৳{discountedPrice}
          </span>
          <span className="text-sm line-through text-gray-400">
            ৳{product.price}
          </span>
        </div>

        {/* Short Features (Optional) */}
        <div className="mt-2 space-y-1">
          <p className="text-xs text-gray-600 flex items-center gap-1">
            <FaCheckCircle className="text-success text-[10px]" /> STEM Skill
            Development
          </p>
        </div>

        {/* Actions */}
        <div className="card-actions mt-4">
          <button className="btn btn-primary btn-block gap-2 normal-case">
            <FaShoppingCart />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
