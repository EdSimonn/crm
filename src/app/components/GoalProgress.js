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

// const GoalProgress = () => {
//   return (
//     <div className="bg-white p-4 shadow-md rounded-lg">
//       <h2 className="text-lg font-semibold mb-4">
//         Hi Mona, <span className="text-indigo-600">68% of goal achieved</span>{" "}
//         and rest can be achieved by focusing on 20 top leads.
//       </h2>
//       {/* Progress Bar */}
//       <div className="w-full bg-gray-200 h-4 rounded-full overflow-hidden">
//         <div className="h-full bg-green-500" style={{ width: "40%" }}></div>
//         <div className="h-full bg-yellow-400" style={{ width: "18%" }}></div>
//         <div className="h-full bg-purple-500" style={{ width: "10%" }}></div>
//       </div>
//     </div>
//   );
// };

// export default GoalProgress;

// const GoalProgress = () => {
//   return (
//     <div className="bg-white p-4 shadow-md rounded-lg">
//       <h2 className="text-lg font-semibold">
//         Hi Mona, <span className="text-indigo-600">68% of goal achieved</span>{" "}
//         and rest can be achieved by focusing on{" "}
//         <span className="font-bold">20 top leads</span>.
//       </h2>
//       <div className="flex mt-4 gap-4">
//         <div className="p-4 bg-gray-50 border rounded-md">
//           <h3 className="text-gray-700 font-medium">Engage with Jane Reyes</h3>
//           <p className="text-sm text-gray-500">
//             Jane may be interested in upgrading espresso machines for her
//             in-store coffee shops.
//           </p>
//         </div>
//         <div className="p-4 bg-gray-50 border rounded-md">
//           <h3 className="text-gray-700 font-medium">
//             Prepare for meeting with Allan
//           </h3>
//           <p className="text-sm text-gray-500">
//             Prepare for high-buying intent meeting scheduled for 2 PM.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default GoalProgress;
