import React from "react";
import {
  AuthLayoutRoute,
  NoAuthLayoutRoute,
  AuthRoute,
  NoAuthRoute,
} from "./RouterType";
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
import BrandPage from "../views/category/BrandPage";
import CartPage from "../views/cart/CartPage";
import Checkout from "../views/CheckOut";
import Profile from "../views/Profile";

export default function AllRoute() {
  return (
    <React.Fragment>
      {/*  */}
      <Switch>
        <NoAuthRoute path="/login" toRender={Login} />
        <NoAuthRoute path="/register" toRender={Register} />
        <AuthRoute path="/logout" toRender={Logout} />
        <AuthRoute path="/checkout" toRender={Checkout} />

        <NoAuthLayoutRoute
          path="/category/:category_id?"
          toRender={CategoryPage}
        />
        <NoAuthLayoutRoute path="/brand/:brand_id?" toRender={BrandPage} />
        <NoAuthLayoutRoute path="/products/:name?" toRender={Main} />
        <NoAuthLayoutRoute path="/product/:product_id?" toRender={Product} />
        <NoAuthLayoutRoute path="/aboutus" toRender={About} />
        <NoAuthLayoutRoute path="/" toRender={Home} />

        <AuthLayoutRoute path="/profile" toRender={Profile} />
        <AuthLayoutRoute path="/cart" toRender={CartPage} />
        <AuthLayoutRoute path="/shipping-info" toRender={ShippingInfo} />
      </Switch>
    </React.Fragment>
  );
}
