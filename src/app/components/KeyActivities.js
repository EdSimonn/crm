import React, { useState } from "react";
import {
  FiCoffee,
  FiBriefcase,
  FiEdit,
  FiSend,
  FiThumbsUp,
  FiThumbsDown,
  FiX,
  FiMessageCircle,
} from "react-icons/fi";
import Image from "next/image";
import { cards } from "../data.js";

const KeyActivities = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Engage");

  const handleCardClick = (card) => {
    setSelectedCard(card);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedCard(null);
    setIsModalOpen(false);
  };

  return (
    <div className="flex flex-col sm:flex-row mt-6 ">
      {/* Left Section: Cards (Full Width on Small Screens) */}
      <div className="w-full sm:w-2/3 pr-4">
        <p className="text-gray-600 mb-4">
          Copilot has pinpointed 20 key leads that show strong purchase intent
          and are actively engaging. These leads need your focus.
        </p>

        {/* Cards */}
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-x-4 gap-2">
          {cards.map((card) => (
            <div
              key={card.id}
              onClick={() => handleCardClick(card)}
              className="cursor-pointer"
            >
              <div className="space-x-2 bg-white border rounded-lg shadow-md p-3 pr-6 mt-2">
                <div className="flex items-center space-x-2 bg-white px-3 py-3 mt-2">
                  <Image
                    src={card.img}
                    alt="Jane Reyes"
                    width={40}
                    height={40}
                    className="rounded-full w-10 h-10"
                  />
                  <div>
                    <h2 className="font-medium">{card.title}</h2>
                    <p className="text-sm text-gray-500">
                      COO, Northwind Traders
                    </p>
                  </div>
                </div>
                <div className="bg-blue-50 p-4 w-full">
                  <h4 className="font-semibold">{card.todos}</h4>
                  <p className="text-gray-600 text-sm">{card.description}</p>
                  <p className="text-xs text-gray-500 mt-2">
                    {card.additionalInfo}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Section: Other Key Activities */}
      <div className="w-full sm:w-1/3 pl-4 pt-4">
        <h3 className="text-md font-semibold mb-2">Other key activities</h3>
        <div className="space-y-4">
          <div className="flex items-center">
            <FiCoffee className="text-green-500 mr-2" size={20} />
            <div>
              <h4 className="font-semibold">Cafe A100 for Woodland Bank</h4>
              <p className="text-sm text-gray-600">
                Review draft and reply to Chris Naido
              </p>
              <p className="text-xs text-gray-500 mt-1">
                $280,000 • 8 days to close
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <FiBriefcase className="text-purple-500 mr-2" size={20} />
            <div>
              <h4 className="font-semibold">
                Partnership opportunity for Fabrikam
              </h4>
              <p className="text-sm text-gray-600">
                Prepare for Fabrikam’s key stakeholder meeting.
              </p>
              <p className="text-xs text-gray-500 mt-1">
                $5,000,000 • 12 days to close
              </p>
            </div>
          </div>
        </div>
        <a href="#" className="text-blue-600 text-sm mt-4 inline-block">
          Show all key activities
        </a>
      </div>

      {/* Modal */}
      {isModalOpen && selectedCard && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white p-4 border-2 border-blue-600 rounded-lg shadow-lg max-w-3xl w-full text-xs">
            <div className="border-b pb-3 mb-4">
              <div className="flex justify-between items-center px-2">
                <h1 className="text-lg font-semibold mb-4">
                  Engage with {selectedCard.title}
                </h1>
                <p
                  className="cursor-pointer text-xl font-semibold"
                  onClick={() => setIsModalOpen(false)}
                >
                  <FiX />
                </p>
              </div>
              <div className="flex items-center space-x-2 bg-white rounded-lg shadow-md px-3 py-3 mt-2">
                <Image
                  src={selectedCard.img}
                  alt="Jane Reyes"
                  width={40}
                  height={40}
                  className="rounded-full w-10 h-10"
                />
                <div>
                  <h2 className="font-medium">{selectedCard.title}</h2>
                  <p className="text-sm text-gray-500">
                    {selectedCard.jd}
                  </p>
                </div>
              </div>
            </div>

            {/* Highlighted Message */}
            <div className="flex justify-between items-center mt-4 bg-purple-100 text-purple-700 px-4 py-2 rounded-lg">
              <div>{selectedCard.description}</div>
              <div className="space-x-3 flex">
                <button className="flex items-center bg-gray-100 px-3 py-1 rounded text-gray-600">
                  <FiEdit className="mr-1" /> Edit
                </button>
                <button className="flex items-center bg-blue-500 text-white px-3 py-1 rounded">
                  <FiSend className="mr-1" /> Approve and send
                </button>
              </div>
            </div>

            {/* Tabs */}
            <div className="px-4 mt-2 border-b rounded-md shadow-sm">
              <div className="flex space-x-6">
                <button
                  onClick={() => setActiveTab("Engage")}
                  className={`pb-2 text-gray-600 ${
                    activeTab === "Engage"
                      ? "border-b-2 border-blue-500 text-blue-600 font-medium"
                      : ""
                  }`}
                >
                  Engage
                </button>
                <button
                  onClick={() => setActiveTab("Search")}
                  className={`pb-2 text-gray-600 ${
                    activeTab === "Search"
                      ? "border-b-2 border-blue-500 text-blue-600 font-medium"
                      : ""
                  }`}
                >
                  Search
                </button>
              </div>
            </div>

            {/* Dynamic Content */}
            <div className="mt-1">
              {activeTab === "Engage" && (
                <>
                  {/* Key Information */}
                  <div className="bg-white py-2 px-4 rounded-md shadow-xl">
                    <div className="bg-gray-50 p-4 rounded-md shadow-sm">
                      <h3 className="text-lg font-semibold">
                        Why I picked this lead
                      </h3>
                      <ul className="list-disc list-inside mt-2 text-gray-700 px-3">
                        {selectedCard.whyPicked.map((reason, index) => (
                          <li key={index}>{reason}</li>
                        ))}
                      </ul>
                    
                      <div className="flex items-center gap-4 mt-4">
                        <div className="text-start bg-white rounded-lg px-3 py-2 shadow-md">
                          <p className="text-sm text-gray-500">
                            Decision maker
                          </p>
                          <p className="font-semibold text-purple-500">
                            Yes
                          </p>
                        </div>
                        <div className="text-start bg-white rounded-lg px-3 py-2 shadow-md">
                          <p className="text-sm text-gray-500">
                            Potential deal value
                          </p>
                          <p className="font-semibold text-purple-500">
                            $1M
                          </p>
                        </div>
                        <div className="text-start bg-white rounded-lg px-3 py-2 shadow-md">
                          <p className="text-sm text-gray-500">Intent</p>
                          <p className="font-semibold text-purple-500">High</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-between items-center py-2">
                      <div className="flex gap-1 items-center">
                        <p className="bg-white border p-1 text-sm">1</p>
                        <p className="bg-white border p-1 text-sm">D365</p>
                        <p className="bg-white border p-1 text-sm">+2</p>
                      </div>

                      <div className="flex gap-3 items-center">
                        <p className="bg-white border  p-1 text-sm">
                          AI generated content may be incorrect
                        </p>
                        <p>
                          <FiThumbsUp />
                        </p>
                        <p>
                          <FiThumbsDown />
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* About Section */}
                  <div className="mt-4 bg-white rounded-lg shadow-xl px-6 py-2">
                    <h3 className="text-lg font-semibold mb-2">
                      About {selectedCard.title}
                    </h3>
                    <p className="text-gray-600 text-xs leading-relaxed">
                      {selectedCard.about}
                    </p>
                  </div>
                </>
              )}
              {activeTab === "Search" && (
                <div className="text-gray-500 italic">
                  Search functionality is under development.
                </div>
              )}
            </div>
            <div className="flex justify-between items-center pt-4">
              <div className="flex items-cenetr gap-4">
                <p>Showing 1 0f 9</p>
                <p className="text-blue-600">Show all</p>
              </div>
              <div className="flex items-cenetr gap-4">
                <p>
                  <FiThumbsUp />
                </p>
                <p>
                  <FiThumbsDown />
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default KeyActivities;

