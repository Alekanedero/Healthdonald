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

          if (state.items[itemId]?.quantity === 0) {
            delete state.items[itemId];
          }
          return {
            items: { ...state.items },
          };
        });
      },
    }),
    {
      name: "cart-store", // nom de la clé de stockage
    }
  )
);

export const useCartQuantity = () => {
  return useCartStore((state) => {
    return Object.values(state.items).reduce((acc, curr) => {
      return acc + curr.quantity;
    }, 0);
  });
};

export const useCartPrice = () => {
  return useCartStore((state) => {
    return Object.values(state.items).reduce((acc, curr) => {
      return acc + curr.quantity * curr.item.price;
    }, 0);
  });
};

export const clearCart = () => {
  useCartStore.setState({ items: {} });
};
