import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from ".//components/navbar.component"
import CreditList from './/components/credit-list.component';
import EditCredit from './/components/edit-credit.component';
import CreateCredit from './/components/create-credit.component';
import CreateUser from './/components/create-user.component';
import Home from ".//pages/homepage/home";
import Login from ".//pages/login/login";
import { Context } from ".//context/Context";


function App() {
  const { user } = useContext(Context);
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={< Home />} />
        <Route path="/edit/:id" element={<editCredit />} />
        <Route path="./createCredit" element={<CreateCredit />} />
        <Route path="./credit-list" element={<CreditList />} />
        <Route path="./EditCredit" element={<EditCredit />} />
        <Route path="./create-user" element={<CreateUser />} />
        <Route path="/login" element={user ? <Home /> : <Login />} />

      </Routes>
    </Router>
  );
}

export default App;