import React from "react";
import {
  createStyles,
  makeStyles,
  createMuiTheme,
  ThemeProvider,
} from "@material-ui/core/styles";
import { Paper, Fab, Typography } from "@material-ui/core";
// import Carousel from "react-responsive-carousel";
import Carousel from "../components/ImageCarousel";
import ContactCard from "../components/ContactCard";

// import AgapeResort1 from "../assets/AgapeResort1.jpg";
import AgapeResort2 from "../assets/AgapeResort2.jpg";
// import AgapeResort3 from "../assets/AgapeResort3.jpg";
// import AgapeResort4 from "../assets/AgapeResort4.jpg";

// const images = [
//   "https://images.pexels.com/photos/3740695/pexels-photo-3740695.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//   "https://images.pexels.com/photos/3740446/pexels-photo-3740446.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//   "https://images.pexels.com/photos/351265/pexels-photo-351265.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//   "https://images.pexels.com/photos/924675/pexels-photo-924675.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
// ];

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      flexGrow: 1,
      position: "relative",
    },
    page: {
      width: "90%",
      height: "100%",
      "margin-left": "auto",
      "margin-right": "auto",
      padding: "2%",
    },
    pageImage: {
      width: "50%",
      height: "100%",
    },
    fab: {
      position: "absolute",
      left: "48%",
      bottom: "5%",
    },
    IntroSection: {
      display: "flex",
      flexDirection: "row",
    },
    text: {
      display: "flex",
      flexDirection: "column",
      width: "50%",
      padding: "2%",
      fontSize: "20rem",
    },
    row: {
      display: "flex",
      flexWrap: "wrap",
      boxSizing: "border-box",
      alignItems: "stretch",
    },
  })
);

const theme = createMuiTheme({
  props: {
    MuiTypography: {
      fontSize: 72,
    },
  },
});

export default function Home() {
  const classes = useStyles();

  const scrollToIntro = () => {
    const element = document.getElementById("Introduction");
    const btn = document.getElementById("navigateFAB");
    btn.style.display = "none";
    element.scrollIntoView({ block: "start", behavior: "smooth" });
  };

  return (
    <div className={classes.root}>
      <div style={{ position: "relative" }}>
        <Carousel />
        <Fab
          id='navigateFAB'
          className={classes.fab}
          color='inherit'
          aria-label='navigate'
          variant='extended'
          onClick={scrollToIntro}
        >
          Explore
        </Fab>
      </div>

      <Paper
        id='Introduction'
        className={classes.page}
        square
        elevation={false}
      >
        <Typography variant='h3' gutterBottom={true} align='center'>
          What is Agape Resort
        </Typography>
        <div className={classes.IntroSection}>
          <span className={classes.text}>
            <ThemeProvider theme={theme}>
              {" "}
              <Typography variant='body1' gutterBottom={true} align='left'>
                A getaway haven in a rustic environment in the Popular Vagamon
                hill ranges, the prominent hill station in Kerala, South India.
                The resort provides a quite quality stay for guests with family
                and friends in harmony with nature featured by the facilities of
                treehouse- a spacious house built in traditional Kerala
                architecture exclusively with wood and eco friendly materials.
                This place is a kind of sanctum especially for the individuals
                who seek to get a complete spiritual, physical and mental
                rejuvenation.
              </Typography>{" "}
              <Typography variant='body1' gutterBottom={true} align='left'>
                Vagamon is famous for its exquisite natural beauty and its
                exhilarating cool weather. This location is in the village of
                Plamood which is not yet tainted by the flurries of the town but
                sprawling in the fringes of pristine Vagamon hill ranges. The
                resort located in a small hill side surrounded by a slew of
                luxuriant tea estates, cardamom, pepper, and coffee plantations.
              </Typography>
              <Typography variant='body1' gutterBottom={true} align='left'>
                {" "}
                Apart from these cultivations, the highlight of Agape eco
                spiritual resort is the rich habitation of hundreds of variety
                exotic fruit plants which sprawls in a 3 acre farm. The rare
                undefiled environment gives the opportunity to experience
                beautiful tweets of many kinds of indigenous birds, a soft creek
                which flows through the resort land that renders safe swimming
                in the unsoiled water.
              </Typography>
            </ThemeProvider>
          </span>
          <img className={classes.pageImage} src={AgapeResort2} alt='pageImg' />
        </div>

        <Paper className={classes.ContactSection} elevation={false}>
          <a href="#" id="ContactUs">

          </a>
          <ContactCard  />
        </Paper>
      </Paper>
    </div>
  );
}
