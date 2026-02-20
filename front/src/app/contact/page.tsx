"use client";

import React from "react";

const ContactPage = () => {
  return (
    <main className="min-h-screen pt-28 pb-12 px-6 flex flex-col items-center">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-black text-white tracking-widest uppercase">
          Atención <span className="text-blue-500">Blue-Tech</span>
        </h1>
        <div className="h-1 w-20 bg-blue-500 mx-auto mt-4 rounded-full shadow-[0_0_15px_#3b82f6]"></div>
        <p className="text-gray-500 mt-4 font-medium uppercase text-xs tracking-[0.2em]">
          Soporte y Postventa
        </p>
      </div>

      <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-black/40 backdrop-blur-md border border-white/10 p-8 rounded-3xl space-y-8">
          <div className="flex items-center gap-5">
            <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-green-500/20 flex items-center justify-center text-2xl">
              📱
            </div>
            <div>
              <p className="text-[10px] text-gray-500 uppercase font-bold tracking-wider">
                WhatsApp
              </p>
              <p className="text-white font-mono text-lg">1122339430</p>
            </div>
          </div>

          <div className="flex items-center gap-5">
            <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-blue-500/20 flex items-center justify-center text-2xl">
              ✉️
            </div>
            <div>
              <p className="text-[10px] text-gray-500 uppercase font-bold tracking-wider">
                Email Oficial
              </p>
              <p className="text-white font-mono text-lg">
                blue.store@gmail.com
              </p>
            </div>
          </div>

          <div className="pt-4">
            <button className="w-full py-4 bg-white/5 border border-white/10 text-gray-500 rounded-2xl cursor-not-allowed italic text-sm">
              Canales de respuesta inmediata
            </button>
          </div>
        </div>

        <div className="bg-black/40 backdrop-blur-md border border-white/10 p-8 rounded-3xl flex flex-col justify-center relative overflow-hidden group">
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"></div>
          <span className="text-4xl mb-4">🛡️</span>
          <h2 className="text-xl font-bold text-white mb-2 tracking-tight">
            Garantía de Hardware
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            Nuestros productos cuentan con una política de{" "}
            <span className="text-blue-400 font-semibold">
              Protección Total
            </span>
            . Ante cualquier falla de componentes internos dentro de los
            primeros 6 meses, realizamos el recambio por una unidad nueva
            sellada.
          </p>
        </div>

        <div className="md:col-span-2 bg-blue-500/5 border border-blue-500/20 p-8 rounded-3xl flex items-start gap-6 relative">
          <div className="hidden sm:flex flex-shrink-0 w-14 h-14 bg-blue-500/10 rounded-full items-center justify-center text-3xl">
            🔄
          </div>
          <div>
            <h2 className="text-xl font-bold text-white mb-2">
              Derecho de Arrepentimiento
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              ¿No es lo que buscabas? No hay problema. Tenés un plazo de{" "}
              <span className="text-white font-bold">30 días</span> desde que
              recibís el producto para solicitar la devolución. Una vez que el
              equipo llega a nuestro depósito y verificamos su estado original,
              el reembolso se procesa de forma inmediata.
            </p>
          </div>
        </div>
      </div>

      <footer className="mt-16 opacity-30">
        <p className="text-[10px] text-white uppercase tracking-[0.5em]">
          Blue-Tech Identity System 2026
        </p>
      </footer>
    </main>
  );
};

export default ContactPage;
