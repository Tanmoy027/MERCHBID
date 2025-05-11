import HeroSection from "@/components/hero-section"
import ProductSpotlight from "@/components/product-spotlight"
import FeaturedCollection from "@/components/featured-collection"
import AutomotiveCollection from "@/components/automotive-collection"
import PromoSection from "@/components/promo-section"
import TrainHarder from "@/components/train-harder"
import Testimonial from "@/components/testimonial"

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedCollection />
      <ProductSpotlight />
      <AutomotiveCollection />
      <PromoSection />
      <TrainHarder />
      <Testimonial />
    </>
  )
}
