'use client'

import { useEffect, useState } from 'react'

/**
 * Mantem o elemento montado durante a saida para permitir o fade-out em CSS.
 *
 * Substitui o AnimatePresence nos overlays em tela cheia: com React 19 em
 * StrictMode o AnimatePresence pode nao desmontar o filho apos a saida,
 * deixando um overlay invisivel por cima da pagina e bloqueando os cliques.
 *
 * Retorna:
 *  - mounted: se o elemento deve estar no DOM
 *  - visible: se ele deve estar no estado final (usado para as classes de transicao)
 */
export function useMountTransition(open: boolean, exitDuration = 350) {
  const [mounted, setMounted] = useState(open)
  const [visible, setVisible] = useState(open)

  useEffect(() => {
    if (open) {
      setMounted(true)
      const raf = requestAnimationFrame(() => setVisible(true))
      return () => cancelAnimationFrame(raf)
    }

    setVisible(false)
    const timer = window.setTimeout(() => setMounted(false), exitDuration)
    return () => window.clearTimeout(timer)
  }, [open, exitDuration])

  return { mounted, visible }
}
