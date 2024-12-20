"use client";

import React from "react";
import { actionItems } from "../data";

const TopActions = () => {
  return (
    <div className="flex justify-between items-center p-4 border-b bg-white shadow-sm relative">
      {/* Left Section */}
      <div className="flex items-center space-x-4">
        <p className="text-lg font-semibold hover:text-blue-600 hidden sm:block">
          My open leads
        </p>
      </div>

      {/* Right Section */}
      <div className="flex space-x-4 text-gray-600">
        {actionItems.map((action, index) => {
          const Icon = action.icon; // Dynamically assign icon
          return (
            <button
              key={index}
              className={`flex items-center hover:text-blue-600 ${
                action.className || ""
              }`}
              onClick={action.onClick}
            >
              <Icon className="mr-1 text-blue-600" size={14} />
              <span className="hidden sm:inline">{action.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default TopActions;
