import useSWR from "swr";
import { getItems } from "@/lib/items/get-items";
import { Loader } from "lucide-react";
import { Item } from "./item";
import { useCategoryStore } from "@/lib/store/use-category-store";

export const ItemsList = () => {
  const category = useCategoryStore((state) => state.category);
  const { data, isLoading } = useSWR(`/items/${category}`, async () => {
    return getItems(category);
  });

  if (isLoading) {
    return <Loader className="animate-spin" />;
  }

  return (
    <div className="mr-4 grid max-h-full grid-cols-2 gap-3 overflow-x-auto pb-10">
      {data?.map((item) => (
        <Item item={item} key={item.id} />
      ))}
    </div>
  );
};
