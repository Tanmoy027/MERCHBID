import Link from "next/link"
import Image from "next/image"

export default function BakiHanmaSweatshirtPage() {
  return (
    <>
      <div className="bg-gray-100 py-2 border-b border-gray-200">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <button className="flex items-center">
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
              className="mr-2"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>
          <p className="text-sm font-medium">GET 10% OFF YOUR FIRST PURCHASE WITH CODE: MERCHBID10</p>
          <button className="flex items-center">
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
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="text-sm mb-8 text-gray-500">
          <Link href="/" className="hover:text-black">
            Home
          </Link>{" "}
          /{" "}
          <Link href="/shop" className="hover:text-black">
            Shop
          </Link>{" "}
          /{" "}
          <Link href="/shop/anime-collection" className="hover:text-black">
            Anime Collection
          </Link>{" "}
          / Baki Hanma Sweatshirt
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="order-2 md:order-1 md:w-20 flex md:flex-col gap-4 mt-4 md:mt-0">
              <button className="w-20 h-20 border border-gray-200 hover:border-black">
                <Image
                  src="/images/baki-hanma-sweatshirt.jpeg"
                  alt="Baki Hanma Sweatshirt - Front"
                  width={80}
                  height={80}
                  className="w-full h-full object-cover"
                />
              </button>
              <button className="w-20 h-20 border border-gray-200 hover:border-black">
                <Image
                  src="/images/baki-hanma-tshirt.jpeg"
                  alt="Baki Hanma - Other view"
                  width={80}
                  height={80}
                  className="w-full h-full object-cover"
                />
              </button>
            </div>
            <div className="order-1 md:order-2 flex-1">
              <Image
                src="/images/baki-hanma-sweatshirt.jpeg"
                alt="Baki Hanma Sweatshirt"
                width={600}
                height={600}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>

          <div className="space-y-6">
            <div className="inline-block bg-red-600 text-white text-xs px-3 py-1 uppercase font-medium">Bestseller</div>
            <h1 className="text-3xl font-bold">BAKI HANMA SWEATSHIRT</h1>
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
              <span className="text-sm text-gray-500 ml-2">(24 reviews)</span>
            </div>
            <div className="text-xl font-semibold">$49.99</div>
            <p className="text-gray-600">
              Premium quality sweatshirt featuring Baki Hanma design with authentic Japanese typography. Made from soft,
              durable fabric for maximum comfort. Perfect for anime fans and streetwear enthusiasts.
            </p>

            <div>
              <h3 className="font-medium mb-2">COLOR</h3>
              <div className="flex gap-2">
                <button className="w-10 h-10 rounded-full bg-[#F5F5DC] border-2 border-black flex items-center justify-center">
                  <span className="sr-only">Cream</span>
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
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </button>
                <button className="w-10 h-10 rounded-full bg-black border border-gray-300">
                  <span className="sr-only">Black</span>
                </button>
                <button className="w-10 h-10 rounded-full bg-gray-500 border border-gray-300">
                  <span className="sr-only">Gray</span>
                </button>
              </div>
            </div>

            <div>
              <h3 className="font-medium mb-2">SIZE</h3>
              <div className="flex flex-wrap gap-2">
                <button className="w-12 h-12 border border-gray-300 flex items-center justify-center hover:border-black">
                  S
                </button>
                <button className="w-12 h-12 border border-gray-300 flex items-center justify-center bg-black text-white">
                  M
                </button>
                <button className="w-12 h-12 border border-gray-300 flex items-center justify-center hover:border-black">
                  L
                </button>
                <button className="w-12 h-12 border border-gray-300 flex items-center justify-center hover:border-black">
                  XL
                </button>
                <button className="w-12 h-12 border border-gray-300 flex items-center justify-center hover:border-black">
                  XXL
                </button>
              </div>
              <a href="#size-guide" className="text-sm underline mt-2 inline-block">
                Size Guide
              </a>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex border border-gray-300">
                <button className="w-12 h-12 flex items-center justify-center border-r border-gray-300">-</button>
                <div className="w-12 h-12 flex items-center justify-center">1</div>
                <button className="w-12 h-12 flex items-center justify-center border-l border-gray-300">+</button>
              </div>

              <button className="bg-black hover:bg-gray-800 text-white px-8 py-3 font-medium flex-grow md:flex-grow-0">
                ADD TO CART
              </button>

              <button className="border border-gray-300 hover:border-black p-3">
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

            <div className="border-t border-b border-gray-200 py-6">
              <h3 className="font-medium mb-4">PRODUCT DETAILS</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Premium quality cotton blend (80% cotton, 20% polyester)</li>
                <li>Authentic Baki Hanma design with Japanese typography</li>
                <li>Ribbed cuffs and hem</li>
                <li>Machine washable (cold wash recommended)</li>
                <li>Officially licensed merchandise</li>
              </ul>
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
                <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
              </svg>
              <div className="text-sm">
                <div className="font-medium">Fast Shipping</div>
                <div className="text-gray-500">Free shipping on orders over $50</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <div className="border-b border-gray-200 mb-6">
            <div className="flex flex-wrap -mb-px">
              <button className="inline-block p-4 border-b-2 border-black text-black font-medium">DESCRIPTION</button>
              <button className="inline-block p-4 border-b-2 border-transparent text-gray-500 hover:border-gray-300 font-medium">
                REVIEWS (24)
              </button>
              <button className="inline-block p-4 border-b-2 border-transparent text-gray-500 hover:border-gray-300 font-medium">
                SHIPPING & RETURNS
              </button>
            </div>
          </div>

          <div className="space-y-4">
            <p>
              Embrace the spirit of one of anime's most iconic fighters with our exclusive Baki Hanma sweatshirt. This
              premium quality garment features authentic Japanese typography and detailed artwork that captures the raw
              power and intensity of the legendary character.
            </p>
            <p>
              Crafted from a soft yet durable cotton blend, this sweatshirt offers exceptional comfort for everyday wear
              while maintaining its shape and print quality through repeated washing. The ribbed cuffs and hem provide a
              secure fit, making it perfect for both casual outings and intense training sessions.
            </p>
            <p>
              As part of our exclusive Anime Collection, this officially licensed merchandise is a must-have for fans of
              the series and collectors of unique streetwear. The distinctive design combines traditional Japanese
              elements with contemporary styling, creating a versatile piece that stands out in any wardrobe.
            </p>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8">YOU MAY ALSO LIKE</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group">
              <div className="relative mb-4 overflow-hidden">
                <Link href="/shop/product-2">
                  <Image
                    src="/images/baki-hanma-tshirt.jpeg"
                    alt="Baki Hanma T-Shirt"
                    width={400}
                    height={400}
                    className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
                  />
                </Link>
              </div>
              <Link href="/shop/product-2">
                <h3 className="font-medium mb-1">Baki Hanma Black T-Shirt</h3>
              </Link>
              <div className="font-medium">$29.99</div>
            </div>

            <div className="group">
              <div className="relative mb-4 overflow-hidden">
                <Link href="/shop/product-3">
                  <Image
                    src="/images/dodge-challenger-tshirt.jpeg"
                    alt="1970 Dodge Challenger T-Shirt"
                    width={400}
                    height={400}
                    className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
                  />
                </Link>
              </div>
              <Link href="/shop/product-3">
                <h3 className="font-medium mb-1">1970 Dodge Challenger T-Shirt</h3>
              </Link>
              <div className="font-medium">$32.99</div>
            </div>

            <div className="group">
              <div className="relative mb-4 overflow-hidden">
                <Link href="/shop/product-5">
                  <Image
                    src="/images/motorcycle-tshirt.jpeg"
                    alt="Vintage Motorcycle T-Shirt"
                    width={400}
                    height={400}
                    className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
                  />
                </Link>
                <div className="absolute top-4 right-4 bg-red-600 text-white text-xs px-3 py-1 rounded-full uppercase font-medium">
                  New
                </div>
              </div>
              <Link href="/shop/product-5">
                <h3 className="font-medium mb-1">Vintage Motorcycle T-Shirt</h3>
              </Link>
              <div className="font-medium">$29.99</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
