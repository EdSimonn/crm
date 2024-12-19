// SearchBar.js
import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { leadsData } from "../data";  // Import leadsData

const SearchBar = ({ onSearch, placeholder = "Search..." }) => {
  const [search, setSearch] = useState("");
  const [filteredLeads, setFilteredLeads] = useState(leadsData);  // Initially, all leads are visible

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearch(value);
    
    // Perform filtering on the leads data
    const filtered = leadsData.filter(
      (lead) =>
        lead.name.toLowerCase().includes(value.toLowerCase()) ||
        lead.topic.toLowerCase().includes(value.toLowerCase()) ||
        lead.status.toLowerCase().includes(value.toLowerCase()) ||
        lead.createdOn.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredLeads(filtered);
    onSearch(filtered);  // Pass filtered leads back to the parent
  };

  return (
    <div className="flex items-center border rounded-md bg-white p-2 shadow-sm mb-4">
      <FiSearch size={20} className="text-gray-400" />
      <input
        type="text"
        value={search}
        onChange={handleSearchChange}
        placeholder={placeholder}
        className="focus:outline-none px-2"
      />
    </div>
  );
};

export default SearchBar;



// import React, { useState } from "react";
// import { FiSearch } from "react-icons/fi";

// const SearchBar = ({ onSearch, placeholder = "Search..." }) => {
//   const [search, setSearch] = useState("");

//   const handleSearchChange = (e) => {
//     const value = e.target.value;
//     setSearch(value);
//     onSearch(value); // Pass the search term back to the parent component.
//   };

//   return (
//     <div className="flex items-center border rounded-md bg-white p-2 shadow-sm mb-4">
//       <FiSearch size={20} className="text-gray-400" />
//       <input
//         type="text"
//         value={search}
//         onChange={handleSearchChange}
//         placeholder={placeholder}
//         className="w-full focus:outline-none px-2"
//       />
//     </div>
//   );
// };

// export default SearchBar;


// const SearchBar = () => {
//     return (
//       <div className="flex items-center border rounded-md bg-white p-2 shadow-sm">
//         <input
//           type="text"
//           placeholder="Search with Copilot"
//           className="w-full focus:outline-none px-2"
//         />
//         <button className="bg-indigo-600 text-white px-3 py-1 rounded hover:bg-indigo-700">
//           Go
//         </button>
//       </div>
//     );
//   };
  
//   export default SearchBar;
  
  

// const SearchBar = () => {
//   return (
//     <div className="flex items-center border border-gray-300 rounded-lg p-2 bg-white shadow-sm">
//       <input
//         type="text"
//         placeholder="Sort, filter, and search with Copilot"
//         className="w-full focus:outline-none"
//       />
//       <button className="ml-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">
//         Copilot
//       </button>
//     </div>
//   );
// };

// export default SearchBar;
