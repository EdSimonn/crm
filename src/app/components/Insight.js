import React from "react";
import GoalProgress from "./GoalProgress";
import KeyActivities from "./KeyActivities";

const Insight = () => {
  return (
    <div className="bg-white shadow-xl rounded-md p-6 border-2 border-blue-600 mb-8">
      <GoalProgress />
      <KeyActivities />
    </div>
  );
};

export default Insight;
