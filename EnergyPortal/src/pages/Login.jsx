import { useContext } from "react";
import { AuthContext } from "../stores/AuthContext";
import { Button } from "react-bootstrap";
import styles from "./Login.module.css";

const Login = () => {
  const authCtx = useContext(AuthContext);

  const handleLogin = () => {
    authCtx.onLogin();
  };

  return (
    <>
      <Button
        variant="dark"
        onClick={handleLogin}
        className={styles.loginButton}
      >
        Login
      </Button>
    </>
  );
};

export default Login;
