// types/index.ts
export interface ProductColor {
  name: string;       // "Verde", "Negro", "Blanco"
  hex: string;  
  hex2?: string;      // ← segundo color opcional      // para mostrar el círculo de color
  images: string[];      // imagen correspondiente a ese color
  sizes: number[];    // talles disponibles para ese color
}

export interface Product {
  id: number;
  name: string;
  brand: string;
  price: number;
  image: string;          // imagen por defecto (primer color)
  colors: ProductColor[]; // variantes de color
  sizes: number[];        // todos los talles (union de todos los colores)
  category: 'running' | 'casual' | 'botines' | 'deportivo';
  stock: number;
}

export interface CartItem extends Product {
  quantity: number;
  selectedSize: number;
  selectedColor?: string;  // nombre del color elegido
}

export type Category = Product['category'];