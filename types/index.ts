// types/index.ts
export interface Product {
  id: number;
  name: string;
  brand: string;
  price: number;
  image: string;
  sizes: number[];
  category: 'running' | 'casual' | 'formal' | 'deportivo';
  stock: number;
}

export interface CartItem extends Product {
  quantity: number;
  selectedSize: number;
}

export type Category = Product['category'];