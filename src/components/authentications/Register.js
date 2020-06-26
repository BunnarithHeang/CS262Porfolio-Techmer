import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Grid,
  Box,
  Typography,
  OutlinedInput,
  InputLabel,
  InputAdornment,
  IconButton,
  FormControl,
  FormHelperText,
  Container,
  MenuItem,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import DatePicker from "./DatePicker";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Cookies from "js-cookie";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
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
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp() {
  const classes = useStyles();
  const history = useHistory();
  const [data, setData] = React.useState({
    username: null,
    first_name: null,
    last_name: null,
    date_of_birth: null,
    phone_number: "",
    phone_code: "",
    number: "",
    email: null,
    password: null,
    password_confirmation: null,
  });

  const default_error = {
    username: { error: false, message: null },
    first_name: { error: false, message: null },
    last_name: { error: false, message: null },
    date_of_birth: { error: false, message: null },
    phone_number: { error: false, message: null },
    email: { error: false, message: null },
    password: { error: false, message: null },
    password_confirmation: { error: false, message: null },
  };

  const [error, setError] = React.useState(default_error);

  const [country, setCountry] = React.useState([]);

  React.useEffect(() => {
    axios.get("/country").then((res) => {
      setCountry(res.data);
    });
  }, []);

  function onSignUp() {
    let all_data = data;
    all_data.phone_number = data.phone_code + data.number;
    all_data.password = password.password.value;
    all_data.password_confirmation = password.password_confirmation.value;
    all_data.date_of_birth =
      data.date_of_birth.getFullYear() +
      "-" +
      (data.date_of_birth.getMonth() + 1) +
      "-" +
      data.date_of_birth.getDate();

    setData(all_data);

    axios
      .post("/register", data)
      .then((res) => {
        let user_data = {
          token: res.data.success.accessToken,
          user_id: res.data.id,
        };
        Cookies.set("user_data", user_data, { expires: 1 });
        window.location.reload(false);
        history.push("/");
      })
      .catch((errorRes) => {
        let errors = errorRes.response.data.errors;
        let all_error = default_error;
        for (const pro in errors) {
          all_error = {
            ...all_error,
            [pro]: { error: true, message: errors[pro] },
          };
        }
        setError(all_error);
      });
  }

  const [password, setPassword] = React.useState({
    password: { show: false, value: null },
    password_confirmation: { show: false, value: null },
  });

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                error={error.username.error}
                helperText={error.username.message}
                variant="outlined"
                required
                fullWidth
                label="Username"
                onChange={(e) => setData({ ...data, username: e.target.value })}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <DatePicker
                data={data}
                setData={setData}
                error={error.date_of_birth.error}
                helperText={error.date_of_birth.message}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                error={error.first_name.error}
                helperText={error.first_name.message}
                variant="outlined"
                required
                fullWidth
                label="First Name"
                onChange={(e) =>
                  setData({ ...data, first_name: e.target.value })
                }
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                error={error.last_name.error}
                helperText={error.last_name.message}
                variant="outlined"
                required
                fullWidth
                label="Last Name"
                onChange={(e) =>
                  setData({ ...data, last_name: e.target.value })
                }
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                error={error.email.error}
                helperText={error.email.message}
                variant="outlined"
                required
                fullWidth
                label="Email Address"
                onChange={(e) => setData({ ...data, email: e.target.value })}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl
                fullWidth
                className={classes.margin}
                variant="outlined"
                error={error.phone_number.error}
              >
                <InputLabel htmlFor="outlined-adornment-amount">
                  Phone Number *
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-amount"
                  label="Phone Number  "
                  onChange={(e) => setData({ ...data, number: e.target.value })}
                  startAdornment={
                    <InputAdornment position="start">
                      <TextField
                        id="standard-select-currency"
                        select
                        onChange={(e) =>
                          setData({ ...data, phone_code: e.target.value })
                        }
                      >
                        {country.map((option) => (
                          <MenuItem key={option.id} value={option.phone_code}>
                            {"+" + option.phone_code + " " + option.country}
                          </MenuItem>
                        ))}
                      </TextField>
                    </InputAdornment>
                  }
                />
                <FormHelperText id="component-error-text">
                  {error.phone_number.message}
                </FormHelperText>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl
                fullWidth
                className={classes.margin}
                variant="outlined"
                error={error.password.error}
              >
                <InputLabel htmlFor="outlined-adornment-password">
                  Password *
                </InputLabel>
                <OutlinedInput
                  label="Password  "
                  type={password.password.show ? "text" : "password"}
                  onChange={(e) =>
                    setPassword({
                      ...password,
                      password: {
                        ...password.password,
                        value: e.target.value,
                      },
                    })
                  }
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={() =>
                          setPassword({
                            ...password,
                            password: {
                              ...password.password,
                              show: !password.password.show,
                            },
                          })
                        }
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {password.password.show ? (
                          <Visibility />
                        ) : (
                          <VisibilityOff />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                />
                <FormHelperText id="component-error-text">
                  {error.password.message}
                </FormHelperText>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl
                fullWidth
                className={classes.margin}
                variant="outlined"
                error={error.password_confirmation.error}
              >
                <InputLabel htmlFor="outlined-adornment-password">
                  Confirm Password *
                </InputLabel>
                <OutlinedInput
                  label="Confirm Password  "
                  type={
                    password.password_confirmation.show ? "text" : "password"
                  }
                  onChange={(e) =>
                    setPassword({
                      ...password,
                      password_confirmation: {
                        ...password.password_confirmation,
                        value: e.target.value,
                      },
                    })
                  }
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={() =>
                          setPassword({
                            ...password,
                            password_confirmation: {
                              ...password.password_confirmation,
                              show: !password.password_confirmation.show,
                            },
                          })
                        }
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {password.password_confirmation.show ? (
                          <Visibility />
                        ) : (
                          <VisibilityOff />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                />
                <FormHelperText id="component-error-text">
                  {error.password_confirmation.message}
                </FormHelperText>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>
          </Grid>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={() => onSignUp()}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/login" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}
