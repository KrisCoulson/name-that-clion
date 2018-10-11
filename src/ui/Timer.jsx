import React from "react";
import styled from "styled-components";
import ms from "pretty-ms";

const TimeContainer = styled.div`
  color: white;
  font-size: 40px;
  font-family: "Freckle Face", cursive;
`;

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 60000,
      isOn: false
    };

    this.startTimer = this.startTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
  }

  componentDidMount() {
    this.startTimer();
  }

  startTimer() {
    this.setState({ isOn: true });
    this.timer = setInterval(() => {
      if (this.state.time === 0) return this.stopTimer();
      this.setState({
        time: this.state.time - 5 // Guesstimate the time. This is close enough.
      });
    }, 1);
  }

  stopTimer() {
    this.setState({ isOn: false });
    clearInterval(this.timer);
    this.props.onFinish();
  }

  resetTimer() {
    this.setState({ time: 60000 });
  }

  render() {
    return <TimeContainer>{ms(this.state.time)}</TimeContainer>;
  }
}

export default Timer;
