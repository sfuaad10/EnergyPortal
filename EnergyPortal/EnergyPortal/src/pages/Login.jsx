import { useContext } from "react";
import { AuthContext } from "../stores/AuthContext";

const Login = () => {
  const authCtx = useContext(AuthContext);

  async function handleLogin(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const Name = formData.get("name");
    const Password = formData.get("password");

    const data = {
      name: Name,
      Password: Password,
    };

    try {
      const response = await fetch(`https://localhost:7237/authenticate`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        authCtx.onLogin();
        console.log("Logged in");
      } else {
        console.log("Error logging in");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }

  return (
    <>
      <form onSubmit={handleLogin}>
        <label htmlFor="Name">name</label>
        <input id="name" name="name" type="text" />

        <label htmlFor="Name">password</label>
        <input id="password" name="password" type="text" />

        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default Login;

//write fibonacci sequence
