"use client";
import Link from 'next/link'
import { useState } from 'react'
import { NavItems } from '@/utils/NavItems'
import { UseAuth } from '@/contexts/AuthContext';

const CART_COUNT_DEMO = 2

export default function NavBar() {
  const [open, setOpen] = useState(false)

  const { dataUser } = UseAuth(); 

  const isCart = (name: string) =>
    name.toLowerCase() === 'cart' || name.toLowerCase() === 'carrito'

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto w-full max-w-7xl px-2 sm:px-4">
        {/* 3 columnas: izq (logo), centro (links), der (login/sandwich) */}
        <div className="grid h-16 grid-cols-3 items-center">
          {/* IZQUIERDA: LOGO tipográfico (sin círculo) */}
          <div className="flex items-center">
            <Link href="/home" aria-label="Inicio">
              <span
                className="select-none text-xl font-extrabold tracking-wide md:text-2xl"
                style={{
                  color: 'var(--c-primary)',
                  fontFamily:
                    'var(--font-roboto-condensed), var(--font-roboto), system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial',
                  letterSpacing: '0.02em',
                }}
              >
                BLU
              </span>
            </Link>
          </div>

          {/* CENTRO: LINKS (md+) centrados, SIN pill */}
          <nav aria-label="Primary" className="hidden md:flex md:justify-center">
            <ul className="flex items-center gap-8">
              {NavItems.map((item) => {
                const name = item.nameToRender
                const href = item.route
                return (
                  <li key={item.id}>
                    <Link
                      href={href}
                      className="text-base font-semibold transition-colors hover:underline hover:underline-offset-4 md:text-lg"
                      style={{
                        color: 'var(--c-text)',
                        fontFamily:
                          'var(--font-roboto-condensed), var(--font-roboto), system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial',
                        letterSpacing: '0.02em',
                      }}
                    >
                      <span>{name}</span>
                      {isCart(name) && CART_COUNT_DEMO > 0 && (
                        <span
                          className="ml-2 inline-flex h-5 min-w-[20px] items-center justify-center rounded-full px-1 text-[11px] font-bold align-middle"
                          style={{
                            background: 'var(--c-primary)',
                            color: 'var(--c-primary-contrast)',
                          }}
                        >
                          {CART_COUNT_DEMO}
                        </span>
                      )}
                    </Link>
                  </li>
                )
              })}
              {dataUser && <p>{dataUser.user.name}</p>}
            </ul>
          </nav>

          {/* DERECHA: Desktop -> Login pill | Mobile -> Sandwich */}
          <div className="flex items-center justify-end gap-2">
            {/* Desktop: Login PILL con protagonismo */}
            <Link
              href="/login"
              className="hidden md:inline-block rounded-full px-5 py-2 text-sm font-semibold transition-colors hover:opacity-90 md:text-base"
              style={{
                background: 'var(--c-primary)',
                color: 'var(--c-primary-contrast)',
                border: '1px solid var(--c-primary)',
                fontFamily:
                  'var(--font-roboto-condensed), var(--font-roboto), system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial',
                letterSpacing: '0.02em',
              }}
            >
              Login
            </Link>

            {/* Mobile: Sandwich a la derecha */}
            <button
              aria-label="Abrir menú"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="relative inline-flex h-10 w-10 items-center justify-center rounded-md md:hidden"
              style={{ border: '1px solid var(--c-border)' }}
            >
              <span
                className="absolute h-0.5 w-5 rounded transition-transform duration-300"
                style={{
                  background: 'var(--c-text-muted)',
                  transform: open ? 'translateY(0) rotate(45deg)' : 'translateY(-6px)',
                }}
              />
              <span
                className="absolute h-0.5 w-5 rounded transition-transform duration-300"
                style={{
                  background: 'var(--c-text-muted)',
                  transform: open ? 'translateY(0) rotate(-45deg)' : 'translateY(6px)',
                }}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Menú MOBILE: links en columna + acciones al final */}
      {open && (
        <div className="mx-auto w-full max-w-7xl px-2 sm:px-4 md:hidden">
          <div
            className="mt-2 rounded-lg p-2"
            style={{
              background: 'var(--c-surface)', // si querés sólido, cambia a var(--c-hover) o un #hex
              border: '1px solid var(--c-border)',
            }}
          >
            <ul className="flex flex-col">
              {NavItems.map((item) => {
                const name = item.nameToRender
                const href = item.route
                return (
                  <li key={item.id}>
                    <Link
                      href={href}
                      onClick={() => setOpen(false)}
                      className="block rounded-md px-3 py-3 text-base font-semibold hover:underline hover:underline-offset-4"
                      style={{
                        color: 'var(--c-text)',
                        fontFamily:
                          'var(--font-roboto-condensed), var(--font-roboto), system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial',
                        letterSpacing: '0.02em',
                      }}
                    >
                      {name}
                      {isCart(name) && CART_COUNT_DEMO > 0 && (
                        <span
                          className="ml-2 inline-flex h-5 min-w-[20px] items-center justify-center rounded-full px-1 text-[11px] font-bold align-middle"
                          style={{
                            background: 'var(--c-primary)',
                            color: 'var(--c-primary-contrast)',
                          }}
                        >
                          {CART_COUNT_DEMO}
                        </span>
                      )}
                    </Link>
                  </li>
                )
              })}
            </ul>

            {/* Acciones inferiores */}
            <div className="mt-3 flex flex-col gap-2">
              <Link
                href="/login"
                onClick={() => setOpen(false)}
                className="inline-flex w-full items-center justify-center rounded-full px-4 py-2 text-sm font-semibold transition-colors hover:opacity-90"
                style={{
                  background: 'var(--c-primary)',
                  color: 'var(--c-primary-contrast)',
                  border: '1px solid var(--c-primary)',
                }}
              >
                Iniciar sesión
              </Link>
              <Link
                href="/register"
                onClick={() => setOpen(false)}
                className="inline-flex w-full items-center justify-center rounded-full px-4 py-2 text-sm font-semibold hover:underline hover:underline-offset-4"
                style={{ color: 'var(--c-text)' }}
              >
                Registrarse
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
