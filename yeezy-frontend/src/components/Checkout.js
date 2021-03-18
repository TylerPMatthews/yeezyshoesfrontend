import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

const Checkout = () => {
  const { push } = useHistory();
  const initialFormValues = {
    customer_first: "",
    customer_last: "",
    customer_street: "",
    customer_city: "",
    customer_state: "",
    customer_zip: "",
    user_id: "2",
  };

  const [value, setValue] = useState(initialFormValues);

  const handleChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://yeezyshoesbackend.herokuapp.com/api/checkout", value)
      .then((res) => {
        window.alert("Thank you for submiting your shipping information!");
        push("/payment");
      })
      .catch((err) => {
        console.log("Axios checkout post error", err);
      });
  };

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

  function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {"Copyright © "}
        <Link color="inherit" href="https://material-ui.com/">
          Yeezy Shoe Store
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    );
  }
  const classes = useStyles();
  return (
    <div>
      <IconButton
        onClick={() => {
          push("/cart");
        }}
      >
        <ArrowBackIcon />
      </IconButton>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Checkout
          </Typography>
          <form className={classes.form} noValidate onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="customer_first"
                  variant="outlined"
                  required
                  fullWidth
                  id="customer_first"
                  label="First Name"
                  autoFocus
                  value={value.customer_first}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="customer_last"
                  variant="outlined"
                  required
                  fullWidth
                  id="customer_last"
                  label="Last Name"
                  autoFocus
                  value={value.customer_last}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="customer_street"
                  variant="outlined"
                  required
                  fullWidth
                  id="customer_street"
                  label="Street"
                  autoFocus
                  value={value.customer_street}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="customer_city"
                  variant="outlined"
                  required
                  fullWidth
                  id="customer_city"
                  label="City"
                  autoFocus
                  value={value.customer_city}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="customer_state"
                  variant="outlined"
                  required
                  fullWidth
                  id="customer_state"
                  label="State"
                  autoFocus
                  value={value.customer_state}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="customer_zip"
                  variant="outlined"
                  required
                  fullWidth
                  id="customer_zip"
                  label="Zip"
                  autoFocus
                  value={value.customer_zip}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Submit
            </Button>
          </form>
        </div>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>
    </div>
  );
};
export default Checkout;

