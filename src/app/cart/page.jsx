import { getCart } from "@/actions/server/cart";
import Cart from "@/components/cart/Cart";
import React from "react";

export default async function CartPage() {
  const cartItems = await getCart();
  const safeCartItems = cartItems.map((cart) => ({
    ...cart,
    _id: cart._id.toString(),
  }));

  return (
    <div className="container mx-auto px-4 pt-4 pb-10">
      <Cart safeCartItems={safeCartItems} />
    </div>
  );
}
