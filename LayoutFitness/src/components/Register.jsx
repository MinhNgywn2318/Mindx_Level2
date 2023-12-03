import React from "react";

function Register() {
  return (
    <div className="container">
      <div className="register">
        <h1>Register</h1>
        <label htmlFor="">Full Name: </label>
        <input type="text" />
        <label htmlFor="">User Name: </label>
        <input type="text" />
        <label htmlFor="">Password: </label>
        <input type="text" />
        <label htmlFor="">Confirm Password: </label>
        <input type="text" />
        <label htmlFor="">Phone: </label>
        <input type="text" />
        <button>Register account</button>
      </div>
    </div>
  );
}

export default Register;