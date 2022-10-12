import React from "react";

const Login = () => {
  return (
    <div className="container">
      <div className="container-title">Login</div>
      <form className="login-form">
        <div className="form-control">
          Username:
          <input />
          <br></br>Email
          <input />
        </div>
        <button className="btn-submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
