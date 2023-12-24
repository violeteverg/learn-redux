import { useState } from "react";

export default function CreateCustomers() {
  const [fullName, setFullName] = useState("");
  const [nationalId, setNationalId] = useState("");

  function handleClick() {}

  return (
    <div className="w-86">
      <h2>Create new customer</h2>
      <div className="bg-blue-200 p-8 rounded-lg">
        <div className="mx-2 px-[6px]">
          <label className="text-xl">Customer full name</label>
          <input
            className="ml-2"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>
        <div className="mx-2 px-[6px] py-[14px]">
          <label className="text-xl">National ID</label>
          <input
            className="ml-2"
            value={nationalId}
            onChange={(e) => setNationalId(e.target.value)}
          />
        </div>
        <button
          onClick={handleClick}
          className="mx-2 px-[6px] py-[8px] rounded-md bg-blue-500"
        >
          Create new customer
        </button>
      </div>
    </div>
  );
}
