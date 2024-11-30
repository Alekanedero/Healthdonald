"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useCartStore = create(
  persist(
    (set) => ({
      items: {},
      addItem: (item) => {
        set((state) => {
          const itemId = item.id;
          if (state.items[itemId]) {
            state.items[itemId] = {
              quantity: state.items[itemId].quantity + 1,
              item,
            };
          } else {
            state.items[itemId] = {
              quantity: 1,
              item,
            };
          }

          return {
            items: { ...state.items },
          };
        });
      },
      removeItem: (item) => {
        set((state) => {
          const itemId = item.id;
          if (!state.items[itemId]) {
            return { items: { ...state.items } };
          }

          state.items[itemId] = {
            quantity: state.items[itemId].quantity - 1,
            item,
          };

          if (state.items[itemId]?.quantity <= 0) {
            delete state.items[itemId];
          }
          return {
            items: { ...state.items },
          };
        });
      },
    }),
    {
      name: "cart", // nom de la clé de stockage
    }
  )
);
