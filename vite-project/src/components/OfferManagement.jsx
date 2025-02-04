import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faQuestionCircle, faPowerOff, faLifeRing, faSearch } from "@fortawesome/free-solid-svg-icons";


export default function OfferManagement() {
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
          <FontAwesomeIcon icon={faBell} className="text-gray-700 cursor-pointer" />
            <FontAwesomeIcon icon={faQuestionCircle} className="text-gray-700 cursor-pointer" />
            <FontAwesomeIcon icon={faLifeRing} className="text-gray-700 cursor-pointer" />
            <FontAwesomeIcon icon={faPowerOff} className="text-red-600 cursor-pointer" />
          </div>
        </div>
        {/* Search Bar  */}
        <div>
          <input type="text" placeholder="Search for offers..." className="w-full border p-2 pl-10 rounded-md" />
          <FontAwesomeIcon icon={faSearch} className="absolute left-3 top-3 text-gray-500" />
        </div>
        <div>
            {/* Create Offer Section  */}
            <section>
              
                <div>
                    <span></span>
                </div>
                <div>
                    <label></label>
                    <div>
                       
                    </div>
                    <input/>
                    <input/>
                    <textarea></textarea>
                    
                </div>
            </section>
        </div>
      </main>
    </div>
  );
}
