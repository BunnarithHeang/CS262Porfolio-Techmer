import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./components/authentications/Login";
import Register from "./components/authentications/Register";
import Home from "./components/views/Home";
import Layout from "./components/layout/Layout";
import Product from "./components/views/product/ProductDetails"
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
<<<<<<< HEAD
        path="/products"
        render={(props) => (
          <React.Fragment>
            <Layout>
              <Main />
=======
        path="/product"
        render={(props) => (
          <React.Fragment>
            <Layout>
              <Product />
>>>>>>> ad9b7eabf20f568869df12ed440990c5062d1ec6
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
