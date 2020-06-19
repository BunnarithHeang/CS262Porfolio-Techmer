import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./components/authentications/Login";
import Register from "./components/authentications/Register";
import Home from "./components/views/Home";
import Layout from "./components/layout/Layout";

import "./scss/main.scss";

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
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
    </Router>
  );
}

export default App;
