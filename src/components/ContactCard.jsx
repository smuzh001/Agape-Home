import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import { Button, TextField, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  contactCardRoot: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: "2%",
  },
  contactCardDetails: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  contactCardNumbers: {
    display: "flex",
    justifyContent: "flexStart",
    padding: "5%",
  },
  contactTextFields: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  textField: {
    width: "80ch",
    margin: theme.spacing(2),
  },
  typography: {
    padding: theme.spacing(2),
  },
}));

export default function ContactCard() {
  const classes = useStyles();
  return (
    <section id='Contact-Card-Root' className={classes.contactCardRoot}>
      <Typography variant='h3' gutterBottom={true} align={"center"}>
        Contact Us
      </Typography>
      <div id='ContactSection' className={classes.contactCardDetails}>
        <div id='Contact-Card-Details' className={classes.contactCardNumbers}>
          <ul>
            <li>
              <h3>
                <span>Whatsapp</span>
              </h3>
              +1 951 323 5092
              <br />
              +81 90 6184 7746
              <br />
            </li>
            <li>
              <h3>
                <span>Phone</span>
              </h3>
              +91 81569 06909
            </li>
            <li>
              <h3>
                <span>Email</span>
              </h3>
              <a href='#'>peejose@gmail.com</a>
              <br />
              <a href='#'>augustinejojo@hotmail.com</a>
            </li>
          </ul>
        </div>
        <div id='Contact-Us' className={classes.contactTextFields}>
          <div className='contact-text'>
            <div>
              <TextField
                className={classes.textField}
                id='outlined-textarea'
                label='Name'
                placeholder=''
                multiline
                variant='outlined'
              />
            </div>
            <div>
              <TextField
                className={classes.textField}
                id='outlined-textarea'
                label='Subject'
                placeholder=''
                multiline
                variant='outlined'
              />
            </div>
            <div>
              <TextField
                className={classes.textField}
                id='outlined-textarea'
                label='Message'
                placeholder=''
                multiline
                rows={10}
                variant='outlined'
              />
            </div>
            <div>
              <Button variant='contained' color='secondary' align='right'>
                Send Message
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
