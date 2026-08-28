import Image from 'next/image'

import { events, eventsSection } from '@/content/site'
import { Reveal } from './Reveal'

export function EventSection() {
  return (
    <section
      id="eventos"
      className="relative border-b border-cream/10 bg-ink-soft py-24 sm:py-28 lg:py-36"
      aria-labelledby="eventos-titulo"
    >
      <div className="shell">
        <div className="max-w-3xl">
          <Reveal>
            <p className="eyebrow">{eventsSection.eyebrow}</p>
            <span className="rule-gold mt-5" />
          </Reveal>
          <Reveal delay={0.08}>
            <h2
              id="eventos-titulo"
              className="mt-7 font-serif text-[clamp(2rem,5.2vw,3.4rem)] font-light leading-[1.08] tracking-[-0.01em] text-cream"
            >
              {eventsSection.title}
            </h2>
          </Reveal>
        </div>

        <ul className="mt-14 grid gap-px border border-cream/10 bg-cream/10 sm:grid-cols-2 lg:grid-cols-3">
          {events.map((event, i) => (
            <Reveal as="li" key={event.id} delay={0.05 * (i % 3)} className="group bg-ink-soft">
              <article className="relative flex h-full flex-col">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={event.photo.src}
                    alt={event.photo.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-[1200ms] ease-silk group-hover:scale-[1.06]"
                  />
                  <div className="absolute inset-0 bg-ink/45 transition-colors duration-700 group-hover:bg-ink/25" />
                </div>

                <div className="flex flex-1 flex-col p-7 lg:p-8">
                  <h3 className="font-serif text-[24px] font-light leading-tight text-cream lg:text-[27px]">
                    {event.title}
                  </h3>
                  <span className="mt-4 block h-px w-8 bg-gold/50 transition-all duration-700 ease-silk group-hover:w-14" />
                  <p className="mt-5 text-[14px] leading-relaxed text-cream/55">
                    {event.description}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </ul>

        <Reveal delay={0.1}>
          <div className="mt-14 flex justify-center">
            <a href="#orcamento" className="btn-ghost">
              {eventsSection.cta}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
