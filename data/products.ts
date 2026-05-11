// data/products.ts
import { Product } from '@/types';

export const products: Product[] = [
  {
    id: 1,
    name: "Jaguar 5010",
    brand: "Jaguar",
    price: 50000,
    image: "/jag5010-VN.jpg",
    sizes: [36, 37, 38, 39, 40, 41, 42],
    category: "running",
    stock: 15
  },
  {
    id: 2,
    name: "Ultraboost DNA",
    brand: "Adidas",
    price: 124999,
    image: "https://picsum.photos/seed/shoe2/400/400",
    sizes: [38, 39, 40, 41, 42, 43],
    category: "running",
    stock: 10
  },
  {
    id: 3,
    name: "Old Skool",
    brand: "Vans",
    price: 67999,
    image: "https://picsum.photos/seed/shoe3/400/400",
    sizes: [36, 37, 38, 39, 40, 41, 42, 43, 44],
    category: "casual",
    stock: 25
  },
  {
    id: 4,
    name: "Air Jordan 1 Mid",
    brand: "Jordan",
    price: 159999,
    image: "https://picsum.photos/seed/shoe4/400/400",
    sizes: [38, 39, 40, 41, 42, 43, 44],
    category: "deportivo",
    stock: 8
  },
  {
    id: 5,
    name: "Monk Strap",
    brand: "Hush Puppies",
    price: 84999,
    image: "https://picsum.photos/seed/shoe5/400/400",
    sizes: [37, 38, 39, 40, 41, 42, 43],
    category: "formal",
    stock: 12
  },
  {
    id: 6,
    name: "Gel-Kayano 30",
    brand: "Asics",
    price: 179999,
    image: "https://picsum.photos/seed/shoe6/400/400",
    sizes: [38, 39, 40, 41, 42, 43],
    category: "running",
    stock: 7
  },
  {
    id: 7,
    name: "Superga 2750",
    brand: "Superga",
    price: 45999,
    image: "https://picsum.photos/seed/shoe7/400/400",
    sizes: [36, 37, 38, 39, 40, 41],
    category: "casual",
    stock: 20
  },
  {
    id: 8,
    name: "Moc Toe Boot",
    brand: "Red Wing",
    price: 189999,
    image: "https://picsum.photos/seed/shoe8/400/400",
    sizes: [39, 40, 41, 42, 43, 44],
    category: "formal",
    stock: 5
  }
];