import React, { Component } from 'react';
import { Table } from "react-bootstrap";
import { connect } from 'react-redux';
import './Dashboard.css';
class Dashboard extends Component {

  componentDidMount() {
    this.props.dispatch({ type: 'GETUSER' });
  }
  render() {

    var list = this.props.users.map((eachUser) => {
      return (
        <tr>
          <td>{eachUser.id}</td>
          <td>{eachUser.name}</td>
          <td>{eachUser.age}</td>
          <td>{eachUser.gender}</td>
          <td>{eachUser.email}</td>
          <td>{eachUser.phoneNo}</td>
        </tr>
      )
    })
    return (
      <div
        className='TableCon'>
        <h2 style={{textAlign:'center',marginBottom:"2%"}}>User Dashboard</h2>
        <Table striped bordered hover>

          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Email</th>
              <th>Phone Number</th>
            </tr>
          </thead>
          <tbody>
            {list}
          </tbody>
        </Table></div>
    )
  };
}
function mapStateToProps(state) {
  return {
    users: state.users

  }
}

export default connect(mapStateToProps)(Dashboard);
