"use client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

export default function AuthButtons() {
  const session = useSession();

  return (
    <div>
      {session.status === "authenticated" ? (
        <>
          <button onClick={() => signOut()} className="btn btn-outline">
            Log Out
          </button>
        </>
      ) : (
        <>
          <Link href={"/login"}>
            <button className="btn btn-primary btn-outline">Login</button>
          </Link>
        </>
      )}
    </div>
  );
}
