'use client'

import { useRef } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'

interface RevealProps {
  children: ReactNode
  delay?: number
  y?: number
  className?: string
  as?: 'div' | 'section' | 'li' | 'span' | 'article'
}

/**
 * Reveal discreto e caro: deslocamento curto, curva longa, uma vez so.
 */
export function Reveal({ children, delay = 0, y = 28, className, as = 'div' }: RevealProps) {
  const reduce = useReducedMotion()
  const MotionTag = motion[as]

  return (
    <MotionTag
      className={className}
      initial={reduce ? undefined : { opacity: 0, y }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-12% 0px -12% 0px' }}
      transition={{ duration: 1, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  )
}

/**
 * Revela um titulo linha a linha, cada linha subindo por tras de uma mascara.
 *
 * A mascara usa transicao CSS (translate percentual) em vez do motion transform:
 * percentuais de transform sao resolvidos pelo browser contra a propria linha,
 * o que mantem o efeito correto em qualquer tamanho de fonte e quebra de linha.
 */
export function RevealLines({
  lines,
  className,
  lineClassName,
  delay = 0,
}: {
  lines: string[]
  className?: string
  lineClassName?: string
  delay?: number
}) {
  const reduce = useReducedMotion()
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-10% 0px' })
  const shown = reduce || inView

  return (
    <span ref={ref} className={className}>
      {lines.map((line, i) => (
        <span key={line} className="block overflow-hidden">
          <span
            className={[
              'block will-change-transform',
              lineClassName ?? '',
              shown ? 'translate-y-0' : 'translate-y-[110%]',
            ].join(' ')}
            style={{
              transition: reduce
                ? undefined
                : `transform 1100ms cubic-bezier(0.22, 1, 0.36, 1) ${delay + i * 0.11}s`,
            }}
          >
            {line}
          </span>
        </span>
      ))}
    </span>
  )
}
