"use client";

import { useCartStore, useCartPrice } from "@/lib/store/use-cart-store";
import { formatPrice } from "@/lib/format-price";
import { Button, buttonVariants } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";
import { ItemsCart } from "../cart/items-cart";

export const FooterCart = () => {
  const [open, setOpen] = useState(false);

  const cart = useCartStore();
  const price = useCartPrice();

  useEffect(() => {
    if (Object.keys(cart.items).length === 0) {
      setOpen(false);
    }
  }, [cart.items]);

  if (Object.keys(cart.items).length === 0) {
    return null;
  }

  return (
    <div className=" fixed inset-x-0 bottom-0 m-auto max-w-md gap-4 rounded-t-xl border-x border-t bg-card p-4 pt-10">
      <Button
        className="absolute inset-x-4 top-0 hover:bg-transparent"
        variant="ghost"
        size="sm"
        onClick={() => setOpen((s) => !s)}
      >
        {open ? <ChevronDown size={12} /> : <ChevronUp size={12} />}
      </Button>
      {open ? <ItemsCart className="max-h-32" /> : null}
      <div className="flex items-center gap-2">
        <Link
          href="/checkout"
          className={buttonVariants({ size: "sm", className: "w-full" })}
        >
          Checkout
        </Link>
        {!open ? (
          <p className="ml-auto font-mono font-bold">{formatPrice(price)}</p>
        ) : null}
      </div>
    </div>
  );
};
