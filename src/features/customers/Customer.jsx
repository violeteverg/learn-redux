import { useSelector } from "react-redux";
export default function Customer() {
  const customerName = useSelector((state) => state.customer.fullName);
  return <h2 className="text-2xl">👋 Welcome, {customerName}</h2>;
}
