"use client";
import SocialButton from "@/components/buttons/SocialButton";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { redirect, useSearchParams } from "next/navigation";
import { useState } from "react";
import { FaEnvelope, FaLock, FaArrowRight } from "react-icons/fa6";
import Swal from "sweetalert2";

export default function LoginPage() {
  const params = useSearchParams();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await signIn("credentials", {
      email: form.email,
      password: form.password,
      redirect: false,
      callbackUrl: params.get("callbackUrl") || "/",
    });

    if (!result.ok) {
      Swal.fire("error", "Invalid Credential", "error");
    } else {
      await Swal.fire({
        icon: "success",
        title: "Welcome to Kidz Hub",
        timer: 1500,
        showConfirmButton: false,
      });
      window.location.href = result.url;
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-linear-to-br from-indigo-50 via-white to-pink-50 overflow-hidden px-4">
      <div className="absolute top-[-10%] left-[-10%] w-72 h-72 bg-purple-200 rounded-full blur-3xl opacity-50 animate-pulse"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-60"></div>

      <div className="card w-full max-w-md bg-white/70 backdrop-blur-lg shadow-2xl border border-white/50 rounded-4xl overflow-hidden">
        <div className="card-body p-8 md:p-12">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-black bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent italic">
              Welcome Back!
            </h2>
            <p className="text-gray-500 mt-2 font-medium text-sm">
              Log in to your Hero Kidz account
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="form-control">
              <div className="relative group">
                <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors" />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  className="input w-full pl-12 bg-white/50 border-none ring-1 ring-gray-200 focus:ring-2 focus:ring-primary transition-all rounded-2xl"
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-control">
              <div className="relative group">
                <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors" />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="input w-full pl-12 bg-white/50 border-none ring-1 ring-gray-200 focus:ring-2 focus:ring-primary transition-all rounded-2xl"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="text-right mt-2">
                <button
                  type="button"
                  className="text-xs font-semibold text-primary hover:underline"
                >
                  Forgot Password?
                </button>
              </div>
            </div>

            <button className="btn btn-primary w-full rounded-2xl text-white shadow-lg shadow-primary/30 hover:scale-[1.02] transition-transform">
              Sign In <FaArrowRight className="ml-2 text-xs" />
            </button>
          </form>

          <div className="divider my-8 text-gray-400 text-[10px] tracking-widest font-bold uppercase">
            Or Login with
          </div>

          <SocialButton />

          <p className="text-center mt-8 text-gray-600 text-sm">
            New here?{" "}
            <Link
              href="/register"
              className="text-secondary font-bold hover:underline"
            >
              Join the club
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
