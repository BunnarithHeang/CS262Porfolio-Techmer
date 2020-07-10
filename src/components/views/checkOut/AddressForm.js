import React from "react";
import {
  Grid,
  Typography,
  TextField,
  Button,
  MenuItem,
} from "@material-ui/core";
import Axios from "axios";
import { getHeader, getUser } from "../../../AuthUser";

export default function AddressForm(props) {
  let usePre = props.usePre;
  const setUsePre = props.setUsePre;
  let addressId = props.addressId;
  let setAddressId = props.setAddressId;
  const [country, setCountry] = React.useState([]);
  const [userAddresses, setUserAddresses] = React.useState([]);
  const [formError, setFormError] = React.useState({});

  React.useEffect(() => {
    if (usePre === true) {
      let user = getUser();
      Axios.get("/shipping-address/user/" + user.user_id, getHeader())
        .then((res) => setUserAddresses(res.data))
        .catch((err) => console.log(err));
    }
  }, [usePre]);

  React.useEffect(() => {
    Axios.get("/country")
      .then((res) => setCountry(res.data))
      .catch((err) => console.log(err));
  }, []);

  function createAddress() {
    Axios.post("/shipping-address", addressId, getHeader())
      .then((res) => {
        setUsePre(true);
      })
      .catch((err) => {
        console.log(err);
        setFormError(err.response.data.errors);
      });
  }

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Shipping address
        <Button onClick={() => setUsePre((pre) => !pre)}>
          {!usePre
            ? "Want To Use Previous Address?"
            : "Want To Create a New Address?"}{" "}
        </Button>
      </Typography>
      {usePre ? (
        <TextField
          select
          fullWidth
          label="Shipping Address"
          onChange={(e) => {
            setAddressId({ ...addressId, shipping_address_id: e.target.value })
          }}
          variant="outlined"
        >
          {userAddresses.map((option) => (
            <MenuItem key={option.id} value={option.id}>
              {option.address_line1}
            </MenuItem>
          ))}
        </TextField>
      ) : (
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              error={formError?.first_name ? true : false}
              helperText={formError?.first_name}
              variant="outlined"
              required
              fullWidth
              label="First Name"
              onChange={(e) => setAddressId({ ...addressId, first_name: e.target.value })}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              error={formError?.last_name ? true : false}
              helperText={formError?.last_name}
              variant="outlined"
              required
              fullWidth
              label="Last Name"
              onChange={(e) => setAddressId({ ...addressId, last_name: e.target.value })}
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <TextField
              error={formError?.phone_number ? true : false}
              helperText={formError?.phone_number}
              variant="outlined"
              type="number"
              required
              fullWidth
              label="Phone Number"
              onChange={(e) =>
                setAddressId({ ...addressId, phone_number: e.target.value })
              }
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <TextField
              fullWidth
              select
              label="Country"
              error={formError?.country_id ? true : false}
              helperText={formError?.country_id}
              onChange={(e) => setAddressId({ ...addressId, country_id: e.target.value })}
              variant="outlined"
            >
              {country.map((option) => (
                <MenuItem key={option?.id} value={option?.id}>
                  {option?.country}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} sm={12}>
            <TextField
              error={formError?.address_line1 ? true : false}
              helperText={formError?.address_line1}
              variant="outlined"
              required
              fullWidth
              label="Address Line 1"
              onChange={(e) =>
                setAddressId({ ...addressId, address_line1: e.target.value })
              }
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <TextField
              error={formError?.address_line2 ? true : false}
              helperText={formError?.address_line2}
              variant="outlined"
              required
              fullWidth
              label="Address Line 2"
              onChange={(e) =>
                setAddressId({ ...addressId, address_line2: e.target.value })
              }
            />
          </Grid>
          <Grid item xs={12}>
            <Button onClick={() => createAddress()}>Create</Button>
          </Grid>
        </Grid>
      )}
    </React.Fragment>
  );
}
