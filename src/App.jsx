import { useSelector } from "react-redux";
import CreateCustomer from "./features/customers/CreateCustomer";
import Customer from "./features/customers/customer";
import AccountOperations from "./features/accounts/AccountOperations";
import BalanceDisplay from "./features/accounts/BalanceDisplay";

function App() {
  const fullName = useSelector((state) => state.customer.fullName);
  return (
    <div className="m-[40px]">
      <h1 className="text-4xl">🏦 The React-Redux Bank ⚛️</h1>
      {fullName === "" ? (
        <CreateCustomer />
      ) : (
        <>
          <Customer />
          <AccountOperations />
          <BalanceDisplay />
        </>
      )}
    </div>
  );
}

export default App;
