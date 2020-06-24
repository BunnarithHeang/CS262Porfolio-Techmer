import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./components/authentications/Login";
import Register from "./components/authentications/Register";
import Home from "./components/views/Home";
import Layout from "./components/layout/Layout";
import Product from "./components/views/product/ProductDetails"
import "./scss/main.scss";
import Main from "./components/views/Main";
import ShippingInfo from "./components/authentications/ShippingInfo"

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
      <Route path="/register" component={Register} />
      <Route path="/product" component={Product} />
      <Route path="/shippinginfo" component={ShippingInfo} />
    </Router>
  );
}

export default App;
