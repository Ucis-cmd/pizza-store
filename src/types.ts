export interface IPizzaProps {
  id: number;
  name: string;
  description: string;
  basePrice: number;
}

export enum PizzaSize {
  Small = "Small (20cm)",
  Medium = "Medium (25cm)",
  Large = "Large (30cm)",
}

export enum DoughType {
  Thin = "Thin",
  Classic = "Classic",
  Wholegrain = "Wholegrain",
}

export enum CheeseType {
  Classic = "Classic",
  Vegan = "Vegan",
}
