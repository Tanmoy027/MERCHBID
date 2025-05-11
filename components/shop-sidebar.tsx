import { cn } from "@/lib/utils"

interface ShopSidebarProps {
  className?: string
}

export default function ShopSidebar({ className }: ShopSidebarProps) {
  return (
    <aside className={cn("space-y-8", className)}>
      <div>
        <h3 className="text-lg font-bold mb-4 flex items-center justify-between">
          FILTER BY CATEGORY
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lg:hidden"
          >
            <path d="m18 15-6-6-6 6" />
          </svg>
        </h3>
        <ul className="space-y-2">
          <li className="text-red-500">All categories</li>
          <li className="text-gray-600 hover:text-black">Uncategorized</li>
          <li className="text-gray-600 hover:text-black">Accessories</li>
          <li className="text-gray-600 hover:text-black">Apparel</li>
          <li className="text-gray-600 hover:text-black">Equipment</li>
          <li className="text-gray-600 hover:text-black">Gainers</li>
          <li className="text-gray-600 hover:text-black">Pre-workout</li>
          <li className="text-gray-600 hover:text-black">Protein drinks</li>
          <li className="text-gray-600 hover:text-black">Shoes</li>
          <li className="text-gray-600 hover:text-black">Vitamins</li>
        </ul>
      </div>

      <div>
        <h3 className="text-lg font-bold mb-4 flex items-center justify-between">
          SIZE
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lg:hidden"
          >
            <path d="m18 15-6-6-6 6" />
          </svg>
        </h3>
        <div className="grid grid-cols-3 gap-2">
          <button className="border border-gray-300 py-2 text-sm hover:border-black">1 L</button>
          <button className="border border-gray-300 py-2 text-sm hover:border-black">1 lbs</button>
          <button className="border border-gray-300 py-2 text-sm hover:border-black">10</button>
          <button className="border border-gray-300 py-2 text-sm hover:border-black">2 L</button>
          <button className="border border-gray-300 py-2 text-sm hover:border-black">2 lbs</button>
          <button className="border border-gray-300 py-2 text-sm hover:border-black">8</button>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-bold mb-4 flex items-center justify-between">
          PRICE
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lg:hidden"
          >
            <path d="m18 15-6-6-6 6" />
          </svg>
        </h3>
        <div className="mb-4">
          <input
            type="range"
            min="0"
            max="2200"
            defaultValue="2200"
            className="w-full h-1 bg-gray-300 rounded-lg appearance-none cursor-pointer"
          />
        </div>
        <p className="text-sm">Price: 0 - 2200</p>
      </div>

      <div>
        <h3 className="text-lg font-bold mb-4 flex items-center justify-between">
          RATING
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lg:hidden"
          >
            <path d="m18 15-6-6-6 6" />
          </svg>
        </h3>
        <div className="space-y-2">
          <div className="flex items-center">
            <input type="checkbox" id="rating5" className="mr-2" />
            <label htmlFor="rating5" className="flex">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="gold"
                  stroke="gold"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              ))}
            </label>
          </div>
          <div className="flex items-center">
            <input type="checkbox" id="rating4" className="mr-2" />
            <label htmlFor="rating4" className="flex">
              {[...Array(4)].map((_, i) => (
                <svg
                  key={i}
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="gold"
                  stroke="gold"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              ))}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="gray"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
            </label>
          </div>
        </div>
      </div>
    </aside>
  )
}
