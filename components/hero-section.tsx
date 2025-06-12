import Image from "next/image"

export default function HeroSection() {
  return (
    <section className="relative w-full bg-black text-white pt-20">
      <div className="container mx-auto px-4 pt-16 pb-6 relative z-10">
        <h1 className="text-7xl md:text-8xl font-bold tracking-tight mb-4">Buy the design that your dreams</h1>
        <p className="text-center text-sm max-w-4xl mx-auto uppercase">
          USE CODE MERCHBID10 FOR 10% OFF YOUR FIRST PURCHASE
        </p>
      </div>

      <div className="w-full h-[500px] relative overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <Image
          src="/images/baki-hanma-tshirt.jpeg"
          alt="MERCHBID Collection"
          width={1920}
          height={500}
          className="w-full h-full object-cover"
          priority
        />

      </div>

      <div className="flex justify-between items-center px-4 md:px-14 py-4 bg-black">
        <div className="text-sm font-bold uppercase tracking-wider">MERCHBID COLLECTION 2025</div>
        <div className="flex items-center">
          <span className="mr-2 uppercase">SCROLL DOWN</span>
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
            <path d="m6 9 6 6 6-6" />
          </svg>
        </div>
      </div>
    </section>
  )
}
