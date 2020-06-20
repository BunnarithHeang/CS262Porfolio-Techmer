import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/views/Home";
import Login from "./components/authentications/Login";
import Layout from "./components/layout/Layout";

import "./scss/main.scss";
import Main from "./components/views/Main";

function App() {
  return (
    <Router>
      <Route
        exact
        path="/"
        render={(props) => (
          <React.Fragment>
            <Layout>
              <Home />
            </Layout>
          </React.Fragment>
        )}
      />
      <Route
        exact
        path="/products"
        render={(props) => (
          <React.Fragment>
            <Layout>
              <Main />
            </Layout>
          </React.Fragment>
        )}
      />
      <Route path="/login" component={Login} />
    </Router>
  );
}

export default App;
