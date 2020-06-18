import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/views/Home";
import Login from "./components/authentications/Login";
import Layout from "./components/layout/Layout";

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
    </Router>
  );
}

export default App;
