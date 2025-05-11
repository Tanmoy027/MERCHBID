import Image from "next/image"
import Link from "next/link"

export default function AutomotiveCollection() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="text-sm font-medium mb-2">//RIDE IN STYLE</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">AUTOMOTIVE COLLECTION</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            From classic American muscle to Japanese legends, our automotive collection celebrates iconic vehicles with
            premium quality designs for true enthusiasts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="group relative overflow-hidden rounded-lg">
            <div className="aspect-[4/5] bg-gray-200 relative">
              <Image
                src="/images/dodge-challenger-tshirt.jpeg"
                alt="1970 Dodge Challenger T-Shirt"
                width={500}
                height={625}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Link
                  href="/shop/product-3"
                  className="bg-white text-black px-6 py-2 uppercase font-medium transform -translate-y-4 group-hover:translate-y-0 transition-transform"
                >
                  View Details
                </Link>
              </div>
            </div>
            <div className="bg-white p-4">
              <h3 className="font-bold text-lg">1970 Dodge Challenger T-Shirt</h3>
              <p className="text-gray-600 mb-2">$32.99</p>
              <div className="flex justify-between items-center">
                <div className="flex space-x-1">
                  <div className="w-4 h-4 rounded-full bg-white border border-gray-300"></div>
                  <div className="w-4 h-4 rounded-full bg-gray-300"></div>
                </div>
                <span className="text-sm text-gray-500">MUSCLE CAR MAJESTY</span>
              </div>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-lg">
            <div className="aspect-[4/5] bg-gray-200 relative">
              <Image
                src="/images/ride-legend-tshirt.jpeg"
                alt="Ride the Legend Supra T-Shirt"
                width={500}
                height={625}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Link
                  href="/shop/product-4"
                  className="bg-white text-black px-6 py-2 uppercase font-medium transform -translate-y-4 group-hover:translate-y-0 transition-transform"
                >
                  View Details
                </Link>
              </div>
            </div>
            <div className="bg-white p-4">
              <h3 className="font-bold text-lg">Ride the Legend Supra T-Shirt</h3>
              <p className="text-gray-600 mb-2">$32.99</p>
              <div className="flex justify-between items-center">
                <div className="flex space-x-1">
                  <div className="w-4 h-4 rounded-full bg-black"></div>
                </div>
                <span className="text-sm text-gray-500">1998 SUPRA</span>
              </div>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-lg">
            <div className="aspect-[4/5] bg-gray-200 relative">
              <Image
                src="/images/motorcycle-tshirt.jpeg"
                alt="Vintage Motorcycle T-Shirt"
                width={500}
                height={625}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Link
                  href="/shop/product-5"
                  className="bg-white text-black px-6 py-2 uppercase font-medium transform -translate-y-4 group-hover:translate-y-0 transition-transform"
                >
                  View Details
                </Link>
              </div>
              <div className="absolute top-4 right-4 bg-red-600 text-white text-xs px-3 py-1 rounded-full uppercase font-medium">
                New
              </div>
            </div>
            <div className="bg-white p-4">
              <h3 className="font-bold text-lg">Vintage Motorcycle T-Shirt</h3>
              <p className="text-gray-600 mb-2">$29.99</p>
              <div className="flex justify-between items-center">
                <div className="flex space-x-1">
                  <div className="w-4 h-4 rounded-full bg-white border border-gray-300"></div>
                  <div className="w-4 h-4 rounded-full bg-gray-300"></div>
                </div>
                <span className="text-sm text-gray-500">RIDERS UNITE</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/shop/automotive"
            className="inline-block bg-black text-white px-8 py-3 uppercase font-medium hover:bg-gray-800 transition-colors"
          >
            View Full Collection
          </Link>
        </div>
      </div>
    </section>
  )
}
