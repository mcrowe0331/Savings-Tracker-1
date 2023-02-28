import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from "./components/navbar.component"
import CreditList from './components/credit-list.component';
import EditCredit from './components/edit-credit.component';
import CreateCredit from './components/create-credit.component';
import CreateUser from './components/create-user.component';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<CreditList />} />
        <Route path="/edit/:id" element={<EditCredit />} />
        <Route path="/create" element={<CreateCredit />} />
        <Route path="/user" element={<CreateUser />} />
      </Routes>
    </Router>
  );
}

export default App;