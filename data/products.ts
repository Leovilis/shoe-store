// data/products.ts
import { Product } from "@/types";

export const products: Product[] = [
  {
    id: 1,
    name: "Jaguar 5010",
    brand: "Jaguar",
    price: 50000,
    image: "/jag5010-NG.jpg",
    colors: [
      {
        name: "Negro/Lima",
        hex: "#1a1a1a",
        hex2: "#7cf78e",
        images: [
                  "/jag5010-NG.jpg", 
                  "/jag5010-NG-perf.jpg",
                  "/jag5010-NG-top.jpg",
                  "/jag5010-NG-left.jpg",
                ],
        sizes: [40, 41, 42, 43, 44, 45],
      },
      // {
      //   name: "Negro",
      //   hex: "#1a1a1a",
      //   image: "/jag5010-NG.jpg",  // poné tu imagen real acá
      //   sizes: [37, 38, 39, 40, 41, 42]
      // },
      // {
      //   name: "Blanco",
      //   hex: "#f0f0f0",
      //   image: "/jag5010-BL.jpg",  // poné tu imagen real acá
      //   sizes: [36, 37, 38, 39, 40]
      // },
    ],
    sizes: [40, 41, 42, 43, 44, 45],
    category: "botines",
    stock: 15,
  },
  {
    id: 2,
    name: "Jaguar 9211 Deportivas",
    brand: "Jaguar",
    price: 45000,
    image: "/jag9211-BL.jpg",
    colors: [
      {
        name: "Azul",
        hex: "#1a1a1a",

        images: [
                  "/jag9211-BL.jpg",
                  "/jag9211-BL-perf.jpg",
                  "/jag9211-BL-top.jpg",
                  "/jag9211-BL-left.jpg",
                ],
        sizes: [30, 31, 32, 33, 34, 35],
      },
      {
        name: "Gris/Rosa",
        hex: "#c2bec0",
        hex2: "#d96aca",
        images: [
                  "/jag9211-RS.jpg",
                  "/jag9211-RS-perf.jpg",
                  "/jag9211-RS-left.jpg",
                  
                ],
        sizes: [30, 31, 32, 33, 34, 35],
      },
    ],
    sizes: [30, 31, 32, 33, 34, 35],
    category: "deportivo",
    stock: 10,
  },
  // {
  //   id: 3,
  //   name: "Old Skool",
  //   brand: "Vans",
  //   price: 67999,
  //   image: "https://picsum.photos/seed/shoe3/400/400",
  //   colors: [
  //     {
  //       name: "Negro/Blanco",
  //       hex: "#1a1a1a",
  //       image: "https://picsum.photos/seed/shoe3/400/400",
  //       sizes: [36, 37, 38, 39, 40, 41, 42, 43, 44],
  //     },
  //     {
  //       name: "Marino",
  //       hex: "#1b2a4a",
  //       image: "https://picsum.photos/seed/shoe3b/400/400",
  //       sizes: [37, 38, 39, 40, 41, 42],
  //     },
  //   ],
  //   sizes: [36, 37, 38, 39, 40, 41, 42, 43, 44],
  //   category: "casual",
  //   stock: 25,
  // },
  // {
  //   id: 4,
  //   name: "Air Jordan 1 Mid",
  //   brand: "Jordan",
  //   price: 159999,
  //   image: "https://picsum.photos/seed/shoe4/400/400",
  //   colors: [
  //     {
  //       name: "Rojo",
  //       hex: "#c0392b",
  //       image: "https://picsum.photos/seed/shoe4/400/400",
  //       sizes: [38, 39, 40, 41, 42, 43, 44],
  //     },
  //     {
  //       name: "Royal",
  //       hex: "#2756b1",
  //       image: "https://picsum.photos/seed/shoe4b/400/400",
  //       sizes: [39, 40, 41, 42, 43],
  //     },
  //   ],
  //   sizes: [38, 39, 40, 41, 42, 43, 44],
  //   category: "deportivo",
  //   stock: 8,
  // },
  // {
  //   id: 5,
  //   name: "Monk Strap",
  //   brand: "Hush Puppies",
  //   price: 84999,
  //   image: "https://picsum.photos/seed/shoe5/400/400",
  //   colors: [
  //     {
  //       name: "Marrón",
  //       hex: "#6b3a2a",
  //       image: "https://picsum.photos/seed/shoe5/400/400",
  //       sizes: [37, 38, 39, 40, 41, 42, 43],
  //     },
  //     {
  //       name: "Negro",
  //       hex: "#1a1a1a",
  //       image: "https://picsum.photos/seed/shoe5b/400/400",
  //       sizes: [38, 39, 40, 41, 42],
  //     },
  //   ],
  //   sizes: [37, 38, 39, 40, 41, 42, 43],
  //   category: "formal",
  //   stock: 12,
  // },
  // {
  //   id: 6,
  //   name: "Gel-Kayano 30",
  //   brand: "Asics",
  //   price: 179999,
  //   image: "https://picsum.photos/seed/shoe6/400/400",
  //   colors: [
  //     {
  //       name: "Azul",
  //       hex: "#1a4a7c",
  //       image: "https://picsum.photos/seed/shoe6/400/400",
  //       sizes: [38, 39, 40, 41, 42, 43],
  //     },
  //     {
  //       name: "Negro",
  //       hex: "#1a1a1a",
  //       image: "https://picsum.photos/seed/shoe6b/400/400",
  //       sizes: [39, 40, 41, 42],
  //     },
  //   ],
  //   sizes: [38, 39, 40, 41, 42, 43],
  //   category: "running",
  //   stock: 7,
  // },
  // {
  //   id: 7,
  //   name: "Superga 2750",
  //   brand: "Superga",
  //   price: 45999,
  //   image: "https://picsum.photos/seed/shoe7/400/400",
  //   colors: [
  //     {
  //       name: "Blanco",
  //       hex: "#f0f0f0",
  //       image: "https://picsum.photos/seed/shoe7/400/400",
  //       sizes: [36, 37, 38, 39, 40, 41],
  //     },
  //     {
  //       name: "Rojo",
  //       hex: "#c0392b",
  //       image: "https://picsum.photos/seed/shoe7b/400/400",
  //       sizes: [36, 37, 38, 39, 40],
  //     },
  //   ],
  //   sizes: [36, 37, 38, 39, 40, 41],
  //   category: "casual",
  //   stock: 20,
  // },
  // {
  //   id: 8,
  //   name: "Moc Toe Boot",
  //   brand: "Red Wing",
  //   price: 189999,
  //   image: "https://picsum.photos/seed/shoe8/400/400",
  //   colors: [
  //     {
  //       name: "Miel",
  //       hex: "#b5651d",
  //       image: "https://picsum.photos/seed/shoe8/400/400",
  //       sizes: [39, 40, 41, 42, 43, 44],
  //     },
  //     {
  //       name: "Negro",
  //       hex: "#1a1a1a",
  //       image: "https://picsum.photos/seed/shoe8b/400/400",
  //       sizes: [40, 41, 42, 43],
  //     },
  //   ],
  //   sizes: [39, 40, 41, 42, 43, 44],
  //   category: "formal",
  //   stock: 5,
  // },
];
