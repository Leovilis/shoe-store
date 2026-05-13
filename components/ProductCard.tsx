// components/ProductCard.tsx
"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Product } from "@/types";
import { useCartStore } from "@/store/cartStore";
import clsx from "clsx";
import { motion, AnimatePresence } from "framer-motion";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState<number | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [imageIndex, setImageIndex] = useState(0); // ← ya lo tenés
  const currentImage = selectedColor.images[imageIndex];
  const [direction, setDirection] = useState(1);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const addItem = useCartStore((state) => state.addItem);
  const items = useCartStore((state) => state.items);

  const isInCart = items.some(
    (item) => item.id === product.id && item.selectedSize === selectedSize,
  );

  // Carrusel automático cada 3s, pausado en hover
  useEffect(() => {
    if (selectedColor.images.length <= 1) return;

    if (!isHovered) {
      intervalRef.current = setInterval(() => {
        setDirection(1);
        setImageIndex((prev) => (prev + 1) % selectedColor.images.length);
      }, 3000);
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isHovered, selectedColor]);

  const formatPrice = (price: number) =>
    new Intl.NumberFormat("es-AR", {
      style: "currency",
      currency: "ARS",
    }).format(price);

  const handleColorChange = (color: typeof selectedColor, index: number) => {
    setDirection(index > carouselIndex ? 1 : -1);
    setCarouselIndex(index);
    setSelectedColor(color);
    setSelectedSize(null);
  };

  const handleAddToCart = () => {
    if (selectedSize) {
      addItem({ ...product, image: selectedColor.images[0] }, selectedSize);
      setSelectedSize(null);
    }
  };

  const slideVariants = {
    enter: (dir: number) => ({ x: dir > 0 ? "100%" : "-100%", opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? "-100%" : "100%", opacity: 0 }),
  };

  return (
    <div
      className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden hover:shadow-xl hover:shadow-amber-400/10 transition-all duration-300 hover:-translate-y-1"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Carrusel */}
      <div className="relative aspect-square overflow-hidden bg-gray-900">
        <AnimatePresence custom={direction} mode="popLayout">
          <motion.div
            key={currentImage}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 1.8, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            {currentImage && (
              <Image
                src={currentImage}
                alt={`${product.name} - ${selectedColor.name}`}
                fill
                className="object-contain p-6"
                style={{ mixBlendMode: "multiply" }} // ← elimina el fondo blanco
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            )}
          </motion.div>
        </AnimatePresence>

        {/* Dots indicadores */}
        {product.colors.length > 1 && (
          <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1.5 z-10">
            {product.colors.map((_, i) => (
              <button
                key={i}
                onClick={() => handleColorChange(product.colors[i], i)}
                className={clsx(
                  "rounded-full transition-all duration-300",
                  carouselIndex === i
                    ? "bg-amber-400 w-4 h-1.5"
                    : "bg-white/40 w-1.5 h-1.5 hover:bg-white/70",
                )}
              />
            ))}
          </div>
        )}

        {/* Overlay sutil en hover */}
        <div
          className={clsx(
            "absolute inset-0 bg-black/10 transition-opacity duration-300 pointer-events-none",
            isHovered ? "opacity-100" : "opacity-0",
          )}
        />
      </div>

      <div className="p-4">
        <div className="mb-2">
          <h3 className="text-lg font-semibold text-gray-100">
            {product.name}
          </h3>
          <p className="text-sm text-gray-400">{product.brand}</p>
        </div>

        <div className="mb-3">
          <p className="text-2xl font-bold text-amber-400">
            {formatPrice(product.price)}
          </p>
        </div>

        {/* Selector de colores */}
        <div className="mb-3">
          <label className="text-sm text-gray-400 block mb-2">
            Color: <span className="text-gray-100">{selectedColor.name}</span>
          </label>
          <div className="flex gap-2">
            {product.colors.map((color, i) => (
              <motion.button
                key={color.name}
                onClick={() => handleColorChange(color, i)}
                title={color.name}
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
                className={clsx(
                  "relative w-8 h-8 rounded-full overflow-hidden",
                  "border-2 transition-colors duration-200",
                  selectedColor.name === color.name
                    ? "border-amber-400 shadow-lg shadow-amber-400/30"
                    : "border-gray-600 hover:border-gray-400",
                )}
              >
                {color.hex2 ? (
                  <span
                    className="block w-full h-full"
                    style={{
                      background: `radial-gradient(circle at 70% 70%, ${color.hex2}cc 0%, ${color.hex2}55 25%, ${color.hex} 55%)`,
                    }}
                  />
                ) : (
                  <span
                    className="block w-full h-full"
                    style={{ backgroundColor: color.hex }}
                  />
                )}
                <span className="absolute inset-0 rounded-full bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
              </motion.button>
            ))}
          </div>
        </div>

        {/* Selector de talles */}
        <div className="mb-4">
          <label className="text-sm text-gray-400 block mb-2">Talle:</label>
          <div className="flex flex-wrap gap-2">
            {selectedColor.sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={clsx(
                  "w-10 h-10 rounded-lg text-sm font-semibold transition-all duration-200",
                  selectedSize === size
                    ? "bg-amber-400 text-gray-950"
                    : "bg-gray-800 text-gray-100 hover:bg-gray-700",
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
          {isInCart ? "✓ Agregado" : "Agregar al carrito"}
        </button>
      </div>
    </div>
  );
}
