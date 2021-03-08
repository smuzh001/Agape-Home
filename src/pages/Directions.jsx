import React from "react";
import Map from "../components/GoogleMap";
import { Typography, Grid, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  mapContainer: {
    height: "40vh",
    width: "90vw",
  },
  instruction: {
    width: "50%",
    height: "50%",
  },
});

export default function ContactUs() {
  const classes = useStyles();

  return (
    <Grid container direction='column' justify='center' alignItems='center'>
      <Grid item>
        <Typography variant='h5' component='h'>
          How to get here
        </Typography>
      </Grid>
      <Grid item>
        <div className={classes.mapContainer}>
          <Map />
        </div>
      </Grid>
      <Grid item>
        <h3>
          With GPS you will be brought here with Google Maps. Agape ecospiritual
          resort Vagamon
        </h3>
        <h4>From Kochi</h4>
        <p>
          <ul>
            <li>About 75 kilometers from Kochi to Moolamattam</li>
            <li>Then 25km to Vagamon town.</li>
            <li>Then 13km to Plammood in the Upputharra route.</li>
            <li>400 meters from Plammod Junction via Azhamkala Road</li>
          </ul>
        </p>
        <h4>From Kottayam</h4>
        <p>
          <ul>
            <li>About 38km from Kottayam to Eraattupetta.</li>
            <li>Then 26 km from Erattupetta to Vagamon.</li>
            <li>400 meters from Plammod Junction via Azhamkala Road.</li>
          </ul>
        </p>
        <h4>From Kattappana</h4>
        <p>
          <ul>
            <li>19 km from kattappana to Upputhara.</li>
            <li>Then about 8 km to Valacoe in the Vagamon route.route.</li>
            <li>Then 2km to Plamood Junction.</li>
            <li>400 meters from Plammod Junction via Azhamkala Road.</li>
          </ul>
        </p>
        <h4>From Kuttikanam , Thekkady, Kumily Area</h4>
        <p>
          <ul>
            <li>Get Upputhara</li>
            <li>Then about 8 km to Valacoe in teh Vagamon route.</li>
            <li>Then 2km to Plamood Junction.</li>
            <li>400 meters from Plammod Junction via Azhamkala Road</li>
          </ul>
        </p>
      </Grid>
    </Grid>
  );
}
