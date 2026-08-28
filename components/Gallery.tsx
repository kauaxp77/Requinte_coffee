'use client'

import { useMemo, useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Expand } from 'lucide-react'

import { allPhotos, type GalleryCategory, type Photo } from '@/content/site'
import { Lightbox } from './Lightbox'
import { Reveal } from './Reveal'

const filters: { id: GalleryCategory | 'todos'; label: string }[] = [
  { id: 'todos', label: 'Todos' },
  { id: 'gastronomia', label: 'Gastronomia' },
  { id: 'eventos', label: 'Eventos' },
  { id: 'ambientes', label: 'Ambientes' },
  { id: 'detalhes', label: 'Detalhes' },
]

export function Gallery() {
  const [filter, setFilter] = useState<GalleryCategory | 'todos'>('todos')
  const [lightbox, setLightbox] = useState<number | null>(null)

  const visible: Photo[] = useMemo(
    () => (filter === 'todos' ? allPhotos : allPhotos.filter((p) => p.category === filter)),
    [filter],
  )

  return (
    <section
      id="galeria"
      className="relative border-b border-cream/10 bg-ink py-24 sm:py-28 lg:py-36"
      aria-labelledby="galeria-titulo"
    >
      <div className="shell">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <Reveal>
              <p className="eyebrow">Galeria</p>
              <span className="rule-gold mt-5" />
            </Reveal>
            <Reveal delay={0.08}>
              <h2
                id="galeria-titulo"
                className="mt-7 font-serif text-[clamp(2rem,5.2vw,3.4rem)] font-light leading-[1.08] tracking-[-0.01em] text-cream"
              >
                Fotografias reais dos nossos eventos.
              </h2>
            </Reveal>
          </div>

          <Reveal delay={0.12}>
            <ul
              className="no-scrollbar -mx-6 flex gap-6 overflow-x-auto px-6 lg:mx-0 lg:px-0"
              role="tablist"
              aria-label="Filtrar galeria por categoria"
            >
              {filters.map((f) => {
                const active = filter === f.id
                return (
                  <li key={f.id} className="shrink-0">
                    <button
                      type="button"
                      role="tab"
                      aria-selected={active}
                      onClick={() => {
                        setFilter(f.id)
                        setLightbox(null)
                      }}
                      className={[
                        'relative py-2 text-[11px] uppercase tracking-[0.2em] transition-colors duration-500',
                        active ? 'text-gold' : 'text-cream/45 hover:text-cream',
                      ].join(' ')}
                    >
                      {f.label}
                      <span
                        className={[
                          'absolute -bottom-0.5 left-0 h-px bg-gold transition-all duration-500 ease-silk',
                          active ? 'w-full' : 'w-0',
                        ].join(' ')}
                      />
                    </button>
                  </li>
                )
              })}
            </ul>
          </Reveal>
        </div>

        {/* Masonry editorial via CSS columns */}
        <div className="mt-14 columns-2 gap-4 sm:gap-5 lg:columns-3 lg:gap-6">
          {visible.map((photo, i) => (
            <motion.button
              key={photo.src}
              layout
              type="button"
              onClick={() => setLightbox(i)}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-8% 0px' }}
              transition={{ duration: 0.85, delay: (i % 3) * 0.06, ease: [0.22, 1, 0.36, 1] }}
              className="group relative mb-4 block w-full overflow-hidden sm:mb-5 lg:mb-6"
              aria-label={`Abrir foto ampliada: ${photo.alt}`}
            >
              <span
                className={[
                  'relative block w-full',
                  photo.orientation === 'landscape' ? 'aspect-[4/3]' : 'aspect-[3/4]',
                ].join(' ')}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-[1200ms] ease-silk group-hover:scale-[1.05]"
                />
                <span className="absolute inset-0 bg-ink/20 transition-colors duration-700 group-hover:bg-ink/45" />
                <span className="absolute bottom-4 right-4 flex h-10 w-10 translate-y-2 items-center justify-center border border-cream/40 text-cream opacity-0 transition-all duration-500 ease-silk group-hover:translate-y-0 group-hover:opacity-100">
                  <Expand size={15} strokeWidth={1.4} aria-hidden />
                </span>
              </span>
            </motion.button>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-14 flex justify-center">
            <a href="#orcamento" className="btn-ghost">
              Quero viver essa experiencia
            </a>
          </div>
        </Reveal>
      </div>

      <Lightbox
        photos={visible}
        index={lightbox}
        onClose={() => setLightbox(null)}
        onChange={setLightbox}
      />
    </section>
  )
}
