// SearchBar.js
import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { leadsData } from "../data"; // Import leadsData

const SearchBar = ({ onSearch, placeholder = "Search..." }) => {
  const [search, setSearch] = useState("");
  const [filteredLeads, setFilteredLeads] = useState(leadsData);

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
    onSearch(filtered); // Pass filtered leads back to the parent
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
