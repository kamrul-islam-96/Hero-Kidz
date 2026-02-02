import React from "react";
// import products from "@/data/toys.json";
import ProductCard from "../cards/ProductCard";
import { getProducts } from "@/actions/server/product";

export default async function Products() {
  const products = await getProducts();

  return (
    <div>
      <h2 className="text-4xl font-bold text-center">Out Products</h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-4 py-8 md:px-0">
        {products.map((product) => (
          <ProductCard key={product.title} product={product} />
        ))}
      </div>
    </div>
  );
}
