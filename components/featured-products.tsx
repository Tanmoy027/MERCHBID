import Link from "next/link"
import Image from "next/image"

const products = [
  {
    id: 1,
    name: "SHORTS AND T-SHIRT",
    price: "$43.00 - $48.00",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    id: 2,
    name: "HOODIE",
    price: "$35.00 - $45.00",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    id: 3,
    name: "SPORTS SUIT",
    price: "$53.00 - $59.00",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    id: 4,
    name: "HANDLE CUP",
    price: "$12.00 - $17.00",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    id: 5,
    name: "SPORTS TOP",
    price: "$35.00 - $42.00",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    id: 6,
    name: "BASEBALL CAP",
    price: "$17.00",
    image: "/placeholder.svg?height=400&width=400",
    outOfStock: true,
  },
  {
    id: 7,
    name: "SPORTS SOCKS",
    price: "$7.00 - $12.00",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    id: 8,
    name: "LEGGINGS AND BRA",
    price: "$55.00 - $75.00",
    image: "/placeholder.svg?height=400&width=400",
  },
]

export default function FeaturedProducts() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <div>
            <div className="text-sm font-medium mb-2">//SHOP NOW</div>
            <h2 className="text-5xl font-bold">FEATURED PRODUCTS</h2>
          </div>
          <Link href="/products" className="flex items-center">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.slice(0, 4).map((product) => (
            <div key={product.id} className="group">
              <div className="relative bg-gray-100 aspect-square mb-4">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
                {product.outOfStock && (
                  <div className="absolute top-4 left-0 bg-gray-800 text-white text-xs px-3 py-1 uppercase">
                    Out of stock
                  </div>
                )}
              </div>
              <h3 className="font-bold">{product.name}</h3>
              <p className="text-gray-600">{product.price}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {products.slice(4, 8).map((product) => (
            <div key={product.id} className="group">
              <div className="relative bg-gray-100 aspect-square mb-4">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
                {product.outOfStock && (
                  <div className="absolute top-4 left-0 bg-gray-800 text-white text-xs px-3 py-1 uppercase">
                    Out of stock
                  </div>
                )}
              </div>
              <h3 className="font-bold">{product.name}</h3>
              <p className="text-gray-600">{product.price}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <button className="border border-black px-8 py-3 uppercase font-medium hover:bg-black hover:text-white transition-colors">
            View More
          </button>
        </div>
      </div>
    </section>
  )
}
