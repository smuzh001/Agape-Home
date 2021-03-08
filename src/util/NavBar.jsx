import React from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import AgapeBanner from "../assets/AgapeBanner.jpg";
import { Button } from "@material-ui/core";
// import { useHistory } from "react-router-dom";
// import MenuIcon from "@material-ui/icons/Menu";
import {
  AppBar,
  // Button,
  // IconButton,
  Link,
  Toolbar,
  Typography,
} from "@material-ui/core";
const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      height: "5vw",
    },
    logo: {
      width: "40vh",
      height: "5vw",
    },
    title: {
      flexGrow: 1,
    },
    appBar: {
      alignItems: "center",
    },

    link: {
      margin: "5px",
    },
  })
);

export default function NavBar() {
  const classes = useStyles();
  // let history = useHistory();
  // const preventDefault = (event) =>
  //   event.preventDefault();

  // const scrollToComponent = (id, history) => {
  //   if(window.location.pathname !== '/'){
  //     history.push(`/#${id}`);
  //   }
  //   else{
  //     document.getElementById(id).scrollIntoView({behavior: "smooth", block: 'center'});
  //   }
  // }

  return (
    <div className={classes.root}>
      <AppBar position='sticky' color='white' className={classes.appBar}>
        <Toolbar>
          <Typography variant='body1' align='center'>
            <Link href='/' className={classes.link} color='inherit'>
              Home
            </Link>
            <Link href='/About' className={classes.link} color='inherit'>
              About
            </Link>
            <Link href='/Sessions' className={classes.link} color='inherit'>
              Sessions
            </Link>
            <img
              className={classes.logo}
              src={AgapeBanner}
              alt='company logo'
            />

            {/* <Typography variant='body1'>
              <Link href='/Bookings' className={classes.link} color='inherit'>
                Bookings
              </Link>
            </Typography> */}
            <Link href='/Directions' className={classes.link} color='inherit'>
              Directions
            </Link>
            <Link href='/Schedule' className={classes.link} color='inherit'>
              Schedule
            </Link>
            <Link href='/#ContactUs' className={classes.link} color='inherit'>
              Contact Us
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
