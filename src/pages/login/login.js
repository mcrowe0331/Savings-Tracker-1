import axios from "axios";
import { useRef, useContext } from "react";
import { Context } from "../../context/Context";
import "./login.css";

export default function Login() {
  const userRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      window.location.href = '/creditlist';
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };
  return (
    <div className="form-group container">
      <br/>
      <br/>
      <span><h2>Login</h2></span>
      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter Your Username"
          autoFocus={true}
          ref={userRef}
        />
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter Your Password"
          ref={passwordRef}
        />
        <br/>
        <center>
        <button className="loginButton" type="submit" disabled={isFetching}>
          Login
        </button>
        </center>
      </form>
    </div>
    
  );
}
