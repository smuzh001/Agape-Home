import React from "react";
import Map from "../components/GoogleMap";
import { Typography, Grid, Paper, Divider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "../components/Accordion";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
  mapContainer: {
    height: "50vh",
    width: "90vw",
  },
}));

const directions = [
  {
    label: "From Kochi",
    instructions: [
      "About 75 kilometers from Kochi to Moolamattam",
      "Then 25km to Vagamon town.",
      "Then 13km to Plammood in the Upputharra route.",
      "400 meters from Plammod Junction via Azhamkala Road",
    ],
  },
  {
    label: "From Kottayam",
    instructions: [
      "About 38km from Kottayam to Eraattupetta.",
      "Then 26 km from Erattupetta to Vagamon.",
      "400 meters from Plammod Junction via Azhamkala Road.",
    ],
  },
  {
    label: "From Kattappana",
    instructions: [
      "19 km from kattappana to Upputhara.",
      "Then about 8 km to Valacoe in the Vagamon route.route.",
      "Then 2km to Plamood Junction.",
      "400 meters from Plammod Junction via Azhamkala Road.",
    ],
  },
  {
    label: "From Kuttikanam, Thekkady, Kumily Area",
    instructions: [
      "Get Upputhara",
      "Then about 8 km to Valacoe in teh Vagamon route.",
      "Then 2km to Plamood Junction.",
      "400 meters from Plammod Junction via Azhamkala Road",
    ],
  },
];

export default function ContactUs() {
  const classes = useStyles();

  return (
    <Grid container direction='column' justify='center' alignItems='center'>
      <Paper className={classes.root}>
        <Grid item>
          <Typography
            variant='h4'
            component='header'
            align='center'
            gutterBottom={true}
          >
            Directions
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <div className={classes.mapContainer}>
            <Map />
          </div>
        </Grid>
        <Divider />
        <Grid item xs={12}>
          <Accordion directions={directions} />
          {/* <h3>
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
        </p> */}
        </Grid>
      </Paper>
    </Grid>
  );
}
