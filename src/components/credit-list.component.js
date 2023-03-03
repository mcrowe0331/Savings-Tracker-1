import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Credit = ({ credit, deleteCredit }) => (
  <tr>
    <td>{credit.username}</td>
    <td>{credit.description}</td>
    <td>{credit.amount}</td>
    <td>{credit.date.substring(0,10)}</td>
    <td>
      <Link to={`/edit/${credit._id}`}>Edit</Link> | <a href="#" onClick={() => { deleteCredit(credit._id) }}>Delete</a>
    </td>
  </tr>
)

const CreditList = () => {
  const [credit, setCredit] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/credit/')
     .then(response => {
       setCredit(response.data);
     })
     .catch((error) => {
        console.log(error);
     })
  }, []);

  const deleteCredit = (id) => {
    axios.delete(`http://localhost:5000/credit/${id}`)
      .then(res => console.log(res.data));
    setCredit(credit.filter(el => el._id !== id))
  }

  const creditList = () => {
    return credit.map(currentcredit => {
      return <Credit credit={currentcredit} deleteCredit={deleteCredit} key={currentcredit._id}/>;
    })
  }

  return (
    <div>
      <h3>Logged Credit</h3>
      <table className="table">
        <thead className="thead-light">
          <tr>
            <th>Username</th>
            <th>Description</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          { creditList() }
        </tbody>
      </table>
    </div>
  )
}

export default CreditList;