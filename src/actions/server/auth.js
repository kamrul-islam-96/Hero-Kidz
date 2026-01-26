"use server";
const { dbConnect, collections } = require("@/lib/dbConnect");
import bcrypt from "bcryptjs";

export const postUser = async (payload) => {
  const { name, email, photoUrl, password } = payload;

  //check payload
  if (!email || !password) return null;

  //check user
  const isExixts = await dbConnect(collections.USERS).findOne({ email });
  if (isExixts) {
    return null;
  }

  //create user
  const newUser = {
    provider: "credentials",
    name,
    email,
    photoUrl,
    password: await bcrypt.hash(password, 14),
    role: "user",
  };

  //insert user
  const result = await dbConnect(collections.USERS).insertOne(newUser);
  if (result.acknowledged) {
    return {
      ...result,
      insertedId: result.insertedId.toString(),
    };
  }
};

export const loginUser = async (payload) => {
  const { name, email, photoUrl, password } = payload;
  if (!email || !password) return null;

  const user = await dbConnect(collections.USERS).findOne({ email });
  if (!user) return null;

  const isMatched = await bcrypt.compare(password, user.password);
  if (isMatched) {
    return user;
  } else {
    return null;
  }
};
