'use client'

import { useState } from 'react'
import { Plus } from 'lucide-react'

import { faq } from '@/content/site'
import { Reveal } from './Reveal'

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section
      id="faq"
      className="relative border-b border-cream/10 bg-ink py-24 sm:py-28 lg:py-36"
      aria-labelledby="faq-titulo"
    >
      <div className="shell grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <Reveal>
            <p className="eyebrow">{faq.eyebrow}</p>
            <span className="rule-gold mt-5" />
          </Reveal>
          <Reveal delay={0.08}>
            <h2
              id="faq-titulo"
              className="mt-7 font-serif text-[clamp(1.9rem,4.6vw,2.9rem)] font-light leading-[1.1] tracking-[-0.01em] text-cream"
            >
              {faq.title}
            </h2>
          </Reveal>
        </div>

        <div className="lg:col-span-7 lg:col-start-6">
          <ul className="border-t border-cream/10">
            {faq.items.map((item, i) => {
              const isOpen = open === i
              return (
                <li key={item.question} className="border-b border-cream/10">
                  <h3>
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-painel-${i}`}
                      id={`faq-botao-${i}`}
                      className="flex w-full items-start justify-between gap-6 py-6 text-left transition-colors duration-500 hover:text-gold"
                    >
                      <span className="font-serif text-[19px] font-light leading-snug text-cream sm:text-[21px]">
                        {item.question}
                      </span>
                      <Plus
                        size={17}
                        strokeWidth={1.3}
                        aria-hidden
                        className={[
                          'mt-1.5 shrink-0 text-gold transition-transform duration-500 ease-silk',
                          isOpen ? 'rotate-45' : 'rotate-0',
                        ].join(' ')}
                      />
                    </button>
                  </h3>

                  <div
                    id={`faq-painel-${i}`}
                    role="region"
                    aria-labelledby={`faq-botao-${i}`}
                    inert={!isOpen}
                    className={[
                      'grid transition-[grid-template-rows,opacity] duration-500 ease-silk',
                      isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0',
                    ].join(' ')}
                  >
                    <div className="overflow-hidden">
                      <p className="max-w-[62ch] pb-7 pr-10 text-[14px] leading-[1.85] text-cream/55">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}
