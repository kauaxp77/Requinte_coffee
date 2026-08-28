'use client'

import { useCallback, useEffect, useRef } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowLeft, ArrowRight, X } from 'lucide-react'

import type { Photo } from '@/content/site'
import { useMountTransition } from '@/lib/useMountTransition'

interface LightboxProps {
  photos: Photo[]
  index: number | null
  onClose: () => void
  onChange: (index: number) => void
}

export function Lightbox({ photos, index, onClose, onChange }: LightboxProps) {
  const open = index !== null
  const { mounted, visible } = useMountTransition(open, 320)
  const closeRef = useRef<HTMLButtonElement>(null)
  const dialogRef = useRef<HTMLDivElement>(null)
  const restoreFocus = useRef<HTMLElement | null>(null)
  const lastPhoto = useRef<Photo | null>(null)

  const next = useCallback(() => {
    if (index === null) return
    onChange((index + 1) % photos.length)
  }, [index, onChange, photos.length])

  const prev = useCallback(() => {
    if (index === null) return
    onChange((index - 1 + photos.length) % photos.length)
  }, [index, onChange, photos.length])

  useEffect(() => {
    if (!open) return
    restoreFocus.current = document.activeElement as HTMLElement
    const timer = window.setTimeout(() => closeRef.current?.focus(), 60)
    document.body.style.overflow = 'hidden'

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault()
        onClose()
      }
      if (e.key === 'ArrowRight') next()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'Tab') {
        // foco preso dentro do dialogo
        const focusable = dialogRef.current?.querySelectorAll<HTMLElement>('button')
        if (!focusable || focusable.length === 0) return
        const first = focusable[0]
        const last = focusable[focusable.length - 1]
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          last.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }

    window.addEventListener('keydown', onKey)
    return () => {
      window.clearTimeout(timer)
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
      restoreFocus.current?.focus?.()
    }
  }, [open, next, prev, onClose])

  if (index !== null && photos[index]) lastPhoto.current = photos[index]
  const photo = index !== null ? photos[index] : lastPhoto.current
  const position = index !== null ? index + 1 : photos.length

  if (!mounted || !photo) return null

  return (
    <div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-label={`Foto ${position} de ${photos.length}`}
      className={[
        'fixed inset-0 z-[70] flex flex-col bg-ink/97 backdrop-blur-sm transition-opacity duration-300 ease-silk',
        visible ? 'opacity-100' : 'pointer-events-none opacity-0',
      ].join(' ')}
    >
      <div className="flex items-center justify-between px-6 py-5 sm:px-8">
        <span className="font-serif text-[15px] text-cream/60">
          {String(position).padStart(2, '0')}
          <span className="mx-1.5 text-cream/25">/</span>
          {String(photos.length).padStart(2, '0')}
        </span>
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Fechar galeria"
          className="flex h-11 w-11 items-center justify-center border border-cream/20 text-cream transition-colors hover:border-gold hover:text-gold"
        >
          <X size={18} strokeWidth={1.4} aria-hidden />
        </button>
      </div>

      <div className="relative flex min-h-0 flex-1 items-center justify-center px-4 pb-4 sm:px-8">
        <motion.div
          key={photo.src}
          className="relative h-full w-full"
          initial={{ opacity: 0, scale: 0.985 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.08}
          onDragEnd={(_, info) => {
            if (info.offset.x < -70) next()
            else if (info.offset.x > 70) prev()
          }}
        >
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            sizes="100vw"
            quality={88}
            className="select-none object-contain"
            draggable={false}
            priority
          />
        </motion.div>
      </div>

      <div className="flex items-center justify-between gap-4 px-6 pb-7 sm:px-8">
        <p className="max-w-[52ch] text-[12px] leading-relaxed text-cream/45">{photo.alt}</p>
        <div className="flex shrink-0 items-center gap-3">
          <button
            type="button"
            onClick={prev}
            aria-label="Foto anterior"
            className="flex h-12 w-12 items-center justify-center border border-cream/20 text-cream transition-colors hover:border-gold hover:text-gold"
          >
            <ArrowLeft size={17} strokeWidth={1.4} aria-hidden />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Proxima foto"
            className="flex h-12 w-12 items-center justify-center border border-cream/20 text-cream transition-colors hover:border-gold hover:text-gold"
          >
            <ArrowRight size={17} strokeWidth={1.4} aria-hidden />
          </button>
        </div>
      </div>
    </div>
  )
}
