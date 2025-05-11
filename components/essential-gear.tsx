import Image from "next/image"

export default function EssentialGear() {
  return (
    <section className="relative w-full h-[600px]">
      <Image
        src="/placeholder.svg?height=600&width=1920"
        alt="Tennis equipment"
        width={1920}
        height={600}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
        <div className="text-sm font-medium mb-4">//EMPOWER YOUR TRAININGS</div>
        <h2 className="text-5xl font-bold max-w-3xl">ESSENTIAL GEAR FOR YOUR FITNESS JOURNEY</h2>
        <button className="mt-8 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 uppercase font-medium">
          View Details
        </button>
      </div>
    </section>
  )
}
