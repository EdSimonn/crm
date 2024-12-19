'use client'

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
  FiTrash
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


// "hse client";

// import React, { useState } from "react";
// import {
//   FiBarChart2,
//   FiEye,
//   FiPlus,
//   FiRefreshCw,
//   FiUsers,
//   FiFilter,
//   FiEdit3,
// } from "react-icons/fi";

// const TopActions = () => {

//   return (
//     // <div className="flex justify-between items-center p-4 border-b bg-white shadow-sm relative">
//     //   {/* Left Section */}
//     //   <div className="flex items-center space-x-4">
//     //     <button
//     //       onClick={() => setShowModal(!showModal)}
//     //       className="text-lg font-semibold hover:text-blue-600"
//     //     >
//     //       My open leads
//     //     </button>
//     //   </div>

//     //   {/* Right Section */}
//     //   <div className="flex space-x-4 text-gray-600">
//     //     <button className="flex items-center hover:text-blue-600">
//     //       <FiBarChart2 className="mr-1" /> Show chart
//     //     </button>
//     //     <button className="flex items-center hover:text-blue-600">
//     //       <FiEye className="mr-1" /> Focused view
//     //     </button>
//     //     <button className="flex items-center hover:text-blue-600">
//     //       <FiPlus className="mr-1" /> New
//     //     </button>
//     //     <button className="flex items-center hover:text-blue-600">
//     //       <FiRefreshCw className="mr-1" /> Refresh
//     //     </button>
//     //     <button className="flex items-center hover:text-blue-600">
//     //       <FiUsers className="mr-1" /> Collaborate
//     //     </button>
//     //     <button className="flex items-center hover:text-blue-600">
//     //       <FiEdit3 className="mr-1" /> Edit filters
//     //     </button>
//     //   </div>

//     //   {/* Dropdown Modal */}
//     //   {showModal && (
//     //     <div className="absolute top-16 left-0 w-full">
//     //       <DropdownModal />
//     //     </div>
//     //   )}
//     // </div>
//     <div className="flex justify-between items-center p-4 border-b bg-white shadow-sm relative">
//       {/* Left Section */}
//       <div className="flex items-center space-x-4">
//         <p
//           className="text-lg font-semibold hover:text-blue-600 hidden sm:block"
//         >
//           My open leads
//         </p>
//       </div>

//       {/* Right Section */}
//       <div className="flex space-x-4 text-gray-600">
//         <button className="flex items-center hover:text-blue-600">
//           <FiBarChart2 className="mr-1" size={20} />
//           <span className="hidden sm:inline">Show chart</span>
//         </button>
//         <button className="flex items-center hover:text-blue-600">
//           <FiEye className="mr-1" size={20} />
//           <span className="hidden sm:inline">Focused view</span>
//         </button>
//         <button className="flex items-center hover:text-blue-600">
//           <FiPlus className="mr-1" size={20} />
//           <span className="hidden sm:inline">New</span>
//         </button>
//         <button className="flex items-center hover:text-blue-600">
//           <FiRefreshCw className="mr-1" size={20} />
//           <span className="hidden sm:inline">Refresh</span>
//         </button>
//         <button className="flex items-center hover:text-blue-600">
//           <FiUsers className="mr-1" size={20} />
//           <span className="hidden sm:inline">Collaborate</span>
//         </button>
//         <button className="flex items-center hover:text-blue-600">
//           <FiEdit3 className="mr-1" size={20} />
//           <span className="hidden sm:inline">Edit filters</span>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default TopActions;

// const TopActions = () => {
//   return (
//     <div className="flex justify-between items-center bg-white p-4 shadow-md rounded-lg">
//       <div className="space-x-2">
//         <button className="px-3 py-2 bg-gray-100 rounded hover:bg-gray-200">
//           Show Chart
//         </button>
//         <button className="px-3 py-2 bg-gray-100 rounded hover:bg-gray-200">
//           Focused View
//         </button>
//         <button className="px-3 py-2 bg-gray-100 rounded hover:bg-gray-200">
//           New
//         </button>
//         <button className="px-3 py-2 bg-gray-100 rounded hover:bg-gray-200">
//           Refresh
//         </button>
//         <button className="px-3 py-2 bg-gray-100 rounded hover:bg-gray-200">
//           Collaborate
//         </button>
//         <button className="px-3 py-2 bg-gray-100 rounded hover:bg-gray-200">
//           Delete
//         </button>
//       </div>
//     </div>
//   );
// };

// export default TopActions;

// import React from "react";
// import { FiBarChart2, FiEye, FiPlus, FiRefreshCw, FiUsers, FiFilter, FiEdit3 } from "react-icons/fi";

// // const TopBar = () => {
// const TopActions = () => {

//   return (
//     <div className="flex justify-between items-center p-4 border-b bg-white shadow-sm">
//       {/* Left Section */}
//       <div className="flex items-center space-x-4">
//         <h1 className="text-lg font-semibold">My open leads</h1>
//       </div>

//       {/* Right Section */}
//       <div className="flex space-x-4 text-gray-600">
//         <button className="flex items-center hover:text-blue-600">
//           <FiBarChart2 className="mr-1" /> Show chart
//         </button>
//         <button className="flex items-center hover:text-blue-600">
//           <FiEye className="mr-1" /> Focused view
//         </button>
//         <button className="flex items-center hover:text-blue-600">
//           <FiPlus className="mr-1" /> New
//         </button>
//         <button className="flex items-center hover:text-blue-600">
//           <FiRefreshCw className="mr-1" /> Refresh
//         </button>
//         <button className="flex items-center hover:text-blue-600">
//           <FiUsers className="mr-1" /> Collaborate
//         </button>
//         <button className="flex items-center hover:text-blue-600">
//           <FiEdit3 className="mr-1" /> Edit filters
//         </button>
//       </div>
//     </div>
//   );
// };
// export default TopActions;

// export default TopBar;
