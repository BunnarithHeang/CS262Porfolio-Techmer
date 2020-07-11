import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import Axios from 'axios';
import { getHeader } from '../../../AuthUser';
import { LinearProgress, TextField } from '@material-ui/core';
import checkImg from '../../../images/check.png';
import reportImg from '../../../images/report.png';

// const payments = [
//   { name: 'Card type', detail: 'Visa' },
//   { name: 'Card holder', detail: 'Mr John Smith' },
//   { name: 'Card number', detail: 'xxxx-xxxx-xxxx-1234' },
//   { name: 'Expiry date', detail: '04/2024' },
// ];

const useStyles = makeStyles((theme) => ({
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: 700,
  },
  title: {
    marginTop: theme.spacing(2),
  },
}));

function parseData(resData) {
  var tmpTotal = 0;
  var data = [];
  resData.map((product) => {
    let resProductOptions = product.product.product_option;
    var productOption = {};
    for (var i = 0; i < resProductOptions.length; ++i) {
      if (resProductOptions[i].id === product.product_option_id) {
        tmpTotal += (100 - resProductOptions[i].discount) * resProductOptions[i].price * product.qty;
        productOption = resProductOptions[i]; break;
      }
    }
    data.push({
      'id': product.id,
      'product_option_id': product.product_option_id,
      'title': product.product.title,  
      'qty': product.qty,
      'productOption': productOption,
    })
  });
  return data;
}

function verifyCoupon(coupon, setCoupon, setCouponApplied) {
  Axios.get('/coupon/check/' + coupon, getHeader())
    .then(res => {
      if (res.status === 200) {
        setCoupon(res.data);
        setCouponApplied(true);
        return true;
      }
    })
    .catch((error) => { 
      console.log(error.response) 
      setCouponApplied(false);
      return false;
    });
}


export default function Review(props) {
  const classes = useStyles();
  let addressId = props.addressId;
  let cardDetails = props.cardDetails;
  let products = props.products;
  let setProducts = props.setProducts;
  let coupon = props.coupon; 
  let setCoupon = props.setCoupon;

  const [address, setAddress] = React.useState({});
  const [showLoading, setLoading] = React.useState(true);
  const [totalPrice, setTotal] = React.useState(0);
  const [couponApplied, setCouponApplied] = React.useState(false); //check coupon applied

  var payments = [];

  React.useEffect(() => {
    Axios.get('/user-cart/user', getHeader())
      .then((res) => {
        let data = res.data;
        data = parseData(data);
        var tmpTotal = 0;
        let tmp = data.map(product => {
        let itemPrice = product.qty * product.productOption.price * product.qty;
        tmpTotal += itemPrice;
        return {
          'id': product.id,
          'name': product.title,
          'qty': "Qty: " + product.qty,
          'price': "$ " + (itemPrice).toFixed(2),
        }}
        );
        setTotal(tmpTotal);
        setProducts(tmp);
      })
      .catch((error) => { console.log(error.response) });
      
      Axios.get('/shipping-address/' + addressId.shipping_address_id, getHeader())
      .then(res => {
        setAddress(res.data);
        setLoading(false);
      })
      .catch(error => console.log(error.response) )
    }, []);
  
  payments.push({name: 'Card type', detail: cardDetails.card.brand});
  payments.push({name: 'Card holder', detail: cardDetails.card.name});
  payments.push({name: 'Card number', detail: `xxxx-xxxx-xxxx-${cardDetails.card.last4}`});
  payments.push({name: 'Expiry date', detail: `${cardDetails.card.exp_month}/${cardDetails.card.exp_year}`});

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {
          !showLoading 
          ? (products.map((product, index) => {
            return (
              <ListItem className={classes.listItem} key={index}>
                <ListItemText primary={product.name} secondary={product.qty} />
                <Typography variant="body2">{product.price}</Typography>
              </ListItem>
            )})) : (
            <LinearProgress 
              status={'loading'}
            />
          )
        }
        <ListItem className={classes.listItem}>
          <ListItemText primary="Coupon" />
          <TextField 
            value={typeof coupon === 'object' ? coupon.coupon : coupon} 
            onChange={(e) => {
              if (e.target.value == '') {
               setCoupon('');
               setCouponApplied(false)
              }
              setCoupon(e.target.value)
            }} 
            label="Apply Coupon Here"
          />
          <button onClick={() => {
            verifyCoupon(coupon, setCoupon, setCouponApplied) 
          }}>
            Apply
          </button>
        </ListItem>

        <ListItem className={classes.listItem}>
          <ListItemText primary="Sub-Total" />
          <Typography variant="body2" className={classes.total}>
            ${totalPrice.toFixed(2)}
          </Typography>
        </ListItem>
        <ListItem className={classes.listItem}>
          <ListItemText primary="Coupon Applied:" />
          <Typography variant="body1" className={classes.total}>
            { typeof coupon === 'string' 
              ? coupon.length === 0 
                ? ""
                : <img src={reportImg} width="15px" height="15px"/>
              : couponApplied 
                ? <img src={checkImg} width="15px" height="15px"/> 
                : ""
            } 
            {" "}{" "}
            %{couponApplied ? coupon.discount : 0}
          </Typography>
        </ListItem>
        <ListItem className={classes.listItem}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" className={classes.total}>
            ${
              (couponApplied 
                ? (coupon.discount / 100) * totalPrice : totalPrice
              ).toFixed(2)
            }
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Shipping
          </Typography>
          <Typography gutterBottom>{address.full_name}</Typography>
          <Typography gutterBottom>{[address.address_line1]}</Typography>
          <Typography gutterBottom>{[address.address_line2]}</Typography>
          <Typography gutterBottom>{[address.phone_number]}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Payment details
          </Typography>
          <Grid container>
            {payments.map((payment) => (
              <React.Fragment key={payment.name}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.detail}</Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}