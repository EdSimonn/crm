import React from "react";

const GoalProgress = () => {
  return (
    <div className="flex items-center justify-between mb-4 flex-col sm:flex-row md:gap-0 gap-5">
      {/* Hi Mona Text */}
      <div className="w-full sm:w-1/2">
        <h2 className="text-lg font-semibold">
          Hi Mona, <span className="text-blue-600">68%</span> of goal achieved
          and rest can be achieved by focusing on 20 top leads.
        </h2>
      </div>

      {/* Progress Bar */}
      <div className="w-full sm:w-1/2">
        <div className="relative h-2 bg-gray-200 rounded">
          <div
            className="absolute left-0 top-0 h-full bg-green-500 rounded-l"
            style={{ width: "40%" }}
          ></div>
          <div
            className="absolute left-[40%] top-0 h-full bg-yellow-500"
            style={{ width: "28%" }}
          ></div>
          <div
            className="absolute left-[68%] top-0 h-full bg-purple-500"
            style={{ width: "12%" }}
          ></div>
          <div
            className="absolute left-[80%] top-0 h-full bg-orange-500 rounded-r"
            style={{ width: "10%" }}
          ></div>
        </div>
        <div className="flex justify-between text-xs mt-2 text-gray-600">
          <span>Won $18m</span>
          <span>Committed $8m</span>
          <span>Best case $7m</span>
          <span>Qualified $3m</span>
          <span>Leads $7m</span>
          <span className="font-semibold">Target $45 million</span>
        </div>
      </div>
    </div>
  );
};

export default GoalProgress;
