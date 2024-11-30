"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { ShoppingBasket, User } from "lucide-react";
import { useUserStore } from "@/lib/store/use-user-store";
import { useCartStore } from "@/lib/store/use-cart-store";

export const Header = () => {
  return (
    <header className="flex items-center gap-2 border-b p-4">
      <Link href="/" className="inline-flex items-center gap-2">
        <Image
          src="/healthdonals.png"
          alt="Healthdonals"
          width={32}
          height={32}
        />
        <p className="text-sm font-bold">Healthdonald</p>
      </Link>
      <div className="ml-auto" />
      <UserNameHeader />
      <ShoppingCart />
    </header>
  );
};

const ShoppingCart = () => {
  const cartQuantity = useCartQuantity();

  return (
    <Button
      size="sm"
      variant="outline"
      className="inline-flex items-center gap-2"
    >
      {cartQuantity}
      <ShoppingBasket size={12} />
    </Button>
  );
};

const UserNameHeader = () => {
  const userName = useUserStore((state) => state.userName);
  const logout = useUserStore((state) => state.logout);

  if (!userName) {
    return null;
  }

  return (
    <button onClick={logout} className="flex items-center gap-2 pr-2">
      <User size={16} />
      <p className="text-sm ">{userName}</p>
    </button>
  );
};

export const useCartQuantity = () => {
  return useCartStore((state) => {
    return Object.values(state.items).reduce((acc, item) => {
      return acc + item.quantity;
    }, 0);
  });
};
