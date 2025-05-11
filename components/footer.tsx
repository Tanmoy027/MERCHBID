"use client"

import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-16 pb-8 relative overflow-hidden">
      <div className="absolute left-0 bottom-0 opacity-5">
        <Image
          src="/images/trib-logo-white.png"
          alt="TRIB logo background"
          width={400}
          height={300}
          className="w-[400px] h-auto"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between mb-12">
          <div className="mb-8 md:mb-0">
            <Link href="/" className="inline-block mb-6">
              <Image src="/images/logo-white.png" alt="MERCHBID" width={200} height={45} className="h-12 w-auto" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-16">
            <div>
              <h3 className="text-lg font-bold mb-6">ABOUT US</h3>
              <p className="text-gray-400 mb-6">
                Ignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti.
              </p>
              <div className="flex space-x-4">
                <Link href="#" className="text-white hover:text-gray-300">
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
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </Link>
                <Link href="#" className="text-white hover:text-gray-300">
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
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
                </Link>
                <Link href="#" className="text-white hover:text-gray-300">
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
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </Link>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-6">CONTACTS</h3>
              <p className="text-gray-400 mb-2">Germany, 785 15th Street, Office 478,</p>
              <p className="text-gray-400 mb-4">Berlin, De 81566</p>
              <Link href="#" className="text-gray-400 hover:text-white underline mb-4 inline-block">
                View on Google Map
              </Link>
              <p className="text-xl font-bold mt-4">+1 840 841 25 69</p>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-6">NEWSLETTER</h3>
              <div className="flex border-b border-gray-700 mb-4">
                <input
                  type="email"
                  placeholder="Enter Your Email Address"
                  className="bg-transparent border-0 flex-grow py-2 focus:outline-none text-white placeholder-gray-500"
                />
                <button className="p-2">
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
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </button>
              </div>
              <div className="flex items-center mt-4">
                <input type="checkbox" id="privacy-footer" className="mr-2" />
                <label htmlFor="privacy-footer" className="text-gray-400 text-sm">
                  I agree to the{" "}
                  <Link href="/privacy" className="underline">
                    Privacy Policy
                  </Link>
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-8 border-t border-gray-800">
          <Link href="/category/apparel" className="text-gray-400 hover:text-white">
            Apparel
          </Link>
          <Link href="/category/shoes" className="text-gray-400 hover:text-white">
            Shoes
          </Link>
          <Link href="/category/equipment" className="text-gray-400 hover:text-white">
            Equipment
          </Link>
          <Link href="/category/protein-drinks" className="text-gray-400 hover:text-white">
            Protein drinks
          </Link>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">MERCHBID © 2025. All rights reserved.</p>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-700 transition-colors"
            aria-label="Scroll to top"
          >
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
            >
              <path d="m18 15-6-6-6 6" />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  )
}
