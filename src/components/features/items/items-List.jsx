import useSWR from "swr";
import { getItems } from "../../../lib/items/get-items";
import { Loader } from "lucide-react";
import { Item } from "./Item";

export const ItemsList = () => {
  const { data, isLoading } = useSWR(`/items`, async () => {
    return getItems();
  });
  console.log(data);

  if (isLoading) {
    return <Loader className="animate-spin" />;
  }

  return (
    <div className="grid grid-cols-2 gap-3">
      {data?.map((item) => (
        <div key={item.id}>
          <Item item={item} />
        </div>
      ))}
    </div>
  );
};
