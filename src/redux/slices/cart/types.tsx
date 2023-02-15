export interface cartSliceTypes {
  items: cartItem[];
  globalCount: number;
  totalPrice: number;
}

export type cartItem = {
  category: number;
  id: number;
  imageUrl: string;
  name: string;
  price: number;
  rating: number;
  activeSize: number;
  activeType: number;
  count: number;
};

export type actionAddPizzaToCart = {
  category: number;
  imageUrl: string;
  id: number;
  name: string;
  price: number;
  rating: number;
  activeSize: number;
  activeType: number;
};
