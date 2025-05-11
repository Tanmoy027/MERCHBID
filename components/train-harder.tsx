import Image from "next/image"

export default function TrainHarder() {
  return (
    <section className="py-16 bg-black text-white relative overflow-hidden">
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 opacity-10">
        <Image
          src="/images/trib-logo-white.png"
          alt="TRIB logo background"
          width={600}
          height={400}
          className="w-[600px] h-auto"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <div className="text-xs font-medium mb-4 max-w-xs">
              //PUSH YOUR LIMITS WITH CONFIDENCE USING OUR HIGH-PERFORMANCE GEAR DESIGNED TO SUPPORT YOU IN EVERY
              WORKOUT.
            </div>
          </div>
          <div>
            <h2 className="text-5xl md:text-7xl font-bold mb-4">TRAIN HARDER,</h2>
            <div className="flex flex-wrap items-center text-4xl md:text-7xl font-bold">
              <span className="mr-4">WITH OUR GEAR YOU'RE READY FOR</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mx-2"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
              <span className="text-blue-600">VICTORY</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
