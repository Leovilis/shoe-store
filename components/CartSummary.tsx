// components/CartSummary.tsx
'use client';

import { useCartStore } from '@/store/cartStore';

interface CartSummaryProps {
  onCheckout: () => void;
}

export default function CartSummary({ onCheckout }: CartSummaryProps) {
  const totalPrice = useCartStore(state => state.totalPrice());
  
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-AR', {
      style: 'currency',
      currency: 'ARS'
    }).format(price);
  };
  
  const subtotal = totalPrice;
  const shipping = subtotal > 100000 ? 0 : 5000;
  const total = subtotal + shipping;
  const freeShippingThreshold = 100000;
  
  return (
    <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 sticky top-20">
      <h2 className="text-xl font-bold mb-4">Resumen del pedido</h2>
      
      <div className="space-y-3 mb-4">
        <div className="flex justify-between text-gray-300">
          <span>Subtotal</span>
          <span>{formatPrice(subtotal)}</span>
        </div>
        <div className="flex justify-between text-gray-300">
          <span>Envío</span>
          <span>
            {shipping === 0 
              ? <span className="text-green-500">Gratis</span>
              : formatPrice(shipping)
            }
          </span>
        </div>
        
        {shipping > 0 && (
          <div className="text-sm text-gray-400">
            ¡Agrega {formatPrice(freeShippingThreshold - subtotal)} más para envío gratis!
          </div>
        )}
        
        <div className="border-t border-gray-800 pt-3">
          <div className="flex justify-between text-lg font-bold">
            <span>Total</span>
            <span className="text-amber-400">{formatPrice(total)}</span>
          </div>
        </div>
      </div>
      
      <button
        onClick={onCheckout}
        className="w-full btn-primary mb-2"
      >
        Finalizar compra
      </button>
    </div>
  );
}