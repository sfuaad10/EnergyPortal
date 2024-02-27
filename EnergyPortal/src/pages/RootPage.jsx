import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
import { useContext } from "react";
import { AuthContext } from "../stores/AuthContext";
import { Button } from "react-bootstrap";
import styles from "./RootPage.module.css";

const RootPage = () => {
  const authCtx = useContext(AuthContext);
  return (
    <>
      {authCtx.isLoggedIn ? (
        <>
          <MainNavigation /> <Outlet />
        </>
      ) : (
        <Button
          variant="dark"
          onClick={authCtx.onLogin}
          className={styles.loginButton}
        >
          Login
        </Button>
      )}
    </>
  );
};

export default RootPage;
