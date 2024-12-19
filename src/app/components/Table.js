// Table.js
import React, { useState } from "react";
import SearchBar from "./SearchBar";
import { leadsData } from "../data";

const Table = () => {
  const [leads, setLeads] = useState(leadsData);
  const [filteredLeads, setFilteredLeads] = useState(leadsData);

  const handleSearchResults = (filteredLeads) => {
    setFilteredLeads(filteredLeads);
  };

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden mt-4">
      <SearchBar
        onSearch={handleSearchResults}
        placeholder="Sort, Filter and Search with Copilot"
      />

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
