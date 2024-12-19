'use client'

import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import TopActions from "./components/TopActions";
// import SearchBar from "./components/SearchBar";
import Table from "./components/Table";
import Insight from "./components/Insight";
import AgentSkillModal from "./components/AgentSkillModal";

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
        <div className=''>
        <TopActions />

        </div>
        <Insight />
        {/* <SearchBar /> */}
        <Table />
      </div>

      {/* Agent Skill Modal */}
      {showAgentSkillModal && (
        <AgentSkillModal onClose={() => setShowAgentSkillModal(false)} />
      )}
    </div>
  );
};

export default MainLayout;



// 'use client'

// import React, { useState } from "react";
// import Sidebar from "./components/Sidebar";
// import TopActions from "./components/TopActions";
// // import GoalProgress from "./components/GoalProgress";
// // import KeyActivities from "./components/KeyActivities";
// import SearchBar from "./components/SearchBar";
// import Table from "./components/Table";
// import Insight from "./components/Insight";

// const MainLayout = () => {
//   const [isCollapsed, setIsCollapsed] = useState(false);

//   return (
//     <div className="flex">
//       {/* Sidebar */}
//       <Sidebar onToggle={(collapsed) => setIsCollapsed(collapsed)} />

//       {/* Main Content */}
//       <div
//         className={`p-6 w-full transition-all duration-300 ${
//           isCollapsed ? "ml-16" : "ml-64"
//         }`}
//       >
//         <TopActions />
//         <Insight/>
//         <SearchBar />
//         <Table/>
//       </div>
//     </div>
//   );
// };

// export default MainLayout;

// import GoalProgress from "./components/GoalProgress";
// import SearchBar from "./components/SearchBar";
// import Sidebar from "./components/Sidebar";
// import Table from "./components/Table";

// export default function Home() {
//   return (
//     <div className="flex">
//       {/* Sidebar */}
//       <Sidebar />

//       {/* Main Content */}
//       <div className="ml-64 p-8 w-full">
//         <GoalProgress />
//         <div className="mt-6">
//           <SearchBar />
//         </div>
//         <Table />
//       </div>
//     </div>
//   );
// }


// help me code this UI i want the top bar with all the icons and name beside it and i want the my open lead part on the left side of the top bar to show the other part that has hi mona, other activities etc 



