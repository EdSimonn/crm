"use client";

import React, { useState } from "react";
import {
  FiBarChart2,
  FiEye,
  FiPlus,
  FiRefreshCw,
  FiUsers,
  FiEdit3,
  FiFilter,
  FiSettings,
  FiTrash,
} from "react-icons/fi";

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
        <button className="flex items-center hover:text-blue-600">
          <FiBarChart2 className="mr-1" size={14} />
          <span className="hidden sm:inline">Show chart</span>
        </button>
        <button className="flex items-center hover:text-blue-600">
          <FiEye className="mr-1" size={14} />
          <span className="hidden sm:inline">Focused view</span>
        </button>
        <button className="flex items-center hover:text-blue-600">
          <FiPlus className="mr-1" size={14} />
          <span className="hidden sm:inline">New</span>
        </button>
        <button className="flex items-center hover:text-blue-600">
          <FiRefreshCw className="mr-1" size={14} />
          <span className="hidden sm:inline">Refresh</span>
        </button>
        <button className="flex items-center hover:text-blue-600">
          <FiUsers className="mr-1" size={14} />
          <span className="hidden sm:inline">Collaborate</span>
        </button>
        <button className="flex items-center hover:text-blue-600">
          <FiTrash className="mr-1" size={14} />
          <span className="hidden sm:inline">Delete</span>
        </button>
        <p>+</p>
        <p>:</p>
        <button className="flex items-center hover:text-blue-600 border p-2">
          <FiFilter className="mr-1" size={14} />
          <span className="hidden sm:inline">Smart data</span>
        </button>
        <button className="flex items-center hover:text-blue-600 border p-2">
          <FiEdit3 className="mr-1" size={14} />
          <span className="hidden sm:inline">Edit filters</span>
        </button>
        <button className="flex items-center hover:text-blue-600 border p-2">
          <FiSettings className="mr-1" size={14} />
          <span className="hidden sm:inline">Edit columns</span>
        </button>
        <button className="flex items-center text-white p-2 bg-blue-700 rounded-md">
          <FiEdit3 className="mr-1" size={14} />
        </button>
      </div>
    </div>
  );
};

export default TopActions;
