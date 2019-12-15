import React, { Component } from "react";
import { WithAppContext } from "contexts";
import axios from "axios";

@WithAppContext
class Auth extends Component {
  state = {
    login: "",
    password: ""
  };

  handleChange = type => e => {
    this.setState({ [type]: e.target.value });
  };

  auth = e => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    const { login, password } = this.state;
    return (
      <form onSubmit={this.auth}>
        <p>Login</p>
        <input
          type="text"
          value={login}
          onChange={this.handleChange("login")}
        />
        <p>Password</p>
        <input
          type="password"
          value={password}
          onChange={this.handleChange("password")}
        />
        <br />
        <button type="submit">Войти</button>
      </form>
    );
  }
}

export default Auth;
