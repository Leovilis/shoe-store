// store/cartStore.ts
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Product, CartItem } from '@/types';

interface CartStore {
  items: CartItem[];
  addItem: (product: Product, size: number) => void;
  removeItem: (id: number, size: number) => void;
  updateQuantity: (id: number, size: number, quantity: number) => void;
  clearCart: () => void;
  totalItems: () => number;
  totalPrice: () => number;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      
      addItem: (product: Product, size: number) => {
        const { items } = get();
        const existingItem = items.find(
          item => item.id === product.id && item.selectedSize === size
        );
        
        if (existingItem) {
          set({
            items: items.map(item =>
              item.id === product.id && item.selectedSize === size
                ? { ...item, quantity: item.quantity + 1 }
                : item
            )
          });
        } else {
          const newItem: CartItem = {
            ...product,
            quantity: 1,
            selectedSize: size
          };
          set({ items: [...items, newItem] });
        }
      },
      
      removeItem: (id: number, size: number) => {
        set({
          items: get().items.filter(
            item => !(item.id === id && item.selectedSize === size)
          )
        });
      },
      
      updateQuantity: (id: number, size: number, quantity: number) => {
        if (quantity < 1) return;
        set({
          items: get().items.map(item =>
            item.id === id && item.selectedSize === size
              ? { ...item, quantity }
              : item
          )
        });
      },
      
      clearCart: () => set({ items: [] }),
      
      totalItems: () => {
        return get().items.reduce((total, item) => total + item.quantity, 0);
      },
      
      totalPrice: () => {
        return get().items.reduce(
          (total, item) => total + item.price * item.quantity,
          0
        );
      }
    }),
    {
      name: 'cart-storage',
    }
  )
);