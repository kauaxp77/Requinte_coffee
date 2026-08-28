import Image from 'next/image'
import { Instagram } from 'lucide-react'

import { brand, instagram } from '@/content/site'
import { Reveal } from './Reveal'

/**
 * Composicao que remete ao feed, montada com as fotos locais.
 * Sem iframe e sem embed externo — nenhum custo de performance.
 */
export function InstagramStrip() {
  return (
    <section
      className="relative border-b border-cream/10 bg-ink py-20 sm:py-24"
      aria-labelledby="instagram-titulo"
    >
      <div className="shell">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Reveal>
              <p className="eyebrow">{instagram.eyebrow}</p>
            </Reveal>
            <Reveal delay={0.06}>
              <h2
                id="instagram-titulo"
                className="mt-4 font-serif text-[clamp(1.7rem,4vw,2.5rem)] font-light leading-tight text-cream"
              >
                {instagram.title}
              </h2>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <a
              href={brand.instagramUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2.5 text-[12px] uppercase tracking-[0.18em] text-gold transition-colors duration-500 hover:text-cream"
            >
              <Instagram size={16} strokeWidth={1.3} aria-hidden />
              {brand.instagramHandle}
            </a>
          </Reveal>
        </div>
      </div>

      <div className="mt-10 grid grid-cols-3 gap-px bg-cream/10 lg:grid-cols-6">
        {instagram.photos.map((photo, i) => (
          <a
            key={photo.src}
            href={brand.instagramUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="group relative aspect-square overflow-hidden bg-ink"
            aria-label={`Abrir o Instagram ${brand.instagramHandle}`}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(max-width: 1024px) 33vw, 17vw"
              className="object-cover transition-transform duration-[1100ms] ease-silk group-hover:scale-110"
              loading={i < 3 ? undefined : 'lazy'}
            />
            <span className="absolute inset-0 bg-ink/40 transition-colors duration-500 group-hover:bg-ink/15" />
          </a>
        ))}
      </div>
    </section>
  )
}
