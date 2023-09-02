import React, { useState } from "react";
import "./login.scss";
import newRequest from "../../utils/newRequest";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await newRequest.post("/auth/login", { username, password });
      localStorage.setItem("currentUser", JSON.stringify(res.data));
      navigate("/");
    } catch (error) {
      setError(error.response.data);
    }
  };

  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <h1>Sign in</h1>
        <label htmlFor="">Username</label>
        <input
          onChange={(event) => setUsername(event.target.value)}
          type="text"
          name="username"
        />

        <label htmlFor="">Password</label>
        <input
          onChange={(event) => setPassword(event.target.value)}
          type="password"
          name="password"
        />

        <button type="submit">Login</button>
        {error && error}
      </form>
    </div>
  );
};

export default Login;
