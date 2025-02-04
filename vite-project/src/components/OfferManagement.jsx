import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faQuestionCircle,
  faPowerOff,
  faLifeRing,
  faSearch,
  faEye,
  faEdit,
  faTrash,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";

export default function OfferManagement() {
  const [selectedTab, setSelectedTab] = useState("packages");
  const [isCreatingOffer, setIsCreatingOffer] = useState(false); // State for handling create offer action

  const handleCreateOffer = () => {
    setIsCreatingOffer(true); // Handle create offer state change
    // Additional logic for creating an offer can be added here
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
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

      {/* Main Content */}
      <main className="flex-1 p-6 bg-white">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Create and Manage Offers</h1>
          <div className="flex space-x-4">
            <FontAwesomeIcon icon={faBell} className="text-gray-700 cursor-pointer" />
            <FontAwesomeIcon icon={faQuestionCircle} className="text-gray-700 cursor-pointer" />
            <FontAwesomeIcon icon={faLifeRing} className="text-gray-700 cursor-pointer" />
            <FontAwesomeIcon icon={faPowerOff} className="text-red-600 cursor-pointer" />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-6 mt-6">
          {/* Create Offer Section */}
          <section className="col-span-1 p-4 border rounded-lg shadow-md bg-white">
            <h2 className="text-lg font-semibold mb-2">Create A Custom Offer</h2>
            <div className="border p-4 rounded-md bg-gray-100 flex flex-col items-center space-y-2">
              <FontAwesomeIcon icon={faPlus} />
              <span className="text-gray-500">Upload A Cover Photo Of Offer</span>
              <span className="text-gray-300">Only jpg, png file types (Max 500kb)</span>
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium">Type</label>
              <div className="flex space-x-2 mt-1">
                <button
                  className={`p-2 rounded-md ${
                    selectedTab === "packages" ? "bg-black-700 text-white" : "bg-purple-600 text-white"
                  }`}
                  onClick={() => setSelectedTab("packages")}
                >
                  Package
                </button>
                <button
                  className={`p-2 rounded-md ${
                    selectedTab === "pricings" ? "bg-black-700 text-white" : "bg-purple-600 text-white"
                  }`}
                  onClick={() => setSelectedTab("pricings")}
                >
                  Pricing
                </button>
                <button
                  className={`p-2 rounded-md ${
                    selectedTab === "offers" ? "bg-black-700 text-white" : "bg-purple-600 text-white"
                  }`}
                  onClick={() => setSelectedTab("offers")}
                >
                  Discount
                </button>
              </div>
              <div className="flex flex-col items-start">
                <label className="text-sm font-semibold text-gray-700 text-left">Title</label>
                <input
                  type="text"
                  placeholder="10% off"
                  className="w-full border p-2 mt-2 rounded-md focus:ring-2 focus:ring-purple-500 placeholder-gray-500"
                />
                <label className="text-sm font-semibold text-gray-700 text-left">Subtitle</label>
                <input
                  type="text"
                  placeholder="Offer10"
                  className="w-full border p-2 mt-2 rounded-md focus:ring-2 focus:ring-purple-500 placeholder-gray-500"
                />
                <label className="text-sm font-semibold text-gray-700 text-left">Description</label>
                <textarea
                  placeholder="Add 1000 in your wallet and get 10% discount on next order"
                  className="w-full border p-2 mt-2 rounded-md focus:ring-2 focus:ring-purple-500 placeholder-gray-500"
                />
                <button
                  className="w-full mt-4 bg-gradient-to-b from-purple-600 to-purple-800 text-white p-2 rounded-md"
                  onClick={handleCreateOffer}
                >
                  Create Offer
                </button>
              </div>
            </div>
          </section>

          {/* Offers Management Section */}
          <section className="col-span-2">
            <div className="flex space-x-2 border-b">
              <button
                className={`p-2 rounded-md ${
                  selectedTab === "packages" ? "bg-purple-700 text-white" : "bg-purple-600 text-white"
                }`}
                onClick={() => setSelectedTab("packages")}
              >
                Packages (3)
              </button>
              <button
                className={`p-2 rounded-md ${
                  selectedTab === "pricings" ? "bg-purple-700 text-white" : "bg-purple-600 text-white"
                }`}
                onClick={() => setSelectedTab("pricings")}
              >
                Pricings (2)
              </button>
              <button
                className={`p-2 rounded-md ${
                  selectedTab === "offers" ? "bg-purple-700 text-white" : "bg-purple-600 text-white"
                }`}
                onClick={() => setSelectedTab("offers")}
              >
                Offers (15)
              </button>
            </div>

            {/* Search Bar */}
            <div className="relative mt-4">
              <input
                type="text"
                placeholder="Search for an offer"
                className="w-full border p-2 pl-12 rounded-md focus:ring-2 focus:ring-purple-500 placeholder-gray-500"
              />
              <FontAwesomeIcon
                icon={faSearch}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500"
              />
            </div>

            <div className="mt-4 p-4 bg-white shadow-md rounded-md">
              {selectedTab === "packages" && (
                <div className="flex justify-between items-center">
                  Get iPhone + Samsung Galaxy Z Fold{" "}
                  <div className="space-x-2">
                    <FontAwesomeIcon icon={faEye} />
                    <FontAwesomeIcon icon={faEdit} />
                    <FontAwesomeIcon icon={faTrash} />
                  </div>
                </div>
              )}
              {selectedTab === "pricings" && (
                <div className="flex justify-between items-center">
                  iPhone 16 Pro - ₹1,24,000{" "}
                  <div className="space-x-2">
                    <FontAwesomeIcon icon={faEye} />
                    <FontAwesomeIcon icon={faEdit} />
                    <FontAwesomeIcon icon={faTrash} />
                  </div>
                </div>
              )}
              {selectedTab === "offers" && (
                <div className="flex justify-between items-center">
                  10% OFF - Special February Offer{" "}
                  <div className="space-x-2">
                    <FontAwesomeIcon icon={faEye} />
                    <FontAwesomeIcon icon={faEdit} />
                    <FontAwesomeIcon icon={faTrash} />
                  </div>
                </div>
              )}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
