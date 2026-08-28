import { testimonialsSection } from '@/content/site'
import { Reveal } from './Reveal'

/**
 * Nenhum depoimento e inventado. Enquanto content/site.ts nao tiver depoimentos
 * reais, a secao exibe o marcador de conteudo pendente — e nada mais.
 */
export function Testimonials() {
  const { items, emptyState, eyebrow, title } = testimonialsSection

  return (
    <section
      className="relative border-b border-cream/10 bg-ink-soft py-24 sm:py-28 lg:py-32"
      aria-labelledby="depoimentos-titulo"
    >
      <div className="shell">
        <div className="max-w-2xl">
          <Reveal>
            <p className="eyebrow">{eyebrow}</p>
            <span className="rule-gold mt-5" />
          </Reveal>
          <Reveal delay={0.08}>
            <h2
              id="depoimentos-titulo"
              className="mt-7 font-serif text-[clamp(2rem,5.2vw,3.4rem)] font-light leading-[1.08] tracking-[-0.01em] text-cream"
            >
              {title}
            </h2>
          </Reveal>
        </div>

        {items.length > 0 ? (
          <ul className="mt-14 grid gap-px border border-cream/10 bg-cream/10 md:grid-cols-2 lg:grid-cols-3">
            {items.map((item, i) => (
              <Reveal as="li" key={item.author} delay={0.05 * (i % 3)} className="bg-ink-soft p-8 lg:p-10">
                <blockquote>
                  <p className="font-serif text-[21px] font-light leading-[1.5] text-cream/85">
                    {item.quote}
                  </p>
                  <footer className="mt-7">
                    <span className="block text-[12px] uppercase tracking-[0.18em] text-gold">
                      {item.author}
                    </span>
                    {item.role ? (
                      <span className="mt-1.5 block text-[12px] text-cream/40">{item.role}</span>
                    ) : null}
                  </footer>
                </blockquote>
              </Reveal>
            ))}
          </ul>
        ) : (
          <Reveal delay={0.12}>
            <p className="mt-12 max-w-[62ch] border border-dashed border-cream/20 p-8 text-[14px] leading-relaxed text-cream/45">
              {emptyState}
            </p>
          </Reveal>
        )}
      </div>
    </section>
  )
}
