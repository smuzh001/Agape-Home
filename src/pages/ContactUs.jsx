import React from "react";
import Map from "../components/GoogleMap";

export default function ContactUs() {
  return (
    <div>
      <h1>How to get here</h1>
      <h3>
        With GPS you wwill be brought here withGoogle Maps. Agape ecospiritual
        resort Vagamon
      </h3>
      <h4>From Kochi</h4>
      <p>
        About 75 kilometers from Kochi to Moolamattam then 25km to Vagamon town.
        Then 13km to Plammood in the Upputharra route. 400 meters from Plammod
        Junction via Azhamkala Road.
      </p>
      <h4>From Kottayam</h4>
      <p>
        About 38km from Kottayam to Eraattupetta. Then 26 km from Erattupetta to
        Vagamon. 400 meters from Plammod Junction via Azhamkala Road.
      </p>
      <h4>From Kattappana</h4>
      <p>
        19 km from kattappana to Upputhara. Then about 8 km to Valacoe in the
        Vagamon route.route. Then 2km to Plamood Junction. 400meters from
        Plammod Junction via Azhamkala Road.
      </p>
      <h4>From Kuttikanam , Thekkady, Kumily Area</h4>
      <p>
        Get Upputhara. Then about 8 km to Valacoe in the Vagamon route.Then 2km
        to Plamood Junction. 400meters from Plammod Junction via Azhamkala Road.
      </p>
      <div style={{ height: "500px", width: "500px" }}>
        <Map />
      </div>
    </div>
  );
}
