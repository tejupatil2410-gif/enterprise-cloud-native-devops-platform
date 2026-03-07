import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {

  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {

    if (username === "admin" && password === "admin") {

      alert("Login successful");

      navigate("/dashboard");

    } else {

      alert("Invalid credentials");

    }

  };

  return (

    <div className="card login-card">

      <h2>Login</h2>

      <input
        placeholder="Username"
        onChange={(e) => setUsername(e.target.value)}
      />

      <br/>

      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <br/>

      <button onClick={login}>Login</button>

    </div>

  );
}

export default Login;