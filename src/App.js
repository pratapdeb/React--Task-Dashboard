import React,{Component} from 'react';
import './App.css';
import Login from './Components/Login/Login';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Dashboard from './Components/Dashboard/Dashboard';
class App extends Component {
  
  render(){
  return (
    <Router>
    <Switch>
    <Route exact path="/">
      <Login/>
    </Route>
    <Route exact path="/login">
      <Dashboard/>
    </Route>
  </Switch>
  </Router>
  )};
}

export default App;
