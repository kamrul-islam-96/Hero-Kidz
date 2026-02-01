"use server";

import { authOptions } from "@/lib/authOption";
import { getServerSession } from "next-auth";
import { clearCartData, getCart } from "./cart";

const { dbConnect, collections } = require("@/lib/dbConnect");

const orderCollection = dbConnect(collections.ORDER);

export const createOrder = async (payload) => {
  const { user } = (await getServerSession(authOptions)) || {};
  if (!user) return { success: false };

  const cart = await getCart();
  if (cart.length == 0) {
    return { success: false };
  }

  const newOrder = {
    createdAt: new Date().toISOString(),
    items: cart,
    ...payload,
  };

  const result = await orderCollection.insertOne(newOrder);
  if (Boolean(result.insertedId)) {
    const result = await clearCartData();
  }

  return {
    success: true,
    orderId: result.insertedId.toString(),
  };
};
