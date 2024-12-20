"use client";

import React, { useState } from "react";
import { menuItems } from "../data";
import { FiMenu } from "react-icons/fi";

const Sidebar = ({ onToggle, onAgentSkillClick }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [activeItem, setActiveItem] = useState(null); // State to track active menu item

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
    onToggle && onToggle(!collapsed);
  };

  const handleMenuItemClick = (index) => {
    setActiveItem(index); // Set the clicked menu item as active
  };

  return (
    <div
      className={`h-screen bg-gray-50 fixed transition-all duration-300 ${
        collapsed ? "w-12" : "w-64"
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
        <style>
          {`
            ul::-webkit-scrollbar {
              display: none; /* For Chrome, Safari, and Opera */
            }
          `}
        </style>
        {menuItems.map((item, index) => {
          if (item.section) {
            return (
              !collapsed && (
                <li
                  key={index}
                  className="mt-2 text-gray-500 uppercase text-xs px-2"
                >
                  {item.section}
                </li>
              )
            );
          }

          const Icon = item.icon;

          return (
            <li
              key={index}
              className={`flex items-center p-2 hover:bg-white hover:border-l-2 hover:border-blue-500 cursor-pointer group relative ${
                activeItem === index ? "bg-white border-l-2 border-blue-500" : ""
              }`}
              onClick={() => {
                handleMenuItemClick(index);
                if (item.onClick === "onAgentSkillClick") {
                  onAgentSkillClick();
                }
              }}
            >
              <Icon size={18} />
              {!collapsed && <span className="ml-2">{item.label}</span>}

              {/* Tooltip */}
              {collapsed && (
                <div className="absolute left-20 top-1/2 transform -translate-y-1/2 bg-black text-white text-xs rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                  {item.label}
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;