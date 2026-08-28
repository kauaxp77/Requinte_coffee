import {
  Building2,
  CalendarCheck,
  ChefHat,
  MessageCircle,
  Sparkles,
  Users,
  type LucideIcon,
} from 'lucide-react'

import { differentials } from '@/content/site'
import { Reveal } from './Reveal'

const icons: Record<string, LucideIcon> = {
  MessageCircle,
  Sparkles,
  ChefHat,
  Users,
  CalendarCheck,
  Building2,
}

export function Differentials() {
  return (
    <section
      className="relative border-b border-cream/10 bg-ink-soft py-24 sm:py-28 lg:py-36"
      aria-labelledby="diferenciais-titulo"
    >
      <div className="shell">
        <div className="max-w-2xl">
          <Reveal>
            <p className="eyebrow">{differentials.eyebrow}</p>
            <span className="rule-gold mt-5" />
          </Reveal>
          <Reveal delay={0.08}>
            <h2
              id="diferenciais-titulo"
              className="mt-7 font-serif text-[clamp(2rem,5.2vw,3.4rem)] font-light leading-[1.08] tracking-[-0.01em] text-cream"
            >
              {differentials.title}
            </h2>
          </Reveal>
        </div>

        <ul className="mt-14 grid gap-x-12 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-y-16">
          {differentials.items.map((item, i) => {
            const Icon = icons[item.icon] ?? Sparkles
            return (
              <Reveal as="li" key={item.title} delay={0.05 * (i % 3)}>
                <Icon size={22} strokeWidth={1.1} className="text-gold" aria-hidden />
                <h3 className="mt-5 font-serif text-[22px] font-light leading-tight text-cream">
                  {item.title}
                </h3>
                <p className="mt-3 text-[14px] leading-[1.8] text-cream/55">{item.description}</p>
              </Reveal>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
