export enum Status {
  LOADING = "loading",
  COMPLETED = "completed",
  ERROR = "error",
}

export interface PizzaSliceTypes {
  items: PizzaItem[];
  status: Status.LOADING | Status.COMPLETED | Status.ERROR;
}

export type PizzaItem = {
  category: number;
  id: number;
  imageUrl: string;
  name: string;
  price: number;
  rating: number;
  sizes: number[];
  types: number[];
};
