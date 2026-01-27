import { loginUser } from "@/actions/server/auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { collections, dbConnect } from "./dbConnect";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        // email: { label: "Email", type: "email" },
        // password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const user = await loginUser(credentials);
        return user;
      },
    }),

    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {
      const isExixts = await dbConnect(collections.USERS).findOne({
        email: user.email,
        provider: account?.provider,
      });
      if (isExixts) {
        return true;
      }

      const newUser = {
        provider: account?.provider,
        name: user.name,
        email: user.email,
        photoUrl: user.image,
        role: "user",
      };

      const result = await dbConnect(collections.USERS).insertOne(newUser);
      return result.acknowledged;
    },
  },
};
