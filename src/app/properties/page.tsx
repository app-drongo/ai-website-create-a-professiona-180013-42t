import Pageheader from '@/components/sections/properties/Pageheader'
import Productgrid from '@/components/sections/properties/Productgrid'
import Features from '@/components/sections/properties/Features'
import Pricing from '@/components/sections/properties/Pricing'

export default function PropertiesPage() {
  return (
    <>
      <Pageheader />
      <Productgrid />
      <Features />
      <Pricing />
    </>
  )
}