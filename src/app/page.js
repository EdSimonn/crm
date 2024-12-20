"use client";

import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import TopActions from "./components/TopActions";
import Table from "./components/Table";
import Insight from "./components/Insight";
import AgentSkillModal from "./components/AgentSkillModal";
import VerticalIcons from "./components/VerticalIcons";

const MainLayout = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [showAgentSkillModal, setShowAgentSkillModal] = useState(false);

  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar
        onToggle={(collapsed) => setIsCollapsed(collapsed)}
        onAgentSkillClick={() => setShowAgentSkillModal(true)}
      />

      {/* Main Content */}
      <div
        className={`p-6 w-full transition-all duration-300 ${
          isCollapsed ? "ml-16" : "ml-64"
        }`}
      >
        {/* Top Bar */}
        <TopActions />

        {/* Main Sections */}
        <Insight />
        <Table />
      </div>

      {/* Right Vertical Icons */}
      <VerticalIcons />

      {/* Agent Skill Modal */}
      {showAgentSkillModal && (
        <AgentSkillModal onClose={() => setShowAgentSkillModal(false)} />
      )}
    </div>
  );
};

export default MainLayout;