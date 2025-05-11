import Image from "next/image"

export default function ShopHeader() {
  return (
    <div className="relative w-full h-[300px] bg-black">
      <div className="absolute inset-0 bg-black/50 z-10"></div>
      <Image
        src="/placeholder.svg?height=300&width=1920"
        alt="Shop header"
        width={1920}
        height={300}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center z-20">
        <h1 className="text-5xl font-bold text-white mb-4">SHOP</h1>
        <div className="text-white">
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
            className="mx-auto"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </div>
      </div>
    </div>
  )
}
