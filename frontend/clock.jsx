import React from 'react';

export default class Clock extends React.Component {

  constructor() {
    super();
    this.state = {
      time: new Date(),
    };

    this.tick = this.tick.bind(this);
  }

  componentDidMount() {
    setInterval(this.tick, 1000);
  }

  tick() {
    this.setState({time: new Date()});
  }

  render() {
    return (
      <div className="clock">
        {this.state.time.toLocaleTimeString('en-US')}
      </div>
    );
  }
}
