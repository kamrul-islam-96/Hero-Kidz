"use client";
import { handleCart } from "@/actions/server/cart";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";
import Swal from "sweetalert2";

export default function AddToCartBtn({ product }) {
  const session = useSession();
  const isLogin = session?.status == "authenticated";
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const path = usePathname();

  const handleAdd2Cart = async () => {
    setIsLoading(true);

    if (isLogin) {
      const result = await handleCart({ product, inc: true });
      if (result.success) {
        Swal.fire("Added to Cart", product.title, "success");
      } else {
        Swal.fire("Oppps", "something went wrong", "error");
      }

      setIsLoading(false);
    } else {
      router.push(`/login?callbackUrl=${path}`);
      setIsLoading(false);
    }
  };

  return (
    <div>
      <button
        disabled={session.status == "loading" || isLoading}
        onClick={handleAdd2Cart}
        className="w-full btn btn-outline btn-primary"
      >
        Add to Cart
      </button>
    </div>
  );
}
