import React, { Component } from 'react';
import './Login.css';
import { Form, Button, FormGroup, FormControl } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Dashboard from '../Dashboard/Dashboard'
class Login extends Component {

    constructor() {
        super();
        this.state = {
            Username: "hruday@gmail.com",
            Password: 'hruday123',
            showError: false
        }
    }
    setEmail = (username) => {
        console.log(username);
        this.setState({ Username: username })
        this.setState({ showError: false });
    }
    setPassword = (pass) => {
        this.setState({ Password: pass })
        this.setState({ showError: false });
    }
    validateForm = () => {
        if (this.state.Password.length > 4) { return true; }
    }
    login() {
        if (this.state.Username === 'hruday@gmail.com' && this.state.Password === 'hruday123') {
            window.location.href = "login";
        }
        else this.setState({ showError: true });
    }
    render() {
        var errorMsg = this.state.showError ? 'Login Faied! Invalid User' : '';
        return (
            <Router>
                <div className="Login">
                    <form>
                        <FormGroup >
                            <Form.Label>UserName</Form.Label>
                            <FormControl
                                value={this.state.Username}
                                onChange={e => this.setEmail(e.target.value)}
                                type="text"
                            />
                        </FormGroup>
                        <FormGroup  >
                            <Form.Label>Password</Form.Label>
                            <FormControl
                                value={this.state.Password}
                                onChange={e => this.setPassword(e.target.value)}
                                type="password"
                            />
                        </FormGroup>
                        <Button block disabled={!this.validateForm()} onClick={() => this.login()}>
                            Login
          </Button>
                    </form>
                    <p style={{ textAlign: "center", marginTop: "1%", color: "red" }}>{errorMsg}</p>
                </div>
                <Switch>
                    <Route exact path="/login">
                        <Dashboard />
                    </Route>
                </Switch>
            </Router>
        )
    };
}


export default Login;
