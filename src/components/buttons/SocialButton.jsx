"use client";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import React from "react";
import { FaGoogle } from "react-icons/fa6";
import Swal from "sweetalert2";

export default function SocialButton() {
  const params = useSearchParams();

  const handleSocialSignIn = async () => {
    const result = await signIn("google", {
      redirect: "false",
      callbackUrl: params.get("callbackUrl") || "/",
    });
    if (result.ok) {
      Swal.fire("success", "Welcome", "success");
    } else {
      Swal.fire("error", "Please try again", "error");
    }
  };
  return (
    <div>
      <button
        onClick={handleSocialSignIn}
        className="btn btn-outline border-gray-200 hover:bg-gray-50 hover:text-black w-full rounded-2xl gap-3 normal-case shadow-sm"
      >
        <FaGoogle className="text-red-500" /> Continue with Google
      </button>
    </div>
  );
}
