import React, { Component } from "react";


class GeoLoc extends Component {
  constructor(props) {
    super(props);

    this.state = {
      latitude: null,
      longitude: null,
      error: null,
    };
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null,
        });
      },
      (error) => this.setState({ error: error.message }),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    );
  }

  

  render() {
    const lat = (this.state.latitude);
    const lon = (this.state.latitude);
    return (
      <div>
      </div>
    );
  }
}

export default GeoLoc;