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

export default function SignIn() {
  const classes = useStyles();
  const history = useHistory();

  const [data, setData] = React.useState({
    username: "",
    password: "",
  });

  const [alert, setAlert] = React.useState({
    message: "",
    show: false,
  });

  function login() {
    Axios.post("/login", data)
      .then((res) => {
        let user_data = {
          token: res.data.accessToken,
          user_id: res.data.token.user_id,
        };
        Cookies.set("user_data", user_data, { expires: 1 });
        window.location.reload(false);
        history.push("/");
      })
      .catch((error) => {
        setAlert({ ...alert, show: false });
        setTimeout(function () {
          setAlert({ show: true, message: error.response.data.message });
        }, 250);
      });
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h2">
          Techfinder
        </Typography>
        <Typography component="h1" variant="h3">
          Login
        </Typography>
        <form className={classes.form} noValidate>
          <Collapse in={alert.show}>
            <Alert severity="error">Credential Failed</Alert>
          </Collapse>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={(e) => setData({ ...data, username: e.target.value })}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={(e) => setData({ ...data, password: e.target.value })}
          />
          <Button
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={() => login()}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link to="/forgot-password" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/register" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}
