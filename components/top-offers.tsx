import Link from "next/link"
import Image from "next/image"

export default function TopOffers() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <div>
            <div className="text-sm font-medium mb-2">//EXCLUSIVE</div>
            <h2 className="text-5xl font-bold">TOP OFFERS</h2>
          </div>
          <Link href="/offers" className="flex items-center">
            View All
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
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </Link>
        </div>

        <hr className="border-t border-gray-300 mb-8" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative h-[300px] bg-orange-200 overflow-hidden">
            <Image
              src="/placeholder.svg?height=300&width=600"
              alt="Tennis player"
              width={600}
              height={300}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 p-12 flex flex-col justify-center text-white">
              <div className="text-sm font-medium mb-2">TOP PRODUCTS</div>
              <h3 className="text-4xl font-bold mb-8">
                SAVE UP TO
                <br />
                70% MORE
              </h3>
              <button className="bg-white text-black w-max px-6 py-2 uppercase font-medium text-sm">Shop Now</button>
            </div>
          </div>

          <div className="relative h-[300px] bg-blue-200 overflow-hidden">
            <Image
              src="/placeholder.svg?height=300&width=600"
              alt="Woman with water bottle"
              width={600}
              height={300}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 p-12 flex flex-col justify-center text-white">
              <div className="text-sm font-medium mb-2">NEW COLLECTION</div>
              <h3 className="text-4xl font-bold mb-8">
                BEST GEAR
                <br />& APPAREL
              </h3>
              <button className="bg-white text-black w-max px-6 py-2 uppercase font-medium text-sm">Shop Now</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
