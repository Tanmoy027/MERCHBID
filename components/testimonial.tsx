import Image from "next/image"

export default function Testimonial() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <button className="p-2" aria-label="Previous testimonial">
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
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>

          <div className="max-w-3xl text-center">
            <h2 className="text-4xl font-bold mb-8">
              I PREFER YOUR SMART FITNESS PLANS TO STAY HEALTHY AND BOOST MY BODY'S PRODUCTIVITY
            </h2>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full overflow-hidden mb-2">
                <Image
                  src="/placeholder.svg?height=48&width=48"
                  alt="Sandra Silver"
                  width={48}
                  height={48}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="font-medium">Sandra Silver</div>
              <div className="text-sm text-gray-600">Los Angeles</div>
            </div>
          </div>

          <button className="p-2" aria-label="Next testimonial">
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
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
