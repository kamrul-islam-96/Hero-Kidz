"use client";
import React, { useMemo, useState } from "react";
import { Truck, User, MapPin } from "lucide-react";
import { createOrder } from "@/actions/server/order";
import { useSession } from "next-auth/react";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

export default function CheckOut({ safeCartItems }) {
  const [items, setItems] = useState(safeCartItems);
  const session = useSession();
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    const payload = {
      name: form.name.value,
      email: form.email.value,
      contact: form.contactNo.value,
      address: form.address.value,
      city: form.city.value,
      zipcode: form.zipCode.value,
    };
    const result = await createOrder(payload);

    if (result.success) {
      Swal.fire("success", "order confirmed", "success");
      router.push("/");
    } else {
      Swal.fire("error", "something went wrong", "error");
      router.push("/cart");
    }
  };

  const totalItems = useMemo(
    () => items.reduce((acm, item) => acm + item.quantity, 0),
    [items],
  );

  const totalPrice = useMemo(
    () => items.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [items],
  );

  if (session.status == "loading") {
    <h2>Loading...</h2>;
  }

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-8">
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Left Side: Checkout Form */}
        <div className="flex-2">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Contact Information */}
            <section>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <User size={20} className="text-primary" /> Contact Information
              </h3>
              <div className="grid grid-cols-1 gap-4">
                <input
                  type="email"
                  name="email"
                  value={session?.data?.user?.email}
                  placeholder="Email Address"
                  required
                  readOnly
                  className="input input-bordered w-full rounded-2xl bg-base-200/50 border-base-300 focus:border-primary"
                />
              </div>
            </section>

            {/* Shipping Details */}
            <section>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Truck size={20} className="text-primary" /> Shipping Details
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  value={session?.data?.user?.name}
                  placeholder="Enter Your Name"
                  required
                  readOnly
                  className="input input-bordered w-full rounded-2xl bg-base-200/50"
                />
                <input
                  type="text"
                  name="contactNo"
                  placeholder="Contact Number"
                  required
                  className="input input-bordered w-full rounded-2xl bg-base-200/50"
                />
                <input
                  type="text"
                  name="address"
                  placeholder="Street Address"
                  required
                  className="input input-bordered w-full md:col-span-2 rounded-2xl bg-base-200/50"
                />
                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  required
                  className="input input-bordered w-full rounded-2xl bg-base-200/50"
                />
                <input
                  type="text"
                  name="zipCode"
                  placeholder="ZIP / Postal Code"
                  required
                  className="input input-bordered w-full rounded-2xl bg-base-200/50"
                />
              </div>
            </section>

            <button
              type="submit"
              className="btn btn-primary btn-block rounded-2xl text-lg h-14"
            >
              Complete Order • ${totalPrice.toFixed(2)}
            </button>
          </form>
        </div>

        {/* Right Side: Order Summary (Existing Code) */}
        <div className="flex-1">
          <div className="sticky top-8 p-6 rounded-3xl bg-base-100 border border-base-300 shadow-xl shadow-base-300/20">
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
          </div>
        </div>
      </div>
    </div>
  );
}
