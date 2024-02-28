import { useContext } from "react";
import { AuthContext } from "../stores/AuthContext";

const Login = () => {
  const authCtx = useContext(AuthContext);

  const handleLogin = () => {
    authCtx.onLogin();
  };

  return (
    <>
      <h1 onClick={handleLogin}>Login</h1>
    </>
  );
};

export default Login;
