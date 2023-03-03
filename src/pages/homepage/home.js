
import "./home.css";
import CreditList from "../../components/credit-list.component";
import CreateCredit from "../../components/create-credit.component"

export default function Home() {
  
  return (
    <div className="homepage">
      
        <div className="home">
        <CreditList />
        <br/>
        <br/>
        <CreateCredit />
        </div>
      </div>
  );
}
