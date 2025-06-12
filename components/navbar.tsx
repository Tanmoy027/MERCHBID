"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, Search, ShoppingBag, X } from "lucide-react"

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className="fixed w-full z-50 transition-all duration-300 bg-black py-4"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Mobile menu button */}
          <button
            className="lg:hidden flex items-center text-white"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </button>

          {/* Desktop navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            <Link href="/" className="border-b border-white text-sm font-medium uppercase tracking-wide text-white">
              Home
            </Link>
            <Link
              href="/shop"
              className="text-sm font-medium uppercase tracking-wide text-white hover:border-b hover:border-white"
            >
              Shop
            </Link>
            <Link
              href="/contact-us"
              className="text-sm font-medium uppercase tracking-wide text-white hover:border-b hover:border-white"
            >
              Contact Us
            </Link>
          </nav>

          {/* Logo */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <Link href="/" className="block">
              <Image src="/images/logo-white.png" alt="MERCHBID" width={120} height={25} className="h-7 w-auto" />
            </Link>
          </div>

          {/* Right icons */}
          <div className="flex items-center space-x-4">
            <Link href="/cart" className="relative text-white">
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                1
              </span>
            </Link>
            <button aria-label="Search" className="text-white">
              <Search className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden bg-black">
          <div className="flex justify-between items-center p-4 border-b border-gray-800">
            <Link href="/" className="block">
              <Image src="/images/logo-white.png" alt="MERCHBID" width={100} height={20} className="h-5 w-auto" />
            </Link>
            <button className="text-white" onClick={() => setMobileMenuOpen(false)} aria-label="Close menu">
              <X className="h-6 w-6" />
            </button>
          </div>
          <nav className="p-4">
            <div className="space-y-4 py-4">
              <Link href="/" className="block text-lg font-medium text-white" onClick={() => setMobileMenuOpen(false)}>
                Home
              </Link>
              <Link
                href="/shop"
                className="block text-lg font-medium text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                Shop
              </Link>
              <Link
                href="/contact-us"
                className="block text-lg font-medium text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact Us
              </Link>
            </div>
            <div className="mt-6 border-t border-gray-800 pt-4">
              <Link href="/cart" className="flex items-center text-white mb-4" onClick={() => setMobileMenuOpen(false)}>
                <ShoppingBag className="h-5 w-5 mr-2" />
                <span>Cart (1)</span>
              </Link>
              <button className="flex items-center text-white">
                <Search className="h-5 w-5 mr-2" />
                <span>Search</span>
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
