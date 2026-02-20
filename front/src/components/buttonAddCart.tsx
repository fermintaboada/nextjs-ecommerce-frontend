"use client";

import { useCart } from "@/contexts/CartContex";
import { UseAuth } from "@/contexts/AuthContext";
import { Product } from "@/interfaces/IProduct";
import React, { useState } from "react";

interface ButtonProps {
  product: Product;
}

const ButtonAddCart = ({ product }: ButtonProps) => {
  const { dataUser } = UseAuth();
  const { addToCart, cartItems } = useCart();
  const [showFeedback, setShowFeedback] = useState(false);

  const handleAdd = () => {
    if (!dataUser) {
      alert("Debes estar logueado para agregar un producto al carrito");
      return;
    }

    const exists = cartItems.some((item) => item.id === product.id);
    if (exists) {
      alert("Solo puedes agregar una unidad por producto");
      return;
    }

    addToCart(product);
    setShowFeedback(true);
    setTimeout(() => setShowFeedback(false), 2000);
  };

  return (
    <div className="relative w-full mt-4">
      {showFeedback && (
        <div className="absolute -top-10 left-0 right-0 text-center animate-bounce">
          <span className="bg-green-600 text-white text-xs px-3 py-1 rounded-full shadow-lg">
            ¡Agregado! ✅
          </span>
        </div>
      )}

      <button
        onClick={handleAdd}
        className="flex items-center justify-center w-full text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 transition-all active:scale-95"
      >
        <svg className="w-5 h-5 me-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
        Agregar al carrito
      </button>
    </div>
  );
};

export default ButtonAddCart;
