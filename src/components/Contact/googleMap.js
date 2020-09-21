import React, { Component } from "react";

class GoogleMap extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.googleMapRef = React.createRef();
  }

  componentDidMount() {
    const googleScript = document.createElement("script");

    googleScript.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyA3gzcOS3xx1rdqpdaI8IpVKj6hV1cGqHw&libraries=places`;

    window.document.body.appendChild(googleScript);
    googleScript.addEventListener("load", () => {
      this.googleMap = this.createGoogleMap();
      this.marker = this.createMarker();
    });
  }

  createGoogleMap = () => {
    let map = new window.google.maps.Map(this.googleMapRef.current, {
      zoom: 16,
      center: {
        lat: 21.235422,
        lng: 81.604807,
      },
      disableDefaultUI: true,
    });
    return map;
  };

  createMarker = () =>
    new window.google.maps.Marker({
      position: { lat: 21.235422, lng: 81.604807 },
      map: this.googleMap,
      visible: true,
    });

  render() {
    return (
      <div
        id="google-map"
        ref={this.googleMapRef}
        style={{ width: "400px", height: "300px" }}
      />
    );
  }
}

export default GoogleMap;
