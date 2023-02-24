import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar.component"
import SavingsList from "./components/savings-list.component"
import EditSaving from "./components/edit-savings.component"
import CreateSaving from "./components/create-saving.component"
import CreateUser from "./components/create-user.component"

 
function App() {
  return (
    <Router>
    <div className="App">
    <Navbar />
    <br/>
    <Routes>
      <Route path="/" exact element={<SavingsList/>} />
      <Route path="/edit/:id" element={<EditSaving/>} />
      <Route path="/create" element={<CreateSaving/>} />
      <Route path="/user" element={<CreateUser/>} />
    </Routes>
    </div>
    </Router>
  );
}
 
export default App;