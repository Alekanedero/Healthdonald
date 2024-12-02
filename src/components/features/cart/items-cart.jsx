import { formatPrice } from "@/lib/format-price";
import { useCartPrice, useCartStore } from "@/lib/store/use-cart-store";
import { Button } from "@/components/ui/button";
import { Trash2, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

export const ItemsCart = ({ className }) => {
  const items = useCartStore((s) => s.items);
  const price = useCartPrice();
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <h2 className="text-lg font-bold">Cart</h2>
        <p className="ml-auto font-mono font-bold">{formatPrice(price)}</p>
      </div>

      <div
        className={cn("flex flex-col gap-2 overflow-y-auto py-2", className)}
      >
        {Object.values(items).map((cartItem) => (
          <CartLineItem
            quantity={cartItem.quantity}
            item={cartItem.item}
            key={cartItem.item.id}
          />
        ))}
      </div>
    </div>
  );
};

const CartLineItem = ({ item, quantity }) => {
  const removeItem = useCartStore((s) => s.removeItem);

  return (
    <div className="flex items-center gap-4">
      <div className="relative size-14 rounded-md border bg-accent/50 p-1">
        {/* eslint-disable */}
        <img src={item.image} alt={`${item.name}'s image`} />
        {/* eslint-enable */}
        <span className=" absolute -right-2 -top-2 flex size-5 items-center justify-center rounded-full border bg-gray-400 text-xs">
          {quantity}
        </span>
      </div>
      <p className="font-bold">{item.name}</p>
      <p className="ml-auto font-mono text-sm">
        {formatPrice(item.price * quantity)}
      </p>
      <Button size="sm" variant="outline" onClick={() => removeItem(item)}>
        {quantity === 1 ? <Trash2 size={12} /> : <Minus size={12} />}
      </Button>
    </div>
  );
};
