import React, { useEffect, useState } from "react";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [usermail, setUsermail] = useState("");
  const [users, setUsers] = useState([]);

  function handleChangeName(e) {
    setUsername(e.currentTarget.value);
  }

  function handleChangeEmail(e) {
    setUsermail(e.currentTarget.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
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
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    signUp();
  }, []);

  return (
    <div className="container">
      <div className="container-title">Signup</div>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="form-control">
          Username:
          <input name="username" onChange={handleChangeName} />
          <br></br>Email
          <input name="email" onChange={handleChangeEmail} />
        </div>
        <button className="btn-submit">Signup</button>
      </form>
      <div>users</div>
      <div>
        {users.map((user) => {
          return user.name;
        })}
      </div>
    </div>
  );
};

export default Signup;
