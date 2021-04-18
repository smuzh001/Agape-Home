import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormGroup from "@material-ui/core/FormGroup";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import AgapeBanner from "../assets/AgapeBanner.jpg";
import { Button, Grid, Link, Drawer, useMediaQuery } from "@material-ui/core";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import NavBarMenu from "./NavBarMenu";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    justifyItems: "center",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  logo: {
    width: "40vh",
    height: "5vw",
  },
  link: {
    margin: "5px",
  },
}));

export default function MenuAppBar() {
  const classes = useStyles();
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [openDrawer, setOpenDrawer] = React.useState(false);
  const open = Boolean(anchorEl);
  const checkSmallScreen = useMediaQuery((theme) => theme.breakpoints.up("md"));

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDrawerOpen = () => {
    setOpenDrawer(true);
  };

  const handleDrawerClose = () => {
    setOpenDrawer(false);
  };

  return (
    <div className={classes.root}>
      {/* <FormGroup>
        <FormControlLabel
          control={
            <Switch
              checked={auth}
              onChange={handleChange}
              aria-label='login switch'
            />
          }
          label={auth ? "Logout" : "Login"}
        />
      </FormGroup> */}
      <AppBar position='static' color='white' className={classes}>
        {checkSmallScreen ? (
          <Toolbar>
            <img
              className={classes.logo}
              src={AgapeBanner}
              alt='company logo'
            />
            <Grid container direction='row' alignItems='center'>
              <Grid item>
                <Typography variant='body1'>
                  <Link href='/' className={classes.link} color='inherit'>
                    Home
                  </Link>
                  <Link href='/About' className={classes.link} color='inherit'>
                    About
                  </Link>
                  <Link
                    href='/Sessions'
                    className={classes.link}
                    color='inherit'
                  >
                    Sessions
                  </Link>

                  {/* <Typography variant='body1'>
              <Link href='/Bookings' className={classes.link} color='inherit'>
                Bookings
              </Link>
            </Typography> */}
                  <Link
                    href='/Directions'
                    className={classes.link}
                    color='inherit'
                  >
                    Directions
                  </Link>
                  <Link
                    href='/Schedule'
                    className={classes.link}
                    color='inherit'
                  >
                    Schedule
                  </Link>
                  <Link
                    href='/#ContactUs'
                    className={classes.link}
                    color='inherit'
                  >
                    Contact Us
                  </Link>
                  <Link href='/Login' className={classes.link} color='inherit'>
                    Login
                  </Link>
                </Typography>
              </Grid>
            </Grid>

            {auth && (
              <div>
                <IconButton
                  aria-label='account of current user'
                  aria-controls='menu-appbar'
                  aria-haspopup='true'
                  onClick={handleMenu}
                  color='inherit'
                >
                  <AccountCircle />
                </IconButton>
                <Menu
                  id='menu-appbar'
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={openDrawer}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                  <MenuItem onClick={handleClose}>My account</MenuItem>
                </Menu>
              </div>
            )}
          </Toolbar>
        ) : (
          <Toolbar>
            {" "}
            <NavBarMenu />
            <img
              className={classes.logo}
              src={AgapeBanner}
              alt='company logo'
            />
          </Toolbar>
        )}
      </AppBar>
      {/* <Drawer
        className={classes.drawer}
        variant='persistent'
        anchor='left'
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
      </Drawer> */}
    </div>
  );
}

// import React from "react";
// import { createStyles, makeStyles } from "@material-ui/core/styles";
// import AgapeBanner from "../assets/AgapeBanner.jpg";
// import { Button } from "@material-ui/core";
// // import { useHistory } from "react-router-dom";
// // import MenuIcon from "@material-ui/icons/Menu";
// import {
//   AppBar,
//   // Button,
//   // IconButton,
//   Link,
//   Toolbar,
//   Typography,
// } from "@material-ui/core";
// const useStyles = makeStyles((theme) =>
//   createStyles({
//     root: {
//       flexGrow: 1,
//       height: "5vw",
//     },
//     logo: {
//       width: "40vh",
//       height: "5vw",
//     },
//     title: {
//       flexGrow: 1,
//     },
//     appBar: {
//       alignItems: "center",
//     },

//     link: {
//       margin: "5px",
//     },
//   })
// );

// export default function NavBar() {
//   const classes = useStyles();

//   return (
//     <div className={classes.root}>
//       <AppBar position='sticky' color='white' className={classes.appBar}>
//         <Toolbar>
//           <Typography variant='body1'>
//             <Link href='/' className={classes.link} color='inherit'>
//               Home
//             </Link>
//             <Link href='/About' className={classes.link} color='inherit'>
//               About
//             </Link>
//             <Link href='/Sessions' className={classes.link} color='inherit'>
//               Sessions
//             </Link>
//             <img
//               className={classes.logo}
//               src={AgapeBanner}
//               alt='company logo'
//             />

//             {/* <Typography variant='body1'>
//               <Link href='/Bookings' className={classes.link} color='inherit'>
//                 Bookings
//               </Link>
//             </Typography> */}
//             <Link href='/Directions' className={classes.link} color='inherit'>
//               Directions
//             </Link>
//             <Link href='/Schedule' className={classes.link} color='inherit'>
//               Schedule
//             </Link>
//             <Link href='/#ContactUs' className={classes.link} color='inherit'>
//               Contact Us
//             </Link>
//             <Link href='/Login' className={classes.link} color='inherit'>
//               Login
//             </Link>
//           </Typography>
//         </Toolbar>
//       </AppBar>
//     </div>
//   );
// }
