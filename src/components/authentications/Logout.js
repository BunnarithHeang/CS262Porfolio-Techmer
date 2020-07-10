import React from "react";
import { Redirect } from "react-router-dom";
import Cookies from "js-cookie";

export default function Logout() {
  Cookies.remove("user_data");

  return <Redirect to="/" />;
}
