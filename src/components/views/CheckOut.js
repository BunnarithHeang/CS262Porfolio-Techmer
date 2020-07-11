import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Paper from "@material-ui/core/Paper";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import AddressForm from "./checkOut/AddressForm";
import PaymentForm from "./checkOut/PaymentForm";
import Review from "./checkOut/Review";
import Axios from "axios";
import { getUser, getHeader } from "../../AuthUser";
import { useHistory } from "react-router-dom";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}

      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
  },
  layout: {
    width: "auto",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end",
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

const steps = ["Shipping address", "Payment details", "Review your order"];

function getStepContent(
  step,
  usePre,
  setUsePre,
  addressId,
  setAddressId,
  cardDetails,
  setCardDetails,
  products,
  setProducts,
  coupon,
  setCoupon
) {
  switch (step) {
    case 0:
      return (
        <AddressForm
          usePre={usePre}
          setUsePre={setUsePre}
          addressId={addressId}
          setAddressId={setAddressId}
        />
      );
    case 1:
      return (
        <PaymentForm
          cardDetails={cardDetails}
          setCardDetails={setCardDetails}
        />
      );
    case 2:
      return (
        <Review
          addressId={addressId}
          cardDetails={cardDetails}
          products={products}
          setProducts={setProducts}
          coupon={coupon}
          setCoupon={setCoupon}
        />
      );
    default:
      throw new Error("Unknown step");
  }
}

function canGoNext(stepIndex, data) {
  if (stepIndex === 2) return true;
  return Object.values(data).length !== 0;
}

export default function Checkout() {
  const classes = useStyles();
  const history = useHistory();
  const [usePre, setUsePre] = React.useState(false);
  const [addressId, setAddressId] = React.useState({});
  const [products, setProducts] = React.useState([]);
  const [activeStep, setActiveStep] = React.useState(0);
  const [cardDetails, setCardDetails] = React.useState({});
  const [coupon, setCoupon] = React.useState("");

  function continueShop() {
    history.push("/");
  }

  const submitCheckout = async () => {
    if (
      !(
        Object.values(addressId).length === 0 ||
        Object.values(cardDetails).length === 0
      )
    ) {
      var uri = `/transaction?user_id=${getUser().user_id}&stripe_token=${
        cardDetails.id
      }&coupon=${
        coupon.length === 0 ? null : coupon.coupon
      }&shipping_address_id=${addressId.shipping_address_id}&`;

      let arr = [];
      products.map((product, index) => {
        arr.push(product.id);
      });
      let data = {
        stripe_token: cardDetails.id,
        coupon: coupon.coupon,
        shipping_address_id: addressId.shipping_address_id,
        cart_id: arr,
      };
      await Axios.post("/transaction", data, getHeader())
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => console.log(err.response));
    }
  };

  const handleNext = async () => {
    if (activeStep === steps.length - 1) {
      await submitCheckout();
    }
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="absolute" color="default" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Company name
          </Typography>
        </Toolbar>
      </AppBar>
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            Checkout
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  Thank you for your order.
                </Typography>
                <Typography variant="subtitle1">
                  Your order number is #2001539. We have emailed your order
                  confirmation, and will send you an update when your order has
                  shipped.
                </Typography>
                <Button onClick={() => continueShop()}>
                  Continue Shopping
                </Button>
                <Button onClick={() => history.push("/mycart")}>
                  Go to My Cart
                </Button>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(
                  activeStep,
                  usePre,
                  setUsePre,
                  addressId,
                  setAddressId,
                  cardDetails,
                  setCardDetails,
                  products,
                  setProducts,
                  coupon,
                  setCoupon
                )}
                <div className={classes.buttons}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} className={classes.button}>
                      Back
                    </Button>
                  )}
                  {usePre ? (
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={handleNext}
                      disabled={
                        !canGoNext(
                          activeStep,
                          activeStep === 0 ? addressId : cardDetails
                        )
                      }
                      className={classes.button}
                    >
                      {activeStep === steps.length - 1 ? "Place order" : "Next"}
                    </Button>
                  ) : (
                    ""
                  )}
                </div>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
        <Copyright />
      </main>
    </React.Fragment>
  );
}