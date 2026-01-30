"use client";

import React from "react";
import { Minus, Plus, Trash2 } from "lucide-react";
import Swal from "sweetalert2";
import { deleteItemsFromCart } from "@/actions/server/cart";

const CartItem = ({ cart, removeItem }) => {
  const { title, quantity, image, price, userName, _id } = cart;

  const handleDeleteItem = async () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const result = await deleteItemsFromCart(_id);

        if (result.success) {
          removeItem(_id);

          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
        } else {
          Swal.fire({
            title: "Opps!",
            text: "Something went wrong.",
            icon: "error",
          });
        }
      }
    });
  };

  return (
    <div className="card card-side bg-base-100 shadow-sm border border-base-200 p-4 flex items-center gap-4">
      {/* Product Image */}
      <div className="avatar">
        <div className="w-24 h-24 rounded-lg">
          <img src={image} alt={title} className="object-cover" />
        </div>
      </div>

      {/* Item Details */}
      <div className="flex-1">
        <h2 className="card-title text-sm md:text-lg leading-tight">{title}</h2>
        <p className="text-gray-500 text-xs mb-2">Added by: {userName}</p>

        <div className="flex flex-wrap items-center justify-between gap-4">
          {/* Price */}
          <div className="text-lg font-bold text-primary">
            ${(price * quantity).toLocaleString()}
            <span className="text-xs font-normal text-base-content/60 ml-2">
              (${price} each)
            </span>
          </div>

          {/* Controls Container */}
          <div className="flex items-center gap-4">
            {/* Quantity Toggle */}
            <div className="join border border-base-300">
              <button
                className="btn btn-ghost btn-xs join-item"
                // onClick={() => onUpdateQuantity(quantity - 1)}
                disabled={quantity <= 1}
              >
                <Minus size={16} />
              </button>
              <button className="btn btn-ghost btn-xs join-item no-animation cursor-default">
                {quantity}
              </button>
              <button
                className="btn btn-ghost btn-xs join-item"
                // onClick={() => onUpdateQuantity(quantity + 1)}
              >
                <Plus size={16} />
              </button>
            </div>

            {/* Remove Button */}
            <button
              className="btn btn-error btn-outline btn-sm"
              onClick={handleDeleteItem}
              title="Remove Item"
            >
              <Trash2 size={18} />
              <span className="hidden md:inline">Remove</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
