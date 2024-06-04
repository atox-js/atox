"use client";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { BiLogoTwitter } from "react-icons/bi";
import { useRouter } from "next/navigation";

export default function NavBar() {
  const router = useRouter();
  return (
    <header className="fixed top-0 py-2 w-full backdrop-blur-xl bg-opacity-20 flex items-center border-b border-gray/25">
      <nav className="w-full justify-between px-5 flex items-center">
        <div className="flex items-center justify-center space-x-2 font-extrabold">
          <Image
            src="/atox.png"
            alt="Atox"
            className="rounded-md"
            width={40}
            height={40}
          />
          <h1 className="text-2xl">Atox.js</h1>
        </div>
        <div>
          <Button onClick={() => router.push("//x.com/atox_js")}><BiLogoTwitter size={25} /></Button>
        </div>
      </nav>
    </header>
  );
}
