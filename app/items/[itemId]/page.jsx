"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CATEGORIES } from "@/lib/category-data";
import { ImageInput } from "@/components/features/images/Image-Input";
import Image from "next/image";
import { getId } from "@/lib/get-id";
import { setItem } from "@/lib/items/set-items";
import { useRouter } from "next/navigation";
import { useUserStore } from "@/lib/store/use-user-store";
import { Alert, AlertTitle } from "@/components/ui/alert";
import { X } from "lucide-react";

const formSchema = z.object({
  id: z.string().min(2).max(50),
  name: z.string().min(2).max(50),
  category: z.string().min(2).max(50),
  price: z.coerce.number().min(0).max(1000),
  image: z.any(),
});

export default function ItemIdPage() {
  const isAdmin = useUserStore((state) => state.isAdmin);
  const router = useRouter();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      id: "xx",
    },
  });

  if (!isAdmin) {
    return (
      <Alert>
        <X size={12} />
        <AlertTitle>You can't create item</AlertTitle>
      </Alert>
    );
  }

  // pour debeugger les erreurs
  // console.log(form.formState.errors);

  async function onSubmit(values) {
    const id = getId(values.name);
    await setItem(id, {
      name: values.name,
      category: values.category,
      price: values.price * 100,
      image: values.image,
      id: id,
    });
    console.log(values);
    router.push("/");
  }

  return (
    <div className="flex flex-col items-center pt-4">
      <h1 className="text-2xl font-bold ">Add an item</h1>
      <Form {...form} className="m-auto w-full">
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full space-y-6 p-4"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter item name" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Category</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {CATEGORIES.map((category) => (
                      <SelectItem key={category.id} value={category.title}>
                        <div className="flex items-center gap-2">
                          <Image
                            src={category.logo}
                            alt={category.title}
                            width={32}
                            height={32}
                          />
                          <p>{category.title}</p>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Price</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter item price"
                    type="number"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="image"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Image URL</FormLabel>
                <FormControl>
                  <ImageInput image={field.value} onChange={field.onChange} />
                </FormControl>
              </FormItem>
            )}
          />
          <Button
            className="w-full"
            type="submit"
            disabled={form.formState.isSubmitted}
          >
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
}
