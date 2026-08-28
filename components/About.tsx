import Image from 'next/image'

import { about } from '@/content/site'
import { Reveal } from './Reveal'

export function About() {
  return (
    <section
      id="sobre"
      className="relative border-b border-cream/10 bg-ink py-24 sm:py-28 lg:py-36"
      aria-labelledby="sobre-titulo"
    >
      <div className="shell grid gap-12 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-5">
          <div className="relative aspect-[4/5] w-full overflow-hidden">
            <Image
              src={about.photo.src}
              alt={about.photo.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-ink/15" />
          </div>
        </Reveal>

        <div className="lg:col-span-6 lg:col-start-7 lg:pt-6">
          <Reveal>
            <p className="eyebrow">{about.eyebrow}</p>
            <span className="rule-gold mt-5" />
          </Reveal>
          <Reveal delay={0.08}>
            <h2
              id="sobre-titulo"
              className="mt-7 font-serif text-[clamp(2rem,5.2vw,3.4rem)] font-light leading-[1.08] tracking-[-0.01em] text-cream"
            >
              {about.title}
            </h2>
          </Reveal>

          <div className="mt-8">
            {about.paragraphs.map((paragraph, i) => (
              <Reveal key={i} delay={0.06 * i}>
                <p className="mb-6 text-[15px] leading-[1.85] text-cream/65">{paragraph}</p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.16}>
            <dl className="mt-10 grid gap-px border border-cream/10 bg-cream/10 sm:grid-cols-3">
              {about.facts.map((fact) => (
                <div key={fact.label} className="bg-ink p-6">
                  <dt className="text-[10px] uppercase tracking-[0.22em] text-gold">
                    {fact.label}
                  </dt>
                  <dd className="mt-3 text-[13px] leading-relaxed text-cream/60">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
