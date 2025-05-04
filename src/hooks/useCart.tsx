import { create } from "zustand";
import { PizzaSize, DoughType, CheeseType } from "@/types";

export interface CartItemProps {
  name: string | undefined;
  id: number | undefined;
  price: number | undefined;
  size: PizzaSize;
  doughType: DoughType;
  cheeseType: CheeseType;
  addOns: string[];
}

interface Store {
  cartItems: CartItemProps[];
  addToCart: (newItem: CartItemProps) => void;
}

const useCart = create<Store>((set) => ({
  cartItems: [],
  addToCart: (newItem: CartItemProps) =>
    set((state) => ({ cartItems: [...state.cartItems, newItem] })),
}));

export default useCart;
