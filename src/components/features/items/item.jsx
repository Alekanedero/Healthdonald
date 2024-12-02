import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";
import { formatPrice } from "@/lib/format-price";
import { Minus, Plus } from "lucide-react";
import { useAdminStore } from "@/lib/store/use-admin-store";
import { useCartStore } from "@/lib/store/use-cart-store";
import { Trash2 } from "lucide-react";
import Link from "next/link";
import { Edit } from "lucide-react";

export const Item = ({ item, className }) => {
  const adminEnabled = useAdminStore((s) => s.adminEnabled);
  return (
    <div
      className={cn(
        "relative rounded-md border p-3 shadow-inner h-fit flex flex-col group",
        className
      )}
    >
      {adminEnabled ? (
        <div className="absolute left-2 top-2 flex items-center gap-2 opacity-0 transition group-hover:opacity-100">
          <Link
            href={`/items/${item.id}`}
            className={buttonVariants({ size: "sm", variant: "outline" })}
          >
            <Edit size={12} />
          </Link>
          <Button variant="outline" size="sm">
            <Trash2 size={12} />
          </Button>
        </div>
      ) : null}
      <p className="absolute right-2 top-2 font-mono">
        {formatPrice(item.price)}
      </p>
      {/* eslint-disable */}
      <img
        src={item.image}
        alt={item.name}
        className="aspect-square w-full rounded-md object-contain"
      />
      {/* eslint-enable */}

      <p className="pb-2 text-sm">{item.name}</p>

      <div className="mt-auto flex justify-end">
        <CardButton item={item} />
      </div>
    </div>
  );
};

const CardButton = ({ item }) => {
  const quantity = useCartStore((state) => state.items[item.id]?.quantity ?? 0);
  const add = useCartStore((state) => state.addItem);
  const remove = useCartStore((state) => state.removeItem);

  if (quantity === 0) {
    return (
      <Button size="sm" onClick={() => add(item)}>
        Add
      </Button>
    );
  }

  return (
    <div className="flex items-center gap-2">
      <Button size="sm" variant="outline" onClick={() => remove(item)}>
        <Minus size={16} />
      </Button>
      <p>{quantity}</p>
      <Button size="sm" variant="outline" onClick={() => add(item)}>
        <Plus size={16} />
      </Button>
    </div>
  );
};
