import Hero from '@/components/sections/property-detail/Hero'
import Features from '@/components/sections/property-detail/Features'
import Gallery from '@/components/sections/property-detail/Gallery'
import Pricing from '@/components/sections/property-detail/Pricing'
import Reviews from '@/components/sections/property-detail/Reviews'
import Contact from '@/components/sections/property-detail/Contact'

export default function PropertyDetailPage() {
  return (
    <>
      <Hero />
      <Features />
      <Gallery />
      <Pricing />
      <Reviews />
      <Contact />
    </>
  )
}