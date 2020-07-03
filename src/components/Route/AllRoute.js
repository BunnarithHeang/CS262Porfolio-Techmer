import React from "react";
import { AuthLayoutRoute, AuthRoute, NoAuthRoute } from "./RouterType";
import { Switch, Route } from "react-router-dom";
import Logout from "../authentications/Logout";
import Login from "../authentications/Login";
import Register from "../authentications/Register";
import Home from "../views/Home";
import About from "../views/About";
import Product from "../views/product/ProductDetails";
import Main from "../views/Main";
import ShippingInfo from "../authentications/ShippingInfo";
import CategoryPage from "../views/category/CategoryPage";
import CartPage from "../views/cart/CartPage";

export default function AllRoute() {
  return (
    <React.Fragment>
      <Switch>
        <NoAuthRoute path="/login" toRender={Login} />
        <NoAuthRoute path="/register" toRender={Register} />
        <AuthRoute path="/logout" toRender={Logout} />

        <AuthLayoutRoute path="/products" toRender={Main} />
        <AuthLayoutRoute path="/product/:product_id" toRender={Product} />
        <AuthLayoutRoute path="/shipping-info" toRender={ShippingInfo} />
        <AuthLayoutRoute path="/aboutus" toRender={About} />
        <AuthLayoutRoute path="/categories" toRender={CategoryPage} />
        <AuthLayoutRoute path="/cart" toRender={CartPage} />
        <AuthLayoutRoute path="/" toRender={Home} />
      </Switch>
    </React.Fragment>
  );
}
