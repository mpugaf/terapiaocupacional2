import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/sections/Hero'
import { Servicios } from '@/components/sections/Servicios'
import { SobreMi } from '@/components/sections/SobreMi'
import { Parkinson } from '@/components/sections/Parkinson'
import { Contacto } from '@/components/sections/Contacto'
import { WhatsAppButton } from '@/components/features/WhatsAppButton'
import { features } from '@/config/features'
import { siteContent } from '@/content/site'

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <Servicios />
        <SobreMi />
        <Parkinson />
        <Contacto />
      </main>
      <Footer />

      {/* WhatsApp: solo se renderiza cuando features.whatsapp = true */}
      {features.whatsapp && siteContent.metadata.socialLinks.whatsapp && (
        <WhatsAppButton phoneNumber={siteContent.metadata.socialLinks.whatsapp} />
      )}
    </>
  )
}
