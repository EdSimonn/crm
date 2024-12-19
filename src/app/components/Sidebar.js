'use client'

import React, { useState } from "react";
import {
  FiMenu,
  FiHome,
  FiClock,
  FiStar,
  FiBarChart2,
  FiUsers,
  FiBriefcase,
  FiFileText,
  FiShoppingCart,
  FiTrendingUp,
  FiTool,
} from "react-icons/fi";

const Sidebar = ({ onToggle, onAgentSkillClick }) => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
    onToggle && onToggle(!collapsed);
  };

  return (
    <div
      className={`h-screen bg-white shadow-lg fixed transition-all duration-300 ${
        collapsed ? "w-16" : "w-64"
      }`}
    >
      {/* Hamburger Menu */}
      <div className="p-2 flex items-center">
        <button onClick={toggleSidebar} className="text-gray-600">
          <FiMenu size={24} />
        </button>
      </div>

      {/* Sidebar Items */}
      <ul
        className="mt-2 text-sm overflow-y-auto h-[calc(100%-3rem)]"
        style={{
          scrollbarWidth: "none", // For Firefox
          msOverflowStyle: "none", // For IE and Edge
        }}
      >
        {/* Hide scrollbar for all browsers */}
        <style>
          {`
            ul::-webkit-scrollbar {
              display: none; /* For Chrome, Safari, and Opera */
            }
          `}
        </style>

        {/* Main Sections */}
        <li className="flex items-center p-2 hover:bg-gray-100 cursor-pointer">
          <FiHome size={18} />
          {!collapsed && <span className="ml-2">Home</span>}
        </li>
        <li className="flex items-center p-2 hover:bg-gray-100 cursor-pointer">
          <FiClock size={18} />
          {!collapsed && <span className="ml-2">Recent</span>}
        </li>
        <li className="flex items-center p-2 hover:bg-gray-100 cursor-pointer">
          <FiStar size={18} />
          {!collapsed && <span className="ml-2">Pinned</span>}
        </li>
        <li
          className="flex items-center p-2 hover:bg-gray-100 cursor-pointer"
          onClick={onAgentSkillClick}
        >
          <FiTool size={18} />
          {!collapsed && <span className="ml-2">Agent Skill</span>}
        </li>

        {/* My Work */}
        {!collapsed && (
          <li className="mt-2 text-gray-500 uppercase text-xs px-2">My Work</li>
        )}
        <li className="flex items-center p-2 hover:bg-gray-100 cursor-pointer">
          <FiBarChart2 size={18} />
          {!collapsed && <span className="ml-2">Sales Accelerator</span>}
        </li>
        <li className="flex items-center p-2 hover:bg-gray-100 cursor-pointer">
          <FiBriefcase size={18} />
          {!collapsed && <span className="ml-2">Dashboards</span>}
        </li>
        <li className="flex items-center p-2 hover:bg-gray-100 cursor-pointer">
          <FiFileText size={18} />
          {!collapsed && <span className="ml-2">Activities</span>}
        </li>

        {/* My Work */}
        {!collapsed && (
          <li className="mt-2 text-gray-500 uppercase text-xs px-2">My Work</li>
        )}
        <li className="flex items-center p-2 hover:bg-gray-100 cursor-pointer">
          <FiBarChart2 size={18} />
          {!collapsed && <span className="ml-2">Sales Accelerator</span>}
        </li>
        <li className="flex items-center p-2 hover:bg-gray-100 cursor-pointer">
          <FiBriefcase size={18} />
          {!collapsed && <span className="ml-2">Dashboards</span>}
        </li>
        <li className="flex items-center p-2 hover:bg-gray-100 cursor-pointer">
          <FiFileText size={18} />
          {!collapsed && <span className="ml-2">Activities</span>}
        </li>

        {/* Customers */}
        {!collapsed && (
          <li className="mt-2 text-gray-500 uppercase text-xs px-2">Customers</li>
        )}
        <li className="flex items-center p-2 hover:bg-gray-100 cursor-pointer">
          <FiUsers size={18} />
          {!collapsed && <span className="ml-2">Accounts</span>}
        </li>
        <li className="flex items-center p-2 hover:bg-gray-100 cursor-pointer">
          <FiUsers size={18} />
          {!collapsed && <span className="ml-2">Contacts</span>}
        </li>

        {/* Sales */}
        {!collapsed && (
          <li className="mt-2 text-gray-500 uppercase text-xs px-2">Sales</li>
        )}
        <li className="flex items-center p-2 hover:bg-gray-100 cursor-pointer">
          <FiUsers size={18} />
          {!collapsed && <span className="ml-2">Leads</span>}
        </li>
        <li className="flex items-center p-2 hover:bg-gray-100 cursor-pointer">
          <FiBriefcase size={18} />
          {!collapsed && <span className="ml-2">Opportunities</span>}
        </li>
        <li className="flex items-center p-2 hover:bg-gray-100 cursor-pointer">
          <FiUsers size={18} />
          {!collapsed && <span className="ml-2">Competitors</span>}
        </li>

        {/* Collateral */}
        {!collapsed && (
          <li className="mt-2 text-gray-500 uppercase text-xs px-2">Collateral</li>
        )}
        <li className="flex items-center p-2 hover:bg-gray-100 cursor-pointer">
          <FiFileText size={18} />
          {!collapsed && <span className="ml-2">Quotes</span>}
        </li>
        <li className="flex items-center p-2 hover:bg-gray-100 cursor-pointer">
          <FiShoppingCart size={18} />
          {!collapsed && <span className="ml-2">Orders</span>}
        </li>
        <li className="flex items-center p-2 hover:bg-gray-100 cursor-pointer">
          <FiFileText size={18} />
          {!collapsed && <span className="ml-2">Invoices</span>}
        </li>
        <li className="flex items-center p-2 hover:bg-gray-100 cursor-pointer">
          <FiFileText size={18} />
          {!collapsed && <span className="ml-2">Products</span>}
        </li>
        <li className="flex items-center p-2 hover:bg-gray-100 cursor-pointer">
          <FiFileText size={18} />
          {!collapsed && <span className="ml-2">Sales Literature</span>}
        </li>

        {/* Marketing */}
        {!collapsed && (
          <li className="mt-2 text-gray-500 uppercase text-xs px-2">Marketing</li>
        )}
        <li className="flex items-center p-2 hover:bg-gray-100 cursor-pointer">
          <FiUsers size={18} />
          {!collapsed && <span className="ml-2">Marketing Lists</span>}
        </li>
        <li className="flex items-center p-2 hover:bg-gray-100 cursor-pointer">
          <FiUsers size={18} />
          {!collapsed && <span className="ml-2">Quick Campaigns</span>}
        </li>

        {/* Performance */}
        {!collapsed && (
          <li className="mt-2 text-gray-500 uppercase text-xs px-2">Performance</li>
        )}
        <li className="flex items-center p-2 hover:bg-gray-100 cursor-pointer">
          <FiTrendingUp size={18} />
          {!collapsed && <span className="ml-2">Sales</span>}
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;






// import React, { useState } from "react";
// import {
//   FiMenu,
//   FiHome,
//   FiClock,
//   FiStar,
//   FiBarChart2,
//   FiUsers,
//   FiBriefcase,
//   FiFileText,
//   FiShoppingCart,
//   FiTrendingUp,
//   FiTool
// } from "react-icons/fi";

// const Sidebar = ({ onToggle, onAgentSkillClick }) => {
//   const [collapsed, setCollapsed] = useState(false);

//   const toggleSidebar = () => {
//     setCollapsed(!collapsed);
//     onToggle && onToggle(!collapsed);
//   };

//   return (
//     <div
//       className={`h-screen bg-white shadow-lg fixed transition-all duration-300 ${
//         collapsed ? "w-16" : "w-64"
//       }`}
//     >
//       {/* Hamburger Menu */}
//       <div className="p-2 flex items-center">
//         <button onClick={toggleSidebar} className="text-gray-600">
//           <FiMenu size={24} />
//         </button>
//       </div>

//       {/* Sidebar Items */}
//       <ul
//         className="mt-2 text-sm overflow-y-auto h-[calc(100%-3rem)]"
//         style={{
//           scrollbarWidth: "none", // For Firefox
//           msOverflowStyle: "none", // For IE and Edge
//         }}
//       >
//         {/* Hide scrollbar for all browsers */}
//         <style>
//           {`
//             ul::-webkit-scrollbar {
//               display: none; /* For Chrome, Safari, and Opera */
//             }
//           `}
//         </style>

//         {/* Main Sections */}
//         <li className="flex items-center p-2 hover:bg-gray-100 cursor-pointer">
//           <FiHome size={18} />
//           {!collapsed && <span className="ml-2">Home</span>}
//         </li>
//         <li className="flex items-center p-2 hover:bg-gray-100 cursor-pointer">
//           <FiClock size={18} />
//           {!collapsed && <span className="ml-2">Recent</span>}
//         </li>
//         <li className="flex items-center p-2 hover:bg-gray-100 cursor-pointer">
//           <FiStar size={18} />
//           {!collapsed && <span className="ml-2">Pinned</span>}
//         </li>
//    <li className="flex items-center p-2 hover:bg-gray-100 cursor-pointer"
//           onClick={onAgentSkillClick}
//         >
//           <FiTool size={18} />
//           {!collapsed && <span className="ml-2">Agent Skill</span>}
//         </li>

//         {/* My Work */}
//         <li className="mt-2 text-gray-500 uppercase text-xs px-2">My Work</li>
//         <li className="flex items-center p-2 hover:bg-gray-100 cursor-pointer">
//           <FiBarChart2 size={18} />
//           {!collapsed && <span className="ml-2">Sales Accelerator</span>}
//         </li>
//         <li className="flex items-center p-2 hover:bg-gray-100 cursor-pointer">
//           <FiBriefcase size={18} />
//           {!collapsed && <span className="ml-2">Dashboards</span>}
//         </li>
//         <li className="flex items-center p-2 hover:bg-gray-100 cursor-pointer">
//           <FiFileText size={18} />
//           {!collapsed && <span className="ml-2">Activities</span>}
//         </li>

//         {/* Customers */}
//         <li className="mt-2 text-gray-500 uppercase text-xs px-2">Customers</li>
//         <li className="flex items-center p-2 hover:bg-gray-100 cursor-pointer">
//           <FiUsers size={18} />
//           {!collapsed && <span className="ml-2">Accounts</span>}
//         </li>
//         <li className="flex items-center p-2 hover:bg-gray-100 cursor-pointer">
//           <FiUsers size={18} />
//           {!collapsed && <span className="ml-2">Contacts</span>}
//         </li>

//         {/* Sales */}
//         <li className="mt-2 text-gray-500 uppercase text-xs px-2">Sales</li>
//         <li className="flex items-center p-2 hover:bg-gray-100 cursor-pointer">
//           <FiUsers size={18} />
//           {!collapsed && <span className="ml-2">Leads</span>}
//         </li>
//         <li className="flex items-center p-2 hover:bg-gray-100 cursor-pointer">
//           <FiBriefcase size={18} />
//           {!collapsed && <span className="ml-2">Opportunities</span>}
//         </li>
//         <li className="flex items-center p-2 hover:bg-gray-100 cursor-pointer">
//           <FiUsers size={18} />
//           {!collapsed && <span className="ml-2">Competitors</span>}
//         </li>

//         {/* Collateral */}
//         <li className="mt-2 text-gray-500 uppercase text-xs px-2">Collateral</li>
//         <li className="flex items-center p-2 hover:bg-gray-100 cursor-pointer">
//           <FiFileText size={18} />
//           {!collapsed && <span className="ml-2">Quotes</span>}
//         </li>
//         <li className="flex items-center p-2 hover:bg-gray-100 cursor-pointer">
//           <FiShoppingCart size={18} />
//           {!collapsed && <span className="ml-2">Orders</span>}
//         </li>
//         <li className="flex items-center p-2 hover:bg-gray-100 cursor-pointer">
//           <FiFileText size={18} />
//           {!collapsed && <span className="ml-2">Invoices</span>}
//         </li>
//         <li className="flex items-center p-2 hover:bg-gray-100 cursor-pointer">
//           <FiFileText size={18} />
//           {!collapsed && <span className="ml-2">Products</span>}
//         </li>
//         <li className="flex items-center p-2 hover:bg-gray-100 cursor-pointer">
//           <FiFileText size={18} />
//           {!collapsed && <span className="ml-2">Sales Literature</span>}
//         </li>

//         {/* Marketing */}
//         <li className="mt-2 text-gray-500 uppercase text-xs px-2">Marketing</li>
//         <li className="flex items-center p-2 hover:bg-gray-100 cursor-pointer">
//           <FiUsers size={18} />
//           {!collapsed && <span className="ml-2">Marketing Lists</span>}
//         </li>
//         <li className="flex items-center p-2 hover:bg-gray-100 cursor-pointer">
//           <FiUsers size={18} />
//           {!collapsed && <span className="ml-2">Quick Campaigns</span>}
//         </li>

//         {/* Performance */}
//         <li className="mt-2 text-gray-500 uppercase text-xs px-2">Performance</li>
//         <li className="flex items-center p-2 hover:bg-gray-100 cursor-pointer">
//           <FiTrendingUp size={18} />
//           {!collapsed && <span className="ml-2">Sales</span>}
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default Sidebar;


// "use client";

// import React, { useState } from "react";
// import { FiMenu, FiHome, FiUsers, FiTrendingUp } from "react-icons/fi";

// const Sidebar = ({ onToggle }) => {
//   const [collapsed, setCollapsed] = useState(false);

//   const toggleSidebar = () => {
//     setCollapsed(!collapsed);
//     onToggle(!collapsed); // Notify parent about collapse state
//   };

//   return (
//     // <div
//     //   className={`h-screen bg-white shadow-lg fixed ${
//     //     collapsed ? "w-16" : "w-64"
//     //   } `}
//     // >
//             <div
//       className={`h-screen bg-white shadow-lg fixed transition-all duration-300 ${
//         collapsed ? "w-16" : "w-64"
//       } transition-all duration-300`}
//     >
//       {/* Hamburger Menu */}
//       <div className="p-4 flex items-center">
//         <button onClick={toggleSidebar} className="text-gray-600">
//           <FiMenu size={24} />
//         </button>
//       </div>

//       {/* Sidebar Items */}
//       <ul className="mt-4">
//         <li className="flex items-center p-4 hover:bg-gray-100 cursor-pointer">
//           <FiHome size={20} />
//           {!collapsed && <span className="ml-4">Home</span>}
//         </li>
//         <li className="flex items-center p-4 hover:bg-gray-100 cursor-pointer">
//           <FiUsers size={20} />
//           {!collapsed && <span className="ml-4">Leads</span>}
//         </li>
//         <li className="flex items-center p-4 hover:bg-gray-100 cursor-pointer">
//           <FiTrendingUp size={20} />
//           {!collapsed && <span className="ml-4">Reports</span>}
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default Sidebar;

// import { useState } from "react";
// import { FiMenu, FiHome, FiUsers, FiTrendingUp } from "react-icons/fi";

// const Sidebar = () => {
//   const [collapsed, setCollapsed] = useState(false);

//   const toggleSidebar = () => setCollapsed(!collapsed);

//   return (
//     <div
//       className={`h-screen bg-white shadow-lg fixed ${
//         collapsed ? "w-16" : "w-64"
//       } transition-width duration-300`}
//     >
//       {/* Hamburger Menu */}
//       <div className="p-4 flex items-center">
//         <button onClick={toggleSidebar} className="text-gray-600">
//           <FiMenu size={24} />
//         </button>
//       </div>

//       {/* Sidebar Items */}
//       <ul className="mt-4">
//         <li className="flex items-center p-4 hover:bg-gray-100 cursor-pointer">
//           <FiHome size={20} />
//           {!collapsed && <span className="ml-4">Home</span>}
//         </li>
//         <li className="flex items-center p-4 hover:bg-gray-100 cursor-pointer">
//           <FiUsers size={20} />
//           {!collapsed && <span className="ml-4">Leads</span>}
//         </li>
//         <li className="flex items-center p-4 hover:bg-gray-100 cursor-pointer">
//           <FiTrendingUp size={20} />
//           {!collapsed && <span className="ml-4">Opportunities</span>}
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default Sidebar;

// import React from "react";
// const Sidebar = () => {
//   return (
//     <div className="w-64 h-screen bg-white shadow-lg fixed">
//       <div className="p-4 text-2xl font-bold">Dynamics 365</div>
//       <ul className="mt-6">
//         {["Home", "Recent", "Pinned"].map((item) => (
//           <li key={item} className="p-4 hover:bg-gray-100 cursor-pointer">
//             {item}
//           </li>
//         ))}
//       </ul>
//       <div className="mt-8">
//         <h3 className="px-4 text-sm font-semibold text-gray-500">Sales</h3>
//         {["Leads", "Opportunities", "Competitors"].map((item) => (
//           <li
//             key={item}
//             className="p-4 hover:bg-gray-100 cursor-pointer list-none"
//           >
//             {item}
//           </li>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Sidebar;
