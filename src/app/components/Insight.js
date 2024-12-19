import React from "react";
import GoalProgress from "./GoalProgress";
import KeyActivities from "./KeyActivities";

const Insight = () => {
  return (
    <div className="bg-white shadow-lg rounded-md p-6">
      <GoalProgress />
      <KeyActivities />
    </div>
  );
};

export default Insight;
