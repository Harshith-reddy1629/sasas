"use client";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    try {
      (async () => {
        const R = await fetch("/api");
        const r = await R.json();
        console.log(r);
      })();
    } catch (error) {}
  }, []);
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      VERCEL
    </div>
  );
}
