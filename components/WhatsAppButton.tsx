'use client'

import { useEffect, useState } from 'react'

import { whatsappHref } from '@/lib/whatsapp'
import { useMountTransition } from '@/lib/useMountTransition'

/** Icone oficial do WhatsApp em SVG — o Lucide nao traz a marca. */
function WhatsAppGlyph() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden focusable="false">
      <path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.65-2.05-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.6-.91-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.01-1.04 2.47s1.06 2.86 1.21 3.06c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.09 1.75-.72 2-1.41.25-.69.25-1.28.17-1.41-.07-.13-.27-.2-.57-.35Z" />
      <path d="M12.04 2.5c-5.24 0-9.5 4.26-9.5 9.5 0 1.67.44 3.31 1.27 4.75L2.5 21.5l4.9-1.28a9.46 9.46 0 0 0 4.64 1.2h.01c5.23 0 9.49-4.26 9.49-9.5s-4.26-9.5-9.5-9.5Zm0 17.4h-.01c-1.47 0-2.91-.4-4.17-1.14l-.3-.18-2.9.76.77-2.83-.2-.31a7.9 7.9 0 1 1 6.81 3.7Z" />
    </svg>
  )
}

export function WhatsAppButton() {
  const [show, setShow] = useState(false)
  const { mounted, visible } = useMountTransition(show, 350)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 0.6)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!mounted) return null

  return (
    <a
      href={whatsappHref()}
      target="_blank"
      rel="noreferrer noopener"
      aria-label="Falar no WhatsApp"
      className={[
        'group fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full',
        'bg-gold text-ink shadow-[0_10px_40px_-12px_rgba(201,169,110,0.7)]',
        'transition-all duration-500 ease-silk hover:bg-cream sm:bottom-7 sm:right-7',
        visible ? 'translate-y-0 scale-100 opacity-100' : 'pointer-events-none translate-y-3 scale-90 opacity-0',
      ].join(' ')}
    >
      <WhatsAppGlyph />
      <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap bg-ink px-4 py-2.5 text-[10px] uppercase tracking-[0.18em] text-cream opacity-0 transition-opacity duration-300 group-hover:opacity-100 lg:block">
        Falar no WhatsApp
      </span>
    </a>
  )
}
