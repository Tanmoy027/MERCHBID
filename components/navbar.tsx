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
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-black py-2" : "bg-transparent py-4"}`}
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
          <nav className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="border-b border-white text-sm font-medium uppercase tracking-wide text-white">
              Home
            </Link>
            <Link
              href="/pages"
              className="text-sm font-medium uppercase tracking-wide text-white hover:border-b hover:border-white"
            >
              Pages
            </Link>
            <Link
              href="/blog"
              className="text-sm font-medium uppercase tracking-wide text-white hover:border-b hover:border-white"
            >
              Blog
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
              <Image src="/images/logo-white.png" alt="MERCHBID" width={180} height={40} className="h-10 w-auto" />
            </Link>
          </div>

          {/* Right icons */}
          <div className="flex items-center space-x-4">
            <Link href="/cart" className="relative text-white">
              <ShoppingBag className="h-6 w-6" />
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                1
              </span>
            </Link>
            <button aria-label="Search" className="text-white">
              <Search className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden bg-black">
          <div className="flex justify-between items-center p-4 border-b border-gray-800">
            <Link href="/" className="block">
              <Image src="/images/logo-white.png" alt="MERCHBID" width={150} height={35} className="h-8 w-auto" />
            </Link>
            <button className="text-white" onClick={() => setMobileMenuOpen(false)} aria-label="Close menu">
              <X className="h-6 w-6" />
            </button>
          </div>
          <nav className="p-4">
            <div className="space-y-6 py-6">
              <Link href="/" className="block text-xl font-medium text-white" onClick={() => setMobileMenuOpen(false)}>
                Home
              </Link>
              <Link
                href="/pages"
                className="block text-xl font-medium text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                Pages
              </Link>
              <Link
                href="/blog"
                className="block text-xl font-medium text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                Blog
              </Link>
              <Link
                href="/shop"
                className="block text-xl font-medium text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                Shop
              </Link>
              <Link
                href="/contact-us"
                className="block text-xl font-medium text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
