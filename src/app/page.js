"use client"

import Image from "next/image";
import Paper from "../components/paper";
import Mail_collection from "@/components/mail/mail_collection";

export default function Home() {
  return (
    <div className="m-0 p-0 border-none">
      <div className="absolute z-50 w-screen h-screen bg-[#fbfbfb] whiteUp"></div>
      <Image
        src="/valentines2025/title_short.png"
        alt="To the only girl I've ever loved"
        width={1000}
        height={100}
        className="absolute z-50 mt-[-48px] ml-[288px] titleUp"
      />
      <div className="grid grid-rows-[auto_1fr_auto] place-items-center bg-white w-screen h-screen">
        <Paper/>
        <Image
        src="/valentines2025/title_long.png"
        alt="To the only girl I've ever loved"
        width={1000}
        height={100}
        className="z-10 -mt-[400px] pinkify"
        />
        <Mail_collection/>
      </div>
    </div>
  );
}
