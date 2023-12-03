import React, { useState } from "react";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  return (
    <div className="container">
      <div className="register">
        <h1>Login</h1>
        <label htmlFor="">User Name: </label>
        <input type="text" />
        <label htmlFor="">Password: </label>
        <input type="text" />
        <button>Login</button>
      </div>
    </div>
  );
}

export default Login;