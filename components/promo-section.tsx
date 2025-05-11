import Image from "next/image"
import Link from "next/link"

export default function PromoSection() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* First promo card */}
          <div className="relative overflow-hidden rounded-lg shadow-lg group">
            <Image
              src="/images/promo-hoodie.jpeg"
              alt="Any event t-shirt is available"
              width={800}
              height={400}
              className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex items-center">
              <div className="p-8">
                <h3 className="text-4xl font-bold text-white mb-4 leading-tight">
                  ANY EVENT
                  <br />
                  TSHIRT IS
                  <br />
                  AVAILABLE
                </h3>
                <Link
                  href="/shop/events"
                  className="inline-block bg-white text-black px-6 py-2 font-medium uppercase text-sm hover:bg-gray-200 transition-colors"
                >
                  Shop Now
                </Link>
              </div>
            </div>
          </div>

          {/* Second promo card */}
          <div className="relative overflow-hidden rounded-lg shadow-lg group">
            <Image
              src="/images/promo-design.jpeg"
              alt="Buy the design that your dreams"
              width={800}
              height={400}
              className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-black/70 to-transparent flex items-center">
              <div className="p-8 ml-auto">
                <h3 className="text-4xl font-bold text-white mb-4 leading-tight">
                  BUY THE
                  <br />
                  DESIGN
                  <br />
                  THAT YOUR
                  <br />
                  DREAMS
                </h3>
                <Link
                  href="/shop/custom"
                  className="inline-block bg-white text-black px-6 py-2 font-medium uppercase text-sm hover:bg-gray-200 transition-colors"
                >
                  Customize Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
