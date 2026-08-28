import Image from 'next/image'
import { Instagram, Mail, MapPin, Clock } from 'lucide-react'

import { brand, footer } from '@/content/site'
import { hasWhatsapp, whatsappHref } from '@/lib/whatsapp'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-ink pb-10 pt-20 sm:pt-24" aria-label="Rodape">
      <div className="shell">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3.5">
              <span className="relative block h-12 w-12 overflow-hidden rounded-full ring-1 ring-gold/40">
                <Image src={brand.logo} alt="" fill sizes="48px" className="scale-[1.02] object-cover" />
              </span>
              <span className="leading-none">
                <span className="block font-serif text-[22px] text-cream">Requinte</span>
                <span className="mt-1 block whitespace-nowrap text-[8.5px] uppercase tracking-[0.3em] text-gold">
                  Coffee Buffet
                </span>
              </span>
            </div>
            <p className="mt-7 max-w-[38ch] text-[13.5px] leading-[1.85] text-cream/50">
              {footer.description}
            </p>
          </div>

          {footer.columns.map((column) => (
            <nav key={column.title} className="lg:col-span-2" aria-label={column.title}>
              <h2 className="text-[10px] uppercase tracking-[0.22em] text-gold">{column.title}</h2>
              <ul className="mt-6 space-y-3.5">
                {column.links.map((link) => (
                  <li key={`${column.title}-${link.label}`}>
                    <a
                      href={link.href}
                      className="text-[13.5px] text-cream/55 transition-colors duration-300 hover:text-cream"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div className="lg:col-span-4">
            <h2 className="text-[10px] uppercase tracking-[0.22em] text-gold">Contato</h2>
            <ul className="mt-6 space-y-4 text-[13.5px] text-cream/55">
              <li>
                <a
                  href={whatsappHref()}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="transition-colors duration-300 hover:text-cream"
                >
                  {hasWhatsapp ? 'Falar no WhatsApp' : '[INSERIR NUMERO DE WHATSAPP OFICIAL]'}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Instagram size={15} strokeWidth={1.3} className="mt-0.5 shrink-0 text-gold/70" aria-hidden />
                <a
                  href={brand.instagramUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="transition-colors duration-300 hover:text-cream"
                >
                  {brand.instagramHandle}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail size={15} strokeWidth={1.3} className="mt-0.5 shrink-0 text-gold/70" aria-hidden />
                {brand.email ? (
                  <a
                    href={`mailto:${brand.email}`}
                    className="transition-colors duration-300 hover:text-cream"
                  >
                    {brand.email}
                  </a>
                ) : (
                  <span>[INSERIR E-MAIL OFICIAL]</span>
                )}
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin size={15} strokeWidth={1.3} className="mt-0.5 shrink-0 text-gold/70" aria-hidden />
                <span>{brand.address}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock size={15} strokeWidth={1.3} className="mt-0.5 shrink-0 text-gold/70" aria-hidden />
                <span>{brand.hours}</span>
              </li>
            </ul>

            <a href="#orcamento" className="btn-primary mt-9 w-full !min-h-[50px] sm:w-auto">
              Solicitar orcamento
            </a>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-cream/10 pt-7 text-[11.5px] text-cream/35 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {year} {brand.legalName}. Todos os direitos reservados.
          </p>
          <p>{brand.areaServed}</p>
        </div>
      </div>
    </footer>
  )
}
