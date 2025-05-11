import Image from "next/image"

const categories = [
  {
    id: 1,
    name: "RUNNING SHOES",
    price: "$125.00 - $135.00",
    image: "/placeholder.svg?height=300&width=400",
    colors: ["#e5e5e5", "#3b82f6", "#8b5cf6", "#ef4444"],
  },
  {
    id: 2,
    name: "FITNESS SHOES",
    price: "$125.00 - $155.00",
    image: "/placeholder.svg?height=300&width=400",
    colors: ["#e5e5e5", "#3b82f6", "#8b5cf6", "#ef4444"],
  },
  {
    id: 3,
    name: "WALKING SHOES",
    price: "$85.00 - $99.00",
    image: "/placeholder.svg?height=300&width=400",
    colors: ["#3b82f6", "#f9a8d4"],
  },
  {
    id: 4,
    name: "SNEAKERS",
    price: "$99.00",
    image: "/placeholder.svg?height=300&width=400",
  },
]

export default function ShoeCategories() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <div key={category.id} className="group">
              <div className="relative bg-gray-100 aspect-video mb-4">
                <Image
                  src={category.image || "/placeholder.svg"}
                  alt={category.name}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                />
                {category.id === 1 && (
                  <button className="absolute top-4 left-4 bg-white text-black text-xs px-3 py-1 rounded">
                    Select Options
                  </button>
                )}
              </div>
              <h3 className="font-bold">{category.name}</h3>
              <p className="text-gray-600 mb-2">{category.price}</p>
              {category.colors && (
                <div className="flex space-x-2">
                  {category.colors.map((color, index) => (
                    <div key={index} className="w-4 h-4 rounded-full" style={{ backgroundColor: color }} />
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
