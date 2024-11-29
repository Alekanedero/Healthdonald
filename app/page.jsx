"use client";

import { Button } from "@/components/ui/button";
import { useUserStore } from "@/lib/store/use-user-store";
import LoginPage from "./login/page";
import { useRouter } from "next/navigation";
import { ItemsList } from "@/components/itemsList";

export default function Home() {
  const userName = useUserStore((state) => state.userName);

  if (!userName) {
    return <LoginPage />;
  }

  return (
    <>
      <main className="flex flex-col justify-center">
        <AdminNew />
        <ItemsList />
      </main>
    </>
  );
}

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
