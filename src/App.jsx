import CreateCustomers from "./features/customers/CreateCustomers";
import Customer from "./features/customers/customer";
import AccountOperations from "./features/accounts/AccountOperations";
import BalanceDisplay from "./features/accounts/BalanceDisplay";

function App() {
  return (
    <div className="m-[40px]">
      <h1 className="text-4xl">🏦 The React-Redux Bank ⚛️</h1>
      <CreateCustomers />
      <Customer />
      <AccountOperations />
      <BalanceDisplay />
    </div>
  );
}

export default App;
