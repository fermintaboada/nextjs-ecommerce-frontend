import Link from 'next/link'
import { NavItems } from '@/utils/NavItems'
import React from 'react'

export default function Footer() {
  const headingStyle: React.CSSProperties = {
    fontFamily:
      'var(--font-roboto-condensed), var(--font-roboto), system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial',
  }
  const bodyStyle: React.CSSProperties = {
    fontFamily:
      'var(--font-roboto), system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial',
  }

  return (
    <footer
      className="border-t"
      style={{
        borderColor: 'var(--c-border)',
        background:
          'linear-gradient(90deg, rgba(11,15,20,0.8), rgba(15,23,36,0.8), rgba(31,42,58,0.8))',
        color: 'var(--c-text)',
      }}
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-3 px-4 py-6 sm:flex-row sm:justify-between">
        <div style={headingStyle} className="text-lg font-semibold tracking-wide">
          e-commerce
        </div>
        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm">
          {NavItems.map((item) => (
            <Link
              key={item.id}
              href={item.route}
              style={headingStyle}
              className="transition-colors"
            >
              <span className="text-[color:var(--c-primary)] hover:underline hover:text-[color:var(--c-primary)]">
                {item.nameToRender}
              </span>
            </Link>
          ))}
        </nav>
      </div>

      <div className="h-[2px] w-full bg-[color:var(--c-primary)]" />

      <div className="mx-auto flex max-w-7xl flex-col items-center gap-3 px-4 py-5 md:flex-row md:items-start md:justify-between">
        <div className="flex items-center gap-4 text-[color:var(--c-text)]/70">
          <a aria-label="WhatsApp" href="#" title="WhatsApp" className="transition hover:opacity-80">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M20.52 3.48A11.94 11.94 0 0 0 12.01 0 11.99 11.99 0 0 0 2.1 18.41L0 24l5.76-2.06A11.9 11.9 0 0 0 12 24h.01c6.62 0 12-5.38 12-12 0-3.2-1.25-6.21-3.49-8.52zM12 21.82a9.77 9.77 0 0 1-4.98-1.36l-.36-.21-3.42 1.22 1.23-3.36-.23-.35A9.81 9.81 0 1 1 21.82 12c0 5.41-4.4 9.82-9.82 9.82zm5.7-7.34c-.31-.16-1.85-.91-2.14-1.02-.29-.11-.5-.16-.71.16-.21.31-.81 1.01-.99 1.22-.18.2-.36.23-.67.08-.31-.16-1.29-.48-2.46-1.53-.9-.8-1.51-1.78-1.69-2.09-.18-.31-.02-.48.13-.64.14-.14.31-.36.47-.54.16-.18.21-.31.31-.52.1-.21.05-.39-.03-.55-.08-.16-.71-1.71-.97-2.34-.26-.63-.52-.54-.71-.55-.18-.01-.39-.01-.6-.01s-.55.08-.84.39c-.29.31-1.11 1.09-1.11 2.66s1.14 3.09 1.3 3.3c.16.21 2.23 3.41 5.4 4.78.76.33 1.35.52 1.81.66.76.24 1.45.21 2 .13.61-.09 1.85-.75 2.11-1.47.26-.72.26-1.34.18-1.47-.08-.13-.29-.21-.6-.36z"/></svg>
          </a>
          <a aria-label="Correo" href="#" title="Correo" className="transition hover:opacity-80">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 2v.01L12 13 4 6.01V6h16zM4 18V8l8 7 8-7v10H4z"/></svg>
          </a>
          <a aria-label="Instagram" href="#" title="Instagram" className="transition hover:opacity-80">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.2c3.2 0 3.58.01 4.85.07 1.17.06 1.97.25 2.67.53.73.28 1.35.66 1.96 1.27.61.61.99 1.23 1.27 1.96.28.7.47 1.5.53 2.67.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.06 1.17-.25 1.97-.53 2.67a5 5 0 0 1-1.27 1.96 5 5 0 0 1-1.96 1.27c-.7.28-1.5.47-2.67.53-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.06-1.97-.25-2.67-.53a5 5 0 0 1-1.96-1.27 5 5 0 0 1-1.27-1.96c-.28-.7-.47-1.5-.53-2.67C2.2 15.58 2.19 15.2 2.19 12s.01-3.58.07-4.85c.06-1.17.25-1.97.53-2.67.28-.73.66-1.35 1.27-1.96A5 5 0 0 1 6.03 1.29a9 9 0 0 1 2.67-.53C9.97.7 10.35.69 12 .69zm0 3.28a6.53 6.53 0 1 0 0 13.06 6.53 6.53 0 0 0 0-13.06zm6.4 0a1.53 1.53 0 1 0 0 3.06 1.53 1.53 0 0 0 0-3.06z"/></svg>
          </a>
        </div>

        <div style={bodyStyle} className="text-center text-xs md:text-right text-[color:var(--c-text)]">
          <p>2011 - 2025 © e-commerce — Todos los derechos reservados.</p>
          <p>
            <span className="opacity-80">Políticas, términos y condiciones. </span>
            <Link href="/terminos" style={headingStyle} className="font-medium">
              <span className="text-[color:var(--c-primary)] hover:underline">Ver términos</span>
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
