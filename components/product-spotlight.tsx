import Image from "next/image"
import Link from "next/link"

export default function ProductSpotlight() {
  return (
    <section className="py-16 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="text-sm font-medium mb-4">//ANIME COLLECTION</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">BAKI HANMA</h2>
            <p className="text-gray-400 mb-8 max-w-lg">
              Unleash your inner strength with our exclusive Baki Hanma collection. Featuring authentic Japanese
              typography and iconic character designs from the legendary manga and anime series. Available in both
              t-shirts and sweatshirts.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-2">
                <span className="text-gray-400">Colors:</span>
                <div className="w-6 h-6 rounded-full bg-[#F5F5DC] border border-gray-600"></div>
                <div className="w-6 h-6 rounded-full bg-black border border-gray-600"></div>
                <div className="w-6 h-6 rounded-full bg-gray-500 border border-gray-600"></div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gray-400">Sizes:</span>
                <span>S, M, L, XL, XXL</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/shop/product-1"
                className="bg-white text-black px-8 py-3 uppercase font-medium hover:bg-gray-200 transition-colors"
              >
                Shop Sweatshirt
              </Link>
              <Link
                href="/shop/product-2"
                className="border border-white px-8 py-3 uppercase font-medium hover:bg-white hover:text-black transition-colors"
              >
                Shop T-Shirt
              </Link>
            </div>
          </div>
          <div className="order-1 lg:order-2 relative">
            <div className="relative aspect-square overflow-hidden rounded-lg">
              <Image
                src="/images/baki-hanma-sweatshirt.jpeg"
                alt="Baki Hanma Sweatshirt"
                width={600}
                height={600}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-6 left-6 bg-red-600 text-white text-sm px-4 py-1 rounded-sm">
                BESTSELLER
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 md:w-48 md:h-48 rounded-lg overflow-hidden border-4 border-gray-800">
              <Image
                src="/images/baki-hanma-tshirt.jpeg"
                alt="Baki Hanma T-Shirt"
                width={200}
                height={200}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
