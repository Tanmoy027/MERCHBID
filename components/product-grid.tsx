import Image from "next/image"
import Link from "next/link"

// Reduced number of products for better performance
const products = [
  {
    id: 1,
    name: "SHORTS AND T-SHIRT",
    price: "$43.00 - $48.00",
    image: "/placeholder.svg?height=400&width=400",
    colors: ["black", "blue"],
  },
  {
    id: 2,
    name: "HOODIE",
    price: "$35.00 - $45.00",
    image: "/placeholder.svg?height=400&width=400",
    colors: ["beige", "black", "purple", "red"],
  },
  {
    id: 3,
    name: "SPORTS SUIT",
    price: "$53.00 - $59.00",
    image: "/placeholder.svg?height=400&width=400",
    colors: ["blue", "pink"],
  },
  {
    id: 4,
    name: "HANDLE CUP",
    price: "$12.00 - $17.00",
    image: "/placeholder.svg?height=400&width=400",
    colors: ["beige", "black", "blue", "pink", "red"],
  },
  {
    id: 5,
    name: "SPORTS TOP",
    price: "$35.00 - $42.00",
    image: "/placeholder.svg?height=400&width=400",
    colors: ["black", "blue"],
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
    colors: ["beige", "black", "blue", "pink", "red"],
  },
  {
    id: 8,
    name: "LEGGINGS AND BRA",
    price: "$55.00 - $75.00",
    image: "/placeholder.svg?height=400&width=400",
  },
]

export default function ProductGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product) => (
        <div key={product.id} className="group">
          <div className="relative bg-gray-100 aspect-square mb-4">
            <Link href="/product">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                width={400}
                height={400}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </Link>
            {product.outOfStock && (
              <div className="absolute top-4 left-0 bg-gray-800 text-white text-xs px-3 py-1 uppercase">
                Out of stock
              </div>
            )}
            <button
              className="absolute top-4 right-4 w-8 h-8 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
              aria-label="Add to wishlist"
            >
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
              >
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
            </button>
          </div>
          <Link href="/product">
            <h3 className="font-bold">{product.name}</h3>
          </Link>
          <p className="text-gray-600">{product.price}</p>
          {product.colors && (
            <div className="flex space-x-1 mt-2">
              {product.colors.slice(0, 4).map((color) => (
                <div
                  key={color}
                  className="w-4 h-4 rounded-full"
                  style={{
                    backgroundColor:
                      color === "beige"
                        ? "#E8D6C0"
                        : color === "black"
                          ? "#000"
                          : color === "blue"
                            ? "#3B82F6"
                            : color === "pink"
                              ? "#F9A8D4"
                              : color === "red"
                                ? "#EF4444"
                                : color === "purple"
                                  ? "#8B5CF6"
                                  : color,
                  }}
                />
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
