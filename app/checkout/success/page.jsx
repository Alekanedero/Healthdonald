"use client";

import { clearCart } from "@/lib/store/use-cart-store";

import { Check } from "lucide-react";
import { useEffect } from "react";

export default function Success() {
  useEffect(() => {
    clearCart();
  }, []);

  return (
    <div className="mt-10 flex flex-col items-center justify-center gap-4">
      <Check size={32} className="text-primary" />
      <p className="text-2xl font-bold ">Yeah ! Your order is confirmed !</p>
    </div>
  );
}
