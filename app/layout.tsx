import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Manrope } from 'next/font/google'

import { brand, events, heroPhoto } from '@/content/site'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-cormorant',
  display: 'swap',
})

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-manrope',
  display: 'swap',
})

const title = 'Requinte Coffee Buffet — Coffee break e buffet para eventos'
const description =
  'Coffee break e buffet para casamentos, formaturas, 15 anos, aniversarios e eventos corporativos. Gastronomia, montagem e equipe em um unico servico.'

export const metadata: Metadata = {
  metadataBase: new URL(brand.siteUrl),
  title: {
    default: title,
    template: `%s — ${brand.name}`,
  },
  description,
  applicationName: brand.name,
  keywords: [
    'buffet para eventos',
    'coffee break',
    'buffet corporativo',
    'buffet para casamento',
    'coffee break Brasilia',
    'Requinte Coffee Buffet',
  ],
  authors: [{ name: brand.legalName }],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: brand.siteUrl,
    siteName: brand.name,
    title,
    description,
    images: [
      {
        url: heroPhoto.src,
        width: 1280,
        height: 960,
        alt: heroPhoto.alt,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: [heroPhoto.src],
  },
  icons: {
    icon: [{ url: brand.logo, type: 'image/jpeg' }],
    apple: [{ url: brand.logo }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
}

export const viewport: Viewport = {
  themeColor: '#0A0A0A',
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
}

/**
 * Structured data — apenas dados verificados.
 * Telefone e endereco ficam de fora ate que a informacao oficial seja preenchida.
 */
const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: brand.name,
  legalName: brand.legalName,
  description,
  url: brand.siteUrl,
  image: `${brand.siteUrl}${heroPhoto.src}`,
  logo: `${brand.siteUrl}${brand.logo}`,
  sameAs: [brand.instagramUrl],
  areaServed: brand.areaServed,
  makesOffer: events.map((event) => ({
    '@type': 'Offer',
    itemOffered: {
      '@type': 'Service',
      name: `Buffet para ${event.title.toLowerCase()}`,
      description: event.description,
    },
  })),
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${cormorant.variable} ${manrope.variable}`}>
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  )
}
