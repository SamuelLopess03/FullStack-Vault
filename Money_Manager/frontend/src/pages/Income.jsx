import { useUser } from "../hooks/useUser";

import Dashboard from "../components/Dashboard";

const Income = () => {
  useUser();

  return <Dashboard activeMenu={"Income"}>This is Income Page</Dashboard>;
};

export default Income;
