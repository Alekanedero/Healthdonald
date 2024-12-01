import { create } from "zustand";
import { CATEGORIES } from "../category-data";

export const useCategoryStore = create((set) => ({
  category: CATEGORIES[0].id,
  setCategory: (newCategory) => {
    set({ category: newCategory });
  },
}));
