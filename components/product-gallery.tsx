import Image from "next/image"

export default function ProductGallery() {
  return (
    <div className="flex flex-col md:flex-row gap-4">
      <div className="order-2 md:order-1 md:w-20 flex md:flex-col gap-4 mt-4 md:mt-0">
        <button className="w-20 h-20 border border-gray-200 hover:border-black">
          <Image
            src="/placeholder.svg?height=80&width=80"
            alt="Product thumbnail"
            width={80}
            height={80}
            className="w-full h-full object-cover"
          />
        </button>
        <button className="w-20 h-20 border border-gray-200 hover:border-black">
          <Image
            src="/placeholder.svg?height=80&width=80"
            alt="Product thumbnail"
            width={80}
            height={80}
            className="w-full h-full object-cover"
          />
        </button>
      </div>
      <div className="order-1 md:order-2 flex-1">
        <Image
          src="/placeholder.svg?height=600&width=600"
          alt="Leggings and bra"
          width={600}
          height={600}
          className="w-full h-auto"
          priority
        />
      </div>
    </div>
  )
}
