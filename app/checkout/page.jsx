"use client";

import { ItemsCart } from "@/components/features/cart/items-cart";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import clsx from "clsx";
import useSWR from "swr";
import { getItems } from "@/lib/items/get-items";
import { Loader } from "lucide-react";
import { Item } from "@/components/features/items/item";
import { useCartStore } from "@/lib/store/use-cart-store";

export default function Checkout() {
  return (
    <div className={clsx("mx-4 flex flex-col gap-10")}>
      <ItemsCart />
      <UpSellDessert />
      <Link
        href="/checkout/success"
        className={buttonVariants({ size: "sm", className: "w-full" })}
      >
        Confirm your order
      </Link>
    </div>
  );
}

const UpSellDessert = () => {
  const isDessert = useCartStore(
    (s) =>
      Object.values(s.items).filter((i) => i.item.category === "dessert")
        .length > 0
  );

  if (isDessert) {
    return null;
  }

  return (
    <div className="flex flex-col gap-4">
      <p className="text-lg font-bold">Would you like to try our dessert ?</p>
      <DessertList />
    </div>
  );
};

const DessertList = () => {
  const category = "dessert";
  const { data } = useSWR(`/items/${category}`, async () => {
    return getItems(category);
  });
  if (!data) {
    return <Loader className="animate-spin" />;
  }
  return (
    <div className="flex w-full gap-4 overflow-x-auto">
      {data.map((cartItem) => (
        <Item
          className="h-fit w-32 shrink-0 grow"
          key={cartItem.id}
          item={cartItem}
        />
      ))}
    </div>
  );
};
