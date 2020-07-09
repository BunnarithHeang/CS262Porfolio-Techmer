import React from "react";
import ReactDOM from "react-dom";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

toast.configure();

export default function PaymentForm() {
  const [product] = React.useState({
    name: "Tesla Roadster",
    price: 64998.67,
    description: "Cool car",
  });

  async function handleToken(token, addresses) {
    console.log(token);
  }

  return (
    <div className="container">
      <StripeCheckout
        stripeKey="pk_test_dsP9i7d6nF0LWzNGC1KTp0U000IcWn0Bsm"
        token={handleToken}
        amount={product.price * 100}
        name="Tesla Roadster"
        allowRememberMe={false}
      />
    </div>
  );
}
