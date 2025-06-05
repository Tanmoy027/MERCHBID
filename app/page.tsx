import HeroSection from "@/components/hero-section"
import CategoryButtons from "@/components/category-buttons"
import FeaturedCollection from "@/components/featured-collection"
import ProductSpotlight from "@/components/product-spotlight"
import AutomotiveCollection from "@/components/automotive-collection"
import PromoSection from "@/components/promo-section"
import TrainHarder from "@/components/train-harder"
import Testimonial from "@/components/testimonial"
import CollectionCards from "@/components/collection-cards"

export default function Home() {
  return (
    <>
      <HeroSection />
      <CategoryButtons />
      <FeaturedCollection />
      <ProductSpotlight />
      <AutomotiveCollection />
      <PromoSection />
      <TrainHarder />
      <Testimonial />
      <CollectionCards />
    </>
  )
}
