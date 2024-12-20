"use client";

import React, { useState } from "react";
import { menuItems } from "../data";
import { FiMenu } from "react-icons/fi";

const Sidebar = ({ onToggle, onAgentSkillClick }) => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
    onToggle && onToggle(!collapsed);
  };

  return (
    <div
      className={`h-screen bg-gray-100 shadow-lg fixed transition-all duration-300 ${
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
              className="flex items-center p-2 hover:bg-white cursor-pointer group relative"
              onClick={
                item.onClick === "onAgentSkillClick" ? onAgentSkillClick : null
              }
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
