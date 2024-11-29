import useSWR from "swr";
import { getItems } from "../lib/items/get-items";
import { Card } from "./ui/card";

export const ItemsList = () => {
  const { data, isLoading, error } = useSWR(`/categories`, async () => {
    const items = await getItems();
    return items;
  });

  return (
    /* eslint-disable */
    <div className="p-4">
      {data ? console.log(data) : null}
      <div className=" grid grid-cols-2 gap-4 ">
        {data
          ? data.map((item) => (
              <div key={item.id}>
                <Card className="relative">
                  <p className="absolute right-3 top-1">$ {item.price / 100}</p>
                  <img
                    src={item.image}
                    alt={item.name}
                    width={150}
                    height={150}
                  />
                  <p>{item.name}</p>
                </Card>
              </div>
            ))
          : null}
      </div>
      {error ? <p>{error}</p> : null}
      {isLoading ? <div>Loading...</div> : null}
    </div>
    /* eslint-enable */
  );
};
