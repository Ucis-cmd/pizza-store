import { SelectItem } from "./components/ui/select";
import {
  FormField,
  FormItem,
  FormControl,
  Form,
  FormMessage,
} from "./components/ui/form";
import { Button } from "./components/ui/button";

import SelectInput from "./components/SelectInput/SelectInput";
import ProductItem from "./components/ProductItem/ProductItem";
import CheckboxSelector from "./components/CheckboxSelector/CheckboxSelector";

import { pizzaData, editSectionData } from "./data";
import { customizeFormSchema } from "./schemas";
import { IPizzaProps } from "./types";
import PizzaCustomizeModal from "./components/PizzaCustomizeModal/PizzaCustomizeModal";

import useCart from "./hooks/useCart";

import { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

function ProductSection() {
  const form = useForm<z.infer<typeof customizeFormSchema>>({
    resolver: zodResolver(customizeFormSchema),
    defaultValues: {
      size: undefined, // Remove default values for required fields
      doughType: undefined,
      cheeseType: undefined,
      addOns: [],
    },
    mode: "onChange",
  });

  const [customizablePizza, setCustomizablePizza] =
    useState<IPizzaProps | null>(null);

  const { addToCart } = useCart();

  function handlePizzaCustomize(id: number) {
    const filteredPizza = pizzaData.find((pizza) => pizza.id === id);
    setCustomizablePizza(filteredPizza || null);
  }

  function onSubmit(values: z.infer<typeof customizeFormSchema>) {
    console.log(values);
    if (!customizablePizza) {
      console.error("No pizza selected");
      return;
    }
    addToCart({
      name: customizablePizza?.name,
      price: customizablePizza?.basePrice,
      id: customizablePizza?.id,
      ...values,
    });
    setCustomizablePizza(null);
  }

  const pizzaItems = pizzaData.map((pizza) => (
    <ProductItem
      key={pizza.id}
      onCustomize={handlePizzaCustomize}
      id={pizza.id}
      title={pizza.name}
      description={`From $${pizza.basePrice.toFixed(2)}`}
    />
  ));

  const selectInputs = editSectionData.selects.map((item) => (
    <FormField
      key={item.id}
      control={form.control}
      name={item.name as "size" | "doughType" | "cheeseType"} // Make sure this matches your schema
      render={({ field }) => (
        <FormItem>
          <FormControl>
            <SelectInput
              onValueChange={field.onChange}
              placeholder={item.placeholder}
              {...field}
            >
              {item.items.map((selectOption) => (
                <SelectItem key={selectOption.value} value={selectOption.value}>
                  {selectOption.value}
                </SelectItem>
              ))}
            </SelectInput>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  ));

  const ingredientCheckboxes = editSectionData.checkboxes.map((item) => (
    <FormField
      key={item.value}
      control={form.control}
      name="addOns"
      render={({ field }) => (
        <FormItem>
          <FormControl>
            <CheckboxSelector
              id={item.value}
              label={item.value}
              checked={field.value.includes(item.value)}
              onCheckedChange={(checked) => {
                if (checked) {
                  field.onChange([...field.value, item.value]);
                } else {
                  field.onChange(
                    field.value.filter((value) => value !== item.value)
                  );
                }
              }}
            />
          </FormControl>
        </FormItem>
      )}
    />
  ));

  return (
    <div className="grid justify-center grid-cols-[repeat(auto-fit,var(--container-xs))] sm:grid-cols-[repeat(auto-fit,var(--container-sm))] w-full max-w-7xl gap-5 m-auto">
      <PizzaCustomizeModal
        customizablePizza={customizablePizza}
        setCustomizablePizza={setCustomizablePizza}
      >
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            {selectInputs}
            <div className="flex flex-wrap gap-8">{ingredientCheckboxes}</div>
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </PizzaCustomizeModal>
      {pizzaItems}
    </div>
  );
}
export default ProductSection;
