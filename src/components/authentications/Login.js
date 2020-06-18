import React, { Component } from "react";
import "../../scss/login.scss";

export default class Login extends Component {
  render() {
    return (
      <div class="container">
        <div class="login-wrap">
          <div class="login-html">
            <input id="tab-1" type="radio" name="tab" class="sign-in" checked />
            <label for="tab-1" class="tab">
              Sign In
            </label>
            <input id="tab-2" type="radio" name="tab" class="sign-up" />
            <label for="tab-2" class="tab">
              Sign Up
            </label>
            <div class="login-form">
              <div class="sign-in-htm">
                <div>
                  <div class="group">
                    <label for="user" class="label">
                      Username
                    </label>
                    <input id="user" type="text" class="input" />
                  </div>
                  <div class="group">
                    <label for="pass" class="label">
                      Password
                    </label>
                    <input
                      id="pass"
                      type="password"
                      class="input"
                      data-type="password"
                    />
                  </div>
                  <br />
                  <div class="group">
                    <input type="submit" class="button" value="Sign In" />
                  </div>
                  <div class="hr"></div>
                  <div class="foot-lnk">
                    <a href="#forgot">Forgot Password?</a>
                  </div>
                </div>
              </div>
              <div class="sign-up-htm">
                <div id="signup-name">
                  <div class="group">
                    <label for="user" class="label">
                      FirstName
                    </label>
                    <input id="user" type="text" class="input" />
                  </div>
                  <div class="group">
                    <label for="user" class="label">
                      LastName
                    </label>
                    <input id="user" type="text" class="input" />
                  </div>
                </div>
                <div class="group">
                  <label for="user" class="label">
                    Username
                  </label>
                  <input id="user" type="text" class="input" />
                </div>
                <div class="group">
                  <label for="pass" class="label">
                    Password
                  </label>
                  <input
                    id="pass"
                    type="password"
                    class="input"
                    data-type="password"
                  />
                </div>
                <div class="group">
                  <label for="pass" class="label">
                    Repeat Password
                  </label>
                  <input
                    id="pass"
                    type="password"
                    class="input"
                    data-type="password"
                  />
                </div>
                <div class="group">
                  <label for="pass" class="label">
                    Email Address
                  </label>
                  <input id="pass" type="text" class="input" />
                </div>
                <br />
                <div class="group">
                  <input type="submit" class="button" value="Sign Up" />
                </div>
                <div class="hr"></div>
                <div class="foot-lnk">
                  <label for="tab-1">Already Member?</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
