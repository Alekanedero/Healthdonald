"use client";

import { Button } from "@/components/ui/button";
import { useUserStore } from "@/lib/store/use-user-store";
import LoginPage from "./login/page";
import { useRouter } from "next/navigation";
import { ItemsList } from "@/components/features/items/items-List";
import { FooterCart } from "@/components/features/footer-cart/footer-cart";
import { CategoryList } from "@/components/features/categories/category-list";

const AdminNew = () => {
  const adminLoggedIn = useUserStore((state) => state.isAdmin);
  const router = useRouter();

  if (adminLoggedIn) {
    return (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          router.push("/items/id");
        }}
        className="flex items-center gap-2 bg-slate-200 p-4"
      >
        <Button type="submit" className="w-full">
          New
        </Button>
        <p>Admin</p>
      </form>
    );
  }
  return null;
};

export default function Home() {
  const userName = useUserStore((state) => state.userName);

  if (!userName) {
    return <LoginPage />;
  }

  return (
    <main className="flex max-h-full flex-col">
      <AdminNew />
      <div className="flex flex-1 gap-4 overflow-hidden">
        <CategoryList />
        <ItemsList />
      </div>
      <FooterCart />
    </main>
  );
}
