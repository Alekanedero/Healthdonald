import { CATEGORIES } from "@/lib/category-data";
import { useCategoryStore } from "@/lib/store/use-category-store";
import { cn } from "@/lib/utils";
import Image from "next/image";

export const CategoryList = () => {
  const { category, setCategory } = useCategoryStore();
  return (
    <div className="flex flex-col gap-2 pl-4">
      {CATEGORIES.map((c) => (
        <button
          onClick={() => {
            setCategory(c.id);
          }}
          key={c.id}
          id={c.id}
          className={cn(
            "relative rounded-md border p-2 flex flex-col items-center",
            {
              "bg-accent/50": category === c.id,
            }
          )}
        >
          <Image src={c.logo} alt={c.title} width={32} height={32} />
          <p className="text-xs">{c.title}</p>
        </button>
      ))}
    </div>
  );
};
