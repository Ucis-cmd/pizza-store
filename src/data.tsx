import { PizzaSize, DoughType, CheeseType } from "./types";

export const pizzaData = [
  {
    id: 1,
    name: "Chicken Pizza",
    description: "It cluckin' delicious!",
    basePrice: 14.99,
  },
  {
    id: 2,
    name: "Pepperoni Classic",
    description: "Timeless perfection with spicy pepperoni",
    basePrice: 12.99,
  },
  {
    id: 3,
    name: "Veggie Supreme",
    description: "Garden fresh veggies on a crispy crust",
    basePrice: 13.99,
  },
  {
    id: 4,
    name: "Margherita",
    description: "Simple, classic, and oh-so-good",
    basePrice: 11.99,
  },
  {
    id: 5,
    name: "BBQ Pulled Pork",
    description: "Smoky, sweet, and finger-lickin' good",
    basePrice: 15.99,
  },
  {
    id: 6,
    name: "Hawaiian",
    description: "Sweet pineapple meets savory ham",
    basePrice: 14.49,
  },
  {
    id: 7,
    name: "Meat Lovers",
    description: "For those who dream in meat",
    basePrice: 16.99,
  },
  {
    id: 8,
    name: "Truffle Mushroom",
    description: "Earthy luxury on a pizza crust",
    basePrice: 17.49,
  },
];

export const editSectionData = {
  selects: [
    {
      id: 1,
      placeholder: "Size",
      name: "size",
      items: [
        { value: PizzaSize.Small },
        { value: PizzaSize.Medium },
        { value: PizzaSize.Large },
      ],
    },
    {
      id: 2,
      placeholder: "Dough type",
      name: "doughType",
      items: [
        { value: DoughType.Classic },
        { value: DoughType.Wholegrain },
        { value: DoughType.Thin },
      ],
    },
    {
      id: 3,
      name: "cheeseType",
      placeholder: "Cheese type",
      items: [{ value: CheeseType.Classic }, { value: CheeseType.Vegan }],
    },
  ],
  checkboxes: [
    { value: "Mozzarella" },
    { value: "Pepperoni" },
    { value: "Mushrooms" },
  ],
};
