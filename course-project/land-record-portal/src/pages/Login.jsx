import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Login() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext);

  const navigate = useNavigate();

  const handleLogin = () => {

    if (username === "" || password === "") {
      alert("Please enter username and password");
      return;
    }

    if (username === "admin" && password === "1234") {

      localStorage.setItem(
        "user",
        username
      );

      setUser(username);

      alert("Login Successful");

      navigate("/admin");

    } else {

      alert("Invalid Credentials");

    }

  };

  return (
    <>
      <Navbar />

      <div className="page-container">

        <h1>Login</h1>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) =>
            setUsername(e.target.value)
          }
        />

        <br /><br />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />

        <br /><br />

        <button onClick={handleLogin}>
          Login
        </button>

      </div>

      <Footer />
    </>
  );
}

export default Login;