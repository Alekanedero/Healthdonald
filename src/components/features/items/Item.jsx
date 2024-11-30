import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { formatPrice } from "@/lib/format-price";

export const Item = ({ item }) => {
  return (
    <div className={cn("relative rounded-md border p-3 shadow-inner")}>
      <p className="absolute right-2 top-2 font-mono">
        {formatPrice(item.price)}
      </p>
      <img
        src={item.image}
        alt={item.name}
        className="aspect-square w-full rounded-md object-contain"
      />

      <p>{item.name}</p>
      <div>
        <Button>Add</Button>
      </div>
    </div>
  );
};