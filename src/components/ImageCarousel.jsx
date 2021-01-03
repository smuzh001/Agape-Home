import React from "react";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

// import AgapeBanner from "../assets/AgapeBanner.jpg";
import AgapeResort1 from "../assets/AgapeResort1.jpg";
import AgapeResort2 from "../assets/AgapeResort2.jpg";
import AgapeResort3 from "../assets/AgapeResort3.jpg";
import AgapeResort4 from "../assets/AgapeResort4.jpg";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const styles = {
  slide: {
    height: "900px",
    color: "#fff",
    /* Center and scale the image nicely */
    "background-position": "center",
    "background-size": "cover",
    "background-repeat": "no-repeat",
  },
  slide1: {
    "background-image": `url(${AgapeResort1})`,
  },
  slide2: {
    "background-image": `url(${AgapeResort2})`,
  },
  slide3: {
    "background-image": `url(${AgapeResort3})`,
  },
  slide4: {
    "background-image": `url(${AgapeResort4})`,
  },
};

const MyComponent = () => (
  <div>
    <AutoPlaySwipeableViews enableMouseEvents axis={"x"}>
      <div style={Object.assign({}, styles.slide, styles.slide1)}>
        slide n°1
      </div>
      <div style={Object.assign({}, styles.slide, styles.slide2)}>
        slide n°2
      </div>
      <div style={Object.assign({}, styles.slide, styles.slide3)}>
        slide n°3
      </div>
      <div style={Object.assign({}, styles.slide, styles.slide4)}>
        slide n°4
      </div>
    </AutoPlaySwipeableViews>
  </div>
);

export default MyComponent;
