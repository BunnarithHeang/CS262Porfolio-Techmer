import React from "react";
import ReactDOM from "react-dom";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

toast.configure();

export default function PaymentForm(props) {
  const [product] = React.useState({
    name: "Techfinder",
    description: "Cool car",
  });

  const setCardDetails = props.setCardDetails;

  async function handleToken(token, addresses) {
    console.log(token);
    setCardDetails(token);
  }

  return (
    <div className="container" style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
      <StripeCheckout
        stripeKey="pk_test_dsP9i7d6nF0LWzNGC1KTp0U000IcWn0Bsm"
        token={handleToken}
        // amount={product.price * 100}
        name="Tesla Roadster"
        label="Add card"
        panelLabel="Add Card"
        allowRememberMe={false}
      />
    </div>
  );
}
