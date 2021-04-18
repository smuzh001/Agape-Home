import React, { useState, useContext, useEffect } from "react";
import { TextField, Grid, Paper, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import firebase from "firebase/app";
import "firebase/auth";

import { AuthContext } from "../contexts/AuthContext";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    width: "40vw",
    height: "40vh",
    marginTop: "20vh",
  },
}));

export default function UserLogin() {
  const [loginData, setLoginData] = useState({ email: "", password: "" });

  const contextValue = useContext(AuthContext);

  const login = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(loginData.email, loginData.password)
      .then((userCredentials) => {
        var user = userCredentials.user;
        console.log(user);
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
      });
  };

  useEffect(() => {
    if (loginData) console.log(loginData);
  }, [loginData]);

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container direction='column' justify='center' alignItems='center'>
        <Grid item>
          <Paper elevation={3} variant='outlined' className={classes.paper}>
            <Grid
              container
              direction='column'
              justify='center'
              alignItems='center'
              spacing={4}
            >
              <Grid item>
                <Typography variant='h6'>Login</Typography>
              </Grid>
              <Grid item>
                <TextField
                  name='email'
                  variant='outlined'
                  label='Email'
                  onChange={(e) => {
                    setLoginData({
                      ...loginData,
                      [e.target.name]: e.target.value,
                    });
                  }}
                />
              </Grid>
              <Grid item>
                <TextField
                  name='password'
                  variant='outlined'
                  label='Password'
                  onChange={(e) => {
                    setLoginData({
                      ...loginData,
                      [e.target.name]: e.target.value,
                    });
                  }}
                />
              </Grid>
              <Grid item>
                <Button variant='contained' onClick={login}>
                  Submit
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
