'use client'

import Image from 'next/image'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'

import { hero, heroPhoto } from '@/content/site'
import { RevealLines } from './Reveal'

export function Hero() {
  const reduce = useReducedMotion()

  return (
    <section
      id="topo"
      className="relative isolate flex min-h-[100svh] flex-col justify-end overflow-hidden bg-ink"
    >
      <div className="absolute inset-0 -z-10">
        <div className={`relative h-full w-full ${reduce ? '' : 'animate-slow-zoom'}`}>
          <Image
            src={heroPhoto.src}
            alt={heroPhoto.alt}
            fill
            priority
            fetchPriority="high"
            sizes="100vw"
            quality={85}
            className="object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/35" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/80 via-ink/20 to-transparent" />
      </div>

      <div className="shell grain relative pb-16 pt-32 sm:pb-20 lg:pb-24">
        <motion.p
          className="eyebrow"
          initial={reduce ? undefined : { opacity: 0, y: 14 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          {hero.eyebrow}
        </motion.p>

        <h1 className="mt-6 max-w-[15ch] font-serif text-[clamp(2.4rem,8.2vw,5.6rem)] font-light leading-[1.02] tracking-[-0.015em] text-cream">
          <RevealLines lines={hero.headline} delay={0.25} />
        </h1>

        <motion.p
          className="mt-7 max-w-[46ch] text-[15px] leading-relaxed text-cream/70 sm:text-base"
          initial={reduce ? undefined : { opacity: 0, y: 18 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          {hero.description}
        </motion.p>

        <motion.div
          className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4"
          initial={reduce ? undefined : { opacity: 0, y: 18 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <a href="#orcamento" className="btn-primary">
            {hero.primaryCta}
          </a>
          <a href="#posicionamento" className="btn-ghost">
            {hero.secondaryCta}
          </a>
        </motion.div>
      </div>

      <motion.a
        href="#posicionamento"
        aria-label="Rolar para o conteudo"
        className="absolute bottom-8 right-6 hidden h-12 w-12 items-center justify-center rounded-full border border-cream/20 text-cream/60 transition-colors hover:border-gold hover:text-gold lg:right-12 lg:flex"
        initial={reduce ? undefined : { opacity: 0 }}
        animate={reduce ? undefined : { opacity: 1 }}
        transition={{ duration: 1, delay: 1.1 }}
      >
        <ArrowDown size={16} strokeWidth={1.5} aria-hidden />
      </motion.a>
    </section>
  )
}
