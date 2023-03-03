import { Link } from "react-router-dom";
import "./home.css";
import CreditList from "../../components/credit-list.component";
import CreateCredit from "../../components/create-credit.component"

export default function Home() {
  
  return (
    <div className="homepage">
      
        <div className="home">
        <CreditList />
        <CreateCredit />
          <button className="loginButton">
          <Link className="link" to="/login">
            Login
          </Link>
        </button>
          
        </div>
      </div>
  );
}
