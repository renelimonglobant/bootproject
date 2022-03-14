import { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import fireBaseApp from "../config/Credentials";
import DashboardGrid from "../components/grid/DashboardGrid";
import Welcome from "./Welcome";

const Home = () => {
  const auth = getAuth(fireBaseApp);
  const [login, setLogin] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setLogin(user.uid);
      }
    });
  }, []);

  return <>{login ? <DashboardGrid /> : <Welcome />}</>;
};

export default Home;
