import React, { useState } from "react";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [usermail, setUsermail] = useState("");
  const [users, setUsers] = useState([]);
  const [sign, setSign] = useState(false);

  function handleChangeName(e) {
    setUsername(e.currentTarget.value);
  }

  function handleChangeEmail(e) {
    setUsermail(e.currentTarget.value);
  }

  const deleteUser = () => {
    setUsers([]);
  };

  function handleSubmit(e) {
    e.preventDefault();
    signUp(username, usermail);
  }

  const signUp = async (name, email) => {
    await fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      body: JSON.stringify({
        name: username,
        email: usermail,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => {
        if (res.status !== 201) {
          return;
        } else {
          return res.json();
        }
      })
      .then((data) => {
        setUsers((users) => [...users, data]);
        console.log(users);
        setSign(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container">
      <div className="container-title">POST</div>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label className="label" aria-hidden="true">
            Username:
          </label>
          <input
            name="username"
            className="input"
            onChange={handleChangeName}
          />
          <br></br>
          <label className="label">Email</label>
          <input name="email" className="input" onChange={handleChangeEmail} />
        </div>
        <div className="btn-both">
          <button className="btn-submit" onSubmit={handleSubmit}>
            Post
          </button>
          <button className="btn-delete" onClick={deleteUser}>
            Delete
          </button>
        </div>
      </form>

      <label className="label">Users</label>
      <div className="post-pending">
        <br />
        {sign ? <h4>POST SUCCESSFUL</h4> : <h4>POST PENDING</h4>}
      </div>

      <div className="users">
        {users.map((user) => {
          return user.name;
        })}
      </div>
    </div>
  );
};

export default Signup;
