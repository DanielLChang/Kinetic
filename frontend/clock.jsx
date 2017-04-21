import React from 'react';

export default class Clock extends React.Component {

  constructor() {
    super();
    this.state = {
      time: new Date(),
      greeting: '',
    };

    this.tick = this.tick.bind(this);
    this.greeting = this.greeting.bind(this);
  }

  componentDidMount() {
    this.greeting();
    setInterval(this.tick, 1000);
  }

  tick() {
    this.setState({time: new Date()});
  }

  greeting() {
    const hour = this.state.time.getHours();

    if (hour >= 0 && hour < 12) {
      this.setState({greeting: 'Good Morning'});
    } else if (hour >= 12 && hour < 18) {
      this.setState({greeting: 'Good Afternoon'});
    } else {
      this.setState({greeting: 'Good Evening'});
    }
  }

  render() {
    return (
      <div className="clock">
        <h1>{this.state.time.toLocaleTimeString('en-US')}</h1>
        <h2>{this.state.greeting}</h2>
      </div>
    );
  }
}
