import React from "react";
import AboutUs from "./pages/AboutUs.jsx";
import Bookings from "./pages/Bookings.jsx";
import Directions from "./pages/Directions.jsx";
import Home from "./pages/Home.jsx";
import Reserve from "./pages/Reserve.jsx";
import Schedule from "./pages/Schedule.jsx";
import UserLogin from "./pages/Login.jsx";
// import Schedule from "./pages/Schedule.jsx";
import NavBar from "./util/NavBar";
import Firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { AuthContext } from "./contexts/AuthContext";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

import CssBaseline from "@material-ui/core/CssBaseline";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  var firebaseConfig = {
    apiKey: "AIzaSyB1xnMhoJA5__vqJG3OJHXY5ygxdpMbTTs",
    authDomain: "agape-home-300504.firebaseapp.com",
    projectId: "agape-home-300504",
    storageBucket: "agape-home-300504.appspot.com",
    messagingSenderId: "931176935361",
    appId: "1:931176935361:web:1a3385089e20465a9a0940",
  };

  if (Firebase.apps.length === 0) {
    Firebase.initializeApp(firebaseConfig);
  }
  Firebase.auth();

  const theme = createMuiTheme();

  return (
    <div>
      <ThemeProvider theme={theme}>
        <NavBar />
        <AuthContext.Provider value={firebaseConfig}>
          <Router>
            <Switch>
              <Route path='/About'>
                <AboutUs />
              </Route>
              <Route path='/Bookings'>
                <Bookings />
              </Route>
              <Route path='/Login'>
                <UserLogin />
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
        </AuthContext.Provider>
      </ThemeProvider>
    </div>
  );
}

export default App;
