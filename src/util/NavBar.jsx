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
      display: "flex",
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    logo: {
      width: "400px",
      height: "100px",
    },
    title: {
      flexGrow: 1,
    },
    linkSection: {
      width: "auto",
      display: "flex",
      justifyContent: "flex-end",
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
      <AppBar position='sticky' color='transparent'>
        <Toolbar>
          <Button>
            <img
              className={classes.logo}
              src={AgapeBanner}
              alt='company logo'
            />
          </Button>
          <span className={classes.linkSection}>
            <Typography variant='body1'>
              <Link href='/' className={classes.link} color='inherit'>
                Home
              </Link>
            </Typography>
            <Typography variant='body1'>
              <Link href='/About' className={classes.link} color='inherit'>
                About
              </Link>
            </Typography>
            <Typography variant='body1'>
              <Link href='/Sessions' className={classes.link} color='inherit'>
                Sessions
              </Link>
            </Typography>
            {/* <Typography variant='body1'>
              <Link href='/Bookings' className={classes.link} color='inherit'>
                Bookings
              </Link>
            </Typography> */}
            <Typography variant='body1'>
              <Link href='/Directions' className={classes.link} color='inherit'>
                Directions
              </Link>
            </Typography>
            <Typography variant='body1'>
              <Link href='/Schedule' className={classes.link} color='inherit'>
                Schedule
              </Link>
            </Typography>
            <Typography variant='body1'>
              <Link href='/#ContactUs' className={classes.link} color='inherit'>
                Contact Us
              </Link>
            </Typography>
          </span>
        </Toolbar>
      </AppBar>
    </div>
  );
}
