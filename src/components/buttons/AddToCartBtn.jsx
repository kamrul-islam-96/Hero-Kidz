"use client";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

export default function AddToCartBtn({ product }) {
  const isLogin = false;
  const router = useRouter();
  const path = usePathname();

  const handleAdd2Cart = () => {
    if (isLogin) alert(product._id);
    else {
      router.push(`/login?callbackUrl=${path}`);
    }
  };

  return (
    <div>
      <button onClick={handleAdd2Cart} className="btn btn-outline btn-primary">
        Add to Cart
      </button>
    </div>
  );
}
