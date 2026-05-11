// components/CartItem.tsx
'use client';

import Image from 'next/image';
import { CartItem as CartItemType } from '@/types';
import { useCartStore } from '@/store/cartStore';
import { Trash2, Minus, Plus } from 'lucide-react';

interface CartItemProps {
  item: CartItemType;
}

export default function CartItem({ item }: CartItemProps) {
  const updateQuantity = useCartStore(state => state.updateQuantity);
  const removeItem = useCartStore(state => state.removeItem);
  
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-AR', {
      style: 'currency',
      currency: 'ARS'
    }).format(price);
  };
  
  return (
    <div className="flex flex-col sm:flex-row gap-4 p-4 bg-gray-900 rounded-lg border border-gray-800">
      <div className="relative w-full sm:w-24 h-24 flex-shrink-0">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover rounded-md"
        />
      </div>
      
      <div className="flex-grow">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="font-semibold text-gray-100">{item.name}</h3>
            <p className="text-sm text-gray-400">{item.brand}</p>
            <p className="text-sm text-gray-400">Talle: {item.selectedSize}</p>
          </div>
          <button
            onClick={() => removeItem(item.id, item.selectedSize)}
            className="text-red-400 hover:text-red-300 transition-colors"
          >
            <Trash2 className="w-5 h-5" />
          </button>
        </div>
        
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <button
              onClick={() => updateQuantity(item.id, item.selectedSize, item.quantity - 1)}
              className="p-1 rounded-md bg-gray-800 hover:bg-gray-700 transition-colors"
            >
              <Minus className="w-4 h-4" />
            </button>
            <span className="w-8 text-center font-semibold">{item.quantity}</span>
            <button
              onClick={() => updateQuantity(item.id, item.selectedSize, item.quantity + 1)}
              className="p-1 rounded-md bg-gray-800 hover:bg-gray-700 transition-colors"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>
          <p className="font-semibold text-amber-400">
            {formatPrice(item.price * item.quantity)}
          </p>
        </div>
      </div>
    </div>
  );
}