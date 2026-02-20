import Link from 'next/link'
import { NavItems } from '@/utils/NavItems'
import React from 'react'

export default function Footer() {
  return (
    <footer
      className={`w-full border-t pt-8 pb-4 border-[color:var(--c-border)] bg-[var(--c-surface)] text-[color:var(--c-text)]`}
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className={`grid grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-y-8 gap-x-8 pb-8 border-b border-[color:var(--c-border)]`}>
          <div className="col-span-2 lg:col-span-4">
            <Link href="/home" aria-label="Inicio">
              <span
                className={`select-none text-2xl font-extrabold tracking-wide text-[color:var(--c-primary)] font-roboto-condensed`}
              >
                BLU
              </span>
            </Link>
            <p className={`mt-4 text-sm text-[color:var(--c-text-muted)] font-roboto`}>
              Tu plataforma de tecnología de vanguardia. Construyendo el futuro, un producto a la vez.
            </p>
          </div>

          <div className="col-span-2 lg:col-span-3">
            <h3 className={`mb-3 text-lg font-bold text-[color:var(--c-text)] font-roboto-condensed`}>
              Navegación
            </h3>
            <nav className={`flex flex-col space-y-2 text-sm font-roboto`}>
              {NavItems.map((item) => (
                <Link
                  key={item.id}
                  href={item.route}
                  className={`transition-colors text-[color:var(--c-text-muted)] hover:text-[color:var(--c-primary)]`}
                >
                  {item.nameToRender}
                </Link>
              ))}
            </nav>
          </div>

          <div className="col-span-2 lg:col-span-3">
            <h3 className={`mb-3 text-lg font-bold text-[color:var(--c-text)] font-roboto-condensed`}>
              Información
            </h3>
            <nav className={`flex flex-col space-y-2 text-sm font-roboto`}>
              <Link href="/terminos" className={`transition-colors text-[color:var(--c-text-muted)] hover:text-[color:var(--c-primary)]`}>
                Términos y Condiciones
              </Link>
              <Link href="/politica-privacidad" className={`transition-colors text-[color:var(--c-text-muted)] hover:text-[color:var(--c-primary)]`}>
                Política de Privacidad
              </Link>
              <Link href="/faqs" className={`transition-colors text-[color:var(--c-text-muted)] hover:text-[color:var(--c-primary)]`}>
                Preguntas Frecuentes (FAQ)
              </Link>
            </nav>
          </div>

          <div className="col-span-2 lg:col-span-2">
            <h3 className={`mb-3 text-lg font-bold text-[color:var(--c-text)] font-roboto-condensed`}>
              Síguenos
            </h3>
            <div className="flex items-center gap-4">
              <a aria-label="WhatsApp" href="#" title="WhatsApp" className={`transition-colors text-[color:var(--c-text-muted)] hover:text-[color:var(--c-primary)]`}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M20.52 3.48A11.94 11.94 0 0 0 12.01 0 11.99 11.99 0 0 0 2.1 18.41L0 24l5.76-2.06A11.9 11.9 0 0 0 12 24h.01c6.62 0 12-5.38 12-12 0-3.2-1.25-6.21-3.49-8.52zM12 21.82a9.77 9.77 0 0 1-4.98-1.36l-.36-.21-3.42 1.22 1.23-3.36-.23-.35A9.81 9.81 0 1 1 21.82 12c0 5.41-4.4 9.82-9.82 9.82zm5.7-7.34c-.31-.16-1.85-.91-2.14-1.02-.29-.11-.5-.16-.71.16-.21.31-.81 1.01-.99 1.22-.18.2-.36.23-.67.08-.31-.16-1.29-.48-2.46-1.53-.9-.8-1.51-1.78-1.69-2.09-.18-.31-.02-.48.13-.64.14-.14.31-.36.47-.54.16-.18.21-.31.31-.52.1-.21.05-.39-.03-.55-.08-.16-.71-1.71-.97-2.34-.26-.63-.52-.54-.71-.55-.18-.01-.39-.01-.6-.01s-.55.08-.84.39c-.29.31-1.11 1.09-1.11 2.66s1.14 3.09 1.3 3.3c.16.21 2.23 3.41 5.4 4.78.76.33 1.35.52 1.81.66.76.24 1.45.21 2 .13.61-.09 1.85-.75 2.11-1.47.26-.72.26-1.34.18-1.47-.08-.13-.29-.21-.6-.36z"/></svg>
              </a>
              <a aria-label="Correo" href="#" title="Correo" className={`transition-colors text-[color:var(--c-text-muted)] hover:text-[color:var(--c-primary)]`}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 2v.01L12 13 4 6.01V6h16zM4 18V8l8 7 8-7v10H4z"/></svg>
              </a>
              <a aria-label="Instagram" href="#" title="Instagram" className={`transition-colors text-[color:var(--c-text-muted)] hover:text-[color:var(--c-primary)]`}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.2c3.2 0 3.58.01 4.85.07 1.17.06 1.97.25 2.67.53.73.28 1.35.66 1.96 1.27.61.61.99 1.23 1.27 1.96.28.7.47 1.5.53 2.67.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.06 1.17-.25 1.97-.53 2.67a5 5 0 0 1-1.27 1.96 5 5 0 0 1-1.96 1.27c-.7.28-1.5.47-2.67.53-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.06-1.97-.25-2.67-.53a5 5 0 0 1-1.96-1.27 5 5 0 0 1-1.27-1.96c-.28-.7-.47-1.5-.53-2.67C2.2 15.58 2.19 15.2 2.19 12s.01-3.58.07-4.85c.06-1.17.25-1.97.53-2.67.28-.73.66-1.35 1.27-1.96A5 5 0 0 1 6.03 1.29a9 9 0 0 1 2.67-.53C9.97.7 10.35.69 12 .69zm0 3.28a6.53 6.53 0 1 0 0 13.06 6.53 6.53 0 0 0 0-13.06zm6.4 0a1.53 1.53 0 1 0 0 3.06 1.53 1.53 0 0 0 0-3.06z"/></svg>
              </a>
            </div>
          </div>
          
        </div>
        <div className={`h-px w-full bg-[color:var(--c-primary)] opacity-50 my-4`} />
        <div className="flex flex-col items-center justify-between gap-y-2 pt-2 md:flex-row">
            <div className={`text-sm font-roboto text-[color:var(--c-text-muted)] order-2 md:order-1`}>
                <p>2011 - 2025 © BLU — Todos los derechos reservados.</p>
            </div>
            
            <div className={`text-xs font-roboto text-[color:var(--c-text-muted)] order-1 md:order-2`}>
                <Link href="/terminos" className={`font-medium transition-colors hover:underline text-[color:var(--c-primary)]`}>
                    Ver Términos y Condiciones
                </Link>
            </div>
        </div>
      </div>
    </footer>
  )
}