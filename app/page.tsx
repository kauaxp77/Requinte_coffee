import { About } from '@/components/About'
import { Cinematic } from '@/components/Cinematic'
import { Differentials } from '@/components/Differentials'
import { EventSection } from '@/components/EventSection'
import { ExperienceCarousel } from '@/components/ExperienceCarousel'
import { FAQ } from '@/components/FAQ'
import { Footer } from '@/components/Footer'
import { Gallery } from '@/components/Gallery'
import { Gastronomy } from '@/components/Gastronomy'
import { Hero } from '@/components/Hero'
import { InstagramStrip } from '@/components/InstagramStrip'
import { Navbar } from '@/components/Navbar'
import { Positioning } from '@/components/Positioning'
import { Process } from '@/components/Process'
import { QuoteForm } from '@/components/QuoteForm'
import { Testimonials } from '@/components/Testimonials'
import { WhatsAppButton } from '@/components/WhatsAppButton'

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="conteudo">
        <Hero />
        <Positioning />
        <EventSection />
        <Gastronomy />
        <ExperienceCarousel />
        <Gallery />
        <Differentials />
        <Process />
        <Cinematic />
        <Testimonials />
        <About />
        <FAQ />
        <QuoteForm />
        <InstagramStrip />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
