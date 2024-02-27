import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
import { useContext } from "react";
import { AuthContext } from "../stores/AuthContext";
import Login from "./Login";

const RootPage = () => {
  const authCtx = useContext(AuthContext);
  console.log("root triggered");
  return (
    <>
      {authCtx.isLoggedIn ? (
        <>
          <MainNavigation /> <Outlet />
        </>
      ) : (
        <Login />
      )}
    </>
  );
};

export default RootPage;
