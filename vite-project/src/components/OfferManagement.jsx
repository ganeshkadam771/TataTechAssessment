import React from "react";

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
      <main>
        <div>
          <h1> Create and Manage Offers </h1>
          <div></div>
        </div>
        {/* Search Bar  */}
        <div>
          <input type="text" placeholder="Search for offers..." className="" />
          < d/>
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
                        <Button/>
                        <Button/>
                        <Button/>
                    </div>
                    <input/>
                    <input/>
                    <textarea></textarea>
                    <Button ></Button>
                </div>
            </section>
        </div>
      </main>
    </div>
  );
}
