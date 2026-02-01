"use client";
import React, { useMemo, useState } from "react";
import CartItem from "../cards/CartItem";
import { ChevronRight, CreditCard, ShoppingBag, Sparkles } from "lucide-react";
import Link from "next/link";

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
          <div className="sticky top-8 p-4 rounded-3xl bg-base-100 border border-base-300 shadow-xl shadow-base-300/20">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              Order Summary
            </h2>

            {/* Compact Item List */}
            <div className="space-y-4 mb-6 max-h-75 overflow-y-auto pr-2 custom-scrollbar">
              {items.map((item) => (
                <div
                  key={item._id}
                  className="flex gap-3 items-center bg-base-200/50 p-2 rounded-2xl"
                >
                  <div className="relative h-16 w-16 shrink-0 rounded-xl overflow-hidden border border-base-300">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="object-cover w-full h-full"
                    />
                    <span className="absolute -top-1 -right-1 badge badge-primary badge-sm font-bold">
                      {item.quantity}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-bold truncate text-sm">{item.title}</p>
                    <p className="text-xs opacity-60">
                      ${item.price.toFixed(2)} each
                    </p>
                  </div>
                  <p className="font-bold text-sm">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              ))}
            </div>

            <hr className="border-base-300 mb-6" />

            {/* Price Breakdown */}
            <div className="space-y-3 mb-8">
              <div className="flex justify-between text-gray-500">
                <span>Subtotal ({totalItems} items)</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-400 text-sm italic">
                <span>Shipping & Taxes</span>
                <span>Calculated at checkout</span>
              </div>
              <div className="flex justify-between items-end pt-2">
                <span className="font-bold text-lg">Total</span>
                <span className="text-3xl font-black text-primary">
                  ${totalPrice.toFixed(2)}
                </span>
              </div>
            </div>

            {/* Confirm Button */}
            <Link
            href={'/checkout'}
              disabled={items.length === 0}
              className="btn btn-primary btn-block h-16 rounded-2xl text-lg font-bold group"
            >
              Confirm & Checkout
              <ChevronRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>

            <div className="mt-4 flex items-center justify-center gap-2 text-xs opacity-50 font-medium">
              <CreditCard size={14} />
              Secure encrypted checkout
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
