import React, { Component } from "react";
import { Grid, Typography, Paper } from "@material-ui/core";
import { Map, GoogleApiWrapper, Marker, InfoWindow } from "google-maps-react";

const mapStyles = {
  height: "40vh",
  width: "90vw",
};

const location = {
  address: "Azhamkala Road, Plamood, Valacode, Kerala 685505, India",
  lat: 9.719731069838504,
  lng: 76.96992320245762,
};

class MapContainer extends Component {
  render() {
    return (
      <section
        style={{
          height: "40vh",
          width: "90vw",
        }}
      >
        <Map
          // eslint-disable-next-line react/prop-types
          google={this.props.google}
          zoom={14}
          style={mapStyles}
          initialCenter={location}
        >
          <Marker onClick={this.onMarkerClick} name={"Current Location"} />
          <InfoWindow onClose={this.onInfoWidowClose}></InfoWindow>
          {/* TODO define location pin. Look at LogRocket example */}
          {/* <LocationPin
          lat={location.lat}
          lng={location.lng}
          text={location.address}
        /> */}
        </Map>
      </section>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyB1xnMhoJA5__vqJG3OJHXY5ygxdpMbTTs",
})(MapContainer);
