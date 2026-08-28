import { brand, whatsappMessage } from '@/content/site'

/**
 * Monta o link do WhatsApp. O numero vem de NEXT_PUBLIC_WHATSAPP_NUMBER.
 * Sem numero configurado, cai no Instagram — nunca inventamos um telefone.
 */
export function whatsappHref(message: string = whatsappMessage): string {
  const digits = brand.whatsappNumber.replace(/\D/g, '')
  if (!digits) return brand.instagramUrl
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`
}

export const hasWhatsapp = Boolean(brand.whatsappNumber.replace(/\D/g, ''))
