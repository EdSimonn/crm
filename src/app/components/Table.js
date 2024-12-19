// Table.js
import React, { useState } from "react";
import SearchBar from "./SearchBar";
import { leadsData } from '../data';

const Table = () => {
  const [leads, setLeads] = useState(leadsData); 
  const [filteredLeads, setFilteredLeads] = useState(leadsData); 

  const handleSearchResults = (filteredLeads) => {
    setFilteredLeads(filteredLeads);
  };

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden mt-4">
      <SearchBar onSearch={handleSearchResults} placeholder="Sort, Filter and Search with Copilot" />

      <table className="w-full">
        <thead>
          <tr className="bg-gray-50">
            <th className="p-3 text-left">
              <input type="checkbox" className="cursor-pointer" />
            </th>
            <th className="p-3 text-left">Name</th>
            <th className="p-3 text-left">Topic</th>
            <th className="p-3 text-left">Status Reason</th>
            <th className="p-3 text-left">Created On</th>
          </tr>
        </thead>
        <tbody>
          {filteredLeads.map((lead, index) => (
            <tr key={index} className="border-b hover:bg-gray-50">
              <td className="p-3">
                <input type="checkbox" className="cursor-pointer" />
              </td>
              <td className="p-3">{lead.name}</td>
              <td className="p-3">{lead.topic}</td>
              <td className="p-3">{lead.status}</td>
              <td className="p-3">{lead.createdOn}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;



// import React, { useState } from "react";
// import SearchBar from "./SearchBar";

// const leadsData = [
//   { name: "Winford Asher", topic: "Cafe A100 for commercial use", status: "New", createdOn: "4/02/2024 12:00 PM" },
//   { name: "Josia Love", topic: "Upgrading service plan", status: "New", createdOn: "3/30/2024 7:45 AM" },
//   { name: "Harrison Curtis", topic: "Issue with throughput on EspressoMaster", status: "New", createdOn: "3/28/2024 3:30 PM" },
//   { name: "Jermaine Berrett", topic: "New roaster in distribution facility", status: "New", createdOn: "3/25/2024 11:05 AM" },
//   { name: "Gerald Stephens", topic: "Concerns on current machines", status: "New", createdOn: "3/23/2024 4:50 PM" },
//   { name: "Halle Griffiths", topic: "Expanding business", status: "New", createdOn: "3/21/2024 10:20 AM" },
//   { name: "Rachel Michael", topic: "Addressing service concerns", status: "New", createdOn: "3/19/2024 1:15 PM" },
//   { name: "Alex Baker", topic: "Premium coffee beans", status: "New", createdOn: "3/17/2024 8:00 AM" },
//   { name: "Lilly Pyles", topic: "Cafe A100 bulk rate", status: "New", createdOn: "3/13/2024 2:45 PM" },
//   { name: "Jane Reyes", topic: "Improving cost per cup", status: "New", createdOn: "3/10/2024 9:30 AM" },
// ];

// const Table = () => {
//   const [leads, setLeads] = useState(leadsData);
//   const [filteredLeads, setFilteredLeads] = useState(leadsData);

//   const handleSearch = (searchTerm) => {
//     const filtered = leads.filter(
//       (lead) =>
//         lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         lead.topic.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         lead.status.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         lead.createdOn.toLowerCase().includes(searchTerm.toLowerCase())
//     );
//     setFilteredLeads(filtered);
//   };

//   return (
//     <div className=" min-h-screen">
//       {/* Search Bar */}
//       <SearchBar onSearch={handleSearch} placeholder="Sort, filter and search with Copilot" />

//       {/* Table */}
//       <div className="bg-white shadow-md rounded-lg overflow-hidden mt-4">
//         <table className="w-full">
//           <thead>
//             <tr className="bg-gray-50">
//               <th className="p-3 text-left">
//                 <input type="checkbox" className="cursor-pointer" />
//               </th>
//               <th className="p-3 text-left">Name</th>
//               <th className="p-3 text-left">Topic</th>
//               <th className="p-3 text-left">Status Reason</th>
//               <th className="p-3 text-left">Created On</th>
//             </tr>
//           </thead>
//           <tbody>
//             {filteredLeads.map((lead, index) => (
//               <tr key={index} className="border-b hover:bg-gray-50">
//                 <td className="p-3">
//                   <input type="checkbox" className="cursor-pointer" />
//                 </td>
//                 <td className="p-3">{lead.name}</td>
//                 <td className="p-3">{lead.topic}</td>
//                 <td className="p-3">{lead.status}</td>
//                 <td className="p-3">{lead.createdOn}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default Table;


// const leads = [
//     { name: "Winford Asher", topic: "Cafe A100", status: "New", createdOn: "4/02/2024 12:00 PM" },
//     { name: "Josia Love", topic: "Upgrading plan", status: "Pending", createdOn: "3/30/2024 7:45 AM" },
//   ];
  
//   const Table = () => {
//     return (
//       <div className="bg-white shadow-md rounded-lg overflow-hidden mt-4">
//         <table className="w-full">
//           <thead>
//             <tr className="bg-gray-50">
//               <th className="p-3 text-left">Name</th>
//               <th className="p-3 text-left">Topic</th>
//               <th className="p-3 text-left">Status Reason</th>
//               <th className="p-3 text-left">Created On</th>
//             </tr>
//           </thead>
//           <tbody>
//             {leads.map((lead, index) => (
//               <tr key={index} className="border-b hover:bg-gray-50">
//                 <td className="p-3">{lead.name}</td>
//                 <td className="p-3">{lead.topic}</td>
//                 <td className="p-3">{lead.status}</td>
//                 <td className="p-3">{lead.createdOn}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     );
//   };
  
//   export default Table;
  

// const leads = [
//     { name: "Winford Asher", topic: "Cafe A100 for commercial use", createdOn: "4/02/2024 12:00 PM" },
//     { name: "Josia Love", topic: "Upgrading service plan", createdOn: "3/30/2024 7:45 AM" },
//     { name: "Harrison Curtis", topic: "Issue with throughput", createdOn: "3/28/2024 3:30 PM" },
//     // Add more dummy leads
//   ];
  
//   const Table = () => {
//     return (
//       <div className="mt-4 bg-white shadow-md rounded-lg overflow-hidden">
//         <table className="min-w-full table-fixed">
//           <thead className="bg-gray-50 border-b">
//             <tr>
//               <th className="p-3 text-left text-sm font-semibold text-gray-600">Name</th>
//               <th className="p-3 text-left text-sm font-semibold text-gray-600">Topic</th>
//               <th className="p-3 text-left text-sm font-semibold text-gray-600">Created On</th>
//             </tr>
//           </thead>
//           <tbody>
//             {leads.map((lead, idx) => (
//               <tr key={idx} className="border-b hover:bg-gray-50">
//                 <td className="p-3">{lead.name}</td>
//                 <td className="p-3">{lead.topic}</td>
//                 <td className="p-3">{lead.createdOn}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     );
//   };
  
//   export default Table;
  