import React from 'react';

export default class Clock extends React.Component {
  constructor() {
    super();

    this.state = {
      time: '',
    };

    this.updateClock = this.updateClock.bind(this);
  }

  componentWillMount() {
    this.updateClock();
    setInterval(this.updateClock, 1000);
  }

  updateClock() {
    const time = new Date();
    this.setState({time: time.toLocaleTimeString('en-us')});
  }

  componentWillUnmount() {
    clearInterval();
  }

  render() {
    return(
      <div>
        {this.state.time}
      </div>
    );
  }
}
