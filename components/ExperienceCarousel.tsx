'use client'

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { motion, useReducedMotion, useSpring } from 'framer-motion'
import { ArrowLeft, ArrowRight } from 'lucide-react'

import { experienceCarousel } from '@/content/site'
import { Reveal } from './Reveal'

const slides = experienceCarousel.slides
const SWIPE_THRESHOLD = 55

export function ExperienceCarousel() {
  const [index, setIndex] = useState(0)
  const [step, setStep] = useState(0)
  const trackRef = useRef<HTMLDivElement>(null)
  const slideRef = useRef<HTMLDivElement>(null)
  const pointerStart = useRef<{ x: number; y: number } | null>(null)
  const reduce = useReducedMotion()

  /** Deslocamento do trilho como motion value: uma unica fonte de verdade. */
  const x = useSpring(0, { stiffness: 120, damping: 22, mass: 0.9 })

  /** Mede a largura real de um slide + gap para o deslocamento do trilho. */
  useLayoutEffect(() => {
    const measure = () => {
      const slide = slideRef.current
      const track = trackRef.current
      if (!slide || !track) return
      const gap = parseFloat(getComputedStyle(track).columnGap || '0') || 0
      setStep(slide.getBoundingClientRect().width + gap)
    }
    measure()
    const ro = new ResizeObserver(measure)
    if (slideRef.current) ro.observe(slideRef.current)
    window.addEventListener('resize', measure)
    return () => {
      ro.disconnect()
      window.removeEventListener('resize', measure)
    }
  }, [])

  useEffect(() => {
    const target = -index * step
    if (reduce) x.jump(target)
    else x.set(target)
  }, [index, step, reduce, x])

  const go = useCallback((dir: number) => {
    setIndex((prev) => Math.min(Math.max(prev + dir, 0), slides.length - 1))
  }, [])

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight') {
      e.preventDefault()
      go(1)
    }
    if (e.key === 'ArrowLeft') {
      e.preventDefault()
      go(-1)
    }
    if (e.key === 'Home') {
      e.preventDefault()
      setIndex(0)
    }
    if (e.key === 'End') {
      e.preventDefault()
      setIndex(slides.length - 1)
    }
  }

  /** Swipe nativo: mantem o scroll vertical livre e nao interfere no transform do trilho. */
  const onPointerDown = (e: React.PointerEvent) => {
    pointerStart.current = { x: e.clientX, y: e.clientY }
  }

  const onPointerUp = (e: React.PointerEvent) => {
    const start = pointerStart.current
    pointerStart.current = null
    if (!start) return
    const dx = e.clientX - start.x
    const dy = e.clientY - start.y
    if (Math.abs(dx) < SWIPE_THRESHOLD || Math.abs(dx) < Math.abs(dy)) return
    go(dx < 0 ? 1 : -1)
  }

  const atStart = index === 0
  const atEnd = index === slides.length - 1

  return (
    <section
      id="experiencia"
      className="relative overflow-hidden border-b border-cream/10 bg-ink py-24 sm:py-28 lg:py-36"
      aria-labelledby="experiencia-titulo"
    >
      <div className="shell">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <Reveal>
              <p className="eyebrow">{experienceCarousel.eyebrow}</p>
              <span className="rule-gold mt-5" />
            </Reveal>
            <Reveal delay={0.08}>
              <h2
                id="experiencia-titulo"
                className="mt-7 font-serif text-[clamp(2rem,5.2vw,3.4rem)] font-light leading-[1.08] tracking-[-0.01em] text-cream"
              >
                {experienceCarousel.title}
              </h2>
            </Reveal>
          </div>

          <Reveal delay={0.14}>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => go(-1)}
                disabled={atStart}
                aria-label="Foto anterior"
                aria-controls="experiencia-trilho"
                className="flex h-12 w-12 items-center justify-center border border-cream/20 text-cream transition-all duration-500 hover:border-gold hover:text-gold disabled:pointer-events-none disabled:opacity-25"
              >
                <ArrowLeft size={17} strokeWidth={1.4} aria-hidden />
              </button>
              <button
                type="button"
                onClick={() => go(1)}
                disabled={atEnd}
                aria-label="Proxima foto"
                aria-controls="experiencia-trilho"
                className="flex h-12 w-12 items-center justify-center border border-cream/20 text-cream transition-all duration-500 hover:border-gold hover:text-gold disabled:pointer-events-none disabled:opacity-25"
              >
                <ArrowRight size={17} strokeWidth={1.4} aria-hidden />
              </button>
              <span className="ml-3 font-serif text-[15px] text-cream/45" aria-hidden>
                {String(index + 1).padStart(2, '0')}
                <span className="mx-1.5 text-cream/25">/</span>
                {String(slides.length).padStart(2, '0')}
              </span>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Trilho editorial: o slide ativo domina, os vizinhos aparecem em parte */}
      <div
        id="experiencia-trilho"
        className="mt-14 lg:mt-16"
        role="group"
        aria-roledescription="carrossel"
        aria-label="Galeria da experiencia Requinte"
        tabIndex={0}
        onKeyDown={onKeyDown}
      >
        <div
          className="overflow-hidden pl-6 sm:pl-8 lg:pl-12"
          onPointerDown={onPointerDown}
          onPointerUp={onPointerUp}
          onPointerCancel={() => (pointerStart.current = null)}
        >
          <motion.div
            ref={trackRef}
            className="flex touch-pan-y gap-4 sm:gap-5 lg:gap-6"
            style={{ x }}
          >
            {slides.map((slide, i) => {
              const active = i === index
              return (
                <div
                  key={slide.photo.src}
                  ref={i === 0 ? slideRef : undefined}
                  className="relative w-[80vw] shrink-0 sm:w-[64vw] lg:w-[52vw] xl:w-[46vw]"
                  aria-roledescription="slide"
                  aria-label={`${i + 1} de ${slides.length}: ${slide.word}`}
                >
                  <div
                    className={[
                      'relative aspect-[4/5] overflow-hidden transition-all duration-[900ms] ease-silk sm:aspect-[5/4]',
                      active ? 'opacity-100' : 'opacity-40',
                    ].join(' ')}
                  >
                    <Image
                      src={slide.photo.src}
                      alt={slide.photo.alt}
                      fill
                      sizes="(max-width: 640px) 80vw, (max-width: 1024px) 64vw, 52vw"
                      className={[
                        'select-none object-cover transition-transform duration-[1400ms] ease-silk',
                        active ? 'scale-100' : 'scale-105',
                      ].join(' ')}
                      draggable={false}
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/5 to-transparent" />
                    <p
                      className={[
                        'pointer-events-none absolute bottom-6 left-6 font-serif text-[26px] font-light tracking-wide text-cream transition-all duration-700 ease-silk sm:bottom-8 sm:left-8 sm:text-[34px]',
                        active ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0',
                      ].join(' ')}
                    >
                      {slide.word}
                    </p>
                  </div>
                </div>
              )
            })}
          </motion.div>
        </div>

        {/* Indicadores */}
        <div className="shell mt-8 flex items-center gap-2">
          {slides.map((slide, i) => (
            <button
              key={slide.photo.src}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Ir para a foto ${i + 1}: ${slide.word}`}
              aria-current={i === index}
              className="group py-3"
            >
              <span
                className={[
                  'block h-px transition-all duration-700 ease-silk',
                  i === index ? 'w-12 bg-gold' : 'w-6 bg-cream/25 group-hover:bg-cream/50',
                ].join(' ')}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
