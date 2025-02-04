import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faQuestionCircle,
  faPowerOff,
  faLifeRing,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

export default function OfferManagement() {
  const [selectedTab, setSelectedTab] = useState("packages");
  return (
    <div className="flex h-screen">
      {/* Side bar  */}
      <aside className="w-64 bg-gradient-to-b from-purple-600 to-purple-800 p-4 text-white">
        <h2 className="text-xl font-bold mb-6">V-retail</h2>
        <nav>
          <ul className="space-y-4">
            <li>Seats</li>
            <li>Sales Members</li>
            <li>Analytics</li>
            <li>Chats & Tags</li>
            <li className="font-bold">Custom</li>
          </ul>
        </nav>
      </aside>
      {/* Main content  */}
      <main className="flex-1 p-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold"> Create and Manage Offers </h1>
          <div className="flex space-x-4">
            <FontAwesomeIcon
              icon={faBell}
              className="text-gray-700 cursor-pointer"
            />
            <FontAwesomeIcon
              icon={faQuestionCircle}
              className="text-gray-700 cursor-pointer"
            />
            <FontAwesomeIcon
              icon={faLifeRing}
              className="text-gray-700 cursor-pointer"
            />
            <FontAwesomeIcon
              icon={faPowerOff}
              className="text-red-600 cursor-pointer"
            />
          </div>
        </div>
        {/* Search Bar  */}
        <div>
          <input
            type="text"
            placeholder="Search for offers..."
            className="w-full border p-2 pl-10 rounded-md"
          />
          <FontAwesomeIcon
            icon={faSearch}
            className="absolute left-3 top-3 text-gray-500"
          />
        </div>
        <div>
          {/* Create Offer Section  */}
          <section className="col-span-1 p-4 border rounded-lg shadow-md bg-white">
            <div className="border p-4 rounded-md bg-gray-100 flex justify-center items-center">
              <span className="text-gray-500">
                Upload A Cover Photo Of Offer
              </span>
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium">Type</label>
              <div className="flex space-x-2 mt-1">
                <button
                  className={`p-2 rounded-md ${
                    selectedTab === "packages"
                      ? "bg-purple-700 text-white"
                      : "bg-purple-600 text-white"
                  }`}
                  onClick={() => setSelectedTab("packages")}
                >
                  Package
                </button>
                <button
                  className={`p-2 rounded-md ${
                    selectedTab === "pricings"
                      ? "bg-purple-700 text-white"
                      : "bg-purple-600 text-white"
                  }`}
                  onClick={() => setSelectedTab("pricings")}
                >
                  Pricing
                </button>
                <button
                  className={`p-2 rounded-md ${
                    selectedTab === "offers"
                      ? "bg-purple-700 text-white"
                      : "bg-purple-600 text-white"
                  }`}
                  onClick={() => setSelectedTab("offers")}
                >
                  Discount
                </button>
              </div>
              <input
                type="text"
                placeholder="Title"
                className="w-full border p-2 mt-2 rounded-md"
              />
              <input
                type="text"
                placeholder="Subtitle"
                className="w-full border p-2 mt-2 rounded-md"
              />
              <textarea
                placeholder="Description"
                className="w-full border p-2 mt-2 rounded-md"
              ></textarea>
              <button className="w-full mt-4 bg-purple-600 text-white p-2 rounded-md">
                Create Offer
              </button>
            </div>
          </section>

          <section>
            <div>
              <button></button>
              <button></button>
              <button></button>
            </div>

            <div>
              
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
