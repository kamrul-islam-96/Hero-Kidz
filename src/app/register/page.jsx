"use client";
import Link from "next/link";
import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaImage,
  FaCircleCheck, 
} from "react-icons/fa6";

export default function RegisterPage() {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-linear-to-bl from-blue-50 via-white to-purple-50 overflow-hidden px-4 py-12">
      <div className="absolute top-20 right-20 w-32 h-32 bg-pink-200 rounded-full blur-2xl opacity-40 animate-bounce"></div>

      <div className="card w-full max-w-lg bg-white/80 backdrop-blur-xl shadow-2xl border border-white/40 rounded-[2.5rem]">
        <div className="card-body p-8 md:p-12">
          <div className="text-center mb-6">
            <h2 className="text-4xl font-extrabold tracking-tight text-gray-800">
              Create <span className="text-primary italic">Account</span>
            </h2>
            <p className="text-gray-500 mt-2 font-medium">
              Start your adventure today!
            </p>
          </div>

          <form className="flex flex-col gap-4">
            <div className="form-control group">
              <label className="label-text ml-2 mb-1 font-bold text-gray-600">
                Full Name
              </label>
              <div className="relative">
                <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  className="input w-full pl-12 bg-gray-50/50 border-none ring-1 ring-gray-200 focus:ring-2 focus:ring-primary rounded-xl"
                  placeholder="Alex"
                />
              </div>
            </div>

            <div className="form-control group">
              <label className="label-text ml-2 mb-1 font-bold text-gray-600">
                Email
              </label>
              <div className="relative">
                <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="email"
                  className="input w-full pl-12 bg-gray-50/50 border-none ring-1 ring-gray-200 focus:ring-2 focus:ring-primary rounded-xl"
                  placeholder="alex@hero.com"
                />
              </div>
            </div>

            <div className="form-control md:col-span-2 group">
              <label className="label-text ml-2 mb-1 font-bold text-gray-600">
                Photo URL
              </label>
              <div className="relative">
                <FaImage className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="url"
                  className="input w-full pl-12 bg-gray-50/50 border-none ring-1 ring-gray-200 focus:ring-2 focus:ring-primary rounded-xl"
                  placeholder="https://..."
                />
              </div>
            </div>

            <div className="form-control md:col-span-2 group">
              <label className="label-text ml-2 mb-1 font-bold text-gray-600">
                Password
              </label>
              <div className="relative">
                <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="password"
                  placeholder="••••••••"
                  className="input w-full pl-12 bg-gray-50/50 border-none ring-1 ring-gray-200 focus:ring-2 focus:ring-primary rounded-xl"
                />
              </div>
            </div>

            <div className="md:col-span-2 mt-4">
              <button className="btn btn-primary w-full rounded-xl text-white shadow-lg hover:shadow-primary/40 group">
                Register Now{" "}
                <FaCircleCheck className="ml-2 group-hover:rotate-12 transition-transform" />
              </button>
            </div>
          </form>

          <p className="text-center mt-6 text-gray-500 font-medium">
            Already a hero?{" "}
            <Link
              href="/login"
              className="text-primary font-bold hover:underline"
            >
              Log In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
