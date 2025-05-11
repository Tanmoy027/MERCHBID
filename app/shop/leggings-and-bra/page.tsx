import Link from "next/link"
import ProductGallery from "@/components/product-gallery"
import ProductInfo from "@/components/product-info"
import ProductTabs from "@/components/product-tabs"
import RelatedProducts from "@/components/related-products"

export default function ProductPage() {
  return (
    <>
      <div className="bg-gray-100 py-2 border-b border-gray-200">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <button className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>
          <p className="text-sm font-medium">GET 10% OFF YOUR FIRST PURCHASE</p>
          <button className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="ml-2"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="text-sm mb-8 text-gray-500">
          <Link href="/" className="hover:text-black">
            Home
          </Link>{" "}
          /{" "}
          <Link href="/apparel" className="hover:text-black">
            Apparel
          </Link>{" "}
          / Leggings and bra
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <ProductGallery />
          <ProductInfo />
        </div>

        <ProductTabs />
        <RelatedProducts />
      </div>
    </>
  )
}
