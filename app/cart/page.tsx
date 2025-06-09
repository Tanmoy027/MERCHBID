import Image from "next/image"
import Link from "next/link"
import { ChevronDown, Tag, X } from "lucide-react"

export default function CartPage() {
  return (
    <>
      {/* Cart Header */}
      <div className="relative w-full h-[300px] bg-black">
        <div className="absolute inset-0 bg-black/70 z-10"></div>
        <Image
          src="/images/baki-hanma-tshirt.jpeg"
          alt="Cart header"
          width={1920}
          height={300}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center z-20">
          <h1 className="text-5xl font-bold text-white mb-8">CART</h1>
          <div className="text-white">
            <ChevronDown size={24} />
          </div>
        </div>
      </div>

      {/* Cart Progress */}
      <div className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center max-w-4xl mx-auto">
            <div className="flex items-center mb-6 md:mb-0">
              <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                1
              </div>
              <span className="ml-3 font-bold">SHOPPING CART</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="ml-4 hidden md:block"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </div>

            <div className="flex items-center mb-6 md:mb-0">
              <div className="w-10 h-10 rounded-full bg-gray-300 text-black flex items-center justify-center font-bold">
                2
              </div>
              <span className="ml-3 font-bold text-gray-500">PAYMENT & DELIVERY OPTIONS</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="ml-4 hidden md:block"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </div>

            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-gray-300 text-black flex items-center justify-center font-bold">
                3
              </div>
              <span className="ml-3 font-bold text-gray-500">ORDER RECEIVED</span>
            </div>
          </div>
        </div>
      </div>

      {/* Cart Content */}
      <div className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Cart Table */}
            <div className="bg-white shadow-md rounded-sm overflow-hidden mb-8">
              <div className="grid grid-cols-12 bg-gray-100 p-4 font-bold text-sm">
                <div className="col-span-6 md:col-span-6">PRODUCT</div>
                <div className="col-span-2 md:col-span-2 text-right">PRICE</div>
                <div className="col-span-2 md:col-span-2 text-center">QUANTITY</div>
                <div className="col-span-2 md:col-span-2 text-right">SUBTOTAL</div>
              </div>

              {/* Cart Item */}
              <div className="grid grid-cols-12 p-4 items-center border-b border-gray-200">
                <div className="col-span-6 md:col-span-6 flex items-center">
                  <div className="w-16 h-16 mr-4 flex-shrink-0">
                    <Image
                      src="/placeholder.svg?height=64&width=64"
                      alt="Fitness Shoes - White"
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold">FITNESS SHOES - WHITE</h3>
                    <p className="text-sm text-gray-500">Size: 42</p>
                  </div>
                </div>
                <div className="col-span-2 md:col-span-2 text-right">$155.00</div>
                <div className="col-span-2 md:col-span-2 flex justify-center">
                  <div className="flex border border-gray-300 w-24">
                    <button className="px-2 py-1 border-r border-gray-300">-</button>
                    <input
                      type="text"
                      value="1"
                      className="w-full text-center bg-transparent focus:outline-none"
                      readOnly
                    />
                    <button className="px-2 py-1 border-l border-gray-300">+</button>
                  </div>
                </div>
                <div className="col-span-2 md:col-span-2 text-right font-bold flex justify-end items-center">
                  <span className="mr-2">$155.00</span>
                  <button className="text-gray-400 hover:text-red-500">
                    <X size={18} />
                  </button>
                </div>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-8">
              {/* Coupon Code */}
              <div className="lg:w-1/2">
                <div className="flex">
                  <div className="relative flex-grow">
                    <input
                      type="text"
                      placeholder="Coupon Code"
                      className="w-full border border-gray-300 p-3 pl-10 focus:outline-none focus:ring-2 focus:ring-black"
                    />
                    <Tag className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                  </div>
                  <button className="bg-white border border-gray-300 border-l-0 px-4 py-3 font-medium hover:bg-gray-100 transition-colors">
                    APPLY COUPON
                  </button>
                </div>
              </div>

              {/* Cart Totals */}
              <div className="lg:w-1/2">
                <div className="bg-white p-6 shadow-md">
                  <h3 className="text-xl font-bold mb-6">CART TOTALS</h3>
                  <div className="border-b border-gray-200 py-3 flex justify-between">
                    <span className="font-medium">SUBTOTAL</span>
                    <span className="font-bold">$155.00</span>
                  </div>
                  <div className="border-b border-gray-200 py-3 flex justify-between">
                    <span className="font-medium">TOTAL</span>
                    <span className="font-bold">$155.00</span>
                  </div>
                  <button className="w-full bg-blue-600 text-white py-4 mt-6 font-bold hover:bg-blue-700 transition-colors">
                    PROCEED TO CHECKOUT
                  </button>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-between mt-8 gap-4">
              <Link
                href="/shop"
                className="bg-gray-100 text-black px-6 py-3 text-center font-medium hover:bg-gray-200 transition-colors"
              >
                CONTINUE SHOPPING
              </Link>
              <button className="bg-gray-300 text-black px-6 py-3 font-medium hover:bg-gray-400 transition-colors">
                UPDATE CART
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
