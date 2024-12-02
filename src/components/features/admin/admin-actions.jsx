"use client";

import { buttonVariants } from "@/components/ui/button";
import { Toggle } from "@/components/ui/toggle";
import { useAdminStore } from "@/lib/store/use-admin-store";
import Link from "next/link";

export const AdminActions = () => {
  const adminStore = useAdminStore();

  return (
    <div className="fixed bottom-20 left-40 flex items-center gap-2 rounded-md border p-2">
      <Link
        href="items/new"
        className={buttonVariants({ className: "bg-green-700" })}
      >
        New
      </Link>
      <Toggle
        pressed={adminStore.adminEnabled}
        onPressedChange={() => {
          adminStore.toggleAdminEnabled();
        }}
      >
        Admin
      </Toggle>
    </div>
  );
};
