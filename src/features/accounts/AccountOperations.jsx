// ==== ver learning ====
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deposit,
  payLoan,
  requestLoan,
  withdraw,
} from "../../redux/slices/accountSlices";

function AccountOperations() {
  const [depositAmount, setDepositAmount] = useState("");
  const [withdrawalAmount, setWithdrawalAmount] = useState("");
  const [loanAmount, setLoanAmount] = useState("");
  const [loanPurpose, setLoanPurpose] = useState("");
  const [currency, setCurrency] = useState("USD");

  const dispatch = useDispatch();
  const {
    loan: currentLoan,
    loanPurpose: currentLoanPurpose,
    balance,
    isLoading,
  } = useSelector((store) => store.account);

  console.log(balance);

  function handleDeposit() {
    if (!depositAmount) return;

    dispatch(deposit(depositAmount, currency));
    setDepositAmount("");
    setCurrency("USD");
  }

  function handleWithdrawal() {
    if (!withdrawalAmount) return;
    dispatch(withdraw(withdrawalAmount));
    setWithdrawalAmount("");
  }

  function handleRequestLoan() {
    if (!loanAmount || !loanPurpose) return;
    dispatch(requestLoan(loanAmount, loanPurpose));
    setLoanAmount("");
    setLoanPurpose("");
  }

  function handlePayLoan() {
    dispatch(payLoan());
  }

  return (
    <div className="mt-8">
      <h2 className="text-4xl">Your account operations</h2>
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
            className={`px-[6px] py-[2px] rounded-md bg-blue-500`}
            disabled={isLoading}
          >
            {isLoading ? "converting..." : `deposit`}
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

        {currentLoan > 0 && (
          <div className="my-2">
            <span className="text-xl mx-2">
              Pay back {currentLoan} {currentLoanPurpose}
            </span>
            <button
              onClick={handlePayLoan}
              className="px-[6px] py-[2px] rounded-md bg-blue-500"
            >
              Pay loan
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default AccountOperations;

// ======= ver strugling ======

// import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   deposito,
//   withdraw,
//   payloan,
//   requestLoan,
//   convertingCurrency,
//   updateBalanceAfterConversion,
//   convertCurrency,
// } from "../../redux/slices/accountSlices";

// export default function AccountOperations() {
//   const [depositAmount, setDepositAmount] = useState("");
//   const [withdrawalAmount, setWithdrawalAmount] = useState("");
//   const [loanAmount, setLoanAmount] = useState("");
//   const [loanPurpose, setLoanPurpose] = useState("");
//   const [currency, setCurrency] = useState("USD");
//   const dispatch = useDispatch();

//   const {
//     loan: currentLoan,
//     loanPurpose: currentLoanPurpose,
//     balance,
//     isLoading,
//   } = useSelector((state) => state.account);

//   async function handleDeposit() {
//     if (!depositAmount) return;

//     dispatch(convertingCurrency());

//     try {
//       let convertedAmount = depositAmount;
//       if (currency !== "USD") {
//         convertedAmount = await convertCurrency(depositAmount, currency);
//       }

//       await dispatch(deposito(convertedAmount, currency));
//       dispatch(updateBalanceAfterConversion(convertedAmount));

//       setCurrency("USD");
//       setDepositAmount("");
//     } catch (error) {
//       console.error("Error depositing:", error);
//     }
//   }

//   function handleWithdrawal() {
//     if (!withdrawalAmount) return;
//     dispatch(withdraw(withdrawalAmount));
//     setWithdrawalAmount("");
//   }

//   function handleRequestLoan() {
//     if (!loanAmount || !loanPurpose) return;
//     dispatch(requestLoan(loanAmount, loanPurpose));
//     setLoanAmount("");
//     setLoanPurpose("");
//   }

//   function handlePayLoan() {
//     dispatch(payloan());
//   }

// return (
// <div className="mt-8">
//   <h2 className="text-4xl">Your account operations</h2>
//   <div className="bg-blue-200 p-8 rounded-lg ">
//     <div className="px-[8px]">
//       <label className="text-xl">Deposit</label>
//       <input
//         className="mx-2"
//         type="number"
//         value={depositAmount}
//         onChange={(e) => setDepositAmount(+e.target.value)}
//       />
//       <select
//         className="mr-2"
//         value={currency}
//         onChange={(e) => setCurrency(e.target.value)}
//       >
//         <option value="USD">US Dollar</option>
//         <option value="EUR">Euro</option>
//         <option value="GBP">British Pound</option>
//       </select>
//       <button
//         onClick={handleDeposit}
//         className={`px-[6px] py-[2px] rounded-md bg-blue-500`}
//       >
//         Deposit {depositAmount}
//       </button>
//     </div>

//     <div className="px-[8px] my-2">
//       <label className="text-xl">Withdraw</label>
//       <input
//         className="mx-2"
//         type="number"
//         value={withdrawalAmount}
//         onChange={(e) => setWithdrawalAmount(+e.target.value)}
//       />
//       <button
//         onClick={handleWithdrawal}
//         className="px-[6px] py-[2px] rounded-md bg-blue-500"
//       >
//         Withdraw {withdrawalAmount}
//       </button>
//     </div>

//     <div className="px-[8px] my-2">
//       <label className="text-xl">Request loan</label>
//       <input
//         className="mx-2"
//         type="number"
//         value={loanAmount}
//         onChange={(e) => setLoanAmount(+e.target.value)}
//         placeholder="Loan amount"
//       />
//       <input
//         className="mr-2"
//         value={loanPurpose}
//         onChange={(e) => setLoanPurpose(e.target.value)}
//         placeholder="Loan purpose"
//       />
//       <button
//         onClick={handleRequestLoan}
//         className="px-[6px] py-[2px] rounded-md bg-blue-500"
//       >
//         Request loan
//       </button>
//     </div>

//     {currentLoan > 0 && (
//       <div className="my-2">
//         <span className="text-xl mx-2">
//           Pay back {currentLoan} {currentLoanPurpose}
//         </span>
//         <button
//           onClick={handlePayLoan}
//           className="px-[6px] py-[2px] rounded-md bg-blue-500"
//         >
//           Pay loan
//         </button>
//       </div>
//     )}
//   </div>
// </div>
// );
// }
