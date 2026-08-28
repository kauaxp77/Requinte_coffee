'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'

import { cinematic } from '@/content/site'
import { RevealLines } from './Reveal'

export function Cinematic() {
  const ref = useRef<HTMLElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['-8%', '8%'])

  return (
    <section
      ref={ref}
      className="relative isolate flex min-h-[78svh] items-center overflow-hidden bg-ink lg:min-h-[88svh]"
      aria-labelledby="cinematografica-titulo"
    >
      <motion.div className="absolute inset-0 -top-[10%] -z-10 h-[120%]" style={reduce ? undefined : { y }}>
        <Image
          src={cinematic.photo.src}
          alt={cinematic.photo.alt}
          fill
          sizes="100vw"
          quality={82}
          className="object-cover object-center"
        />
      </motion.div>
      <div className="absolute inset-0 -z-10 bg-ink/65" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-transparent to-ink/50" />

      <div className="shell grain relative py-24 text-center">
        <h2
          id="cinematografica-titulo"
          className="mx-auto font-serif text-[clamp(2.6rem,9vw,6rem)] font-light leading-[1.02] tracking-[-0.02em] text-cream"
        >
          <RevealLines lines={cinematic.lines} />
        </h2>

        <div className="mt-12 flex justify-center">
          <a href="#orcamento" className="btn-primary">
            {cinematic.cta}
          </a>
        </div>
      </div>
    </section>
  )
}
