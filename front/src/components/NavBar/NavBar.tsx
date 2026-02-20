"use client";
import Link from 'next/link'
import { useState } from 'react'
import { NavItems } from '@/utils/NavItems'
import { NavbarUserPill } from './NavbarUserPill'

export default function NavBar() {
  const [open, setOpen] = useState(false)

  // Solo queda esta lógica para el icono del carrito
  const isCart = (name: string) => name.toLowerCase() === 'cart' || name.toLowerCase() === 'carrito'

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-[var(--c-bg-start)] border-b border-[var(--c-border)] shadow-md">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
        <div className="grid h-16 grid-cols-3 items-center">
          
          <div className="flex items-center">
            <Link href="/home" className="text-xl font-extrabold tracking-wide md:text-2xl hover:opacity-80 transition-opacity font-roboto-condensed text-[var(--c-primary)]">
              BLU
            </Link>
          </div>

          <nav className="hidden md:flex md:justify-center">
            <ul className="flex items-center gap-8">
              {NavItems.map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.route}
                    className="text-base font-semibold transition-all hover:underline hover:underline-offset-4 md:text-lg flex items-center gap-1 font-roboto-condensed text-[var(--c-text)]"
                  >
                    {isCart(item.nameToRender) && <span>🛒</span>}
                    {item.nameToRender}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center justify-end gap-4">
            <NavbarUserPill />

            <button
              onClick={() => setOpen((v) => !v)}
              className="relative h-10 w-10 md:hidden border border-[var(--c-border)] rounded-md flex items-center justify-center"
            >
              <span className="text-[var(--c-text)]">{open ? '✕' : '☰'}</span>
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-[var(--c-surface)] border-b border-[var(--c-border)] p-4 animate-in fade-in slide-in-from-top-2">
          <ul className="space-y-4 mb-4">
            {NavItems.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.route}
                  onClick={() => setOpen(false)}
                  className="block text-base font-semibold text-[var(--c-text)] font-roboto-condensed"
                >
                  {isCart(item.nameToRender) ? `🛒 ${item.nameToRender}` : item.nameToRender}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}