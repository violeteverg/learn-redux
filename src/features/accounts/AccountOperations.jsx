import { useState } from "react";

export default function AccountOperations() {
  const [depositAmount, setDepositAmount] = useState("");
  const [withdrawalAmount, setWithdrawalAmount] = useState("");
  const [loanAmount, setLoanAmount] = useState("");
  const [loanPurpose, setLoanPurpose] = useState("");
  const [currency, setCurrency] = useState("USD");

  function handleDeposit() {}

  function handleWithdrawal() {}

  function handleRequestLoan() {}

  function handlePayLoan() {}

  return (
    <div>
      <h2>Your account operations</h2>
      <div className="bg-blue-200 p-8 rounded-lg ">
        <div className="px-[8px]">
          <label className="text-xl">Deposit</label>
          <input
            className="mx-2"
            type="number"
            value={depositAmount}
            onChange={(e) => setDepositAmount(+e.target.value)}
          />
          <select
            className="mr-2"
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
          >
            <option value="USD">US Dollar</option>
            <option value="EUR">Euro</option>
            <option value="GBP">British Pound</option>
          </select>

          <button
            onClick={handleDeposit}
            className="px-[6px] py-[2px] rounded-md bg-blue-500"
          >
            Deposit {depositAmount}
          </button>
        </div>

        <div className="px-[8px] my-2">
          <label className="text-xl">Withdraw</label>
          <input
            className="mx-2"
            type="number"
            value={withdrawalAmount}
            onChange={(e) => setWithdrawalAmount(+e.target.value)}
          />
          <button
            onClick={handleWithdrawal}
            className="px-[6px] py-[2px] rounded-md bg-blue-500"
          >
            Withdraw {withdrawalAmount}
          </button>
        </div>

        <div className="px-[8px] my-2">
          <label className="text-xl">Request loan</label>
          <input
            className="mx-2"
            type="number"
            value={loanAmount}
            onChange={(e) => setLoanAmount(+e.target.value)}
            placeholder="Loan amount"
          />
          <input
            className="mr-2"
            value={loanPurpose}
            onChange={(e) => setLoanPurpose(e.target.value)}
            placeholder="Loan purpose"
          />
          <button
            onClick={handleRequestLoan}
            className="px-[6px] py-[2px] rounded-md bg-blue-500"
          >
            Request loan
          </button>
        </div>

        <div className="my-2">
          <span className="text-xl mx-2">Pay back $X</span>
          <button
            onClick={handlePayLoan}
            className="px-[6px] py-[2px] rounded-md bg-blue-500"
          >
            Pay loan
          </button>
        </div>
      </div>
    </div>
  );
}
