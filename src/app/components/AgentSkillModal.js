import React from "react";

const AgentSkillModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
      {/* <div className="bg-white rounded-lg p-6 py-16 w-full max-w-md"> */}
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-3xl w-full">
        <p className="flex items-cenetr justify-end pb-8" onClick={onClose}>
          X
        </p>
        <h2 className="text-xl font-semibold mb-4">Agent skill</h2>

        {/* Skills Content */}
        <div className="mb-10 space-y-2 text-gray-700 bg-white rounded-lg shadow-xl px-6 py-6 text-md">
          <p className="text-gray-600 mb-3">
            Check if on-hand inventory will allow all sales orders to ship
            without delay.
          </p>
          <p className="leading-10">
            When{" "}
            <span className="text-blue-700 bg-blue-100 py-1 px-2 rounded-md">
              any vendor
            </span>{" "}
            sends an email with changes to
            <span className="text-blue-700 bg-blue-100 py-1 px-2 rounded-md">
              confirmed purchase orders
            </span>
            , check if the resulting{" "}
            <span className="text-blue-700 bg-blue-100 py-1 px-2 rounded-md">
              on-hand inventory
            </span>{" "}
            will allow{" "}
            <span className="text-blue-700 bg-blue-100 py-1 px-2 rounded-md">
              all sales orders
            </span>{" "}
            to{" "}
            <span className="text-blue-700 bg-blue-100 py-1 px-2 rounded-md">
              ship without delay
            </span>
            . If so,{" "}
            <span className="text-blue-700 bg-blue-100 py-1 px-2 rounded-md">
              update the purchase order
            </span>{" "}
            to reflect the change.
          </p>
        </div>

        {/* Email Access */}
        <h3 className="font-medium text-xl mb-2">Enable email access</h3>
        <h3 className="text-sm mb-2">
          Allow the agent to access inboxex to read mail from known vendors
        </h3>
        <div className="flex items-center space-x-2 pb-8">
          <input
            type="email"
            value="purchasing@contoso.com"
            readOnly
            className="border p-2 rounded w-5/6"
          />
          <button className="bg-blue-500 text-white px-2 py-3 rounded w-1/6 text-sm">
            Allow access
          </button>
        </div>

        {/* Close Button */}
        <div className="mt-4 flex gap-2 justify-end">
          <button
            onClick={onClose}
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded"
          >
            Activate
          </button>
          <button
            onClick={onClose}
            className="bg-gray-50 border text-gray-700 px-4 py-2 rounded"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default AgentSkillModal;
