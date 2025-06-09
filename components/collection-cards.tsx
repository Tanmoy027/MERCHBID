import Image from "next/image"
import Link from "next/link"

const collections = [
  {
    id: 1,
    title: "Harley Riders United",
    description:
      "Premium apparel for motorcycle enthusiasts. Featuring vintage designs and classic Harley-inspired graphics.",
    image: "/images/motorcycle-tshirt.jpeg",
    href: "/shop/harley-riders",
  },
  {
    id: 2,
    title: "Merchbid Anime",
    description:
      "Exclusive anime collection featuring your favorite characters from Baki Hanma and more popular series.",
    image: "/images/baki-hanma-sweatshirt.jpeg",
    href: "/shop/anime",
  },
  {
    id: 3,
    title: "Merchbid Gym",
    description: "Performance wear designed for athletes. Comfortable, durable, and stylish for your workout sessions.",
    image: "/placeholder.svg?height=400&width=400",
    href: "/shop/gym",
  },
  {
    id: 4,
    title: "Merchbid Car",
    description: "Automotive enthusiast collection featuring iconic cars like the Dodge Challenger and Toyota Supra.",
    image: "/images/dodge-challenger-tshirt.jpeg",
    href: "/shop/car",
  },
  {
    id: 5,
    title: "Merchbid Trad",
    description: "Traditional designs with a modern twist. Classic patterns and timeless aesthetics for everyday wear.",
    image: "/images/open-road-tshirt.jpeg",
    href: "/shop/trad",
  },
]

export default function CollectionCards() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">VIEW COLLECTIONS</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our specialized collections featuring unique designs for every passion and interest.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {collections.map((collection) => (
            <div key={collection.id} className="bg-white rounded-lg overflow-hidden shadow-lg group h-full">
              <div className="relative h-48 sm:h-56 overflow-hidden">
                <Image
                  src={collection.image || "/placeholder.svg"}
                  alt={collection.title}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Link
                    href={collection.href}
                    className="bg-white text-black px-4 py-2 rounded-sm font-medium transform -translate-y-4 group-hover:translate-y-0 transition-transform duration-300 text-sm"
                  >
                    View Collection
                  </Link>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2">{collection.title}</h3>
                <p className="text-gray-600 mb-4 text-sm line-clamp-2">{collection.description}</p>
                <Link
                  href={collection.href}
                  className="inline-block bg-black text-white px-4 py-2 text-sm font-medium hover:bg-gray-800 transition-colors w-full text-center"
                >
                  Shop Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
