import { useState } from "react";

function Login() {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  function handleChange(e) {
    setUser((prevUser) => ({
      ...prevUser,
      [e.target.name]: e.target.value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("username: " + user.username);
    console.log("password: " + user.password);
  }

  return (
    <>
      <h1>Login Here...!</h1>
      <form onSubmit={handleSubmit}>
        Username:
        <input type="text" name="username" onChange={handleChange} /><br />
        Password:
        <input type="password" name="password" onChange={handleChange} /><br />
        <button type="submit">Login</button>
      </form>
    </>
  );
}

export default Login;
