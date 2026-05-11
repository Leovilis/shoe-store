// app/cart/page.tsx
'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ShoppingCart, ArrowLeft } from 'lucide-react';
import { useCartStore } from '@/store/cartStore';
import CartItem from '@/components/CartItem';
import CartSummary from '@/components/CartSummary';

export default function CartPage() {
  const router = useRouter();
  const items = useCartStore(state => state.items);
  const clearCart = useCartStore(state => state.clearCart);
  const totalItems = useCartStore(state => state.totalItems());
  
  const handleCheckout = () => {
    alert('¡Gracias por tu compra! El pedido ha sido realizado con éxito.');
    clearCart();
    router.push('/');
  };
  
  if (items.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-gray-800 rounded-full mb-6">
            <ShoppingCart className="w-12 h-12 text-gray-400" />
          </div>
          <h1 className="text-3xl font-bold text-gray-100 mb-4">Tu carrito está vacío</h1>
          <p className="text-gray-400 mb-8">Parece que aún no has agregado ningún producto.</p>
          <Link href="/" className="btn-primary inline-flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" />
            Ver productos
          </Link>
        </div>
      </div>
    );
  }
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-100">Mi Carrito</h1>
        <p className="text-gray-400 mt-1">{totalItems} productos</p>
      </div>
      
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-grow">
          <div className="space-y-4 mb-4">
            {items.map(item => (
              <CartItem key={`${item.id}-${item.selectedSize}`} item={item} />
            ))}
          </div>
          
          <button
            onClick={clearCart}
            className="text-red-400 hover:text-red-300 transition-colors text-sm font-medium"
          >
            Vaciar carrito
          </button>
        </div>
        
        <div className="lg:w-96">
          <CartSummary onCheckout={handleCheckout} />
        </div>
      </div>
    </div>
  );
}