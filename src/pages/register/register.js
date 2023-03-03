import "./register.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const res = await axios.post("/auth/register", {
        username,
        email,
        password,
      });
      res.data && window.location.replace("/login");
    } catch (err) {
      setError(true);
    }
  };

  return (
    <div className="form-group container">
      <br/>
      <br/>
      <span> <h2>Register</h2></span>
      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter Your username"
          autoFocus={true}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>Email</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter Your email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter Your Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <br/>
        <br/>
        <button type="submit">
          Register
        </button>
      </form>
      {error && (
        <span style={{ color: "red", margintop: "20px" }}>
          Something went wrong!
        </span>
      )}
    </div>
  );
}