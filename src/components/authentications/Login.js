import React, { Component } from "react";
import {
  FormGroup,
  Label,
  Input,
  Button,
  NavLink,
  FormFeedback,
  FormText,
} from "reactstrap";
import "../../scss/login.scss";
import "bootstrap/dist/css/bootstrap.min.css";

export default class Login extends Component {
  render() {
    return (
      <div className="signin-container">
        <div className="signin-form">
          <div className="signin-logo-container">
            <img
              src="../../images/header_bg.jpg"
              alt=""
              className="signin-logo"
            />
          </div>
          <FormGroup>
            <Label for="exampleEmail">Username</Label>
            <Input
              type="email"
              name="email"
              id="exampleEmail"
              placeholder="username, email, or phone number "
            />
            <FormFeedback>You will not be able to see this</FormFeedback>
          </FormGroup>
          <FormGroup>
            <Label for="exampleEmail">Password</Label>
            <Input
              type="email"
              name="email"
              id="exampleEmail"
              placeholder="password"
              invalid
            />
            <FormFeedback>You will not be able to see this</FormFeedback>
          </FormGroup>
          <FormGroup>
            <Label for="exampleEmail">Valid input</Label>
            <Input valid />
            <FormFeedback valid tooltip>
              Sweet! that name is available
            </FormFeedback>
            <FormText>Example help text that remains unchanged.</FormText>
          </FormGroup>
          <Button color="primary" size="lg" block className="signin-button">
            Sign In
          </Button>
          <NavLink className="signin-forgot"> forgot your password?</NavLink>
        </div>
      </div>
    );
  }
}
