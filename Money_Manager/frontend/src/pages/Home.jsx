import { useUser } from "../hooks/useUser";

import Dashboard from "../components/Dashboard";

const Home = () => {
  useUser();

  return <Dashboard activeMenu={"Dashboard"}>This is Home Page</Dashboard>;
};

export default Home;
