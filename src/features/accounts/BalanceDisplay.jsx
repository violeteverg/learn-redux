import { useSelector } from "react-redux";
function formatCurrency(value) {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "USD",
  }).format(value);
}
export default function BalanceDisplay() {
  const balance = useSelector((state) => state.account.balance);
  return (
    <div className="absolute top-20 right-40 bg-gray-100 p-6 font-bold text-2xl min-w-180 text-center">
      {formatCurrency(balance)}
    </div>
  );
}

// ======= old way =========
// import { connect } from "react-redux";
// function formatCurrency(value) {
//   return new Intl.NumberFormat("en", {
//     style: "currency",
//     currency: "USD",
//   }).format(value);
// }
// function BalanceDisplay({ balance }) {
//   return (
//     <div className="absolute top-20 right-40 bg-gray-100 p-6 font-bold text-2xl min-w-180 text-center">
//       {formatCurrency(balance)}
//     </div>
//   );
// }
// function mapStateToProps(state) {
//   balance: state.account.balance;
// }
// export default connect(mapStateToProps)(BalanceDisplay);
