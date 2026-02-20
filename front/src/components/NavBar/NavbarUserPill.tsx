"use client";
import Link from 'next/link';
import { useState } from 'react';
import { UseAuth } from '@/contexts/AuthContext';
import { useRouter } from 'next/navigation';

export const NavbarUserPill = () => {
  const { dataUser, logout } = UseAuth();
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const handleLogout = () => {
    logout();
    setIsOpen(false);
    router.push('/home');
  };

  if (!dataUser) {
    return (
      <Link
        href="/login"
        className="rounded-full px-5 py-2 text-sm font-semibold bg-[var(--c-primary)] text-[var(--c-primary-contrast)] font-roboto-condensed hover:opacity-90 transition-all"
      >
        Login
      </Link>
    );
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="rounded-full px-5 py-2 text-sm font-semibold bg-[var(--c-primary)] text-[var(--c-primary-contrast)] font-roboto-condensed hover:opacity-90 transition-all flex items-center gap-2 shadow-lg"
      >
        <span>{dataUser.user.name.split(' ')[0]}</span>
        <span className={`text-[10px] transition-transform ${isOpen ? 'rotate-180' : ''}`}>▼</span>
      </button>

      {isOpen && (
        <>
          <div className="fixed inset-0 z-10" onClick={() => setIsOpen(false)}></div>
          <div className="absolute right-0 mt-3 w-48 bg-[var(--c-bg-start)] border border-[var(--c-border)] rounded-xl shadow-2xl z-20 overflow-hidden animate-in fade-in zoom-in-95">
            <Link
              href="/dashboard"
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 text-sm text-[var(--c-text)] hover:bg-[var(--c-surface)] border-b border-[var(--c-border)] font-roboto-condensed"
            >
              Mi Perfil
            </Link>
            <button
              onClick={handleLogout}
              className="w-full text-left px-4 py-3 text-sm text-red-400 hover:bg-red-500/10 font-bold font-roboto-condensed"
            >
              Cerrar Sesión
            </button>
          </div>
        </>
      )}
    </div>
  );
};