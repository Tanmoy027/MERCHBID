import Link from "next/link"

export default function Pagination() {
  return (
    <div className="flex justify-center mt-12">
      <div className="flex space-x-2">
        <Link href="#" className="w-8 h-8 flex items-center justify-center bg-black text-white rounded-full">
          1
        </Link>
        <Link
          href="#"
          className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-full hover:border-black"
        >
          2
        </Link>
        <Link
          href="#"
          className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-full hover:border-black"
        >
          3
        </Link>
        <Link
          href="#"
          className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-full hover:border-black"
        >
          4
        </Link>
        <Link
          href="#"
          className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-full hover:border-black"
        >
          5
        </Link>
        <Link
          href="#"
          className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-full hover:border-black"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  )
}
