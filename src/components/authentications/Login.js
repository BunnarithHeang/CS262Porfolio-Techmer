import React, { Component, useState } from "react";
import axios from "axios";
import { appUrl } from "./Helper";

export default class Login extends Component {
  constructor() {
    super();
    this.state = appUrl() + "/login";
  }

  componentDidMount() {
    let data = {
      username: "admin",
      password: "admin",
    };
    let configs = {
      headers: {},
    };

    // axios
    //   .post(appUrl() + "/login", data, configs)
    //   .then((response) => (this.message = response.accessToken));

    axios
      .get(appUrl() + "/role", configs)
      .then((response, {}) => console.log(response));
  }

  render() {
    return (
      <div>
        <h1>Hello</h1>
        <h1>{this.state}</h1>
        <h1>{this.message}</h1>
      </div>
    );
  }
}
