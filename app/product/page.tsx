"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight, Search, Heart, ShoppingCart, Phone, ChevronDown, ChevronUp } from "lucide-react"

// Sample product data - in a real app, this would come from an API or database
const productData = {
  id: 1,
  name: "FITNESS SHOES",
  price: { min: 125.0, max: 155.0 },
  currentPrice: 155.0,
  images: [
    "/placeholder.svg?height=600&width=600",
    "/images/baki-hanma-sweatshirt.jpeg",
    "/images/dodge-challenger-tshirt.jpeg",
  ],
  colors: [
    { name: "Black", value: "#000000" },
    { name: "Blue", value: "#3B82F6" },
    { name: "Gray", value: "#6B7280" },
    { name: "White", value: "#FFFFFF" },
    { name: "Red", value: "#EF4444" },
  ],
  selectedColor: "Black",
  inStock: true,
  installments: "4 interest-free installments by Afterpay",
  description: "Premium fitness shoes designed for maximum performance and comfort during your workout sessions.",
  deliveryInfo: [
    "Standard and Express delivery services are available for all items.",
    "Shipping costs are calculated at the checkout page (after delivery option & destination confirmation).",
    "Tracking is available for all delivery options.",
    "Items are delivered during standard business hours.",
  ],
  additionalInfo: {
    material: "Synthetic mesh upper with rubber sole",
    care: "Wipe clean with damp cloth",
    origin: "Made in Vietnam",
  },
}

const relatedProducts = [
  {
    id: 1,
    name: "AIR MAX 270",
    price: { min: 177.0, max: 197.0 },
    image: "/placeholder.svg?height=300&width=300",
    rating: 5,
    inStock: true,
  },
  {
    id: 2,
    name: "BASEBALL CAP",
    price: { min: 17.0, max: 17.0 },
    image: "/placeholder.svg?height=300&width=300",
    inStock: false,
  },
  {
    id: 3,
    name: "SNEAKERS",
    price: { min: 99.0, max: 99.0 },
    image: "/placeholder.svg?height=300&width=300",
    inStock: true,
  },
]

export default function ProductPage() {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [selectedColor, setSelectedColor] = useState(productData.selectedColor)
  const [expandedSection, setExpandedSection] = useState("DELIVERY INFO")

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? "" : section)
  }

  return (
    <>
      {/* Promotional Banner */}
      <div className="bg-gray-100 py-3 border-b border-gray-200">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <button className="text-gray-600 hover:text-black">
            <ChevronLeft size={20} />
          </button>
          <p className="text-sm font-medium text-center flex-1">GET 10% OFF YOUR FIRST PURCHASE</p>
          <button className="text-gray-600 hover:text-black">
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-black">
            Home
          </Link>
          {" / "}
          <Link href="/shop" className="hover:text-black">
            Shoes
          </Link>
          {" / "}
          <span>Fitness shoes</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Product Images */}
          <div className="relative">
            <div className="relative bg-gray-200 aspect-square mb-4 overflow-hidden flex items-center justify-center">
              <div className="text-gray-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="80"
                  height="80"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                  <circle cx="9" cy="9" r="2" />
                  <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
                </svg>
              </div>
              <button className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md hover:shadow-lg transition-shadow">
                <Search size={20} />
              </button>
            </div>

            {/* Thumbnail Images */}
            <div className="flex gap-2">
              {[1, 2, 3].map((index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImageIndex(index - 1)}
                  className={`w-20 h-20 border-2 ${selectedImageIndex === index - 1 ? "border-black" : "border-gray-200"} overflow-hidden bg-gray-100 flex items-center justify-center`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-gray-400"
                  >
                    <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                    <circle cx="9" cy="9" r="2" />
                    <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
                  </svg>
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <h1 className="text-3xl font-bold">{productData.name}</h1>

            <div className="text-2xl font-bold text-blue-600">
              ${productData.price.min.toFixed(2)} – ${productData.price.max.toFixed(2)}
            </div>

            <p className="text-gray-600">{productData.installments}</p>

            {/* Color Selection */}
            <div>
              <h3 className="font-medium mb-3">COLOR</h3>
              <div className="flex gap-2">
                {productData.colors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color.name)}
                    className={`w-8 h-8 rounded-full border-2 ${
                      selectedColor === color.name ? "border-black" : "border-gray-300"
                    }`}
                    style={{ backgroundColor: color.value }}
                    title={color.name}
                  />
                ))}
              </div>
            </div>

            <div className="text-2xl font-bold text-blue-600">${productData.currentPrice.toFixed(2)}</div>

            {/* Quantity and Buy Button */}
            <div className="flex items-center gap-4">
              <div className="flex border border-gray-300">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-2 border-r border-gray-300 hover:bg-gray-50"
                >
                  -
                </button>
                <input
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(1, Number.parseInt(e.target.value) || 1))}
                  className="w-16 text-center py-2 focus:outline-none"
                />
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-2 border-l border-gray-300 hover:bg-gray-50"
                >
                  +
                </button>
              </div>

              <button className="bg-blue-600 text-white px-8 py-3 font-bold hover:bg-blue-700 transition-colors flex items-center gap-2">
                <ShoppingCart size={20} />
                BUY NOW
              </button>

              <button className="border border-gray-300 p-3 hover:border-black transition-colors">
                <Heart size={20} />
              </button>
            </div>

            {/* Guaranteed Safe Checkout */}
            <div>
              <h3 className="font-medium mb-4">GUARANTEED SAFE CHECKOUT</h3>
              <div className="flex gap-1">
                <div className="bg-blue-600 text-white px-3 py-1 text-xs font-bold">VISA</div>
                <div className="bg-red-600 text-white px-3 py-1 text-xs font-bold">MASTERCARD</div>
                <div className="bg-blue-500 text-white px-3 py-1 text-xs font-bold">PAYPAL</div>
                <div className="bg-green-600 text-white px-3 py-1 text-xs font-bold">AMEX</div>
              </div>
            </div>

            {/* Features */}
            <div className="grid grid-cols-3 gap-6 py-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                  </svg>
                </div>
                <div className="font-medium text-sm">FREE DELIVERY</div>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="font-medium text-sm">30 DAY TRIAL</div>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                  </svg>
                </div>
                <div className="font-medium text-sm">FREE RETURNS</div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
              <Phone size={20} className="text-gray-600" />
              <div className="text-sm">
                <div>
                  Need Help? Call Us <span className="font-bold">+1 255 854 55 26</span>
                </div>
                <div className="text-gray-500">Monday - Friday 9:00 - 17:00</div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Information Sections */}
        <div className="mb-16 space-y-4">
          {/* Delivery Info */}
          <div className="border border-gray-200">
            <button
              onClick={() => toggleSection("DELIVERY INFO")}
              className="w-full flex justify-between items-center p-4 font-bold text-left hover:bg-gray-50"
            >
              DELIVERY INFO
              {expandedSection === "DELIVERY INFO" ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>
            {expandedSection === "DELIVERY INFO" && (
              <div className="p-4 border-t border-gray-200">
                <ul className="space-y-2">
                  {productData.deliveryInfo.map((info, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span className="text-gray-700">{info}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Description */}
          <div className="border border-gray-200">
            <button
              onClick={() => toggleSection("DESCRIPTION")}
              className="w-full flex justify-between items-center p-4 font-bold text-left hover:bg-gray-50"
            >
              DESCRIPTION
              {expandedSection === "DESCRIPTION" ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>
            {expandedSection === "DESCRIPTION" && (
              <div className="p-4 border-t border-gray-200">
                <p className="text-gray-700">{productData.description}</p>
              </div>
            )}
          </div>

          {/* Reviews */}
          <div className="border border-gray-200">
            <button
              onClick={() => toggleSection("REVIEWS")}
              className="w-full flex justify-between items-center p-4 font-bold text-left hover:bg-gray-50"
            >
              REVIEWS (0)
              {expandedSection === "REVIEWS" ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>
            {expandedSection === "REVIEWS" && (
              <div className="p-4 border-t border-gray-200">
                <p className="text-gray-500 text-center py-8">No reviews yet. Be the first to review this product!</p>
              </div>
            )}
          </div>

          {/* Additional Information */}
          <div className="border border-gray-200">
            <button
              onClick={() => toggleSection("ADDITIONAL INFORMATION")}
              className="w-full flex justify-between items-center p-4 font-bold text-left hover:bg-gray-50"
            >
              ADDITIONAL INFORMATION
              {expandedSection === "ADDITIONAL INFORMATION" ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>
            {expandedSection === "ADDITIONAL INFORMATION" && (
              <div className="p-4 border-t border-gray-200">
                <div className="space-y-2">
                  <div className="grid grid-cols-3 gap-4">
                    <span className="font-medium">Material:</span>
                    <span className="col-span-2 text-gray-700">{productData.additionalInfo.material}</span>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <span className="font-medium">Care:</span>
                    <span className="col-span-2 text-gray-700">{productData.additionalInfo.care}</span>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <span className="font-medium">Origin:</span>
                    <span className="col-span-2 text-gray-700">{productData.additionalInfo.origin}</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Related Products */}
        <div>
          <h2 className="text-3xl font-bold mb-8">RELATED PRODUCTS</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedProducts.map((product) => (
              <div key={product.id} className="group relative">
                <div className="relative bg-gray-100 aspect-square mb-4 overflow-hidden">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    width={300}
                    height={300}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  {!product.inStock && (
                    <div className="absolute top-4 left-4 bg-gray-800 text-white text-xs px-3 py-1 uppercase">
                      Out of Stock
                    </div>
                  )}
                </div>
                <h3 className="font-bold mb-2">{product.name}</h3>
                <div className="text-gray-600">
                  {product.price.min === product.price.max
                    ? `$${product.price.min.toFixed(2)}`
                    : `$${product.price.min.toFixed(2)} – $${product.price.max.toFixed(2)}`}
                </div>
                {product.rating && (
                  <div className="flex mt-2">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-4 h-4 ${i < product.rating ? "text-yellow-400" : "text-gray-300"}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
