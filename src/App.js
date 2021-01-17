import React from "react";
import AboutUs from "./pages/AboutUs.jsx";
import Bookings from "./pages/Bookings.jsx";
import Directions from "./pages/Directions.jsx";
import Home from "./pages/Home.jsx";
import Reserve from "./pages/Reserve.jsx";
import Schedule from "./pages/Schedule.jsx";
// import Schedule from "./pages/Schedule.jsx";
import NavBar from "./util/NavBar";

import CssBaseline from "@material-ui/core/CssBaseline";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <CssBaseline />
      <NavBar />
      <Router>
        <Switch>
          <Route path='/About'>
            <AboutUs />
          </Route>
          <Route path='/Bookings'>
            <Bookings />
          </Route>
          <Route path='/Reserve'>
            <Reserve />
          </Route>
          <Route path='/Directions'>
            <Directions />
          </Route>
          <Route path='/Schedule'>
            <Schedule />
          </Route>
          <Route absolute path='/'>
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
