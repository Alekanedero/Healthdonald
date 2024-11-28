import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { ShoppingBasket } from "lucide-react";

export const Footer = () => {
  return (
    <header className="flex items-center gap-2 px-4 py-4 border-t">
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
      <p className="text-xs">
        &copy; {new Date().getFullYear()} Healthdonald. All rights reserved.
      </p>
    </header>
  );
};
