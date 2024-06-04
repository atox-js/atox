"use client";
import NavBar from "@/components/section/NavBar";
import { motion } from "framer-motion";
import { BiLogoJavascript, BiLogoTypescript } from "react-icons/bi";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";

export default function Home() {
  return (
    <main>
      <head>
        <title>Atox</title>
        <meta name="description" content="Javascript & Typescript Engineer" />
      </head>
      <NavBar />
      <div className="min-h-svh break-after-all flex flex-col bg-[#f8fcff]">
        <div className="h-dvh flex flex-col justify-center items-center">
          <motion.div
            transition={{ duration: 1 }}
            initial={{ y: 25, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            <p className="flex flex-col items-center text-center font-extrabold text-[250%] leading-none">
              Atox
              <motion.span
                transition={{ delay: 0.8, duration: 1 }}
                initial={{ backgroundColor: "black" }}
                animate={{ backgroundColor: "#3178c6" }}
                className="text-[60%] p-1 w-[42px] text-white rounded-sm duration-1000"
              >
                .js
              </motion.span>
            </p>
          </motion.div>
          <motion.span
            transition={{ delay: 1.2, duration: 1 }}
            initial={{ y: 25, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="mt-14 text-center flex flex-col items-center text-slate-500"
          >
            Scroll down
            <MdKeyboardDoubleArrowDown size={15} className="mt-2" />
          </motion.span>
        </div>
        <div className="p-24 pt-0 text-center flex flex-col items-center">
          <div className="w-96 p-12 border-2 rounded-lg flex flex-col items-center justify-center">
            <p className="font-bold text-[250%]">About me</p>
            <p>I am a programmer who mainly uses Javascript and Typescript</p>
            <div className="flex">
              <BiLogoJavascript className="text-js" size={25} />
              <BiLogoTypescript className="text-ts" size={25} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
