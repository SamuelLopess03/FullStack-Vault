import { useUser } from "../hooks/useUser";

import Dashboard from "../components/Dashboard";

const Filter = () => {
  useUser();

  return <Dashboard activeMenu={"Filters"}>This is Filter Page</Dashboard>;
};

export default Filter;
