
import "./home.css";
import CreditList from "../../components/credit-list.component";
import CreateCredit from "../../components/create-credit.component"

export default function Home() {
  
  return (
    <div className="container">
      
        <div>
        <CreditList />
        <br/>
        <br/>
        <CreateCredit />
        </div>
      </div>
  );
}
