import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./home.css";
import axios from "axios";
import CreditList from "../../components/credit-list.component";
import CreateCredit from "../../components/create-credit.component"

export default function Home() {

  const [list, setCreditList] = useState([]);

  useEffect(() => {
    const fetchList = async () => {
      const res = await axios.get("/credit");
      setCreditList(res.data);
    };
    fetchList();
  });
  
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
