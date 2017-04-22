import React from 'react';

export default class Weather extends React.Component {

  constructor() {
    super();
    this.state = {
      weather: null,
    };

    this.pollWeather = this.pollWeather.bind(this);
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(this.pollWeather);
  }

  pollWeather(location) {
    const lat = location.coords.latitude;
    const lon = location.coords.longitude;
    let url = 'http://api.openweathermap.org/data/2.5/weather?';
    const params = {
      lat: lat,
      lon: lon,
    };

  }

  render() {
    return(
      <div></div>
    );
  }
}
