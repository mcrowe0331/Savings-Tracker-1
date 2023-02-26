import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Credit = props => (
  <tr>
    <td>{props.credit.username}</td>
    <td>{props.credit.description}</td>
    <td>{props.credit.amount}</td>
    <td>{props.credit.date.substring(0,10)}</td>
    <td>
      <Link to={"/edit/"+props.credit._id}>edit</Link> | <a href="#" onClick={() => { props.deleteCredit(props.credit._id) }}>delete</a>
    </td>
  </tr>
)
export default class CreditList extends Component {
  constructor(props) {
    super(props);
    this.deleteCredit = this.deleteCredit.bind(this);
    this.state = {credit: []};
  }

  componentDidMount() {
    axios.get('http://localhost:5000/credit/')
     .then(response => {
       this.setState({ credit: response.data });
     })
     .catch((error) => {
        console.log(error);
     })
  }

  deleteCredit(id) {
    axios.delete('http://localhost:5000/credit/'+id)
      .then(res => console.log(res.data));
    this.setState({
      credit: this.state.credit.filter(el => el._id !== id)
    })
  }

  creditList() {
    return this.state.credit.map(currentcredit => {
      return <Credit credit={currentcredit} deleteCredit={this.deleteCredit} key={currentcredit._id}/>;
    })
  }

  render() {
    return (
       <div>
  <h3>Logged Credits</h3>
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
      { this.creditList() }
    </tbody>
  </table>
  </div> 
  )
}
}