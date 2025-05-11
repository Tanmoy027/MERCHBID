"use client"

import { useState } from "react"
import Link from "next/link"

export default function ProductInfo() {
  const [quantity, setQuantity] = useState(1)

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <div className="flex items-center gap-2 text-sm">
          <Link href="/" className="text-gray-500 hover:text-black">
            Home
          </Link>
          <span className="text-gray-400">/</span>
          <Link href="/apparel" className="text-gray-500 hover:text-black">
            Apparel
          </Link>
          <span className="text-gray-400">/</span>
          <span>Leggings and bra</span>
        </div>
        <h1 className="text-3xl font-bold">LEGGINGS AND BRA</h1>
        <div className="flex items-center gap-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <svg
              key={star}
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="gold"
              stroke="gold"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
          ))}
        </div>
        <div className="text-xl font-semibold">$55.00 – $75.00</div>
        <p className="text-gray-600 text-sm">or 4 interest-free installments by Afterpay.</p>
      </div>

      <div className="space-y-4">
        <div>
          <h3 className="font-medium mb-2">SIZE</h3>
          <div className="flex gap-2">
            <button className="w-8 h-8 border border-gray-300 flex items-center justify-center hover:border-black">
              S
            </button>
            <button className="w-8 h-8 border border-gray-300 flex items-center justify-center bg-black text-white">
              M
            </button>
            <button className="w-8 h-8 border border-gray-300 flex items-center justify-center hover:border-black">
              L
            </button>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex border border-gray-300">
            <button
              className="w-10 h-10 flex items-center justify-center border-r border-gray-300"
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
            >
              -
            </button>
            <div className="w-10 h-10 flex items-center justify-center">{quantity}</div>
            <button
              className="w-10 h-10 flex items-center justify-center border-l border-gray-300"
              onClick={() => setQuantity(quantity + 1)}
            >
              +
            </button>
          </div>

          <button className="bg-gray-300 hover:bg-gray-400 text-black px-8 py-2.5 font-medium">BUY NOW</button>

          <button className="border border-gray-300 hover:border-black p-2.5">
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
      </div>

      <div className="border-t border-b border-gray-200 py-6">
        <h3 className="font-medium mb-4">GUARANTEED SAFE CHECKOUT</h3>
        <div className="flex gap-2">
          <div className="border border-gray-200 rounded p-2 w-16 h-10 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect width="20" height="14" x="2" y="5" rx="2" />
              <line x1="2" x2="22" y1="10" y2="10" />
            </svg>
          </div>
          <div className="border border-gray-200 rounded p-2 w-16 h-10 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect width="20" height="14" x="2" y="5" rx="2" />
            </svg>
          </div>
          <div className="border border-gray-200 rounded p-2 w-16 h-10 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect width="20" height="14" x="2" y="5" rx="2" />
            </svg>
          </div>
          <div className="border border-gray-200 rounded p-2 w-16 h-10 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect width="20" height="14" x="2" y="5" rx="2" />
            </svg>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="flex items-center justify-center border border-gray-200 p-4">
          <div className="flex items-center gap-3">
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
              className="text-blue-600"
            >
              <rect width="16" height="13" x="4" y="5" rx="2" />
              <path d="M16 2v3" />
              <path d="M8 2v3" />
              <path d="M4 10h16" />
              <path d="m9 16 2 2 4-4" />
            </svg>
            <div className="text-sm font-medium">FREE DELIVERY</div>
          </div>
        </div>
        <div className="flex items-center justify-center border border-gray-200 p-4">
          <div className="flex items-center gap-3">
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
              className="text-blue-600"
            >
              <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" />
              <path d="M18 14h-8" />
              <path d="M15 18h-5" />
              <path d="M10 6h8v4h-8Z" />
            </svg>
            <div className="text-sm font-medium">30 DAY TRIAL</div>
          </div>
        </div>
        <div className="flex items-center justify-center border border-gray-200 p-4">
          <div className="flex items-center gap-3">
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
              className="text-blue-600"
            >
              <path d="m22 2-7 20-4-9-9-4Z" />
              <path d="M22 2 11 13" />
            </svg>
            <div className="text-sm font-medium">FREE RETURNS</div>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-3 pt-4">
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
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
        <div className="text-sm">
          Need Help? Call Us <span className="font-medium">+1 255 854 55 26</span>
          <div className="text-gray-500">Monday - Friday 9:00 - 17:00</div>
        </div>
      </div>
    </div>
  )
}
