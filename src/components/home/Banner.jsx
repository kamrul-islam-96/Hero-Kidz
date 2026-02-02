import { fontBangla } from "@/app/layout";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Banner() {
  return (
    <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8 py-10">
      {/* TEXT SECTION */}
      <div className="flex-1 text-center lg:text-left">
        <h2
          className={`${fontBangla.className} 
          text-3xl sm:text-4xl md:text-5xl lg:text-7xl 
          font-bold leading-tight`}
        >
          আপনার শিশুকে দিন একটি{" "}
          <span className="text-primary">সুন্দর ভবিষ্যৎ...</span>
        </h2>

        <p className="py-4 text-sm sm:text-base md:text-lg">
          Buy every toy with up to 15% discount
        </p>

        <Link href={"/products"} className="btn btn-primary btn-outline">
          Explore Products
        </Link>
      </div>

      {/* IMAGE SECTION */}
      <div className="flex-1 flex justify-center">
        <Image
          alt="hero-image"
          src="/assets/hero.png"
          width={650}
          height={600}
          className="w-63 sm:w-88 md:w-md lg:w-150 h-auto"
        />
      </div>
    </div>
  );
}
