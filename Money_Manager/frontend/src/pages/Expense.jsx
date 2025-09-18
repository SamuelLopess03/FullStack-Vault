import { useUser } from "../hooks/useUser";

import Dashboard from "../components/Dashboard";

const Expense = () => {
  useUser();

  return <Dashboard activeMenu={"Expense"}>This is Expense Page</Dashboard>;
};

export default Expense;
