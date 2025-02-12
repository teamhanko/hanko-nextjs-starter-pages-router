import HankoAuth from "@/components/HankoAuth";
import HankoStarterInfo from "@/hanko starter components/HankoStarterInfo";

import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div>
      <HankoStarterInfo/>    
      <HankoAuth/>    
    </div>
  );
}
