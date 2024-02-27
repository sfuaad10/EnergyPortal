import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
import { useContext } from "react";
import { AuthContext } from "../stores/AuthContext";
import { Button } from "react-bootstrap";

const RootPage = () => {
  const authCtx = useContext(AuthContext);
  return (
    <>
      {authCtx.isLoggedIn ? (
        <>
          <MainNavigation /> <Outlet />
        </>
      ) : (
        <Button onClick={authCtx.onLogin}>Login</Button>
      )}
    </>
  );
};

export default RootPage;
