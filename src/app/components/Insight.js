import React from "react";
import { FiCoffee, FiBriefcase } from "react-icons/fi";
import GoalProgress from "./GoalProgress";
import KeyActivities from "./KeyActivities";

const Insight = () => {
    return (
        <div className="bg-white shadow-lg rounded-md p-6">
          <GoalProgress />
    
          {/* Bottom Section: 70-30 Split */}
          <KeyActivities />
        </div>
      );
    };

export default Insight