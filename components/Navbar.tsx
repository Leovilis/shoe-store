// components/Navbar.tsx
'use client';

import Link from 'next/link';
import { ShoppingCart } from 'lucide-react';
import { useCartStore } from '@/store/cartStore';
import { useSyncExternalStore, useRef } from 'react';

// Hook para detectar si estamos en el cliente (sin useEffect)
const subscribe = () => () => {};
function useHasMounted() {
  return useSyncExternalStore(subscribe, () => true, () => false);
}

export default function Navbar() {
  const totalItems = useCartStore(state => state.totalItems());
  const mounted = useHasMounted();
  
  // Animación sin useEffect: comparamos con el valor anterior
  const prevItemsRef = useRef(totalItems);
  const isAnimating = mounted && totalItems !== prevItemsRef.current && totalItems > 0;
  prevItemsRef.current = totalItems;

  return (
    <nav className="bg-gray-900 border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold text-amber-400 hover:text-amber-300 transition-colors">
            ShoeStore
          </Link>

          <Link href="/cart" className="relative group">
            <div className="p-2 rounded-lg bg-gray-800 group-hover:bg-gray-700 transition-all duration-200">
              <ShoppingCart className="w-6 h-6 text-gray-100" />
              {mounted && totalItems > 0 && (
                <span className={`
                  absolute -top-1 -right-1 bg-amber-400 text-gray-950 text-xs font-bold
                  rounded-full w-5 h-5 flex items-center justify-center
                  ${isAnimating ? 'animate-bounce' : ''}
                `}>
                  {totalItems}
                </span>
              )}
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
}