import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function RegistrationForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function registerUser(e) {
    e.preventDefault();
    const response = await fetch("http://localhost:2000/api/register", {
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
    console.log(data);
  }
  const navigate = useNavigate();

  function handleLoginClick() {
    navigate("/");
  }
  function handleRegister() {
    navigate("/Connected");
  }

  return (
    <body className="main">
      <form onSubmit={registerUser}>
        <h1 className="Heading">Register</h1>

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

        <input
          type="submit"
          value="Register"
          className="btn"
          onClick={handleRegister}
        />
        <button
          type="button"
          onClick={handleLoginClick}
          className="submitbtn btn "
        >
          Already Signed Up? Login Here
        </button>
      </form>
    </body>
  );
}

export default RegistrationForm;
