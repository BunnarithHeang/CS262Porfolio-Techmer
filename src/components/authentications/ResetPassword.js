import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Alert } from "@material-ui/lab";
import {
  Avatar,
  Button,
  Collapse,
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
import Axios from "axios";
import { useHistory } from "react-router-dom";
import Cookies from "js-cookie";
import { getHeader } from "../../AuthUser";

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

export default function ResetPassword(props) {
  const classes = useStyles();
  const history = useHistory();

  const [data, setData] = React.useState({});
  const [alert, setAlert] = React.useState({
    type: "success",
    show: false,
    message: "",
  });
  const [error, setError] = React.useState({});

  const [password, setPassword] = React.useState({
    password: { show: false, value: null },
    password_confirmation: { show: false, value: null },
  });

  const [valid, setValid] = React.useState(false);

  React.useEffect(() => {
    if (props?.params?.token) {
      Axios.get("/check-reset-token/" + props.params.token)
        .then(() => {
          setValid(true);
          setData({ token: props.params.token });
        })
        .catch((error) => console.log(error));
    }
  }, []);

  function reset() {
    let all_data = data;

    all_data.password = password.password.value;
    all_data.password_confirmation = password.password_confirmation.value;

    setData(all_data);

    Axios.post("/reset-password", data)
      .then((res) => {
        setAlert({ message: "Successful", show: true, type: "success" });
        // console.log(res.data);
        // let user_data = {
        //   token: res.data.success.accessToken,
        //   user_id: res.data.id,
        // };
        // Cookies.set("user_data", user_data, { expires: 1 });
        // window.location.reload(false);
        // history.push("/");
      })
      .catch((errorRes) => {
        if (errorRes?.response?.data?.errors)
          setError(errorRes?.response?.data?.errors);
        else setAlert({ ...alert, message: errorRes?.data?.message });
      });
  }

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <React.Fragment>
      {valid ? (
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Reset Password
            </Typography>
            <form className={classes.form} noValidate>
              <Grid container>
                <Collapse in={alert.show}>
                  <Alert severity={alert.type}>{alert.message}</Alert>
                </Collapse>
                <Grid item xs={12}>
                  <FormControl
                    fullWidth
                    className={classes.margin}
                    variant="outlined"
                    error={error.password ? true : false}
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
                      {error.password}
                    </FormHelperText>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <FormControl
                    fullWidth
                    className={classes.margin}
                    variant="outlined"
                    error={error.password_confirmation ? true : false}
                  >
                    <InputLabel htmlFor="outlined-adornment-password">
                      Confirm Password *
                    </InputLabel>
                    <OutlinedInput
                      label="Confirm Password  "
                      type={
                        password.password_confirmation.show
                          ? "text"
                          : "password"
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
                      {error.password_confirmation}
                    </FormHelperText>
                  </FormControl>
                </Grid>
              </Grid>
              <Button
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={() => reset()}
              >
                Reset
              </Button>
            </form>
          </div>
          <Box mt={5}>
            <Copyright />
          </Box>
        </Container>
      ) : (
        <h1>Invalid Link</h1>
      )}
    </React.Fragment>
  );
}
