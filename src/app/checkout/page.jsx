import { getCart } from "@/actions/server/cart";
import CheckOut from "@/components/cards/CheckOut";
import React from "react";

export default async function CheckOutPage() {
  const cartItems = await getCart();
  const safeCartItems = cartItems.map((cart) => ({
    ...cart,
    _id: cart._id.toString(),
  }));

  return <div>
    <CheckOut safeCartItems={safeCartItems} />
  </div>;
}
