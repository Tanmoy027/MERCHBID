import Image from "next/image"
import Link from "next/link"

const products = [
  {
    id: 1,
    name: "BLACK LONGSLEEVE",
    price: "$29.00",
    image: "/placeholder.svg?height=400&width=400",
    rating: 4,
  },
  {
    id: 2,
    name: "SPORTS SUIT",
    price: "$53.00 - $59.00",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    id: 3,
    name: "BLUE TOP",
    price: "$39.00",
    image: "/placeholder.svg?height=400&width=400",
    rating: 5,
  },
]

export default function RelatedProducts() {
  return (
    <div className="mb-16">
      <h2 className="text-2xl font-bold mb-8">RELATED PRODUCTS</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product.id} className="group">
            <div className="relative mb-4 overflow-hidden">
              <Link href={`/shop/product-${product.id}`}>
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  width={400}
                  height={400}
                  className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </Link>
              <button className="absolute top-4 right-4 w-8 h-8 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
              </button>
            </div>
            <Link href={`/shop/product-${product.id}`}>
              <h3 className="font-medium mb-1">{product.name}</h3>
            </Link>
            <div className="flex justify-between items-center">
              <div className="font-medium">{product.price}</div>
              {product.rating && (
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill={i < product.rating ? "gold" : "none"}
                      stroke="gold"
                      strokeWidth="1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
