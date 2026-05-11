// components/ProductCard.tsx
'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Product } from '@/types';
import { useCartStore } from '@/store/cartStore';
import clsx from 'clsx';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [selectedSize, setSelectedSize] = useState<number | null>(null);
  const addItem = useCartStore(state => state.addItem);
  const items = useCartStore(state => state.items);
  
  const isInCart = items.some(
    item => item.id === product.id && item.selectedSize === selectedSize
  );
  
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-AR', {
      style: 'currency',
      currency: 'ARS'
    }).format(price);
  };
  
  const handleAddToCart = () => {
    if (selectedSize) {
      addItem(product, selectedSize);
      setSelectedSize(null);
    }
  };
  
  return (
    <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden hover:shadow-xl hover:shadow-amber-400/10 transition-all duration-300 hover:-translate-y-1">
      <div className="relative aspect-square">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      
      <div className="p-4">
        <div className="mb-2">
          <h3 className="text-lg font-semibold text-gray-100">{product.name}</h3>
          <p className="text-sm text-gray-400">{product.brand}</p>
        </div>
        
        <div className="mb-3">
          <p className="text-2xl font-bold text-amber-400">
            {formatPrice(product.price)}
          </p>
        </div>
        
        <div className="mb-4">
          <label className="text-sm text-gray-400 block mb-2">Talle:</label>
          <div className="flex flex-wrap gap-2">
            {product.sizes.map(size => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={clsx(
                  "w-10 h-10 rounded-lg font-semibold transition-all duration-200",
                  selectedSize === size
                    ? "bg-amber-400 text-gray-950"
                    : "bg-gray-800 text-gray-100 hover:bg-gray-700"
                )}
              >
                {size}
              </button>
            ))}
          </div>
        </div>
        
        <button
          onClick={handleAddToCart}
          disabled={!selectedSize}
          className="w-full btn-primary"
        >
          {isInCart ? '✓ Agregado' : 'Agregar al carrito'}
        </button>
      </div>
    </div>
  );
}