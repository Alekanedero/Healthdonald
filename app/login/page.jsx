"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useUserStore } from "@/lib/store/use-user-store";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const userStore = useUserStore();
  const router = useRouter();

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const username = formData.get("username");
    userStore.login(username);
    router.push("/");
  };

  return (
    <>
      <div className="relative flex flex-col items-center justify-center gap-4 py-4">
        <div className="absolute left-2 top-2 rotate-12">
          <Image
            src="/categories/burger.png"
            alt="burger"
            width={50}
            height={50}
          />
        </div>
        <div className="absolute right-2 top-2 rotate-12">
          <Image
            src="/categories/nuggets.png"
            alt="nuggets"
            width={50}
            height={50}
          />
        </div>
        <div className="absolute bottom-2 right-2 rotate-12">
          <Image
            src="/categories/dessert.png"
            alt="dessert"
            width={50}
            height={50}
          />
        </div>
        <div className="absolute bottom-2 left-2 -rotate-12">
          <Image
            src="/categories/fries.png"
            alt="fries"
            width={50}
            height={50}
          />
        </div>
        <h1 className="text-2xl font-bold ">Welcome to Healthdonald !</h1>
        <p>Login first to access our application.</p>
        <form onSubmit={handleSubmit} className="flex items-center gap-2">
          <Input type="text" placeholder="Enter your name" name="username" />
          <Button type="submit">Login</Button>
        </form>
      </div>
    </>
  );
}
