import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleRegisterClick() {
    navigate("/RegistrationForm");
  }

  async function loginUser(e) {
    e.preventDefault();
    const response = await fetch("http://localhost:2000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });

    const data = await response.json();
    if (data.status === "ok") {
      console.log("ek dun sahi hai");
      navigate("/Connected");
    } else if (data.status === "error") {
      console.log("galt hai");
      navigate("/Disconnected");
    } else {
      alert("check username or password");
    }
    console.log(data);
  }

  return (
    <body className="main">
      <form onSubmit={loginUser}>
        <h1 className="Heading">Login</h1>

        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Name"
        />

        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <input type="submit" value="Login" className="btn" />
        <button
          type="button"
          onClick={handleRegisterClick}
          className="submitbtn btn "
        >
          Create Account
        </button>
      </form>
    </body>
  );
}

export default Login;
