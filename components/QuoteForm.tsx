'use client'

import { useState, type FormEvent } from 'react'
import Image from 'next/image'
import { Check } from 'lucide-react'

import { photos, quoteForm } from '@/content/site'
import { hasWhatsapp, whatsappHref } from '@/lib/whatsapp'
import { Reveal } from './Reveal'

interface FormState {
  nome: string
  whatsapp: string
  email: string
  tipo: string
  data: string
  convidados: string
  cidade: string
  mensagem: string
}

const empty: FormState = {
  nome: '',
  whatsapp: '',
  email: '',
  tipo: '',
  data: '',
  convidados: '',
  cidade: '',
  mensagem: '',
}

function buildMessage(form: FormState) {
  const lines = [
    'Ola! Conheci o Requinte Coffee Buffet pelo site e gostaria de solicitar um orcamento.',
    '',
    `Nome: ${form.nome}`,
    `WhatsApp: ${form.whatsapp}`,
    form.email ? `E-mail: ${form.email}` : null,
    `Tipo de evento: ${form.tipo}`,
    form.data ? `Data: ${form.data}` : null,
    form.convidados ? `Convidados: ${form.convidados}` : null,
    form.cidade ? `Cidade: ${form.cidade}` : null,
    form.mensagem ? `` : null,
    form.mensagem ? `Mensagem: ${form.mensagem}` : null,
  ].filter((l): l is string => l !== null)

  return lines.join('\n')
}

export function QuoteForm() {
  const [form, setForm] = useState<FormState>(empty)
  const [sent, setSent] = useState(false)

  const set =
    (key: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setForm((prev) => ({ ...prev, [key]: e.target.value }))

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    const href = whatsappHref(buildMessage(form))
    window.open(href, '_blank', 'noopener,noreferrer')
    setSent(true)
  }

  return (
    <section
      id="orcamento"
      className="relative isolate overflow-hidden border-b border-cream/10 bg-ink-soft py-24 sm:py-28 lg:py-36"
      aria-labelledby="orcamento-titulo"
    >
      <div className="absolute inset-y-0 right-0 -z-10 hidden w-[38%] lg:block">
        <Image
          src={photos.mesaAzulAmpla.src}
          alt=""
          fill
          sizes="38vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-ink/72" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-soft to-transparent" />
      </div>

      <div className="shell">
        <div className="max-w-2xl">
          <Reveal>
            <p className="eyebrow">{quoteForm.eyebrow}</p>
            <span className="rule-gold mt-5" />
          </Reveal>
          <Reveal delay={0.08}>
            <h2
              id="orcamento-titulo"
              className="mt-7 font-serif text-[clamp(2rem,5.4vw,3.6rem)] font-light leading-[1.06] tracking-[-0.01em] text-cream"
            >
              {quoteForm.title}
            </h2>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="mt-6 max-w-[52ch] text-[15px] leading-relaxed text-cream/60">
              {quoteForm.description}
            </p>
          </Reveal>
        </div>

        <div className="relative mt-14 max-w-3xl">
          {sent ? (
            <div
              className="animate-[fade-up_700ms_cubic-bezier(0.22,1,0.36,1)_both] border border-gold/30 bg-ink/60 p-10 backdrop-blur-sm sm:p-14"
              role="status"
              aria-live="polite"
            >
                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/40 text-gold">
                  <Check size={20} strokeWidth={1.3} aria-hidden />
                </span>
                <h3 className="mt-7 font-serif text-[30px] font-light text-cream sm:text-[36px]">
                  {quoteForm.successTitle}
                </h3>
                <p className="mt-4 max-w-[48ch] text-[15px] leading-relaxed text-cream/60">
                  {quoteForm.successBody}
                </p>
                <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={whatsappHref(buildMessage(form))}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="btn-primary"
                  >
                    Abrir o WhatsApp
                  </a>
                  <button
                    type="button"
                    onClick={() => {
                      setSent(false)
                      setForm(empty)
                    }}
                    className="btn-ghost"
                  >
                    Enviar outro pedido
                  </button>
                </div>
            </div>
          ) : (
            <form
              onSubmit={onSubmit}
              className="animate-[fade-up_600ms_cubic-bezier(0.22,1,0.36,1)_both] grid gap-x-10 gap-y-8 sm:grid-cols-2"
            >
                <div>
                  <label htmlFor="nome" className="field-label">
                    Nome <span aria-hidden className="text-gold">*</span>
                  </label>
                  <input
                    id="nome"
                    name="nome"
                    required
                    autoComplete="name"
                    value={form.nome}
                    onChange={set('nome')}
                    className="field"
                    placeholder="Como podemos te chamar"
                  />
                </div>

                <div>
                  <label htmlFor="whatsapp" className="field-label">
                    WhatsApp <span aria-hidden className="text-gold">*</span>
                  </label>
                  <input
                    id="whatsapp"
                    name="whatsapp"
                    required
                    type="tel"
                    inputMode="tel"
                    autoComplete="tel"
                    value={form.whatsapp}
                    onChange={set('whatsapp')}
                    className="field"
                    placeholder="(00) 00000-0000"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="field-label">
                    E-mail
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={form.email}
                    onChange={set('email')}
                    className="field"
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="tipo" className="field-label">
                    Tipo de evento <span aria-hidden className="text-gold">*</span>
                  </label>
                  <select
                    id="tipo"
                    name="tipo"
                    required
                    value={form.tipo}
                    onChange={set('tipo')}
                    className="field"
                  >
                    <option value="" disabled>
                      Selecione
                    </option>
                    {quoteForm.eventTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="data" className="field-label">
                    Data do evento
                  </label>
                  <input
                    id="data"
                    name="data"
                    type="date"
                    value={form.data}
                    onChange={set('data')}
                    className="field [color-scheme:dark]"
                  />
                </div>

                <div>
                  <label htmlFor="convidados" className="field-label">
                    Numero de convidados
                  </label>
                  <input
                    id="convidados"
                    name="convidados"
                    type="number"
                    min={1}
                    inputMode="numeric"
                    value={form.convidados}
                    onChange={set('convidados')}
                    className="field"
                    placeholder="Ex.: 80"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="cidade" className="field-label">
                    Cidade
                  </label>
                  <input
                    id="cidade"
                    name="cidade"
                    autoComplete="address-level2"
                    value={form.cidade}
                    onChange={set('cidade')}
                    className="field"
                    placeholder="Onde o evento acontece"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="mensagem" className="field-label">
                    Mensagem
                  </label>
                  <textarea
                    id="mensagem"
                    name="mensagem"
                    rows={3}
                    value={form.mensagem}
                    onChange={set('mensagem')}
                    className="field resize-none"
                    placeholder="Conte um pouco sobre o evento"
                  />
                </div>

                <div className="sm:col-span-2">
                  <button type="submit" className="btn-primary w-full sm:w-auto">
                    {quoteForm.submitLabel}
                  </button>
                  {!hasWhatsapp && (
                    <p className="mt-5 text-[12px] leading-relaxed text-gold/70">
                      Configure NEXT_PUBLIC_WHATSAPP_NUMBER no arquivo .env.local para que o
                      formulario envie direto ao WhatsApp. Sem o numero, o botao leva ao Instagram.
                    </p>
                  )}
                </div>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
