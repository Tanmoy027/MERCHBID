import ShopHeader from "@/components/shop-header"
import ProductGrid from "@/components/product-grid"
import ShopSidebar from "@/components/shop-sidebar"
import Pagination from "@/components/pagination"

export default function ShopPage() {
  return (
    <>
      <ShopHeader />

      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          <ShopSidebar className="w-full lg:w-1/4" />

          <div className="w-full lg:w-3/4">
            <div className="flex justify-between items-center mb-8">
              <p className="text-sm text-gray-600">Showing 1–8 of 60 results</p>
              <div className="relative">
                <select className="appearance-none border border-gray-300 rounded px-4 py-2 pr-8 focus:outline-none">
                  <option>Sort by latest</option>
                  <option>Sort by popularity</option>
                  <option>Sort by price: low to high</option>
                  <option>Sort by price: high to low</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>

            <ProductGrid />

            <Pagination />
          </div>
        </div>
      </div>
    </>
  )
}
