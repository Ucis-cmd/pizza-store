import { PizzaSize, DoughType, CheeseType } from "./types";
import { z } from "zod";

export const customizeFormSchema = z.object({
  size: z.nativeEnum(PizzaSize, {
    required_error: "Size is required",
  }),
  doughType: z.nativeEnum(DoughType, {
    required_error: "Dough type is required",
  }),
  cheeseType: z.nativeEnum(CheeseType, {
    required_error: "Cheese type is required",
  }),
  addOns: z.string().array(), 
});
