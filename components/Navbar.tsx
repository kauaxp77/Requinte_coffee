'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'

import { brand, navLinks } from '@/content/site'
import { useMountTransition } from '@/lib/useMountTransition'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { mounted, visible } = useMountTransition(open, 350)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <>
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[80] focus:bg-gold focus:px-4 focus:py-3 focus:text-[12px] focus:uppercase focus:tracking-[0.18em] focus:text-ink"
      >
        Pular para o conteudo
      </a>

      <header
        className={[
          'fixed inset-x-0 top-0 z-50 transition-all duration-700 ease-silk',
          scrolled
            ? 'border-b border-cream/10 bg-ink/85 backdrop-blur-xl'
            : 'border-b border-transparent bg-transparent',
        ].join(' ')}
      >
        <nav
          aria-label="Navegacao principal"
          className="shell flex items-center justify-between gap-6 py-4 lg:py-5"
        >
          <a href="#topo" className="flex items-center gap-3" aria-label={`${brand.name} — inicio`}>
            <span className="relative block h-10 w-10 overflow-hidden rounded-full ring-1 ring-gold/40 lg:h-11 lg:w-11">
              <Image
                src={brand.logo}
                alt=""
                fill
                sizes="44px"
                className="scale-[1.02] object-cover"
                priority
              />
            </span>
            <span className="leading-none">
              <span className="block font-serif text-[19px] tracking-[0.02em] text-cream lg:text-[21px]">
                Requinte
              </span>
              <span className="mt-[3px] block whitespace-nowrap text-[8px] uppercase tracking-[0.26em] text-gold sm:text-[8.5px] sm:tracking-[0.3em]">
                Coffee Buffet
              </span>
            </span>
          </a>

          <ul className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="group relative text-[11px] uppercase tracking-[0.2em] text-cream/70 transition-colors duration-300 hover:text-cream"
                >
                  {link.label}
                  <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-gold transition-all duration-500 ease-silk group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <a href="#orcamento" className="btn-primary hidden !min-h-[44px] !px-6 lg:inline-flex">
              Solicitar orcamento
            </a>
            <a
              href="#orcamento"
              className="btn-primary !min-h-[42px] !px-4 !text-[10px] sm:!px-5 lg:hidden"
            >
              Orcamento
            </a>
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Abrir menu"
              aria-expanded={open}
              className="flex h-11 w-11 items-center justify-center border border-cream/20 text-cream transition-colors hover:border-gold hover:text-gold lg:hidden"
            >
              <Menu size={18} strokeWidth={1.5} aria-hidden />
            </button>
          </div>
        </nav>
      </header>

      {mounted && (
        <div
          className={[
            'fixed inset-0 z-[60] overflow-y-auto bg-ink transition-opacity duration-300 ease-silk lg:hidden',
            visible ? 'opacity-100' : 'pointer-events-none opacity-0',
          ].join(' ')}
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
        >
          <div className="shell flex items-center justify-between py-4">
            <span className="font-serif text-[21px] text-cream">Requinte</span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Fechar menu"
              className="flex h-11 w-11 items-center justify-center border border-cream/20 text-cream transition-colors hover:border-gold hover:text-gold"
            >
              <X size={18} strokeWidth={1.5} aria-hidden />
            </button>
          </div>

          <ul className="shell mt-6 flex flex-col gap-1">
            {navLinks.map((link, i) => (
              <li
                key={link.href}
                className="border-b border-cream/10 transition-all duration-700 ease-silk"
                style={{
                  transitionDelay: `${80 + i * 55}ms`,
                  opacity: visible ? 1 : 0,
                  transform: visible ? 'translateY(0)' : 'translateY(14px)',
                }}
              >
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-5 font-serif text-[30px] font-light text-cream"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="shell mb-12 mt-10">
            <a href="#orcamento" onClick={() => setOpen(false)} className="btn-primary w-full">
              Solicitar orcamento
            </a>
            <a
              href={brand.instagramUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="mt-6 block text-[11px] uppercase tracking-[0.2em] text-cream/50"
            >
              {brand.instagramHandle}
            </a>
          </div>
        </div>
      )}
    </>
  )
}
