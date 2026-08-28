'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'

import { gastronomy, photos } from '@/content/site'
import { Reveal } from './Reveal'

/** Imagem com parallax vertical muito sutil. */
function ParallaxImage({
  src,
  alt,
  className,
  sizes,
  range = 40,
}: {
  src: string
  alt: string
  className?: string
  sizes: string
  range?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], [range, -range])

  return (
    <div ref={ref} className={`relative overflow-hidden ${className ?? ''}`}>
      <motion.div className="absolute inset-0 -top-[8%] h-[116%]" style={reduce ? undefined : { y }}>
        <Image src={src} alt={alt} fill sizes={sizes} className="object-cover" />
      </motion.div>
    </div>
  )
}

export function Gastronomy() {
  return (
    <section
      id="gastronomia"
      className="relative border-b border-cream/10 bg-cream py-24 text-ink sm:py-28 lg:py-36"
      aria-labelledby="gastronomia-titulo"
    >
      <div className="shell">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="eyebrow !text-gold-deep">{gastronomy.eyebrow}</p>
              <span className="rule-gold mt-5 !bg-gold-deep/50" />
            </Reveal>
            <Reveal delay={0.08}>
              <h2
                id="gastronomia-titulo"
                className="mt-7 font-serif text-[clamp(2rem,5.4vw,3.6rem)] font-light leading-[1.06] tracking-[-0.01em] text-ink"
              >
                {gastronomy.title}
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-4 lg:col-start-9">
            <Reveal delay={0.14}>
              <p className="text-[15px] leading-[1.85] text-ink/65">{gastronomy.intro}</p>
            </Reveal>
          </div>
        </div>

        {/* Composicao editorial: alturas e larguras assimetricas */}
        <div className="mt-16 grid grid-cols-2 gap-4 sm:gap-5 lg:mt-20 lg:grid-cols-12 lg:gap-6">
          <Reveal className="col-span-2 lg:col-span-7">
            <ParallaxImage
              src={photos.salgadosQuentes.src}
              alt={photos.salgadosQuentes.alt}
              sizes="(max-width: 1024px) 100vw, 58vw"
              className="aspect-[4/5] w-full sm:aspect-[16/11]"
            />
            <p className="mt-4 font-serif text-[19px] font-light text-ink/80 sm:text-[22px]">
              {gastronomy.captions[0]}
            </p>
          </Reveal>

          <Reveal delay={0.08} className="col-span-2 lg:col-span-5 lg:pt-16">
            <ParallaxImage
              src={photos.miniHamburgueres.src}
              alt={photos.miniHamburgueres.alt}
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="aspect-[4/5] w-full"
              range={26}
            />
            <p className="mt-4 font-serif text-[19px] font-light text-ink/80 sm:text-[22px]">
              {gastronomy.captions[1]}
            </p>
          </Reveal>

          <Reveal delay={0.04} className="col-span-1 lg:col-span-4">
            <ParallaxImage
              src={photos.frutasCristal.src}
              alt={photos.frutasCristal.alt}
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 32vw"
              className="aspect-[3/4] w-full"
              range={22}
            />
          </Reveal>

          <Reveal delay={0.1} className="col-span-1 lg:col-span-4 lg:pt-14">
            <ParallaxImage
              src={photos.boloVista.src}
              alt={photos.boloVista.alt}
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 32vw"
              className="aspect-[3/4] w-full"
              range={22}
            />
          </Reveal>

          <Reveal delay={0.16} className="col-span-2 flex flex-col justify-end lg:col-span-4">
            <ParallaxImage
              src={photos.coffeeBreak.src}
              alt={photos.coffeeBreak.alt}
              sizes="(max-width: 1024px) 100vw, 32vw"
              className="aspect-[4/3] w-full lg:aspect-[3/4]"
              range={22}
            />
            <p className="mt-4 font-serif text-[19px] font-light text-ink/80 sm:text-[22px]">
              {gastronomy.captions[2]}
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="mt-16 flex justify-center">
            <a href="#galeria" className="btn-dark">
              {gastronomy.cta}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
