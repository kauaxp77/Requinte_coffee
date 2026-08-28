import { positioning, clients } from '@/content/site'
import { Reveal, RevealLines } from './Reveal'

export function Positioning() {
  return (
    <section
      id="posicionamento"
      className="relative border-b border-cream/10 bg-ink py-24 sm:py-28 lg:py-36"
      aria-labelledby="posicionamento-titulo"
    >
      <div className="shell grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <Reveal>
            <p className="eyebrow">{positioning.eyebrow}</p>
            <span className="rule-gold mt-5" />
          </Reveal>
          <h2
            id="posicionamento-titulo"
            className="mt-7 font-serif text-[clamp(2rem,5.2vw,3.4rem)] font-light leading-[1.08] tracking-[-0.01em] text-cream"
          >
            <RevealLines lines={positioning.headline} />
          </h2>
        </div>

        <div className="lg:col-span-6 lg:col-start-7">
          {positioning.paragraphs.map((paragraph, i) => (
            <Reveal key={i} delay={0.08 * i}>
              <p className="mb-6 text-[15px] leading-[1.85] text-cream/65 sm:text-base">
                {paragraph}
              </p>
            </Reveal>
          ))}

          <Reveal delay={0.2}>
            <div className="mt-10 border-t border-cream/10 pt-8">
              <p className="eyebrow !text-cream/40">{clients.eyebrow}</p>
              <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-3">
                {clients.items.map((item) => (
                  <li
                    key={item}
                    className="font-serif text-[15px] text-cream/75 sm:text-[17px]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
