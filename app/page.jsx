"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useUserStore } from "@/lib/store/use-user-store";
import LoginPage from "./login/page"; // Utilisation de l'alias
import { useRouter } from "next/navigation";

export default function Home() {
  const userName = useUserStore((state) => state.userName);

  if (!userName) {
    return <LoginPage />;
  }

  return (
    <>
      <main className="flex flex-col justify-center relative">
        <h1>Hello ma caille !!</h1>
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
          router.push("/items/[itemId]/page");
        }}
        className="absolute flex items-center gap-2 bg-slate-200 py-4 px-4"
      >
        <Button type="submit">New</Button>
        <p>Admin</p>
      </form>
    );
  }
  return null;
};
