function formatCurrency(value) {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "USD",
  }).format(value);
}
export default function BalanceDisplay({ balance }) {
  return (
    <div className="absolute top-20 right-40 bg-gray-100 p-6 font-bold text-2xl min-w-180 text-center">
      {formatCurrency(balance)}
    </div>
  );
}
