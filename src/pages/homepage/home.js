// import axios from "axios";
import { Link } from "react-router-dom";



export default function Home() {
  
  return (
    <div className="homepage">
      
        <div className="home">
          <h1>This is the homepage</h1>
          <button className="loginButton">
          <Link className="link" to="/login">
            Login
          </Link>
        </button>
          
        </div>
      </div>
  );
}
