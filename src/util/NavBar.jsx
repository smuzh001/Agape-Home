import React from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";

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
    },
    menuButton: {
      marginRight: theme.spacing(2),
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
  // const preventDefault = (event) =>
  //   event.preventDefault();

  return (
    <div className={classes.root}>
      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Agape Resort
          </Typography>
          <span className={classes.linkSection}>
            <Typography variant="body1">
              <Link href="/" className={classes.link} color="inherit">
                Home
              </Link>
            </Typography>
            <Typography variant="body1">
              <Link href="/About" className={classes.link} color="inherit">
                About
              </Link>
            </Typography>
            <Typography variant="body1">
              <Link href="/Sessions" className={classes.link} color="inherit">
                Sessions
              </Link>
            </Typography>
            <Typography variant="body1">
              <Link href="/Bookings" className={classes.link} color="inherit">
                Bookings
              </Link>
            </Typography>
            <Typography variant="body1">
              <Link href="/Contact-Us" className={classes.link} color="inherit">
                Contact Us
              </Link>
            </Typography>
          </span>
        </Toolbar>
      </AppBar>
    </div>
  );
}