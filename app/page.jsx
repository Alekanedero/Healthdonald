"use client";

import { useUserStore } from "@/lib/store/use-user-store";
import LoginPage from "./login/page";
import { ItemsList } from "@/components/features/items/items-List";
import { FooterCart } from "@/components/features/footer-cart/footer-cart";
import { CategoryList } from "@/components/features/categories/category-list";

export default function Home() {
  const userName = useUserStore((state) => state.userName);

  if (!userName) {
    return <LoginPage />;
  }

  return (
    <main className="flex max-h-full flex-col">
      <div className="flex flex-1 gap-4 overflow-hidden">
        <CategoryList />
        <ItemsList />
      </div>
      <FooterCart />
    </main>
  );
}
