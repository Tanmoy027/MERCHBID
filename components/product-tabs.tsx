"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

export default function ProductTabs() {
  const [activeTab, setActiveTab] = useState("description")

  return (
    <div className="mb-16">
      <div className="border-b border-gray-200 mb-6">
        <div className="flex flex-wrap -mb-px">
          <button
            className={cn(
              "inline-block p-4 border-b-2 font-medium",
              activeTab === "description"
                ? "border-black text-black"
                : "border-transparent text-gray-500 hover:border-gray-300",
            )}
            onClick={() => setActiveTab("description")}
          >
            DESCRIPTION
          </button>
          <button
            className={cn(
              "inline-block p-4 border-b-2 font-medium",
              activeTab === "reviews"
                ? "border-black text-black"
                : "border-transparent text-gray-500 hover:border-gray-300",
            )}
            onClick={() => setActiveTab("reviews")}
          >
            REVIEWS (0)
          </button>
          <button
            className={cn(
              "inline-block p-4 border-b-2 font-medium",
              activeTab === "info"
                ? "border-black text-black"
                : "border-transparent text-gray-500 hover:border-gray-300",
            )}
            onClick={() => setActiveTab("info")}
          >
            ADDITIONAL INFORMATION
          </button>
        </div>
      </div>

      <div className="space-y-4">
        {activeTab === "description" && (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">DELIVERY INFO</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Standard and Express delivery services are available for all items.</li>
              <li>
                Shipping costs are calculated at the checkout page (after delivery option & destination confirmation).
              </li>
              <li>Tracking is available for all delivery options.</li>
              <li>Items are delivered during standard business hours.</li>
            </ul>
          </div>
        )}

        {activeTab === "reviews" && (
          <div className="text-center py-8">
            <p className="text-gray-500">There are no reviews yet.</p>
            <button className="mt-4 bg-black text-white px-6 py-2 hover:bg-gray-800">
              BE THE FIRST TO WRITE A REVIEW
            </button>
          </div>
        )}

        {activeTab === "info" && (
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="font-medium">MATERIAL</div>
              <div className="col-span-2 text-gray-700">85% Polyester, 15% Elastane</div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="font-medium">CARE INSTRUCTIONS</div>
              <div className="col-span-2 text-gray-700">
                Machine wash at 30°C. Do not bleach. Do not tumble dry. Do not iron.
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="font-medium">COUNTRY OF ORIGIN</div>
              <div className="col-span-2 text-gray-700">Made in Portugal</div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
