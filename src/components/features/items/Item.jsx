import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { formatPrice } from "@/lib/format-price";
import { useCartStore } from "@/lib/store/use-cart-store";
import { Minus } from "lucide-react";
import { Plus } from "lucide-react";

export const Item = ({ item }) => {
  return (
    <div className={cn("relative rounded-md border p-3 shadow-inner")}>
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
      <p>{item.name}</p>
      <div className="flex items-end justify-end">
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
