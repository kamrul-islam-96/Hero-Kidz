"use client";
import React, { useMemo, useState } from "react";
import CartItem from "../cards/CartItem";
import { ShoppingBag, Sparkles } from "lucide-react";

export default function Cart({ safeCartItems = [] }) {
  const [items, setItems] = useState(safeCartItems);

  const totalItems = useMemo(
    () => items.reduce((acm, item) => acm + item.quantity, 0),
    [items],
  );

  const totalPrice = useMemo(
    () => items.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [items],
  );

  const removeItem = (id) => {
    setItems((prevItems) => prevItems.filter((item) => item._id != id));
  };

  const updateQuantity = (id, q) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item._id == id ? { ...item, quantity: q } : item,
      ),
    );
  };

  return (
    <div>
      {/* Header */}
      <div className="mb-10 p-8 rounded-3xl bg-base-200/50 border border-base-300 backdrop-blur-sm relative overflow-hidden">
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
        <h1 className="text-4xl font-black tracking-tight flex items-center gap-3">
          Shopping <span className="text-primary">Cart</span>
          <Sparkles size={24} className="text-secondary animate-pulse" />
        </h1>
        <p className="text-gray-500 mt-2 flex items-center gap-2">
          You have{" "}
          <span className="badge badge-secondary badge-lg font-bold">
            {items.length}
          </span>{" "}
          items in your cart
        </p>
      </div>

      {/* Responsive Grid/Flex Layout */}
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-2 flex flex-col gap-4">
          {items.length > 0 ? (
            items.map((cart) => (
              <CartItem
                key={cart._id}
                cart={cart}
                removeItem={removeItem}
                updateQuantity={updateQuantity}
              />
            ))
          ) : (
            <div className="text-center py-20 bg-base-200/30 rounded-4xl border-2 border-dashed border-base-300">
              <ShoppingBag size={48} className="mx-auto opacity-20 mb-4" />
              <p className="text-xl font-medium opacity-50">
                Your cart is empty.
              </p>
            </div>
          )}
        </div>

        {/* Right Side: Sibling Div - Width */}
        <div className="flex-1">
          <h1>{totalItems}  {totalPrice}</h1>
        </div>
      </div>
    </div>
  );
}
