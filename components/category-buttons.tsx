import Link from "next/link"

export default function CategoryButtons() {
  const categories = [
    {
      name: "Harley Riders United",
      href: "/shop/harley-riders",
      description: "Motorcycle Culture",
    },
    {
      name: "Merchbid Anime",
      href: "/shop/anime",
      description: "Japanese Collection",
    },
    {
      name: "Merchbid Gym",
      href: "/shop/gym",
      description: "Fitness Apparel",
    },
    {
      name: "Merchbid Car",
      href: "/shop/car",
      description: "Automotive Style",
    },
    {
      name: "Merchbid Trad",
      href: "/shop/trad",
      description: "Traditional Designs",
    },
  ]

  return (
    <section className="py-12 bg-black">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {categories.map((category, index) => (
            <Link
              key={category.name}
              href={category.href}
              className="group relative bg-white text-black py-6 px-4 text-center font-bold uppercase tracking-wider transition-all duration-300 hover:bg-black hover:text-white border-2 border-transparent hover:border-white overflow-hidden"
            >
              <div className="relative z-10">
                <div className="text-base md:text-lg font-bold mb-1 md:mb-2">{category.name}</div>
                <div className="text-xs md:text-sm font-normal opacity-70 group-hover:opacity-100 transition-opacity">
                  {category.description}
                </div>
              </div>

              {/* Animated background effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-200 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></div>

              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-0 h-0 border-l-[20px] border-l-transparent border-t-[20px] border-t-gray-300 group-hover:border-t-white transition-colors duration-300"></div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
