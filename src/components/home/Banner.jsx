import { fontBangla } from "@/app/layout";
import Image from "next/image";
import React from "react";

export default function Banner() {
  return (
    <div className="flex items-center justify-between space-y-5">
      <div className="flex-1">
        <h2 className={`${fontBangla.className} text-7xl font-bold leading-20`}>
          আপনার শিশুকে দিন একটি{" "}
          <span className="text-primary">সুন্দর ভবিষ্যৎ...</span>
        </h2>
        <p className="py-6">Buy evry toy with up to 15% discount</p>
        <button className="btn btn-primary btn-outline">
          Explore Products
        </button>
      </div>
      <div className="flex-1">
        <Image
          alt="hero-image"
          src={"/assets/hero.png"}
          width={650}
          height={600}
        />
      </div>
    </div>
  );
}
