"use client";

import { useCart } from "@/contexts/CartContex";
import { UseAuth } from "@/contexts/AuthContext"; 
import Image from "next/image";
import React from "react";
import Link from "next/link"; 
import { createOrder } from "@/services/ordersServices";
import { useRouter } from "next/navigation"; 

const CartPage = () => {
  const { cartItems, clearCart, getTotal, getIdItems, getItemsCount, removeFromCart } = useCart();
  const { dataUser } = UseAuth(); 
  const router = useRouter(); 

  const total = getTotal();
  const itemCount = getItemsCount();

  const handleCheckout = async () => {
    if(!dataUser?.token){
      alert("Debes estar logueado para finalizar la compra");
      return;
    }
    try {
      await createOrder(getIdItems(), dataUser?.token);
      alert("¡Compra realizada con éxito! Tu pedido ha sido registrado.");
      clearCart();
      router.push("/dashboard"); 
    } catch (error) {
      console.log("Error en la compra:", error);
      alert("Ocurrió un error al procesar la compra. Intenta nuevamente.");
    }
  };

  const cardBg = "bg-[var(--c-surface)] border border-[var(--c-border)]";
  const primaryText = "text-[var(--c-primary)]";
  const mutedText = "text-[var(--c-text-muted)]";
  const condensedFont = "font-roboto-condensed";
  const primaryButton = `px-5 py-2.5 text-sm font-semibold text-[var(--c-primary-contrast)] bg-[var(--c-primary)] rounded-lg hover:bg-opacity-90 transition-opacity`;

  if (!dataUser) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen py-16 px-4">
        <div className="p-10 rounded-xl max-w-lg w-full text-center bg-[var(--c-surface)] border border-[var(--c-border)] shadow-xl">
          <svg className="w-12 h-12 mx-auto mb-4 text-[var(--c-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
          </svg>
          <h2 className="text-2xl font-roboto-condensed font-bold mb-3 text-[var(--c-text)]">Acceso Restringido</h2>
          <p className="text-[var(--c-text-muted)] mb-6">Debes iniciar sesión para poder ver y gestionar tu carrito de compras.</p>
          <Link href="/login" className="inline-flex items-center px-6 py-2.5 text-sm font-semibold text-[var(--c-primary-contrast)] bg-[var(--c-primary)] rounded-lg hover:opacity-90 transition-opacity">
              Ir a Iniciar Sesión
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl w-full">
      <div className="flex items-center justify-between w-full mb-8">
        <h1 className={`text-4xl ${condensedFont} font-extrabold text-[var(--c-text)] flex-1 text-center md:text-left`}>🛍️ Carrito de Compras</h1>
        {itemCount > 0 && (
          <div className={`px-4 py-1.5 rounded-full text-sm font-bold ${primaryText} border border-[var(--c-border)]`}>
            {itemCount} {itemCount === 1 ? "producto" : "productos"}
          </div>
        )}
      </div>

      {cartItems.length === 0 ? (
        <div className={`p-16 rounded-lg text-center ${cardBg} flex flex-col items-center justify-center`}>
          <svg className={`h-24 w-24 mx-auto mb-6 ${mutedText}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 3h2l3.243 9.73C8.653 14.167 10.15 15 11.75 15h6.5c1.6 0 3.097-.833 3.507-2.27L22 7M6 15h14M7 20a2 2 0 11-4 0 2 2 0 014 0zm10 0a2 2 0 11-4 0 2 2 0 014 0z"></path>
          </svg>
          <p className={`text-2xl ${condensedFont} font-bold text-[var(--c-text)] mb-3`}>Tu carrito está vacío</p>
          <Link href="/" className={`mt-5 inline-flex items-center ${primaryButton}`}>Volver a la tienda</Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            <div className={`hidden md:grid grid-cols-12 gap-4 p-4 ${cardBg} font-roboto-condensed font-bold text-sm border-b`}>
                <div className="col-span-6">Producto</div>
                <div className="col-span-2 text-center">Precio</div>
                <div className="col-span-2 text-center">Cant.</div>
                <div className="col-span-2 text-center">Acciones</div>
            </div>
            {cartItems.map((item) => (
              <div key={item.id} className={`grid grid-cols-1 md:grid-cols-12 gap-4 p-4 items-center transition-colors duration-150 ${cardBg}`}>
                <div className="col-span-6 flex items-center space-x-4">
                  <div className="flex-shrink-0 w-16 h-16 rounded-md overflow-hidden relative border border-[var(--c-border)]">
                    {item.image ? (
                      <Image src={item.image} alt={item.name} fill className="object-cover" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gray-700 text-sm">[No Image]</div>
                    )}
                  </div>
                  <h3 className={`font-roboto-condensed text-base font-semibold text-[var(--c-text)]`}>{item.name}</h3>
                </div>
                <div className="col-span-2 text-left md:text-center font-bold text-base text-[var(--c-text)]">${item.price.toFixed(2)}</div>
                <div className="col-span-2 text-left md:text-center text-[var(--c-text)]">1</div>
                <div className="col-span-2 text-center">
                  <button onClick={() => removeFromCart(item.id)} className="text-red-400 hover:text-red-500 transition-colors mx-auto">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-1">
            <div className={`p-6 rounded-lg shadow-xl sticky top-4 ${cardBg}`}>
              <h2 className={`text-2xl ${condensedFont} font-bold mb-4 border-b pb-3 border-[var(--c-border)] text-[var(--c-text)]`}>Resumen de Compra</h2>
              <div className="space-y-3 font-roboto text-base">
                <div className="flex justify-between">
                  <span className={mutedText}>Subtotal ({itemCount} ítems)</span>
                  <span className="font-medium text-[var(--c-text)]">${total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between border-t pt-4 border-[var(--c-border)] text-xl font-extrabold">
                  <span className={condensedFont}>Total Final</span>
                  <span className={primaryText}>${total.toFixed(2)}</span>
                </div>
              </div>
              <button onClick={handleCheckout} className={`w-full mt-6 ${primaryButton}`}>Finalizar compra</button>
              <button onClick={() => confirm("¿Vaciar carrito?") && clearCart()} className={`w-full mt-3 px-5 py-2 text-sm font-medium ${mutedText} border border-transparent rounded-lg hover:border-[var(--c-border)] transition-colors`}>vaciar carrito</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;




