import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Icons = {
  Security: () => (
    <svg className="w-8 h-8 text-[color:var(--c-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.275a1.125 1.125 0 011.236 1.236l-3.322 9.088c-.628 1.724-2.887 2.213-4.524 1.164a1.125 1.125 0 01-1.236-1.236l3.322-9.088c.628-1.724 2.887-2.213 4.524-1.164zM15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  Guarantee: () => (
    <svg className="w-8 h-8 text-[color:var(--c-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  Catalog: () => (
    <svg className="w-8 h-8 text-[color:var(--c-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
    </svg>
  ),
  Advice: () => (
    <svg className="w-8 h-8 text-[color:var(--c-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
    </svg>
  )
};

const QUALITIES = [
  { icon: <Icons.Security />, title: "Seguridad", text: "Base de datos personales protegida" },
  { icon: <Icons.Guarantee />, title: "Garantía global Apple", text: "Podés gestionarla en nuestro propio Service Oficial" },
  { icon: <Icons.Catalog />, title: "Catálogo de productos", text: "La mayor variedad de tecnología de alta gama del mercado" },
  { icon: <Icons.Advice />, title: "Asesoría remota", text: "Comprá desde todo el país, sin moverte de tu casa" },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[color:var(--c-background)]">

      {/* --- SECCIÓN HERO --- */}
      <section className="relative w-full overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage: "url('https://digitalassets-retail.cdn-apple.com//retail-image-server/5da/301/1b4/8a2/41c/ac4/b58/c4d/62b/e7b/2ad54b02-3063-3aed-9c7d-d466b0399672_Marina%20Bay%20Sands_Gallery_002_large_2x.jpg')",
          minHeight: '85vh',
        }}>
        {/* Overlay para máxima legibilidad */}
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/20" />
        
        <div className="relative z-10 mx-auto flex min-h-[inherit] flex-col items-center justify-center px-4 py-16 text-center">
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-black leading-[1.1] tracking-tighter mb-6 text-white font-roboto-condensed drop-shadow-2xl">
            Tecnología al <span className="text-[color:var(--c-primary)]">Alcance</span>
            <br />de tu Mano.
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl max-w-2xl text-white/90 font-medium font-roboto mb-10 drop-shadow-md">
            Explora nuestra exclusiva selección de dispositivos y eleva tu experiencia.
          </p>
          <Link href="/products" className="inline-flex items-center justify-center rounded-full px-10 py-4 text-xl font-bold transition-all hover:scale-105 active:scale-95 bg-[color:var(--c-primary)] text-white shadow-2xl font-roboto-condensed">
            Ver Catálogo
          </Link>
        </div>
      </section>

      {/* --- SECCIÓN CUALIDADES --- */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {QUALITIES.map((q, i) => (
            <div key={i} className="bg-[var(--c-surface)] p-8 rounded-2xl shadow-sm border border-[color:var(--c-border)] hover:shadow-md transition-all">
              <div className="mb-4 p-3 bg-[color:var(--c-primary)]/10 w-fit rounded-xl">{q.icon}</div>
              <h3 className="text-xl font-bold font-roboto-condensed text-[color:var(--c-text)] mb-2">{q.title}</h3>
              <p className="text-sm leading-relaxed font-roboto text-[color:var(--c-text-muted)]">{q.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- SECCIÓN BANNERS SECUNDARIOS --- */}
      <section className="mx-auto max-w-7xl px-6 pb-20 grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Banner Izquierdo: AirPods */}
        <div className="relative rounded-3xl overflow-hidden shadow-xl min-h-[400px] flex items-end p-8 bg-black group">
          <Image 
            src="https://images.unsplash.com/photo-1588423771073-b8903fbb85b5" 
            alt="AirPods Pro 2" 
            fill 
            style={{ objectFit: 'cover' }} 
            className="absolute inset-0 z-0 opacity-60 group-hover:scale-105 transition-transform duration-700" 
          />
          <div className="relative z-10 text-white">
            <p className="text-sm font-bold uppercase tracking-widest text-[color:var(--c-primary)] mb-2">AirPods Pro 2</p>
            <h3 className="text-4xl font-bold font-roboto-condensed leading-tight">Una experiencia resonante.</h3>
          </div>
        </div>

        {/* Banner Derecho: Asesoría (Nueva Imagen y Opacidad Coherente) */}
        <div className="relative rounded-3xl overflow-hidden shadow-xl min-h-[400px] flex items-end p-8 bg-black group">
          <Image 
            src="https://img.freepik.com/vector-gratis/conjunto-iconos-vector-realista-pantalla-rota-telefono-todo-dispositivo-telefono-inteligente-necesita-reparacion-aislado-sobre-fondo-blanco_528282-276.jpg" 
            alt="Servicio Técnico Apple" 
            fill 
            unoptimized
            style={{ objectFit: 'cover' }} 
            className="absolute inset-0 z-0 opacity-50 group-hover:scale-110 transition-transform duration-1000" 
          />
          
          {/* Overlay oscuro para igualar el estilo del Hero */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
          
          <div className="relative z-10 text-white">
            <h3 className="text-4xl font-bold font-roboto-condensed leading-tight mb-3">
              ¡Volvé a <span className="text-[color:var(--c-primary)]">Respirar!</span>
            </h3>
            <p className="text-lg font-medium font-roboto text-white/80 mb-6 max-w-md">
              Garantía Apple oficial y soporte técnico especializado para todos tus dispositivos.
            </p>
            <Link href="/contact" className="inline-block text-sm font-bold px-8 py-3 rounded-full transition-all bg-white text-black hover:bg-[color:var(--c-primary)] hover:text-white shadow-lg">
              Asesorate con expertos
            </Link>
          </div>
        </div>

      </section>
    </div>
  );
}