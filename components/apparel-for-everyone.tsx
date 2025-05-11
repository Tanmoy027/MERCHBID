import Image from "next/image"

export default function ApparelForEveryone() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-[500px]">
            <Image
              src="/placeholder.svg?height=500&width=600"
              alt="Athletic women"
              width={600}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <div className="text-sm font-medium mb-4">//WELCOME TO SPRINT</div>
            <h2 className="text-5xl font-bold mb-6">
              WE SELL APPAREL
              <br />
              FOR EVERYONE
            </h2>
            <p className="text-gray-600 mb-8">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam
              rem aperiam.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 uppercase font-medium">
              About Us
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
