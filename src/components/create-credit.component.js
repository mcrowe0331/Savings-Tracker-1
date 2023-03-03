import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';

const CreateCredit = () => {
  const [username, setUsername] = useState('');
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState(0);
  const [date, setDate] = useState(new Date());
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/users/')
      .then(response => {
        if (response.data.length > 0) {
          setUsers(response.data.map(user => user.username));
          setUsername(response.data[0].username);
        }
      })
      .catch((error) => {
        console.log(error);
      })
  }, []);

  const onChangeUsername = (e) => {
    setUsername(e.target.value);
  }

  const onChangeDescription = (e) => {
    setDescription(e.target.value);
  }

  const onChangeAmount = (e) => {
    setAmount(e.target.value);
  }

  const onChangeDate = (date) => {
    setDate(date);
  }

  const onSubmit = (e) => {
    e.preventDefault();
  
    const credit = {
      username: username,
      description: description,
      amount: amount,
      date: date,
    };
  
    console.log(credit);
  
    axios.post('http://localhost:5000/credit/add', credit)
      .then(res => console.log(res.data));
  
    window.location = '/';
  }

  return (
    <div>
      <h3>Create New Credit</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group"> 
          <label>Username: </label>
          <select
              required
              className="form-control"
              value={username}
              onChange={onChangeUsername}>
              {
                users.map(function(user) {
                  return <option 
                    key={user}
                    value={user}>{user}
                    </option>;
                })
              }
          </select>
        </div>
        <div className="form-group"> 
          <label>Description: </label>
          <input  type="text"
              required
              className="form-control"
              value={description}
              onChange={onChangeDescription}
              />
        </div>
        <div className="form-group">
          <label>Credit Amount: </label>
          <input 
              type="text" 
              className="form-control"
              value={amount}
              onChange={onChangeAmount}
              />
        </div>
        <div className="form-group">
          <label>Date: </label>
          <DatePicker
            selected={date}
            onChange={onChangeDate}
          />
        </div>
  
        <div className="form-group">
          <input type="submit" value="Create Credit Log" className="btn btn-primary" />
        </div>
      </form>
      <div> 
        <center>
            <img src="/gitfitbanner.png" width="800" alt=""></img>
        </center>
      </div>
    </div>
  )
}

export default CreateCredit;