"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ShoppingCart, Heart } from "lucide-react"

const products = [
  {
    id: 1,
    name: "Baki Hanma Sweatshirt",
    price: "$49.99",
    image: "/images/baki-hanma-sweatshirt.jpeg",
    category: "Anime Collection",
    colors: ["cream", "black", "gray"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    isNew: true,
  },
  {
    id: 2,
    name: "Baki Hanma Black T-Shirt",
    price: "$29.99",
    image: "/images/baki-hanma-tshirt.jpeg",
    category: "Anime Collection",
    colors: ["black"],
    sizes: ["S", "M", "L", "XL"],
    isNew: true,
  },
  {
    id: 3,
    name: "1970 Dodge Challenger T-Shirt",
    price: "$32.99",
    image: "/images/dodge-challenger-tshirt.jpeg",
    category: "Automotive Collection",
    colors: ["white", "gray"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    isNew: false,
  },
  {
    id: 4,
    name: "Ride the Legend Supra T-Shirt",
    price: "$32.99",
    image: "/images/ride-legend-tshirt.jpeg",
    category: "Automotive Collection",
    colors: ["black"],
    sizes: ["S", "M", "L", "XL"],
    isNew: false,
  },
  {
    id: 5,
    name: "Vintage Motorcycle T-Shirt",
    price: "$29.99",
    image: "/images/motorcycle-tshirt.jpeg",
    category: "Automotive Collection",
    colors: ["white", "gray"],
    sizes: ["S", "M", "L", "XL"],
    isNew: true,
  },
  {
    id: 6,
    name: "Dominating the Open Road T-Shirt",
    price: "$34.99",
    image: "/images/open-road-tshirt.jpeg",
    category: "Automotive Collection",
    colors: ["white"],
    sizes: ["M", "L", "XL", "XXL"],
    isNew: false,
  },
  {
    id: 7,
    name: "Gym Beast Mode T-Shirt",
    price: "$28.99",
    image: "/placeholder.svg?height=400&width=400",
    category: "Gym Collection",
    colors: ["black", "gray", "red"],
    sizes: ["S", "M", "L", "XL"],
    isNew: true,
  },
  {
    id: 8,
    name: "Fitness Performance Tank",
    price: "$24.99",
    image: "/placeholder.svg?height=400&width=400",
    category: "Gym Collection",
    colors: ["blue", "black", "white"],
    sizes: ["S", "M", "L", "XL"],
    isNew: false,
  },
  {
    id: 9,
    name: "Muscle Car Legends Hoodie",
    price: "$54.99",
    image: "/placeholder.svg?height=400&width=400",
    category: "Automotive Collection",
    colors: ["black", "navy"],
    sizes: ["M", "L", "XL", "XXL"],
    isNew: true,
  },
]

export default function FeaturedCollection() {
  const [activeCategory, setActiveCategory] = useState("All")

  const categories = ["All", "Anime Collection", "Automotive Collection", "Gym Collection"]

  const filteredProducts =
    activeCategory === "All" ? products : products.filter((product) => product.category === activeCategory)

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div>
            <div className="text-sm font-medium mb-2">//EXCLUSIVE DESIGNS</div>
            <h2 className="text-4xl md:text-5xl font-bold">FEATURED COLLECTION</h2>
          </div>

          <div className="flex flex-wrap gap-2 mt-4 md:mt-0">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 text-sm font-medium transition-colors ${
                  activeCategory === category
                    ? "bg-black text-white"
                    : "bg-white text-black border border-gray-300 hover:bg-gray-100"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <hr className="border-t border-gray-300 mb-8" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div key={product.id} className="group relative">
              <div className="relative bg-gray-100 aspect-square mb-4 overflow-hidden rounded-lg">
                <Link href={`/shop/product-${product.id}`}>
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    width={600}
                    height={600}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </Link>

                {product.isNew && (
                  <div className="absolute top-4 left-4 bg-red-600 text-white text-xs px-3 py-1 rounded-full uppercase font-medium">
                    New
                  </div>
                )}

                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex justify-between items-center">
                    <button className="bg-white text-black px-4 py-2 rounded-sm flex items-center gap-2 hover:bg-gray-200 transition-colors">
                      <ShoppingCart size={16} />
                      <span>Add to Cart</span>
                    </button>
                    <button className="bg-transparent border border-white text-white p-2 rounded-full hover:bg-white hover:text-black transition-colors">
                      <Heart size={16} />
                    </button>
                  </div>
                </div>
              </div>

              <Link href={`/shop/product-${product.id}`}>
                <h3 className="font-bold text-lg">{product.name}</h3>
              </Link>
              <p className="text-gray-600 mb-2">{product.price}</p>

              <div className="flex items-center gap-4">
                <div className="flex space-x-1">
                  {product.colors.map((color) => (
                    <div
                      key={color}
                      className="w-4 h-4 rounded-full border border-gray-300"
                      style={{
                        backgroundColor:
                          color === "cream"
                            ? "#F5F5DC"
                            : color === "black"
                              ? "#000"
                              : color === "gray"
                                ? "#808080"
                                : color === "white"
                                  ? "#FFF"
                                  : color === "red"
                                    ? "#DC2626"
                                    : color === "blue"
                                      ? "#3B82F6"
                                      : color === "navy"
                                        ? "#1E3A8A"
                                        : color,
                      }}
                    />
                  ))}
                </div>

                <div className="text-sm text-gray-500">{product.sizes.join(", ")}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Link
            href="/shop"
            className="border border-black px-8 py-3 uppercase font-medium hover:bg-black hover:text-white transition-colors"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  )
}
