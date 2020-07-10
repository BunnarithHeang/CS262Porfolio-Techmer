import React from "react";

import { Alert } from "@material-ui/lab";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { makeStyles } from "@material-ui/core/styles";
import {
  Collapse,
  Container,
  Typography,
  Box,
  Checkbox,
  Link,
  Grid,
  Avatar,
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
} from "@material-ui/core";
import Axios from "axios";
import { useHistory } from "react-router-dom";
import Cookies from "js-cookie";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="#">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function ForgotPassword() {
  const classes = useStyles();

  const [data, setData] = React.useState({});
  const [error, setError] = React.useState({});

  const [alert, setAlert] = React.useState({
    message: "",
    show: false,
  });

  function send() {
    Axios.post("/send-reset-email", data)
      .then((res) => {
        setAlert({ ...alert, show: true });
      })
      .catch((error) => {
        console.log(error.response.data.errors);
        setError(error.response.data.errors);
      });
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h3">
          Forgot Password
        </Typography>
        <form className={classes.form} noValidate>
          <Collapse in={alert.show}>
            <Alert severity="success">
              Please Check Your Email to Reset Your Password
            </Alert>
          </Collapse>
          <Grid container>
            <Grid item xs={12} sm={12}>
              <TextField
                error={error.email ? true : false}
                helperText={error.email}
                variant="outlined"
                required
                fullWidth
                label="Please Enter Your E-mail Address"
                onChange={(e) => setData({ ...data, email: e.target.value })}
              />
            </Grid>
          </Grid>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={() => send()}
          >
            Send
          </Button>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}
