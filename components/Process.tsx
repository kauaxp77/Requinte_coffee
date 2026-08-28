import { processSection } from '@/content/site'
import { Reveal } from './Reveal'

export function Process() {
  return (
    <section
      className="relative border-b border-cream/10 bg-ink py-24 sm:py-28 lg:py-36"
      aria-labelledby="processo-titulo"
    >
      <div className="shell">
        <div className="max-w-2xl">
          <Reveal>
            <p className="eyebrow">{processSection.eyebrow}</p>
            <span className="rule-gold mt-5" />
          </Reveal>
          <Reveal delay={0.08}>
            <h2
              id="processo-titulo"
              className="mt-7 font-serif text-[clamp(2rem,5.2vw,3.4rem)] font-light leading-[1.08] tracking-[-0.01em] text-cream"
            >
              {processSection.title}
            </h2>
          </Reveal>
        </div>

        <ol className="mt-16 border-t border-cream/10">
          {processSection.steps.map((step, i) => (
            <Reveal as="li" key={step.number} delay={0.04 * i}>
              <div className="group grid grid-cols-[auto_1fr] items-baseline gap-x-6 border-b border-cream/10 py-8 transition-colors duration-700 hover:border-gold/40 sm:grid-cols-[80px_minmax(0,300px)_1fr] sm:gap-x-10 sm:py-10">
                <span className="font-serif text-[15px] tracking-[0.1em] text-gold">
                  {step.number}
                </span>
                <h3 className="font-serif text-[26px] font-light leading-tight text-cream sm:text-[32px]">
                  {step.title}
                </h3>
                <p className="col-start-2 mt-3 text-[14px] leading-relaxed text-cream/55 sm:col-start-3 sm:mt-0 sm:text-[15px]">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
