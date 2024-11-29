"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useUserStore } from "@/lib/store/use-user-store";
import LoginPage from "./login/page"; // Importation par défaut

export default function Home() {
  const userName = useUserStore((state) => state.userName);

  if (!userName) {
    return <LoginPage />;
  }

  return (
    <main className="flex flex-col justify-center">
      <h1>Hello ma caille !!</h1>
    </main>
  );
}
