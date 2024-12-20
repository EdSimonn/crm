"use client";

import React from "react";
import { FiMap, FiMessageCircle,FiMessageSquare, FiPhone } from "react-icons/fi";

const VerticalIcons = () => {
    const icons = [
        { icon: FiMap, onClick: () => console.log("Home clicked") },
        { icon: FiMessageCircle, onClick: () => console.log("Notifications clicked") },
        { icon: FiPhone, onClick: () => console.log("Settings clicked") },
        { icon: FiMessageSquare, onClick: () => console.log("Profile clicked") },
      ];
    
      return (
        <div className="top-20 md:sticky fixed right-4 flex flex-col items-center space-y-7 p-3 pt-7 bg-gray-50">
          {icons.map((item, index) => {
            const Icon = item.icon;
            return (
              <button
                key={index}
                className=""
                onClick={item.onClick}
              >
                <Icon size={16} className="text-gray-600 hover:text-blue-700" />
              </button>
            );
          })}
        </div>
      );
    };
export default VerticalIcons
