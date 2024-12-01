"use client";

import { useCartStore, useCartPrice } from "@/lib/store/use-cart-store";
import { formatPrice } from "@/lib/format-price";
import { Button } from "@/components/ui/button";
import { Trash2, Minus, ChevronDown, ChevronUp } from "lucide-react";
import { useState, useEffect } from "react";

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
      {open ? (
        <>
          <div className="flex items-center gap-4">
            <h2 className="text-lg font-bold">Cart</h2>
            <p className="ml-auto font-mono font-bold">{formatPrice(price)}</p>
          </div>
          <div className="flex max-h-32 flex-col gap-2 overflow-y-auto py-2">
            {Object.values(cart.items).map((cartItem) => (
              <CartLineItem
                quantity={cartItem.quantity}
                item={cartItem.item}
                key={cartItem.item.id}
              />
            ))}
          </div>
        </>
      ) : null}
      <div className="flex items-center gap-2">
        <Button size="sm" className="w-full">
          Checkout
        </Button>
        {!open ? (
          <p className="ml-auto font-mono font-bold">{formatPrice(price)}</p>
        ) : null}
      </div>
    </div>
  );
};

const CartLineItem = ({ item, quantity }) => {
  const removeItem = useCartStore((s) => s.removeItem);
  return (
    <div className="flex items-center gap-4">
      <div className="relative size-14 rounded-md border bg-accent/50 p-1">
        {/* eslint-disable */}
        <img src={item.image} alt={`${item.name}'s image`} />
        {/* eslint-enable */}
        <span className=" absolute -right-2 -top-2 flex size-5 items-center justify-center rounded-full border bg-gray-400 text-xs">
          {quantity}
        </span>
      </div>
      <p className="font-bold">{item.name}</p>
      <p className="ml-auto font-mono text-sm">
        {formatPrice(item.price * quantity)}
      </p>
      <Button size="sm" variant="outline" onClick={() => removeItem(item)}>
        {quantity === 1 ? <Trash2 size={12} /> : <Minus size={12} />}
      </Button>
    </div>
  );
};
